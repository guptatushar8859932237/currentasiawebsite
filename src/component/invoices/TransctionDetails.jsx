// import React, { useEffect, useState } from "react";
// import Topbar from "../Topbar";
// import Navbar from "../homepage/Navbar";
// import Footer from "../homepage/Footer";
// import axios from "axios";
// const pageSize = 10;
// export default function TransctionDetails() {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   useEffect(() => {
//     getwarehouse();
//   }, []);
//   const getwarehouse = () => {
//     const userid = JSON.parse(localStorage?.getItem("data"));
//     console.log( localStorage.getItem( "pratima", "data"));
//     axios
//       .post(`${process.env.REACT_APP_BASE_URL}GetClientAllInvoice`, {
//         client_id: userid.id,
//       })
//       .then((response) => {
//         console.log(response.data.data);
//         setData(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error.response.data.message);
//       });
//   };

//   const totalPage = Math.ceil(data.length / pageSize);
//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = startIndex + pageSize;

//   const currentdata = data.slice(startIndex, endIndex);
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <Topbar />
//       <Navbar />
//       <div className="d-flex justify-content-between mx-5 my-4">
//         <div className="fw-bold fs-3">Statement</div>
//         <div className="searchInput">
//           <input className="rounded" placeholder="Search..."></input>
//         </div>
//       </div>
//       <div className="table-responsive mt-4 mx-5">
//         <table className="table table-striped tableICon">
//           <thead>
//             <tr>
//               <th>Invoice Date </th>
//               <th>Freight Number</th>
//               <th>Document Number</th>
//               <th>Txn Type</th>
//               <th>Bill Currency</th>
//               <th>Bal Amt</th>
//               <th>Payment Rec</th>
//               <th>TXN Amt</th>
//               <th>Due Date</th>
//               <th>Day Past Due</th>
//               <th>Dispute</th>
//               <th>Dispute ID</th>
//               <th>Dispute Status</th>
//               <th>Text</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentdata &&
//               currentdata.length > 0 &&
//               currentdata.map((item, index) => {
//                 console.log(item);
//                 return (
//                   <>
//                     <tr key={item.id}>
//                       <td>{new Date(item.date).toLocaleDateString("EN-gb")==="01/01/1970"?"":new Date(item.date).toLocaleDateString("EN-gb")}</td>
//                       <td>{item.freight_number}</td>
//                       <td>{item.document_number}</td>
//                       <td>{item.transaction}</td>
//                       <td>{item.invoice_currency}</td>
//                       <td>{item.balance}</td>
//                       <td>{item.payment}</td>
//                       <td>{item.total}</td>
//                       <td>{new Date(item.due_date).toLocaleDateString("En-GB")==="01/01/1970"?"":new Date(item.due_date).toLocaleDateString('En-GB')}</td>
//                       <td>{}</td>
//                       <td>{item.query_nature_of_Heading===""?<button className="btn btn-secondary">Dispute</button>:item.query_nature_of_Heading}</td>
//                       <td>{item.query_Dispute_ID}</td>
//                       <td>{item.query_outcome}</td>
//                       <td>{item.query_resolution}</td>
//                     </tr>
//                   </>
//                 );
//               })}
//           </tbody>
//         </table>
//         <div className="text-center d-flex justify-content-end align-items-center">
//           <button
//             disabled={currentPage === 1}
//             className="bg_page"
//             onClick={() => handlePageChange(currentPage - 1)}
//           >
//             <i class="fi fi-rr-angle-small-left page_icon"></i>
//           </button>
//           <span className="mx-2">{`Page ${currentPage} of ${totalPage}`}</span>
//           <button
//             disabled={currentPage === totalPage}
//             className="bg_page"
//             onClick={() => handlePageChange(currentPage + 1)}
//           >
//             <i class="fi fi-rr-angle-small-right page_icon"></i>
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import Topbar from "../Topbar";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import axios from "axios";
import Swal from "sweetalert2";

const pageSize = 10;

export default function TransctionDetails() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDisputeModal, setShowDisputeModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [disputeForm, setDisputeForm] = useState({
 
  });

  useEffect(() => {
    getwarehouse();
  }, []);

  const getwarehouse = () => {
    const userid = JSON.parse(localStorage?.getItem("data"));
    axios
      .post(`${process.env.REACT_APP_BASE_URL}GetClientAllInvoice`, {
        client_id: userid.id,
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const totalPage = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentdata = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDisputeClick = (item) => {
    console.log("Dispute clicked for item:", item);
    // setfreightNumber(item);
    setSelectedInvoice(item);
    setShowDisputeModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setDisputeForm({
      ...disputeForm,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmitDispute = (item) => {
    console.log(selectedInvoice)
    console.log("Submitting Dispute for Invoice:", item);
// selectedInvoice(item)
const postdata={
   freight_no: selectedInvoice?.freight_number,
      nature_of_Heading: disputeForm.date,
      name: disputeForm.reason,
      subject: disputeForm.amount,
      message: disputeForm.description,
      user_id: JSON.parse(localStorage.getItem("data"))?.id,
}
console.log(postdata)
try {
  const response = axios.post(`${process.env.REACT_APP_BASE_URL}addQueries`,postdata)
  .then((response)=>{
     getwarehouse();
    Swal.fire("success","Dispute submitted successfully","success")
  })
  .catch((error)=>{
    console.log(error)
    alert("Failed to submit dispute")
  })
} catch (error) {
  console.log(error)
}
    setShowDisputeModal(false);    
  };
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="d-flex justify-content-between mx-5 my-4">
        <div className="fw-bold fs-3">Statement</div>
        <div className="searchInput">
          <input className="rounded" placeholder="Search..."></input>
        </div>
      </div>
      <div className="table-responsive mt-4 mx-5">
        <table className="table table-striped tableICon">
          <thead>
            <tr>
              <th>Invoice Date </th>
              <th>Freight Number</th>
              <th>Document Number</th>
              <th>Txn Type</th>
              <th>Bill Currency</th>
              <th>Balance Amount</th>
              <th>Payment Rec</th>
              <th>TXN Amt</th>
              <th>Due Date</th>
              <th>Day Past Due</th>
              <th>Dispute</th>
              <th>Dispute ID</th>
              <th>Dispute Status</th>
              <th>Text</th>
            </tr>
          </thead>
          <tbody>
            {currentdata &&
              currentdata.length > 0 &&
              currentdata.map((item) => (
                <tr key={item.id}>
                  <td>
                    {new Date(item.date).toLocaleDateString("en-GB") ===
                    "01/01/1970"
                      ? ""
                      : new Date(item.date).toLocaleDateString("en-GB")}
                  </td>
                  <td>{item.freight_number}</td>
                  <td>{item.document_number}</td>
                  <td>{item.transaction}</td>
                  <td>{item.invoice_currency}</td>
                  <td>{item.balance}</td>
                  <td>{item.payment}</td>
                  <td>{item.total}</td>
                  <td>
                    {new Date(item.due_date).toLocaleDateString("en-GB") ===
                    "01/01/1970"
                      ? ""
                      : new Date(item.due_date).toLocaleDateString("en-GB")}
                  </td>
                  <td>{}</td>
                  <td>
                    {item.query_nature_of_Heading === "" ? (
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleDisputeClick(item)}
                      >
                        Dispute
                      </button>
                    ) : (
                      item.query_nature_of_Heading
                    )}
                  </td>
                  <td>{item.query_Dispute_ID}</td>
                  <td>{item.query_outcome}</td>
                  <td>{item.query_resolution}</td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="text-center d-flex justify-content-end align-items-center">
          <button
            disabled={currentPage === 1}
            className="bg_page"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <i className="fi fi-rr-angle-small-left page_icon"></i>
          </button>
          <span className="mx-2">{`Page ${currentPage} of ${totalPage}`}</span>
          <button
            disabled={currentPage === totalPage}
            className="bg_page"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <i className="fi fi-rr-angle-small-right page_icon"></i>
          </button>
        </div>
      </div>

      {/* Dispute Modal */}
      {showDisputeModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content p-3">
              <div className="modal-header">
                <h5 className="modal-title">Raise Dispute</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDisputeModal(false)}
                ></button>
              </div>
           
                <div className="modal-body">
             
                  <div className="row">
                         <div className="mb-3 col-6">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="reason"
                      value={disputeForm.reason}
                      placeholder="Enter your name"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
 <div className="mb-3 col-6">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="amount"
                      value={disputeForm.amount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  </div>
                 <div className="row">
                   <div className="mb-3">
                    <label className="form-label">Nature of Heading</label>
                   <select onChange={handleInputChange} name="date" className="form-select">
                    <option>Select...</option>
                    <option>Pricing</option>
                    <option>Invoicing</option>
                    <option>Service Support</option>
                   </select>
                  </div>
                 </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      name="description"
                      placeholder="Describe your issue here..."
                      value={disputeForm.description}
                      onChange={handleInputChange}
                    />
                  </div>
                 
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowDisputeModal(false)}
                  >
                    Close
                  </button>
                  <button onClick={handleSubmitDispute} className="btn btn-primary">
                    Submit Dispute
                  </button>
                </div>
           
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
