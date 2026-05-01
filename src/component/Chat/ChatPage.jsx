import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import Topbar from "../Topbar";
import Navbar from "../homepage/Navbar";

export default function QuotationInFreight() {
  const loginUser = JSON.parse(localStorage.getItem("data"));

  const [inbox, setInbox] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);
  const selectedUserRef = useRef(null);

  // ✅ REF UPDATE
  useEffect(() => {
    selectedUserRef.current = selectedUser;
  }, [selectedUser]);
  // ================= SOCKET =================
  // useEffect(() => {
  // console.log("🚀 Initializing Socket...");
  // socketRef.current = io(process.env.REACT_APP_BASE_URL);
  // socketRef.current.on("connect", () => {
  //   console.log("✅ SOCKET CONNECTED:", socketRef.current.id);
// jiunn the yexy as pr requ  //   // ✅ JOIN ALL CONVERSATIONS (IMPORTANT)
  //   if (inbox.length > 0) {
  //     inbox.forEach((item) => {
  //       socketRef.current.emit("joinConversation", item.conversation_id);
  //     });
  //   }
  // });

  useEffect(() => {
    console.log("🚀 Initializing Socket...");
    socketRef.current = io(process.env.REACT_APP_BASE_URLSOCKET);
    socketRef.current.on("connect", () => {
      console.log("✅ SOCKET CONNECTED:", socketRef.current.id);
       if (inbox.length > 0) {
       inbox.forEach((item) => {
         socketRef.current.emit("joinConversation", item.conversation_id);
       });
     }
    });
    socketRef.current.onAny((event, data) => {
      console.log("🔥 EVENT:", event, data);
    });
    socketRef.current.on("disconnect", () => {
      console.log("❌ SOCKET DISCONNECTED");
    });
    // 🔥 RECEIVE MESSAGE
    socketRef.current.on("newMessage", (data) => {
      console.log("📩 SOCKET EVENT: newMessage TRIGGERED");
      console.log("📦 Incoming Data:", data);
      if (data.conversation_id === selectedUserRef.current?.conversation_id) {
        console.log("✅ Message belongs to ACTIVE CHAT");
        setMessages((prev) => {
          const exists = prev.some((msg) => msg.key === data.message_id);
          if (exists) {
            console.log("⚠️ Duplicate message ignored");
            return prev;
          }
          console.log("✅ Message added to UI");
          return [
            ...prev,
            {
              key: data.message_id || Date.now(),
              sender: data.sender_id === loginUser.id ? "me" : "other",
              text: data.message,
            },
          ];
        });
      } else {
        console.log("⚠️ Message NOT for active chat");
      }
      // 📌 SIDEBAR UPDATE
      console.log("📌 Updating inbox sidebar");
      setInbox((prev) => {
        let updated = prev.map((item) =>
          item.conversation_id === data.conversation_id
            ? { ...item, last_message: data.message }
            : item,
        );
        const current = updated.find(
          (i) => i.conversation_id === data.conversation_id,
        );
        const rest = updated.filter(
          (i) => i.conversation_id !== data.conversation_id,
        );
        return current ? [current, ...rest] : updated;
      });
    });
    return () => {
      console.log("🧹 Cleaning socket...");
      socketRef.current.disconnect();
    };
  }, []);
  // ================= GET INBOX =================
  useEffect(() => {
    getInbox();
  }, []);
  useEffect(() => {
  if (socketRef.current && inbox.length > 0) {
    console.log("📡 Joining all rooms after inbox load");
    inbox.forEach((item) => {
      socketRef.current.emit("joinConversation", item.conversation_id);
    });
  }
}, [inbox]);
  const getInbox = async () => {
    try {
      console.log("📥 Fetching Inbox...");
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}chat/getInbox`,
        {
          receiver_id: loginUser.id,
          receiver_type: "user",
        },
      );
      if (res.data) {
        console.log("✅ Inbox Loaded:", res.data.inbox);
        setInbox(res.data.inbox || []);
      }
    } catch (error) {
      console.log("❌ Inbox Error:", error);
    }
  };
  // ================= GET MESSAGES =================
  const getMessages = async (conversationId) => {
    try {
      console.log("📥 Fetching Messages for:", conversationId);

      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}chat/getMessages`,
        {
          conversation_id: conversationId,
          receiver_id: loginUser.id,
        },
      );
      if (res.data?.messages) {
        console.log("✅ Messages Loaded:", res.data.messages);
        const formatted = res.data.messages.map((msg) => ({
          key: msg.id,
          sender: msg.sender_id === loginUser.id ? "me" : "other",
          text: msg.message,
        }));
        setMessages(formatted);
      }
    } catch (error) {
      console.log("❌ Message Fetch Error:", error);
    }
  };
  // ================= SELECT USER =================
  const handleSelectUser = (item) => {
    console.log("👤 USER SELECTED:", item);
    setSelectedUser(item);
    if (item?.conversation_id) {
      console.log("🏠 JOINING ROOM:", item.conversation_id);
      socketRef.current.emit("joinConversation", item.conversation_id);
      getMessages(item.conversation_id);
    }
  };
  // ================= SEND MESSAGE =================
  const sendMessage = async () => {
    if (!message.trim() || !selectedUser) {
      console.log("⚠️ Empty message OR no user selected");
      return;
    }
    const payload = {
      sender_id: loginUser.id,
      conversation_id: selectedUser.conversation_id,
      message: message,
    };
    // ✅ STEP 1: UI ME TURANT DIKHA
    const tempMsg = {
      key: Date.now(),
      sender: "me",
      text: message,
    };
    setMessages((prev) => [...prev, tempMsg]);
    console.log("📤 Sending Message:", payload);
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}chat/sendMessage`,
        payload,
      );
      console.log("✅ Message saved in DB");
    } catch (error) {
      console.log("❌ Send Error:", error);
    }
    setMessage("");
  };
  // ================= AUTO SCROLL =================
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <>
      <Topbar />
      <Navbar />
      <div style={{ height: "80vh" }}>
        <div className="d-flex h-100">
          {/* LEFT SIDE */}
          <div className="col-3 border">
            <div style={{ height: "75vh", overflowY: "auto", padding: 10 }}>
              {inbox.map((item, index) => (
                <div
                  key={index}
                  className="p-2 border mb-2 d-flex gap-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSelectUser(item)}
                >
                  <img
                    src={
                      item?.sender_profile
                        ? `${process.env.REACT_APP_BASE_URL_image}${item.sender_profile}`
                        : "/images/default-user.png"
                    }
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                    }}
                    alt="user"
                  />

                  <div>
                    <h6 className="mb-0">{item.sender_name}</h6>
                    <small>{item.last_message}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-9 border d-flex flex-column">
            {selectedUser ? (
              <>
                <div className="p-2 border-bottom">
                  <h5>{selectedUser.sender_name}</h5>
                </div>

                <div style={{ flex: 1, overflowY: "auto", padding: 12 }}>
                  {messages.map((msg) => (
                    <div
                      key={msg.key}
                      style={{
                        textAlign: msg.sender === "me" ? "right" : "left",
                        marginBottom: 8,
                      }}
                    >
                      <span
                        style={{
                          background: msg.sender === "me" ? "#0d6efd" : "#eee",
                          color: msg.sender === "me" ? "#fff" : "#000",
                          padding: "8px 12px",
                          borderRadius: 12,
                          display: "inline-block",
                        }}
                      >
                        {msg.text}
                      </span>
                    </div>
                  ))}
                  <div ref={messagesEndRef}></div>
                </div>

                <div className="p-2 border-top d-flex gap-2">
                  <input
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  />

                  <button className="btn btn-primary" onClick={sendMessage}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <div className="p-4">Select a chat to start messaging</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
