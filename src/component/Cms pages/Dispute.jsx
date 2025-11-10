// import React, { useState } from "react";
// import Topbar from "../Topbar";
// import Navbar from "../homepage/Navbar";
// import Footer from "../homepage/Footer";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export default function Dispute() {
//   const [data, setData] = useState({
//     name: "",
//     phone_no: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [showForm, setShowForm] = useState(true); // Toggle form & table view
//   const [disputes, setDisputes] = useState([]); // Table data

//   const navigate = useNavigate();

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Submit dispute form
//   const postData = async (e) => {
//     e.preventDefault();
//     const userId = JSON.parse(localStorage.getItem("data"))?.id;

//     if (!userId) {
//       toast.error("User not logged in");
//       return;
//     }

//     const payload = {
//       name: data.name,
//       freight_no: data.phone_no,
//       nature_of_Heading: data.email,
//       subject: data.subject,
//       message: data.message,
//       user_id: userId,
//     };

//     try {
//       const res = await axios.post(`${process.env.REACT_APP_BASE_URL}addQueries`, payload);
//       toast.success(res.data.message || "Query added successfully");
//       setTimeout(() => navigate("/"), 1000);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Error while submitting");
//     }
//   };

//   // Fetch disputes of logged-in user
//   const getQueriesByUser = async () => {
//     const userId = JSON.parse(localStorage.getItem("data"))?.id;
//     if (!userId) {
//       toast.error("User not logged in");
//       return;
//     }

//     try {
//       const res = await axios.post(`${process.env.REACT_APP_BASE_URL}getQueriesByUserId`, {
//         user_id: userId,
//       });
//       setDisputes(res.data.data || []);
//     } catch (err) {
//       toast.error("Failed to fetch your disputes");
//     }
//   };

//   // Toggle between Add & View mode
//   const toggleView = () => {
//     if (showForm) {
//       getQueriesByUser(); // Load disputes when switching to table
//     }
//     setShowForm((prev) => !prev);
//   };

//   return (
//     <div>
//       <Topbar />
//       <Navbar />

//       <section>
//         <div className="container my-5">
//           <div className="row justify-content-center mt-5 align-items-center">
//             <div className="col-md-12">
//               {/* ---------- Header Section ---------- */}
//               <div className="div1 mb-4 d-flex justify-content-between align-items-center">
//                 <h2 className="heading_1">
//                   {showForm ? "Get in Touch" : "View Dispute"}
//                 </h2>
//                 <button className="btn btn_add_web" onClick={toggleView}>
//                   {showForm ? "View Dispute" : "Add Dispute"}
//                 </button>
//               </div>

//               {/* ---------- Add Dispute Form ---------- */}
//               {showForm ? (
//                 <form onSubmit={postData}>
//                   <div className="row">
//                     <div className="col-md-6">
//                       <label className="div_label">
//                         Name <span className="redStar">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="box1 form-control"
//                         name="name"
//                         placeholder="Name"
//                         value={data.name}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="col-md-6">
//                       <label className="div_label">
//                         Freight Number <span className="redStar">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="box1 form-control"
//                         name="phone_no"
//                         placeholder="Freight Number"
//                         value={data.phone_no}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="row mt-3">
//                     <div className="col-md-6">
//                       <label className="div_label">
//                         Nature of Heading <span className="redStar">*</span>
//                       </label>
//                       <select
//                         name="email"
//                         className="box1 form-control"
//                         value={data.email}
//                         onChange={handleChange}
//                         required
//                       >
//                         <option value="">Select...</option>
//                         <option value="Invoicing">Invoicing</option>
//                         <option value="Service Support">Service Support</option>
//                         <option value="Pricing">Pricing</option>
//                       </select>
//                     </div>

//                     <div className="col-md-6">
//                       <label className="div_label">
//                         Subject <span className="redStar">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         name="subject"
//                         className="box1 form-control"
//                         placeholder="Subject"
//                         value={data.subject}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="row mt-3">
//                     <div className="col-md-12">
//                       <label className="div_label">
//                         Message <span className="redStar">*</span>
//                       </label>
//                       <textarea
//                         className="box2 form-control"
//                         name="message"
//                         placeholder="Write your message here..."
//                         value={data.message}
//                         onChange={handleChange}
//                         required
//                       ></textarea>
//                     </div>
//                   </div>

//                   <div className="text-center mt-4">
//                     <button type="submit" className="btn_add_web">
//                       Add Query
//                     </button>
//                   </div>
//                 </form>
//               ) : (
//                 /* ---------- View Dispute Table ---------- */
//                 <div className="table-responsive col-12 mt-3">
//                   <table className="table table-bordered">
//                     <thead className="table-light">
//                       <tr>
//                         <th>Sr No.</th>
//                         <th>Freight No.</th>
//                         <th>Name</th>
//                         <th>Subject</th>
//                         <th>Nature of Heading</th>
//                         <th>Outcome</th>
//                         <th>Resolution</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {disputes.length > 0 ? (
//                         disputes.map((item, i) => (
//                           <tr key={i}>
//                             <td>{i + 1}</td>
//                             <td>{item.freight_no || "-"}</td>
//                             <td>{item.name || "-"}</td>
//                             <td>{item.subject || "-"}</td>
//                             <td>{item.nature_of_Heading || "-"}</td>
//                             <td>{item.outcome || "-"}</td>
//                             <td>{item.resolution || "-"}</td>
//                           </tr>
//                         ))
//                       ) : (
//                         <tr>
//                           <td colSpan="7" className="text-center">
//                             No disputes found
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//       <ToastContainer />
//     </div>
//   );
// }
import React, { useState } from "react";
import Topbar from "../Topbar";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Dispute() {
  const [data, setData] = useState({
    name: "",
    phone_no: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showForm, setShowForm] = useState(true);
  const [disputes, setDisputes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ search
  const [currentPage, setCurrentPage] = useState(1); // ✅ pagination
  const itemsPerPage = 10; // ✅ show 5 per page

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const postData = async (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("data"))?.id;
    if (!userId) {
      toast.error("User not logged in");
      return;
    }

    const payload = {
      name: data.name,
      freight_no: data.phone_no,
      nature_of_Heading: data.email,
      subject: data.subject,
      message: data.message,
      user_id: userId,
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}addQueries`,
        payload
      );
      toast.success(res.data.message || "Query added successfully");
      getQueriesByUser()
      setShowForm(false); // Switch to view mode after submission
      setData({
        name: "",
        phone_no: "",
        email: "",
        subject: "",
        message: "",
      });
      // setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error while submitting");
    }
  };

  const getQueriesByUser = async () => {
    const userId = JSON.parse(localStorage.getItem("data"))?.id;
    if (!userId) {
      toast.error("User not logged in");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}getQueriesByUserId`,
        { user_id: userId }
      );
      setDisputes(res.data.data || []);
      setCurrentPage(1); // reset to first page
    } catch (err) {
      toast.error("Failed to fetch your disputes");
    }
  };

  const toggleView = () => {
    if (showForm) {
      getQueriesByUser();
    }
    setShowForm((prev) => !prev);
  };

  // ✅ Filter disputes based on search term
  const filteredDisputes = disputes.filter((item) => {
    const search = searchTerm.toLowerCase();
    return (
      item.name?.toLowerCase().includes(search) ||
      item.subject?.toLowerCase().includes(search) ||
      item.freight_no?.toLowerCase().includes(search)
    );
  });

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredDisputes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDisputes = filteredDisputes.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <Topbar />
      <Navbar />

      <section>
        <div className="container my-5">
          <div className="row justify-content-center mt-5 align-items-center">
            <div className="col-md-12">
              {/* ---------- Header Section ---------- */}
              <div className="div1 mb-4 d-flex justify-content-between align-items-center">
                <h2 className="heading_1">
                  {showForm ? "Get in Touch" : "View Dispute"}
                </h2>
                <button className="btn btn_add_web" onClick={toggleView}>
                  {showForm ? "View Dispute" : "Add Dispute"}
                </button>
              </div>

              {/* ---------- Add Dispute Form ---------- */}
              {showForm ? (
                <form onSubmit={postData}>
                  <div className="row">
                    <div className="col-md-6">
                      <label className="div_label">
                        Name <span className="redStar">*</span>
                      </label>
                      <input
                        type="text"
                        className="box1 form-control"
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="div_label">
                        Freight Number <span className="redStar">*</span>
                      </label>
                      <input
                        type="text"
                        className="box1 form-control"
                        name="phone_no"
                        placeholder="Freight Number"
                        value={data.phone_no}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="div_label">
                        Nature of Heading <span className="redStar">*</span>
                      </label>
                      <select
                        name="email"
                        className="box1 form-control"
                        value={data.email}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select...</option>
                        <option value="Invoicing">Invoicing</option>
                        <option value="Service Support">Service Support</option>
                        <option value="Pricing">Pricing</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="div_label">
                        Subject <span className="redStar">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        className="box1 form-control"
                        placeholder="Subject"
                        value={data.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="div_label">
                        Message <span className="redStar">*</span>
                      </label>
                      <textarea
                        className="box2 form-control"
                        name="message"
                        placeholder="Write your message here..."
                        value={data.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button type="submit" className="btn_add_web">
                      Add Query
                    </button>
                  </div>
                </form>
              ) : (
                /* ---------- View Dispute Table ---------- */
                <div className="col-12 mt-3">
                  {/* ✅ Search bar */}
                  <div className="d-flex justify-content-between mb-3">
                    <input
                      type="text"
                      className="form-control w-25"
                      placeholder="Search by name, subject, or freight no."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className="table-light">
                        <tr>
                          <th>Sr No.</th>
                          <th>Freight No.</th>
                          <th>Name</th>
                          <th>Subject</th>
                          <th>Nature of Heading</th>
                          <th>Outcome</th>
                          <th>Resolution</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedDisputes.length > 0 ? (
                          paginatedDisputes.map((item, i) => (
                            <tr key={i}>
                              <td>{startIndex + i + 1}</td>
                              <td>{item.freight_no || "-"}</td>
                              <td>{item.name || "-"}</td>
                              <td>{item.subject || "-"}</td>
                              <td>{item.nature_of_Heading || "-"}</td>
                              <td>{item.outcome || "-"}</td>
                              <td>{item.resolution || "-"}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="7" className="text-center">
                              No disputes found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* ✅ Pagination Controls */}
                  {filteredDisputes.length > itemsPerPage && (
                    <div className="d-flex justify-content-end align-items-center mt-3">
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>

                      <span>
                        Page {currentPage} of {totalPages}
                      </span>

                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ToastContainer />
    </div>
  );
}
