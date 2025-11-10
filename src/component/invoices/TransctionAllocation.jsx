// // import React, { useEffect, useState } from "react";
// // import Topbar from "../Topbar";
// // import Navbar from "../homepage/Navbar";
// // import Footer from "../homepage/Footer";
// // import axios from "axios";
// // import logo from "../../Assests/logo.png";
// // import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// // import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// // import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// // import dayjs from "dayjs";
// // const pageSize = 10;
// // export default function TransctionAllocation() {
// //   const [value, setValue] = useState(dayjs());
// //   const [data, setData] = useState([]);
// //   const [outstanding, setOutstanding] = useState([]);
// //   const [data1, setData1] = useState({});
// //   const [currentPage, setCurrentPage] = useState(1);
// //   useEffect(() => {
// //     getWarehouse();
// //   }, []);
// //   const getWarehouse = () => {
// //     try {
// //       const user = JSON.parse(localStorage.getItem("data"));
// //       if (!user?.id) {
// //         console.error("User ID not found in localStorage");
// //         return;
// //       }
// //       const postdata = { userId	: user.id };
// //       axios
// //         .post(`${process.env.REACT_APP_BASE_URL}TransactionAllocation`, postdata)
// //         .then((response) => {
// //           setOutstanding(response.data);
// //           setData(response.data?.data || []);
// //         })
// //         .catch((error) => {
// //           console.error(error.response?.data?.message || error.message);
// //         });
// //     } catch (err) {
// //       console.error("Error parsing user data:", err.message);
// //     }
// //   };
// //   const totalPage = Math.max(1, Math.ceil(data.length / pageSize));
// //   const startIndex = (currentPage - 1) * pageSize;
// //   const endIndex = startIndex + pageSize;
// //   const currentData = data.slice(startIndex, endIndex);
// //   const handlePageChange = (page) => {
// //     if (page >= 1 && page <= totalPage) {
// //       setCurrentPage(page);
// //     }
// //   };

// //   const getWarehouse = (selectedDate = value) => {
// //   try {
// //     const user = JSON.parse(localStorage.getItem("data"));
// //     if (!user?.id) {
// //       console.error("User ID not found in localStorage");
// //       return;
// //     }

// //     const postdata = { 
// //       userId: user.id,
// //       month: dayjs(selectedDate).format("MM"), // send month
// //       year: dayjs(selectedDate).format("YYYY"), // send year
// //     };

// //     axios
// //       .post(`${process.env.REACT_APP_BASE_URL}TransactionAllocation`, postdata)
// //       .then((response) => {
// //         setOutstanding(response.data);
// //         setData(response.data?.data || []);
// //       })
// //       .catch((error) => {
// //         console.error(error.response?.data?.message || error.message);
// //       });
// //   } catch (err) {
// //     console.error("Error parsing user data:", err.message);
// //   }
// // };
// //   return (
// //     <div>
// //       <Topbar />
// //       <Navbar />
// //       <div className="container">
// //         {/* Header */}
// //         <div className="mt-4 d-flex justify-content-between">
// //           <div className="fw-bold fs-3">Statement</div>
// //           <div className="searchInput">
// //             <input className="rounded" placeholder="Search..." />
// //           </div>
// //         </div>
// //         <div className="statementHead d-flex justify-content-between align-items-center">
// //           <div>
// //             <p className="m-0 fw-bold">Ruvako Mabureki</p>
// //           </div>
// //           <div className="logoState">
// //             <img src={logo} alt="logo" />
// //           </div>
// //         </div>
// //         <p className="fw-bold mt-3">Full Account History:</p>
// //         <div className="d-flex justify-content-between">
// //           <div>
// //             <label className="mb-2">Select Month</label>
// //             <div>
// //               <LocalizationProvider dateAdapter={AdapterDayjs}>
// //                <DatePicker
// //   placeholder="Select Month"
// //   views={["year", "month"]}
// //   openTo="month"
// //   value={value}
// //   onChange={(newValue) => {
// //     setValue(newValue);
// //     getWarehouse(newValue); // call API with new date
// //   }}
// // />
// //               </LocalizationProvider>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="d-flex justify-content-between mt-3 accSumary">
// //           <p className="fw-bold">Account Summary :</p>
// //           <p>
// //             <strong>Outstanding Balance</strong> :{" "}
// //             <span> R {outstanding?.outstanding_balance}</span>
// //           </p>
// //         </div>
// //         <div className="table-responsive">
// //           <table className="table table-striped tableICon">
// //             <thead>
// //               <tr>
// //                 <th>Date</th>
// //                 <th>Description</th>
// //                 <th>Debit</th>
// //                 <th>Credit</th>
// //                 <th>Balance</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {currentData.length > 0 ? (
// //                 currentData.map((item, index) => (
// //                   <tr key={index}>
// //                     <td>{dayjs(item.date).format("DD/MM/YYYY")}</td>
// //                     <td>{item.description}</td>
// //                     <td>{item.Debit || "-"}</td>
// //                     <td>{item.Credit || "-"}</td>
// //                     <td>{item.balance || "-"}</td>
// //                   </tr>
// //                 ))
// //               ) : (
// //                 <tr>
// //                   <td colSpan="5" className="text-center">
// //                     No transactions found
// //                   </td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>
// //           <div className="accSumary mt-3">
// //             <p>
// //               Ensure your CPD is logged, Annual Declarations are submitted, and
// //               your compliance status is in good standing.
// //             </p>
// //             <h6 className="fw-bold">Banking Details :</h6>
// //             <div className="d-flex">
// //               <p className="me-4">
// //                 <strong>Account Holder: </strong> <span>CIBA</span>
// //               </p>
// //               <p>
// //                 <strong>Bank: </strong> <span>Absa Bank</span>
// //               </p>
// //             </div>
// //           </div>
// //           <div className="text-center d-flex justify-content-end align-items-center mt-3">
// //             <button
// //               disabled={currentPage === 1}
// //               className="bg_page"
// //               onClick={() => handlePageChange(currentPage - 1)}
// //             >
// //               <i className="fi fi-rr-angle-small-left page_icon"></i>
// //             </button>
// //             <span className="mx-2">{`Page ${currentPage} of ${totalPage}`}</span>
// //             <button
// //               disabled={currentPage === totalPage}
// //               className="bg_page"
// //               onClick={() => handlePageChange(currentPage + 1)}
// //             >
// //               <i className="fi fi-rr-angle-small-right page_icon"></i>
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import Topbar from "../Topbar";
// import Navbar from "../homepage/Navbar";
// import Footer from "../homepage/Footer";
// import axios from "axios";
// import logo from "../../Assests/logo.png";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";

// const pageSize = 10;

// export default function TransctionAllocation() {
//   const [value, setValue] = useState(dayjs());
//   const [data, setData] = useState([]);
//   const [outstanding, setOutstanding] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);

//   // ✅ API function (single definition)
//   const getWarehouse = (selectedDate = value) => {
//     try {
//       const user = JSON.parse(localStorage.getItem("data"));
//       if (!user?.id) {
//         console.error("User ID not found in localStorage");
//         return;
//       }

//       const postdata = {
//         userId: user.id,
//         month: dayjs(selectedDate).format("MM"), // send month
//         year: dayjs(selectedDate).format("YYYY"), // send year
//       };

//       axios
//         .post(`${process.env.REACT_APP_BASE_URL}TransactionAllocation`, postdata)
//         .then((response) => {
//           setOutstanding(response.data);
//           setData(response.data?.data || []);
//           setCurrentPage(1); // reset pagination on new fetch
//         })
//         .catch((error) => {
//           console.error(error.response?.data?.message || error.message);
//         });
//     } catch (err) {
//       console.error("Error parsing user data:", err.message);
//     }
//   };

//   // ✅ Fetch on first render
//   useEffect(() => {
//     getWarehouse(value);
//   }, []);

//   // Pagination
//   const totalPage = Math.max(1, Math.ceil(data.length / pageSize));
//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = startIndex + pageSize;
//   const currentData = data.slice(startIndex, endIndex);

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPage) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div>
//       <Topbar />
//       <Navbar />
//       <div className="container">
//         {/* Header */}
//         <div className="mt-4 d-flex justify-content-between">
//           <div className="fw-bold fs-3">Statement</div>
//           <div className="searchInput">
//             <input className="rounded" placeholder="Search..." />
//           </div>
//         </div>
//         <div className="statementHead d-flex justify-content-between align-items-center">
//           <div>
//             <p className="m-0 fw-bold">Ruvako Mabureki</p>
//           </div>
//           <div className="logoState">
//             <img src={logo} alt="logo" />
//           </div>
//         </div>
//         <p className="fw-bold mt-3">Full Account History:</p>
//         <div className="d-flex justify-content-between">
//           <div>
//             <label className="mb-2">Select Month</label>
//             <div>
//               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <DatePicker
//                   placeholder="Select Month"
//                   views={["year", "month"]}
//                   openTo="month"
//                   value={value}
//                   onChange={(newValue) => {
//                     setValue(newValue);
//                     getWarehouse(newValue); // call API with new date
//                   }}
//                 />
//               </LocalizationProvider>
//             </div>
//           </div>
//         </div>
//         <div className="d-flex justify-content-between mt-3 accSumary">
//           <p className="fw-bold">Account Summary :</p>
//           <p>
//             <strong>Outstanding Balance</strong> :{" "}
//             <span>R {outstanding?.outstanding_balance || "0.00"}</span>
//           </p>
//         </div>
//         <div className="table-responsive">
//           <table className="table table-striped tableICon">
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Description</th>
//                 <th>Debit</th>
//                 <th>Credit</th>
//                 <th>Balance</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentData.length > 0 ? (
//                 currentData.map((item, index) => (
//                   <tr key={index}>
//                     <td>{dayjs(item.date).format("DD/MM/YYYY")}</td>
//                     <td>{item.description}</td>
//                     <td>{item.Debit || "-"}</td>
//                     <td>{item.Credit || "-"}</td>
//                     <td>{item.balance || "-"}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="text-center">
//                     No transactions found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//           <div className="accSumary mt-3">
//             <p>
//               Ensure your CPD is logged, Annual Declarations are submitted, and
//               your compliance status is in good standing.
//             </p>
//             <h6 className="fw-bold">Banking Details :</h6>
//             <div className="d-flex">
//               <p className="me-4">
//                 <strong>Account Holder: </strong> <span>CIBA</span>
//               </p>
//               <p>
//                 <strong>Bank: </strong> <span>Absa Bank</span>
//               </p>
//             </div>
//           </div>
//           {/* Pagination */}
//           <div className="text-center d-flex justify-content-end align-items-center mt-3">
//             <button
//               disabled={currentPage === 1}
//               className="bg_page"
//               onClick={() => handlePageChange(currentPage - 1)}
//             >
//               <i className="fi fi-rr-angle-small-left page_icon"></i>
//             </button>
//             <span className="mx-2">{`Page ${currentPage} of ${totalPage}`}</span>
//             <button
//               disabled={currentPage === totalPage}
//               className="bg_page"
//               onClick={() => handlePageChange(currentPage + 1)}
//             >
//               <i className="fi fi-rr-angle-small-right page_icon"></i>
//             </button>
//           </div>
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
import logo from "../../Assests/logo.png";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const pageSize = 10;

export default function TransctionAllocation() {
  const [value, setValue] = useState(dayjs());
  const [data, setData] = useState([]);
  const [outstanding, setOutstanding] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ API function (YYYY-MM format)
  const getWarehouse = (selectedDate = value) => {
    try {
      const user = JSON.parse(localStorage.getItem("data"));
      if (!user?.id) {
        console.error("User ID not found in localStorage");
        return;
      }

      const postdata = {
        userId: user.id,
        date: dayjs(selectedDate).format("YYYY-MM"), // ✅ sends "2025-02"
      };

      axios
        .post(`${process.env.REACT_APP_BASE_URL}TransactionAllocation`, postdata)
        .then((response) => {
          setOutstanding(response.data);
          setData(response.data?.data || []);
          setCurrentPage(1); // reset pagination on new fetch
        })
        .catch((error) => {
          console.error(error.response?.data?.message || error.message);
        });
    } catch (err) {
      console.error("Error parsing user data:", err.message);
    }
  };

  // ✅ Fetch on first render
  useEffect(() => {
    getWarehouse(value);
  }, []);

  // Pagination
  const totalPage = Math.max(1, Math.ceil(data.length / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPage) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container">
        {/* Header */}
        <div className="mt-4 d-flex justify-content-between">
          <div className="fw-bold fs-3">Statement</div>
          <div className="searchInput">
            <input className="rounded" placeholder="Search..." />
          </div>
        </div>

        <div className="statementHead d-flex justify-content-between align-items-center">
          <div>
            <p className="m-0 fw-bold">Ruvako Mabureki</p>
          </div>
          <div className="logoState">
            <img src={logo} alt="logo" />
          </div>
        </div>

        <p className="fw-bold mt-3">Full Account History:</p>

        {/* Date Picker */}
        <div className="d-flex justify-content-between">
          <div>
            <label className="mb-2">Select Month</label>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  placeholder="Select Month"
                  views={["year", "month"]}
                  openTo="month"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                    getWarehouse(newValue); // call API with new date
                  }}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>

        {/* Account Summary */}
        <div className="d-flex justify-content-between mt-3 accSumary">
          <p className="fw-bold">Account Summary :</p>
          <p>
            <strong>Outstanding Balance</strong> :{" "}
            <span>R {outstanding?.outstanding_balance || "0.00"}</span>
          </p>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-striped tableICon">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {currentData.length > 0 ? (
                currentData.map((item, index) => (
                  <tr key={index}>
                    <td>{dayjs(item.date).format("DD/MM/YYYY")}</td>
                    <td>{item.description}</td>
                    <td>{item.Debit || "-"}</td>
                    <td>{item.Credit || "-"}</td>
                    <td>{item.balance || "-"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No transactions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Extra Info */}
          <div className="accSumary mt-3">
            <p>
              Ensure your CPD is logged, Annual Declarations are submitted, and
              your compliance status is in good standing.
            </p>
            <h6 className="fw-bold">Banking Details :</h6>
            <div className="d-flex">
              <p className="me-4">
                <strong>Account Holder: </strong> <span>CIBA</span>
              </p>
              <p>
                <strong>Bank: </strong> <span>Absa Bank</span>
              </p>
            </div>
          </div>

          {/* Pagination */}
          <div className="text-center d-flex justify-content-end align-items-center mt-3">
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
      </div>
      <Footer />
    </div>
  );
}
