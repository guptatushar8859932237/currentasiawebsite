// // import React, { useEffect, useState, useRef } from 'react';
// // import axios from 'axios';
// // export default function MessageText() {
// //   const [sidebardata, setSidebardata] = useState([]);
// //   const [sendMessage, setSendMessage] = useState({ message_text: '' });
// //   const [getMessage, setGetMessage] = useState([]);
// //   const messagesEndRef = useRef(null);
// //   const user = JSON.parse(localStorage.getItem('data'));
// //   const scrollToBottom = () => {
// //     messagesEndRef.current?.scroll(100,100);
// //   };
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setSendMessage({ ...sendMessage, [name]: value });
// //   };
// //   const clearMessageInput = () => {
// //     setSendMessage({ message_text: '' });
// //   };
// //   const messageSend = () => {
// //     const messagevar = {
// //       sender_id: user?.id,
// //       receiver_id: 1,
// //       message_text: sendMessage.message_text
// //     };
// //     axios.post(`${process.env.REACT_APP_BASE_URL}sendMessage`, messagevar)
// //       .then((response) => {
// //         clearMessageInput();
// //         receiveMessage();
// //       })
// //       .catch((error) => {
// //         console.log(error.response.data);
// //       });
// //   };
// //   const getClientSide = () => {
// //     axios.post(`${process.env.REACT_APP_BASE_URL}get-messages-list`, { userId: user?.id })
// //       .then((response) => {
// //         setSidebardata(response.data.data);
// //       })
// //       .catch((error) => {
// //         console.log(error.response);
// //       });
// //   };
// //   const receiveMessage = () => {
// //     const sendmessage = {
// //       sender_id: user?.id,
// //       user_id: user?.id,
// //       receiver_id: 1
// //     };
// //     axios.post(`${process.env.REACT_APP_BASE_URL}get-all-messages`, sendmessage)
// //       .then((response) => {

// //         setGetMessage(response.data.data);
// //       })
// //       .catch((error) => {
// //         console.log(error.response.data);
// //       });
// //   };
// //   useEffect(() => {
// //     getClientSide();
// //   }, []);
// //   useEffect(() => {
// //     receiveMessage();
// //   }, []);
// //   useEffect(() => {
// //     scrollToBottom();
// //   }, [getMessage]);
// //   // useEffect(() => {
// //   //   scrollToBottom();
// //   // }, []);
// //   return (
// //     <div>
// //       <section className="chatBox pt-40">
// //         <div className="container-fluid">
// //           <div className="row">
// //             <div id="frame">
// //               <div id="sidepanel">
// //                 <div id="profile">
// //                   <div className="wrap">
// //                     <img
// //                       id="profile-img"
// //                       src="http://emilcarlsson.se/assets/mikeross.png"
// //                       className="online"
// //                       alt=""
// //                     />
// //                     <p>{user?.full_name}</p>
// //                     <i
// //                       className="fa fa-chevron-down expand-button"
// //                       aria-hidden="true"
// //                     />
// //                     <div id="status-options">
// //                       <ul>
// //                         <li id="status-online" className="active">
// //                           <span className="status-circle" />
// //                           <p>Online</p>
// //                         </li>
// //                         <li id="status-away">
// //                           <span className="status-circle" />
// //                           <p>Away</p>
// //                         </li>
// //                         <li id="status-busy">
// //                           <span className="status-circle" />
// //                           <p>Busy</p>
// //                         </li>
// //                         <li id="status-offline">
// //                           <span className="status-circle" />
// //                           <p>Offline</p>
// //                         </li>
// //                       </ul>
// //                     </div>
// //                     <div id="expanded">
// //                       <label htmlFor="twitter">
// //                         <i className="fa fa-facebook fa-fw" aria-hidden="true" />
// //                       </label>
// //                       <input name="twitter" type="text" defaultValue="mikeross" />
// //                       <label htmlFor="twitter">
// //                         <i className="fa fa-twitter fa-fw" aria-hidden="true" />
// //                       </label>
// //                       <input name="twitter" type="text" defaultValue="ross81" />
// //                       <label htmlFor="twitter">
// //                         <i className="fa fa-instagram fa-fw" aria-hidden="true" />
// //                       </label>
// //                       <input name="twitter" type="text" defaultValue="mike.ross" />
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div id="search">
// //                   <label htmlFor="">
// //                     <i className="fa fa-search" aria-hidden="true" />
// //                   </label>
// //                   <input type="text" placeholder="Search contacts..." />
// //                 </div>
// //                 <div id="contacts">
// //                   <ul>
// //                     {sidebardata && sidebardata.length > 0 && sidebardata.map((item, index) => (
// //                       <li className="contact" key={index}>
// //                         <div className="wrap">
// //                           <span className="contact-status online" />
// //                           <img
// //                             src="http://emilcarlsson.se/assets/louislitt.png"
// //                             alt=""
// //                           />
// //                           <div className="meta">
// //                             <p className="name text-capitalize">{item?.sender_name}</p>
// //                             <p className="preview">You just got LITT up, Mike.</p>
// //                           </div>
// //                         </div>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>
// //               <div className="content">
// //                 <div className="contact-profile">
// //                   <img
// //                     src="http://emilcarlsson.se/assets/harveyspecter.png"
// //                     alt=""
// //                   />
// //                   <p>Harvey Specter</p>
// //                   <div className="social-media">
// //                     <i className="fa fa-facebook" aria-hidden="true" />
// //                     <i className="fa fa-twitter" aria-hidden="true" />
// //                     <i className="fa fa-instagram" aria-hidden="true" />
// //                   </div>
// //                 </div>
// //                 <div className="messages">
// //                   {getMessage && getMessage.length > 0 && getMessage.map((item) => (
// //                     <ul key={item.id}>
// //                       {item.sender_id === user?.id ? (
// //                         <li className="replies">
// //                           <img
// //                             src="http://emilcarlsson.se/assets/mikeross.png"
// //                             alt=""
// //                           />
// //                           <p>{item.message_text}</p>
// //                         </li>
// //                       ) : (
// //                         <li className="sent">
// //                           <img
// //                             src="http://emilcarlsson.se/assets/harveyspecter.png"
// //                             alt="" />
// //                           <p>{item.message_text}</p>
// //                         </li>
// //                       )}
// //                     </ul>
// //                   ))}
// //                   <div ref={messagesEndRef} />
// //                 </div>
// //                 <div className="message-input">
// //                   <div className="wrap">
// //                     <input
// //                       type="text"
// //                       placeholder="Write your message..."
// //                       name='message_text'
// //                       value={sendMessage.message_text}
// //                       onChange={handleChange}
// //                     />
// //                     <i className="fa fa-paperclip attachment" aria-hidden="true" />
// //                     <button className="submit" onClick={messageSend}>
// //                       <i className="fa fa-paper-plane" aria-hidden="true" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';

// export default function MessageText() {
//   const [sidebardata, setSidebardata] = useState([]);
//   const [sendMessage, setSendMessage] = useState({ message_text: '' });
//   const [getMessage, setGetMessage] = useState([]);
//   const messagesEndRef = useRef(null);
//   const user = JSON.parse(localStorage.getItem('data'));

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSendMessage({ ...sendMessage, [name]: value });
//   };

//   const clearMessageInput = () => {
//     setSendMessage({ message_text: '' });
//   };

//   const messageSend = () => {
//     const messagevar = {
//       sender_id: user?.id,
//       receiver_id: 1,
//       message_text: sendMessage.message_text
//     };
//     axios.post(`${process.env.REACT_APP_BASE_URL}sendMessage`, messagevar)
//       .then((response) => {
//         clearMessageInput();
//         receiveMessage();
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//   };

//   const getClientSide = () => {
//     axios.post(`${process.env.REACT_APP_BASE_URL}get-messages-list`, { userId: user?.id })
//       .then((response) => {
//         setSidebardata(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   };

//   const receiveMessage = () => {
//     const sendmessage = {
//       sender_id: user?.id,
//       user_id: user?.id,
//       receiver_id: 1
//     };
//     axios.post(`${process.env.REACT_APP_BASE_URL}get-all-messages`, sendmessage)
//       .then((response) => {
//         setGetMessage(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//   };

//   useEffect(() => {
//     getClientSide();
//   }, []);

//   useEffect(() => {
//     receiveMessage();
//   }, []);

//   useEffect(() => {
//     scrollToBottom();
//   }, [getMessage]);

//   return (
//     <div>
//       <section className="chatBox pt-40">
//         <div className="container-fluid">
//           <div className="row">
//             <div id="frame">
//               <div id="sidepanel">
//                 <div id="profile">
//                   <div className="wrap">
//                     <img
//                       id="profile-img"
//                       src="http://emilcarlsson.se/assets/mikeross.png"
//                       className="online"
//                       alt=""
//                     />
//                     <p>{user?.full_name}</p>
//                     <i
//                       className="fa fa-chevron-down expand-button"
//                       aria-hidden="true"
//                     />
//                     <div id="status-options">
//                       <ul>
//                         <li id="status-online" className="active">
//                           <span className="status-circle" />
//                           <p>Online</p>
//                         </li>
//                         <li id="status-away">
//                           <span className="status-circle" />
//                           <p>Away</p>
//                         </li>
//                         <li id="status-busy">
//                           <span className="status-circle" />
//                           <p>Busy</p>
//                         </li>
//                         <li id="status-offline">
//                           <span className="status-circle" />
//                           <p>Offline</p>
//                         </li>
//                       </ul>
//                     </div>
//                     <div id="expanded">
//                       <label htmlFor="twitter">
//                         <i className="fa fa-facebook fa-fw" aria-hidden="true" />
//                       </label>
//                       <input name="twitter" type="text" defaultValue="mikeross" />
//                       <label htmlFor="twitter">
//                         <i className="fa fa-twitter fa-fw" aria-hidden="true" />
//                       </label>
//                       <input name="twitter" type="text" defaultValue="ross81" />
//                       <label htmlFor="twitter">
//                         <i className="fa fa-instagram fa-fw" aria-hidden="true" />
//                       </label>
//                       <input name="twitter" type="text" defaultValue="mike.ross" />
//                     </div>
//                   </div>
//                 </div>
//                 <div id="search">
//                   <label htmlFor="">
//                     <i className="fa fa-search" aria-hidden="true" />
//                   </label>
//                   <input type="text" placeholder="Search contacts..." />
//                 </div>
//                 <div id="contacts">
//                   <ul>
//                     {sidebardata && sidebardata.length > 0 && sidebardata.map((item, index) => (
//                       <li className="contact" key={index}>
//                         <div className="wrap">
//                           <span className="contact-status online" />
//                           <img
//                             src="http://emilcarlsson.se/assets/louislitt.png"
//                             alt=""
//                           />
//                           <div className="meta">
//                             <p className="name text-capitalize">{item?.sender_name}</p>
//                             <p className="preview">You just got LITT up, Mike.</p>
//                           </div>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div className="content">
//                 <div className="contact-profile">
//                   <img
//                     src="http://emilcarlsson.se/assets/harveyspecter.png"
//                     alt=""
//                   />
//                   <p>Harvey Specter</p>
//                   <div className="social-media">
//                     <i className="fa fa-facebook" aria-hidden="true" />
//                     <i className="fa fa-twitter" aria-hidden="true" />
//                     <i className="fa fa-instagram" aria-hidden="true" />
//                   </div>
//                 </div>
//                 <div className="messages">
//                   {getMessage && getMessage.length > 0 && getMessage.map((item) => (
//                     <ul key={item.id}>
//                       {item.sender_id === user?.id ? (
//                         <li className="replies">
//                           <img
//                             src="http://emilcarlsson.se/assets/mikeross.png"
//                             alt=""
//                           />
//                           <p>{item.message_text}</p>
//                         </li>
//                       ) : (
//                         <li className="sent">
//                           <img
//                             src="http://emilcarlsson.se/assets/harveyspecter.png"
//                             alt="" />
//                           <p>{item.message_text}</p>
//                         </li>
//                       )}
//                     </ul>
//                   ))}
//                   <div ref={messagesEndRef} />
//                 </div>
//                 <div className="message-input">
//                   <div className="wrap">
//                     <input
//                       type="text"
//                       placeholder="Write your message..."
//                       name='message_text'
//                       value={sendMessage.message_text}
//                       onChange={handleChange}
//                     />
//                     <i className="fa fa-paperclip attachment" aria-hidden="true" />
//                     <button className="submit" onClick={messageSend}>
//                       <i className="fa fa-paper-plane" aria-hidden="true" />
//                     </button>
//                   </div>
//                 </div>
//                 <button onClick={scrollToBottom} className="scroll-to-bottom">
//                   Scroll to Bottom
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export default function MessageText() {
  const [sidebardata, setSidebardata] = useState([]);
  const [sendMessage, setSendMessage] = useState({ message_text: '' });
  const [getMessage, setGetMessage] = useState([]);
  const messagesEndRef = useRef(null);
  const user = JSON.parse(localStorage.getItem('data'));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSendMessage({ ...sendMessage, [name]: value });
  };

  const clearMessageInput = () => {
    setSendMessage({ message_text: '' });
  };

  const messageSend = () => {
    const messagevar = {
      sender_id: user?.id,
      receiver_id: 1,
      message_text: sendMessage.message_text
    };
    axios.post(`${process.env.REACT_APP_BASE_URL}sendMessage`, messagevar)
      .then((response) => {
        clearMessageInput();
        receiveMessage();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const getClientSide = () => {
    axios.post(`${process.env.REACT_APP_BASE_URL}get-messages-list`, { userId: user?.id })
      .then((response) => {
        setSidebardata(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const receiveMessage = () => {
    const sendmessage = {
      sender_id: user?.id,
      user_id: user?.id,
      receiver_id: 1
    };
    axios.post(`${process.env.REACT_APP_BASE_URL}get-all-messages`, sendmessage)
      .then((response) => {
        setGetMessage(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    getClientSide();
  }, []);

  useEffect(() => {
    receiveMessage();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [getMessage]);

  return (
    <div>
      <section className="chatBox pt-40">
        <div className="container-fluid">
          <div className="row">
            <div id="frame" >
              <div id="sidepanel" >
                <div id="profile">
                  <div className="wrap" >
                    <img
                      id="profile-img"
                      src="http://emilcarlsson.se/assets/mikeross.png"
                      className="online mt-3"
                      alt=""
                    />
                    <p>{user?.full_name}</p>
                    <i
                      className="fa fa-chevron-down expand-button"
                      aria-hidden="true"
                    />
                    <div id="status-options">
                      <ul>
                        <li id="status-online" className="active">
                          <span className="status-circle" />
                          <p>Online</p>
                        </li>
                        <li id="status-away">
                          <span className="status-circle" />
                          <p>Away</p>
                        </li>
                        <li id="status-busy">
                          <span className="status-circle" />  
                          <p>Busy</p>
                        </li>
                        <li id="status-offline">
                          <span className="status-circle" />
                          <p>Offline</p>
                        </li>
                      </ul>
                    </div>
                    {/* <div id="expanded">
                      <label htmlFor="twitter">
                        <i className="fa fa-facebook fa-fw" aria-hidden="true" />
                      </label>
                      <input name="twitter" type="text" defaultValue="mikeross" />
                      <label htmlFor="twitter">
                        <i className="fa fa-twitter fa-fw" aria-hidden="true" />
                      </label>
                      <input name="twitter" type="text" defaultValue="ross81" />
                      <label htmlFor="twitter">
                        <i className="fa fa-instagram fa-fw" aria-hidden="true" />
                      </label>
                      <input name="twitter" type="text" defaultValue="mike.ross" />
                    </div> */}
                  </div>
                </div>
                <div id="search">
                  <label htmlFor="">
                    <i className="fa fa-search" aria-hidden="true" />
                  </label>
                  <input type="text" placeholder="Search contacts..." />
                </div>
                <div id="contacts">
                  <ul>
                    {sidebardata && sidebardata.length > 0 && sidebardata.map((item, index) => (
                      <li className="contact" key={index}>
                        <div className="wrap">
                          <span className="contact-status online" />
                          <img
                            src="http://emilcarlsson.se/assets/louislitt.png"
                            alt=""
                          />
                          <div className="meta">
                            <p className="name text-capitalize">{item?.sender_name}</p>
                            <p className="preview">You just got LITT up, Mike.</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="content">
                <div className="contact-profile">
                  <img
                    src="http://emilcarlsson.se/assets/harveyspecter.png"
                    alt=""
                  />
                  <p>Harvey Specter</p>
                  <div className="social-media">
                    <i className="fa fa-facebook" aria-hidden="true" />
                    <i className="fa fa-twitter" aria-hidden="true" />
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </div>
                </div>
                <div className="messages">
                  {getMessage && getMessage.length > 0 && getMessage.map((item) => (
                    <ul key={item.id}>
                      {item.sender_id === user?.id ? (
                        <li className="replies">
                          <img
                            src="http://emilcarlsson.se/assets/mikeross.png"
                            alt=""
                          />
                          <p>{item.message_text}</p>
                        </li>
                      ) : (
                        <li className="sent">
                          <img
                            src="http://emilcarlsson.se/assets/harveyspecter.png"
                            alt="" />
                          <p>{item.message_text}</p>
                        </li>
                      )}
                    </ul>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                <div className="message-input">
                  <div className="wrap">
                    <input
                      type="text"
                      placeholder="Write your message..."
                      name='message_text'
                      value={sendMessage.message_text}
                      onChange={handleChange}
                    />
                    <i className="fa fa-paperclip attachment" aria-hidden="true" />
                    <button className="submit" onClick={messageSend}>
                      <i className="fa fa-paper-plane" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <button onClick={scrollToBottom} className="scroll-to-bottom">
                  ↓
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
