import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
export default function Billing() {
  const [currentData, setTableData] = useState([]);
  const [sageInvoiceData, setSageInvoiceData] = useState([]);
  const [selectedOrderNumbers, setSelectedOrderNumbers] = useState({});
  const [rowDetails, setRowDetails] = useState([]); // Store row-specific details
  const [data, setData] = useState("");
  useEffect(() => {
    fetchOrderData();
    fetchSageInvoiceData();
  }, []);
  const fetchSageInvoiceData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}GetSageInvoiceList`
      );
      setSageInvoiceData(response.data.data || []);
    } catch (error) {
      console.error(
        "Error fetching Sage Invoice data:",
        error.response?.data || error.message
      );
    }
  };
  const fetchOrderData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}OrderInvoiceList`
      );
      setTableData(response.data.data || []);
    } catch (error) {
      console.error(
        "Error fetching order data:",
        error.response?.data || error.message
      );
    }
  };
  const handleOrderChange = (orderId, rowIndex) => {
    setSelectedOrderNumbers((prevState) => ({
      ...prevState,
      [rowIndex]: orderId,
    }));
  };
  const handleInvoiceChange = async (e, rowIndex) => {
    const invoiceId = e.target.value;
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}GetSageInvoiceDetails`,
        { sage_invoice_id: invoiceId }
      );
      const invoiceDetails = response.data.data;
      setRowDetails((prevState) => {
        const updatedState = [...prevState];
        if (!updatedState[rowIndex]) {
          updatedState[rowIndex] = {};
        }
        updatedState[rowIndex] = {
          ...updatedState[rowIndex],
          invoice_id: invoiceId,
          ...invoiceDetails,
        };
        return updatedState;
      });
    } catch (error) {
      console.error(
        "Error fetching invoice details:",
        error.response?.data || error.message
      );
    }
  };
  const handleClick = async (item, rowIndex) => {
    const invoiceDetails = rowDetails[rowIndex] || {};
    console.log(item.date);
    const payload = {
      invoice_id: item.invoice_id || null, // Use `null` for new entries
      date: invoiceDetails.date || item.date,
      transaction: invoiceDetails.transaction || data.transaction,
      order_id: selectedOrderNumbers[rowIndex] || item.order_ID,
      client_id: item.client_id || null,
      sage_invoice_id: invoiceDetails.sage_invoice_id || item.id,
      excl: invoiceDetails.excl || item.excel,
      vat: invoiceDetails.vat || item.vat,
      invoice_amt: invoiceDetails.total || item.invoice_amt,
      due_date: invoiceDetails.due_date || item.due_date,
      status: invoiceDetails.status || item.status,
      payment: invoiceDetails.payment || item.payment,
      balance: invoiceDetails.balance || item.balance,
      day_overdue: invoiceDetails.overdue || item.day_overdue,
    };
    console.log(payload);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}AddInvoiceDetails`,
        payload
      );
      const successMessage =
        response.data?.data?.message || "Operation successful";
      const updatedData = response.data.data;
      setTableData((prevState) =>
        prevState.map((row, idx) =>
          idx === rowIndex ? { ...row, ...updatedData } : row
        )
      );
      setRowDetails((prevState) => ({
        ...prevState,
        [rowIndex]: { ...prevState[rowIndex], ...updatedData },
      }));
      fetchOrderData();
      toast.success(successMessage);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Error adding or updating invoice details:", errorMessage);
      toast.error("Failed to process the request.");
    }
  };
  const handlechange = (e) => {
    const data1 = e.target.value;
    setData(data1);
  };
  return (
    <div className="wpWrapper">
    <div className="container-fluid">
      <div className="card">
        <div className="card-body">
          <div className="row">
        <table className="table mt-4 table-responsive table-striped tableICon">
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction</th>
              <th>Shipment Ref</th>
              <th>Customer</th>
              <th>Invoice Ref</th>
              <th>Invoice amount</th>
              <th>Due Date</th>
              <th>Payment</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {tableData.length > 0 ? (
              tableData.map((item, index) => (
                <tr key={index}>
                  <td>
                    {rowDetails[index]?.date? new Date(rowDetails[index].date).toLocaleDateString("en-GB")
                      : new Date(item.date).toLocaleDateString("en-GB") ==="01/01/1970"? ""
                      : new Date(item.date).toLocaleDateString("en-GB")}
                  </td>
                  <td>
                    <select
                      name="transaction"
                      onChange={handlechange}
                      value={
                        rowDetails[index]?.transaction
                          ? rowDetails[index].transaction
                          : item.transaction}>
                      <option>Select</option>
                      <option value="Invoice">INV</option>
                      <option value="Credit Note">CRN</option>
                      <option value="Adjustment">ADJ</option>
                      <option value="Write-off">WO</option>
                    </select>
                  </td>
                  <td>
                    <select
                      value={
                        selectedOrderNumbers[index] ||
                        item.order_ID ||
                        "Select..."}
                      onChange={(e) => handleOrderChange(e.target.value, index)}>
                      <option>Select...</option>
                      {tableData.map((data, idx) => {
                        console.log(data);
                        return (
                          <>
                            <option key={idx} value={data.order_ID}>
                              {data.order_number}
                            </option>
                          </>
                        );
                      })}
                    </select>
                  </td>
                  <td>{item.client_name || "N/A"}</td>
                  <td>
                    <select
                      onChange={(e) => handleInvoiceChange(e, index)}
                      value={rowDetails[index]?.invoice_id || item.invoice_id}
                      name="invoice_id">
                      <option value="">Select...</option>
                      {sageInvoiceData.map((data, idx) => (
                        <option key={idx} value={data.id}>
                          {data.document_number}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    {rowDetails[index]?.total
                      ? rowDetails[index]?.total
                      : item.invoice_amt}
                  </td>
                  <td>
                    <input type="date" ></input>
                    {/* {rowDetails[index]?.due_date ||
                    new Date(item.due_date).toLocaleDateString("en-GB") ===
                      "01/01/1970"
                      ? ""
                      : new Date(item.due_date).toLocaleDateString("en-GB")} */}
                  </td>
                  {/* <td>{rowDetails[index]?.status || item.status}</td> */}
                  <td>{rowDetails[index]?.payment || item.payment}</td>
                  <td>{rowDetails[index]?.balance || item.balance}</td>
                  {/* <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleClick(item, index)}
                    >
                      Add
                    </button>
                  </td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="14" className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      </div>
      </div>
      </div>
      <ToastContainer />
    </div>
  );
}

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";

// export default function Billing() {
//   const [tableData, setTableData] = useState([]);
//   const [sageInvoiceData, setSageInvoiceData] = useState([]);
//   const [selectedOrderNumbers, setSelectedOrderNumbers] = useState({});
//   const [rowDetails, setRowDetails] = useState([]);

//   useEffect(() => {
//     fetchOrderData();
//     fetchSageInvoiceData();
//   }, []);

//   const fetchSageInvoiceData = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}GetSageInvoiceList`
//       );
//       setSageInvoiceData(response.data.data || []);
//     } catch (error) {
//       console.error(
//         "Error fetching Sage Invoice data:",
//         error.response?.data || error.message
//       );
//     }
//   };

//   const fetchOrderData = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}OrderInvoiceList`
//       );
//       setTableData(response.data.data || []);
//     } catch (error) {
//       console.error(
//         "Error fetching order data:",
//         error.response?.data || error.message
//       );
//     }
//   };

//   const handleDropdownChange = async (field, value, rowIndex) => {
//     setRowDetails((prevState) => {
//       const updatedState = [...prevState];
//       if (!updatedState[rowIndex]) {
//         updatedState[rowIndex] = {};
//       }
//       updatedState[rowIndex][field] = value;
//       return updatedState;
//     });

//     const item = tableData[rowIndex];
//     const invoiceDetails = rowDetails[rowIndex] || {};

//     const payload = {
//       invoice_id: item.invoice_id ,
//       date: invoiceDetails.date || item.date,
//       transaction:
//         field === "transaction" ? value : invoiceDetails.transaction[rowIndex] || item.transaction,
//       order_id:
//         field === "order_id" ? value : selectedOrderNumbers[rowIndex] || item.order_ID,
//       client_id: item.client_id || null,
//       sage_invoice_id: invoiceDetails.sage_invoice_id || item.id,
//       excl: invoiceDetails.excl || item.excel,
//       vat: invoiceDetails.vat || item.vat,
//       invoice_amt: invoiceDetails.total || item.invoice_amt,
//       due_date: invoiceDetails.due_date || item.due_date,
//       status: invoiceDetails.status || item.status,
//       payment: invoiceDetails.payment || item.payment,
//       balance: invoiceDetails.balance || item.balance,
//       day_overdue: invoiceDetails.overdue || item.day_overdue,
//     };

//     console.log("API Payload:", payload);

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}AddInvoiceDetails`,
//         payload
//       );
//       const successMessage = response.data?.data?.message || "Operation successful";
//       const updatedData = response.data.data;

//       setTableData((prevState) =>
//         prevState.map((row, idx) =>
//           idx === rowIndex ? { ...row, ...updatedData } : row
//         )
//       );

//       setRowDetails((prevState) => ({
//         ...prevState,
//         [rowIndex]: { ...prevState[rowIndex], ...updatedData },
//       }));

//       toast.success(successMessage);
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || error.message;
//       console.error("Error updating invoice details:", errorMessage);
//       toast.error("Failed to process the request.");
//     }
//   };

//   return (
//     <div className="wpWrapper">
//       <div className="container-fluid">
//         <div className="card">
//           <div className="card-body">
//             <div className="row">
//               <table className="table mt-4 table-responsive table-striped tableICon">
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Transaction</th>
//                     <th>Shipment Ref</th>
//                     <th>Customer</th>
//                     <th>Invoice Ref</th>
//                     <th>Invoice amount</th>
//                     <th>Due Date</th>
//                     <th>Payment</th>
//                     <th>Balance</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tableData.length > 0 ? (
//                     tableData.map((item, index) => (
//                       <tr key={index}>
//                         <td>
//                           {rowDetails[index]?.date
//                             ? new Date(rowDetails[index].date).toLocaleDateString("en-GB")
//                             : new Date(item.date).toLocaleDateString("en-GB") === "01/01/1970"
//                             ? ""
//                             : new Date(item.date).toLocaleDateString("en-GB")}
//                         </td>
//                         <td>
//                           <select
//                             name="transaction"
//                             onChange={(e) =>
//                               handleDropdownChange("transaction", e.target.value, index)
//                             }
//                             value={
//                               rowDetails[index]?.transaction
//                                 ? rowDetails[index].transaction
//                                 : item.transaction
//                             }>
//                             <option>Select</option>
//                             <option value="Invoice">INV</option>
//                             <option value="Credit Note">CRN</option>
//                             <option value="Adjustment">ADJ</option>
//                             <option value="Write-off">WO</option>
//                           </select>
//                         </td>
//                         <td>
//                           <select
//                             value={
//                               selectedOrderNumbers[index] ||
//                               item.order_ID ||
//                               "Select..."
//                             }
//                             onChange={(e) =>
//                               handleDropdownChange("order_id", e.target.value, index)
//                             }>
//                             <option>Select...</option>
//                             {tableData.map((data, idx) => (
//                               <option key={idx} value={data.order_ID}>
//                                 {data.order_number}
//                               </option>
//                             ))}
//                           </select>
//                         </td>
//                         <td>{item.client_name || "N/A"}</td>
//                         <td>
//                           <select
//                             onChange={(e) =>
//                               handleDropdownChange("sage_invoice_id", e.target.value, index)
//                             }
//                             value={rowDetails[index]?.invoice_id || item.invoice_id}
//                             name="invoice_id">
//                             <option value="">Select...</option>
//                             {sageInvoiceData.map((data, idx) => (
//                               <option key={idx} value={data.id}>
//                                 {data.document_number}
//                           </option>
//                             ))}
//                           </select>
//                         </td>
//                         <td>
//                           {rowDetails[index]?.total
//                             ? rowDetails[index]?.total
//                             : item.invoice_amt}
//                         </td>
//                         <td>
//                           <input type="date"></input>
//                         </td>
//                         <td>{rowDetails[index]?.payment || item.payment}</td>
//                         <td>{rowDetails[index]?.balance || item.balance}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="14" className="text-center">
//                         No data available
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// const pageSize= 10;
// export default function Billing() {
//   const [tableData, setTableData] = useState([]);
//   const [sageInvoiceData, setSageInvoiceData] = useState([]);
//   const [rowDetails, setRowDetails] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loader, setLoader]=useState(true)
//   useEffect(() => {
//     fetchOrderData();
//     fetchSageInvoiceData();
//   }, []);
//   const fetchSageInvoiceData = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}GetSageInvoiceList`
//       );
//       setSageInvoiceData(response.data.data || []);
//     } catch (error) {
//       console.error(
//         "Error fetching Sage Invoice data:",
//         error.response?.data || error.message
//       );
//     }
//   };
//   const fetchOrderData = async () => {
//     setLoader(true)
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}OrderInvoiceList`
//       );
//       setLoader(false)
//       setTableData(response.data.data || []);
//     } catch (error) {
//       setLoader(false)
//       console.error(
//         "Error fetching order data:",
//         error.response?.data || error.message
//       );
//     }
//   };

//   const totalPages = Math.ceil(tableData.length / pageSize);
//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = startIndex + pageSize;
//   const currentData = tableData.slice(startIndex, endIndex);
//   const handlePageChange = (currentData) => {
//     setCurrentPage(currentData);
//   };

//   const handleDropdownChange = async (field, value, rowIndex) => {
//     setRowDetails((prevState) => {
//       const updatedState = [...prevState];
//       if (!updatedState[rowIndex]) {
//         updatedState[rowIndex] = {};
//       }
//       updatedState[rowIndex][field] = value;
//       return updatedState;
//     });
//     const updatedRow = rowDetails[rowIndex] || {};
//     const payload = {
//       ...updatedRow,
//       [field]: value,
//       invoice_id: tableData[rowIndex]?.invoice_id,
//       order_id: updatedRow.order_id || tableData[rowIndex]?.order_ID,
//       sage_invoice_id:
//         updatedRow.sage_invoice_id || tableData[rowIndex]?.invoice_id,
//     };
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}AddInvoiceDetails`,
//         payload
//       );
//       const successMessage =
//         response.data?.data?.message || "Operation successful";
//       const updatedData = response.data.data;
//       setTableData((prevState) =>
//         prevState.map((row, idx) =>
//           idx === rowIndex ? { ...row, ...updatedData } : row
//         )
//       );
//       fetchOrderData();
//       toast.success(successMessage);
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || error.message;
//       console.error("Error updating dropdown value:", errorMessage);
//       toast.error("Failed to process the request.");
//     }
//   };

//   return (
//     <>
//     {loader ? (
//       <div class="loader-container">
//         <div class="loader"></div>
//         <p class="loader-text">Updating... This may take some time</p>
//       </div>
//     ) : (
//     <div className="wpWrapper">
//       <div className="container-fluid">
//         <div className="card">
//           <div className="card-body">
//             <div className="row">
//               <table className="table mt-4 table-responsive table-striped tableICon">
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Transaction</th>
//                     <th>Shipment Ref</th>
//                     <th>Customer</th>
//                     <th>Invoice Ref</th>
//                     <th>Invoice amount</th>
//                     <th>Due Date</th>
//                     <th>Payment</th>
//                     <th>Balance</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentData.length > 0 ? (
//                     currentData.map((item, index) => (
//                       <tr key={index}>
//                         <td>
//                           {rowDetails[index]?.date
//                             ? new Date(
//                                 rowDetails[index].date
//                               ).toLocaleDateString("en-GB")
//                             : new Date(item.date).toLocaleDateString(
//                                 "en-GB"
//                               ) === "01/01/1970"
//                             ? ""
//                             : new Date(item.date).toLocaleDateString("en-GB")}
//                         </td>
//                         <td>
//                           <select
//                             name="transaction"
//                             className="py-1 px-1 w-100"
//                             onChange={(e) =>
//                               handleDropdownChange(
//                                 "transaction",
//                                 e.target.value,
//                                 index
//                               )
//                             }
//                             value={
//                               rowDetails[index]?.transaction || item.transaction
//                             }
//                           >
//                             <option>Select</option>
//                             <option value="Invoice">INV</option>
//                             <option value="Credit Note">CRN</option>
//                             <option value="Adjustment">ADJ</option>
//                             <option value="Write-off">WO</option>
//                           </select>
//                         </td>
//                         <td>
//                           <select
//                             className="py-1 px-1"
//                             value={
//                               rowDetails[index]?.order_id ||
//                               item.order_ID ||
//                               "Select..."
//                             }
//                             onChange={(e) =>
//                               handleDropdownChange(
//                                 "order_id",
//                                 e.target.value,
//                                 index
//                               )
//                             }
//                           >
//                             <option>Select...</option>
//                             {currentData.map((data, idx) => (
//                               <option key={idx} value={data.order_ID}>
//                                 {data.order_number}
//                               </option>
//                             ))}
//                           </select>
//                         </td>
//                         <td>{item.client_name || "N/A"}</td>
//                         <td>
//                           <select
//                             onChange={(e) =>
//                               handleDropdownChange(
//                                 "sage_invoice_id",
//                                 e.target.value,
//                                 index
//                               )
//                             }
//                             className="py-1 ps-1"
//                             value={
//                               rowDetails[index]?.sage_invoice_id ||
//                               item.invoice_id
//                             }
//                             name="invoice_id"
//                           >
//                             <option value="">Select...</option>
//                             {sageInvoiceData.map((data, idx) => (
//                               <option key={idx} value={data.id}>
//                                 {data.document_number}
//                               </option>
//                             ))}
//                           </select>
//                         </td>
//                         <td>{rowDetails[index]?.total || item.invoice_amt}</td>
//                         <td>
//                           <input
//                             type="date"
//                             value={
//                               item.due_date &&
//                               new Date(item.due_date).getTime() !== 0
//                                 ? new Date(item.due_date)
//                                     .toISOString()
//                                     .split("T")[0]
//                                 : ""
//                             }
//                             onChange={(e) =>
//                               handleDropdownChange(
//                                 "due_date",
//                                 e.target.value,
//                                 index
//                               )
//                             }
//                           />
//                           {/* <input
//                             type="date"
//                             value={
//                               rowDetails[index]?.due_date ||
//                               new Date(item.due_date).toLocaleDateString(
//                                 "en-GB"
//                               )
//                             }
//                             onChange={(e) =>
//                               handleDropdownChange(
//                                 "due_date",
//                                 e.target.value,
//                                 index
//                               )
//                             }
//                           /> */}
//                         </td>
//                         <td>{rowDetails[index]?.payment || item.payment}</td>
//                         <td>{rowDetails[index]?.balance || item.balance}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="9" className="text-center">
//                         No data available
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//               <div className="text-center d-flex justify-content-end align-items-center mt-3">
//                 <button
//                   disabled={currentPage === 1}
//                   className="bg_page"
//                   onClick={() => handlePageChange(currentPage - 1)}
//                 >
//                   <i class="fi fi-rr-angle-small-left page_icon"></i>
//                 </button>
//                 <span className="mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
//                 <button
//                   disabled={currentPage === totalPages}
//                   className="bg_page"
//                   onClick={() => handlePageChange(currentPage + 1)}
//                 >
//                   <i class="fi fi-rr-angle-small-right page_icon"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//                 )}
//                 </>
//   );
// }
