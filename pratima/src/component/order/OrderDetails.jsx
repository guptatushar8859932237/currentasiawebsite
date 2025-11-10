// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import SidebarWeb from "../homepage/SidebarwWeb";
// import NavbarWeb from "../homepage/NavbarWeb";
// import Arrow from "../../assestss/Group 2.png";
// import { toast, ToastContainer } from "react-toastify";
// import AddHomeIcon from "@mui/icons-material/AddHome";
// import { Box, Modal } from "@mui/material";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import { Button } from "react-bootstrap";
// import image2 from '../../assestss/ware.png'
// import { Delete } from "@mui/icons-material";
// const pageSize = 5;
// export default function OrderDetails() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [data, setData] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [showModal3, setShowModal3] = useState(false);
//   const [showModald5, setShowModald5] = useState(false);
//   const [assignwarehouseid, setAssignwarehouseid] = useState(null);
//   const [clickdata, setClickdata] = useState([]);
//   const [country, setCountry] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [enterdata, setEnterdata] = useState({});
//   const [inputval, setInputval] = useState({
//     user_id: "",
//     origin: "",
//     destination: "",
//     startDate: "",
//     endDate: "",
//     freightType: "",
//     freightSpeed: "",
//   });
//   const userdata = JSON.parse(localStorage.getItem("data"));
//   const navigaet = useNavigate();
//   const handleUpdateClose = () => setShowModal(false);
//   const handleUpdateClose3 = () => setShowModal3(false);
//   const updatefunction = (warehouse_assign_order_id, item) => {
//     setShowModal(true);
//     getrefreshdata(warehouse_assign_order_id);
//   };
//   const updatefunction3 = (warehouse_assign_order_id, item) => {
//     setShowModal3(true);
//     getrefreshdata(warehouse_assign_order_id);
//   };
//   const getdata = () => {
//     axios
//       .post(`${process.env.REACT_APP_BASE_URL}order-details`, {
//         user_id: userdata.id,
//       })
//       .then((response) => {
//         setData(response.data.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//   };
//   const handleclcick = (id, order_id) => {
//     const userOrder = data.filter((item) => {
//       return item.id === id;
//     });
//     axios
//       .post(`${process.env.REACT_APP_BASE_URL}get-order-status`, {
//         order_id: `${order_id}`,
//       })
//       .then((response) => {
//         if (response.data.success === true) {
//           navigaet("/Tracking-status", {
//             state: { data12: response.data.data },
//           });
//         }
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//   };
//   const handleclickschangestatus11 = (freight_id, ORDER_ID) => {
//     console.log(freight_id, ORDER_ID);
//     const data11 = {
//       freight_id: freight_id,
//       order_id: ORDER_ID,
//     };
//     axios
//       .post(`${process.env.REACT_APP_BASE_URL}add_freight_to_warehouse`, data11)
//       .then((response) => {
//         getdata();
//         toast.success(response.data.message);
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//   };

//   useEffect(() => {
//     getdata();
//   }, []);
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };
//   const filteredData = data.filter((item) => {
//     console.log(item);
//     return (
//       String(item.full_name)
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase()) ||
//       item.freight.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.freight_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.nature_of_goods.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.product_desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.order_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       String(item.cartons).toLowerCase().includes(searchQuery.toLowerCase()) ||
//       String(item.order_id).toLowerCase().includes(searchQuery.toLowerCase()) ||
//       String(item.no_of_packages)
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase()) ||
//       String(item.delivery_to_country)
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase()) ||
//       String(item.collection_from_country)
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase())
//     );
//   });
//   const totalPage = Math.ceil(filteredData.length / pageSize);
//   const startindex = (currentPage - 1) * pageSize;
//   const endIndex = startindex + pageSize;
//   const currentdata = filteredData.slice(startindex, endIndex);
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//     setCurrentPage(1);
//   };
//   const handleclickorder = (id) => {
//     const orderdata = data.filter((item) => {
//       return item.id === id;
//     });
//     console.log(orderdata[0]);
//     navigaet("/Order-details-conform", { state: { data: orderdata[0] } });
//   };

//   const getrefreshdata = (warehouse_assign_order_id) => {
//     const dataget = {
//       warehouse_assign_order_id: warehouse_assign_order_id,
//     };
//     axios
//       .post(
//         `${process.env.REACT_APP_BASE_URL}getWarehouseOrderProduct`,
//         dataget
//       )
//       .then((response) => {
//         setClickdata(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//   };

//   const handleclickfunc = () => {
//     handleUpdateClose();
//     // setShowModal3(true)
//     updatefunction3();
//   };
//   const handleclickfunc3 = () => {
//     handleUpdateClose3();
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEnterdata({ ...enterdata, [name]: value });
//   };

//   const user = JSON.parse(localStorage.getItem("data"));
//   console.log(user);

//   const getdata12 = () => {
//     axios
//       .get(`${process.env.REACT_APP_BASE_URL}GetCountries`)
//       .then((response) => {
//         console.log(response.data.data);
//         setCountry(response.data.data);
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//       });
//   };
//   useEffect(() => {
//     getdata12();
//   }, []);
//   const handleclickpostdataitem = () => {
//     const datapostitem = {
//       user_id: user?.id,
//       added_by: user?.user_type,
//       warehouse_order_id: assignwarehouseid,
//       product_description: enterdata.product_description,
//       Hazardous: enterdata.Hazardous,
//       date_received: enterdata.date_received,
//       package_type: enterdata.package_type,
//       packages: enterdata.packages,
//       dimension: enterdata.dimension,
//       weight: enterdata.weight,
//       warehouse_ref: enterdata.warehouse_refs,
//     };
//     console.log(datapostitem);
//     axios
//       .post(
//         `${process.env.REACT_APP_BASE_URL}addWarehouseProduct`,
//         datapostitem
//       )
//       .then((response) => {
//         toast.success(response.data.message);
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//       });
//   };

//   const handledeleteitem = (warehouse_products_id) => {
//     const datadelete = {
//       warehouse_products_id: warehouse_products_id,
//     };
//     axios
//       .post(
//         `${process.env.REACT_APP_BASE_URL}DeleteWarehouseProduct`,
//         datadelete
//       )
//       .then((response) => {
//         getrefreshdata();
//         toast.success(response.data.message);
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//   };

//   const openmodalopen = () => setShowModald5(true);
//   const handleUpdateClose5 = () => setShowModald5(false);

//   const handechangefilter = (e) => {
//     const { name, value } = e.target;
//     setInputval({ ...inputval, [name]: value });
//   };

//   const postapi = () => {
//     const postdata = {
//       user_id: user.id,
//       origin: inputval.origin,
//       destination: inputval.destination,
//       startDate: inputval.startDate,
//       endDate: inputval.endDate,
//       freightType: inputval.freight,
//       freightSpeed: inputval.type,
//     };

//     console.log(postdata);
//     axios
//       .post(`${process.env.REACT_APP_BASE_URL}order-details`, postdata)
//       .then((response) => {
//         handleUpdateClose5();
//         setData(response.data.data);
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//       });
//   };
//   const hanldedhgjdh =()=>{
//     console.log("abc")
//   }

//   const handledelete=()=>{
//     console.log("absb")
//   }

//   return (
//     <div>
//       <NavbarWeb />
//       <SidebarWeb />
//       <>
//         <section className="manageFrightSec">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-lg-12">
//                 {data.length == 0 ? (
//                   <p className="text-center my-5">
//                     !!! Please Add freight & clearance to get our service !!!
//                   </p>
//                 ) : (
//                   <>
//                     <div className="tableManageFright">
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div>
//                           <h4 className="para_det">Order Detail's</h4>
//                         </div>
//                         <div className="d-flex">
//                           <div>
//                             <input
//                               className="my-3 mx-2 py-1 px-2 rounded"
//                               value={searchQuery}
//                               onChange={handleSearch}
//                               placeholder="Search"
//                             ></input>
//                           </div>
//                           <div>
//                             <button
//                               onClick={openmodalopen}
//                               className="my-3 mx-2 py-1 px-2 btn btn-primary"
//                             >
//                               Filter
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="card border-0">
//                         <div className="card-body">
//                           <div className="table-responsive">
//                             <table className="table table-striped tableICon">
//                               <tbody>
//                                 {currentdata &&
//                                   currentdata.length > 0 &&
//                                   currentdata.map((item, index) => {
//                                     console.log(item);
//                                     const datenw = new Date(item.date);
//                                     const options = {
//                                       year: "numeric",
//                                       month: "2-digit",
//                                       day: "2-digit",
//                                     };
//                                     const formattedDate =
//                                       datenw.toLocaleDateString(
//                                         "en-GB",
//                                         options
//                                       );
//                                     console.log(formattedDate);
//                                     return (
//                                       <>
//                                         <tr key={index}>
//                                           <td className="list_bd">
//                                             <div className="d-flex justify-content-between align-items-center">
//                                               <div className="d-flex align-items-center">
//                                                 <p
//                                                   className="client_nm"
//                                                   onClick={() => {
//                                                     handleclickorder(item.id);
//                                                   }}
//                                                 >
//                                                   {item.full_name}
//                                                 </p>
//                                                 <p
//                                                   className="fright_no mx-2 fs-6"
//                                                   onClick={() => {
//                                                     handleclickorder(item.id);
//                                                   }}
//                                                 >
//                                                   {item.freight_number} /{" "}
//                                                   {item.order_id}
//                                                 </p>
//                                               </div>
//                                               <div
//                                                 className=""
//                                                 onClick={() => {
//                                                   handleclickorder(item.id);
//                                                 }}
//                                               >
//                                                 <p className="port_date">
//                                                   {new Date(
//                                                     item.created_at
//                                                   ).toLocaleDateString("en-GB")}
//                                                 </p>
//                                               </div>
//                                             </div>
//                                             <div className="">
//                                               <div className="row">
//                                                 <div className="col-md-3">
//                                                   <div className="">
//                                                     <p className="origin">
//                                                       {item.product_desc}
//                                                     </p>
//                                                   </div>
//                                                 </div>
//                                                 <div
//                                                   className="col-md-5"
//                                                   onClick={() => {
//                                                     handleclickorder(item.id);
//                                                   }}
//                                                 >
//                                                   <div className="country_mnge">
//                                                     <img
//                                                       src={`${process.env.REACT_APP_FLAGURL}${item.collection_from_country_flag_url}`}
//                                                       alt="flag img"
//                                                       className="flag_img"
//                                                     />
//                                                     {
//                                                       item.collection_from_country
//                                                     }
//                                                     <img
//                                                       src={Arrow}
//                                                       className="flag_img1"
//                                                     />
//                                                     <img
//                                                       src={`${process.env.REACT_APP_FLAGURL}${item.delivery_to_country_flag_url}`}
//                                                       alt="flag img"
//                                                       className="flag_img"
//                                                     />
//                                                     {item.delivery_to_country}
//                                                     <span className="fright_type">
//                                                       ({item.freight})
//                                                     </span>
//                                                   </div>
//                                                 </div>
//                                                 <div className="col-md-2">
//                                                   <div className="text-center">
//                                                     <p className="origin">
//                                                       {item.nature_of_goods}
//                                                     </p>
//                                                   </div>
//                                                 </div>
//                                                 {/* <div className="col-md-2 d-flex justify-content-between">
//                                                   <div className=" ms-5">
//                                                     {item.warehouse_status ==
//                                                     1 ? (
//                                                       <i
//                                                         className="fi fi-ss-warehouse-alt"
//                                                         style={{
//                                                           cursor: "pointer",
//                                                         }}
//                                                         onClick={() => {
//                                                           setAssignwarehouseid(
//                                                             item.warehouse_assign_order_id
//                                                           );
//                                                           updatefunction(
//                                                             item.warehouse_assign_order_id,
//                                                             item
//                                                           );
//                                                         }}
//                                                       />
//                                                     ) : (
//                                                       <AddHomeIcon
//                                                         className="fi fi-ss-warehouse-alt"
//                                                         style={{
//                                                           cursor: "pointer",
//                                                         }}
//                                                         onClick={() => {
//                                                           handleclickschangestatus11(
//                                                             item.freight_id,
//                                                             item.ORDER_ID
//                                                           );
//                                                           console.log("ASDFG");
//                                                         }}
//                                                       />
//                                                     )}
//                                                   </div>
//                                                   <div className="">
//                                                     <i
//                                                       className="fi fi-br-track"
//                                                       style={{
//                                                         cursor: "pointer",
//                                                       }}
//                                                       onClick={() => {
//                                                         handleclcick(
//                                                           item.id,
//                                                           item.order_id
//                                                         );
//                                                       }}
//                                                     />
//                                                   </div>
//                                                 </div> */}
//                                                 <div className="dropdown">
//                                                   <a
//                                                     href=""
//                                                     type="button"
//                                                     className="act_btn dropdown-toggle"
//                                                     data-bs-toggle="dropdown"
//                                                     aria-expanded="false"
//                                                   >
//                                                     Action
//                                                   </a>
//                                                   <div
//                                                     className="dropdown-menu drop_down"
//                                                     aria-labelledby="dropdownMenuButton1"
//                                                   >
//                                                     <div className="btnManageFreight">
//                                                       <div className="drpIcons dropdown-item item_drop">
//                                                         {item?.status == 4 ? (
//                                                           <Link
//                                                             className="text-primary text-dark"
//                                                             onClick={() => {
//                                                               hanldedhgjdh(
//                                                                 item.id
//                                                               );
//                                                             }}
//                                                           >
//                                                             <i class="fi fi-br-download dr"></i>
//                                                             Download PDF
//                                                           </Link>
//                                                         ) : (
//                                                           <Link className="text-danger"></Link>
//                                                         )}
//                                                       </div>
//                                                       <div className="drpIcons dropdown-item item_drop">
//                                                         {item.status === "2" ? (
//                                                           <p></p>
//                                                         ) : (
//                                                           <a
//                                                             className="link_bdy"
//                                                             href="https://chat.whatsapp.com/C1SiwQek53B434FSz4BjQo"
//                                                             target="_blank"
//                                                           >
//                                                             <WhatsAppIcon className="text-success" />
//                                                             Whatsapp
//                                                           </a>
//                                                         )}
//                                                       </div>
//                                                       {/* <div className="drpIcons dropdown-item item_drop">
//                                                         <p
//                                                           className="link_bdy mb-0"
//                                                           onClick={() => {
//                                                             handledelete(
//                                                               item.id
//                                                             );
//                                                           }}
//                                                         >
//                                                           <i className="fa fa-trash icon_align" />
//                                                           Delete
//                                                         </p>
//                                                       </div> */}
//                                                       <div className="drpIcons dropdown-item item_drop">
//                                                         <p
//                                                           className="link_bdy mb-0"
//                                                           onClick={() => {
//                                                             navigaet("/Waybill",{state:{data:item}})
//                                                             console.log(item)
//                                                           }}
//                                                         >
//                                                           <i className="fa fa-shopping-cart icon_align" />
//                                                           Shipping Mark
//                                                         </p>
//                                                       </div>
//                                                       <div className="drpIcons dropdown-item item_drop">
//                                                         <p
//                                                           className="link_bdy mb-0"
//                                                           onClick={() => {
//                                                             handleclcick(
//                                                               item.id,
//                                                               item.order_id
//                                                             );
//                                                           }}
//                                                         >
//                                                           <i className="fa fa-subway icon_align" />
//                                                           Track Order
//                                                         </p>
//                                                       </div>
//                                                       {item.status === "2" ? (
//                                                         <p></p>
//                                                       ) : (
//                                                         <div
//                                                           className="drpIcons dropdown-item item_drop drop_item1"
//                                                           onClick={() => {
//                                                             updatefunction(
//                                                               item.id
//                                                             );
//                                                           }}
//                                                         >
//                                                           <i className="fa fa-edit icon_align" />
//                                                           Edit
//                                                         </div>
//                                                       )}
//                                                        <div className="">
//                                                     {/* <i
//                                                       className="fi fi-br-track"
//                                                       style={{
//                                                         cursor: "pointer",
//                                                       }}
//                                                       onClick={() => {
//                                                         handleclcick(
//                                                           item.id,
//                                                           item.order_id
//                                                         );
//                                                       }}
//                                                     >Track Order</i> */}
                                                    
//                                                   </div>
//                                                     </div>
//                                                   </div>
//                                                 </div>
//                                               </div>
//                                             </div>
//                                           </td>
//                                         </tr>
//                                       </>
//                                     );
//                                   })}
//                               </tbody>
//                             </table>
//                             <div className="text-center">
//                               <button
//                                 disabled={currentPage === 1}
//                                 className="btn rounded"
//                                 onClick={() =>
//                                   handlePageChange(currentPage - 1)
//                                 }
//                               >
//                                 <i class="fi fi-rr-angle-small-left page_icon"></i>
//                               </button>
//                               <span>{` ${currentPage}`}</span>
//                               <button
//                                 disabled={currentPage === totalPage}
//                                 className="btn rounded"
//                                 onClick={() =>
//                                   handlePageChange(currentPage + 1)
//                                 }
//                               >
//                                 <i class="fi fi-rr-angle-small-right page_icon"></i>
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </section>
//         <Modal open={showModal} onClose={handleUpdateClose}>
//           <Box
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: 1050,
//               bgcolor: "background.paper",
//               border: "2px solid #000",
//               boxShadow: 24,
//               p: 4,
//             }}
//           >
//             <div className="d-flex justify-content-between">
//               <div>Warehouse Order List</div>
//               <div>
//                 <button
//                   className="fs-2 px-3 rounded-circle bg-dark text-white"
//                   onClick={() => {
//                     handleclickfunc();
//                   }}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//             <div className="table-responsive mt-2">
//               <table className="table mt-4 table-striped tableICon">
//                 <thead>
//                   <tr>
//                     <th scope="col">Sr.No.</th>
//                     <th scope="col">Package Type</th>
//                     {/* <th scope="col">Client Ref</th> */}
//                     <th scope="col">Product Description</th>
//                     <th scope="col">Weight</th>
//                     <th scope="col">Dimension</th>
//                     <th scope="col">Packages</th>
//                     <th scope="col">Hazardous</th>
//                     <th scope="col">date_received</th>
//                     <th scope="col">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody style={{ border: "none" }}>
//                   {clickdata &&
//                     clickdata.length > 0 &&
//                     clickdata.map((item, index) => {
//                       console.log(item);
//                       return (
//                         <>
//                           <tr className="border-bottom" key={index}>
//                             <th>{index + 1}</th>
//                             <td>{item.package_type}</td>
//                             <td className="col-2">
//                               {item.product_description}{" "}
//                             </td>
//                             <td>{item.weight}</td>
//                             <td>{item.dimension}</td>
//                             <td>{item.packages}</td>
//                             <td>{item.Hazardous}</td>
//                             <td>
//                               {new Date(item.date_received).toLocaleDateString(
//                                 "EN-gb"
//                               )}
//                             </td>
//                             <td>
//                               <Delete
//                                 onClick={() => {
//                                   handledeleteitem(item.warehouse_products_id);
//                                 }}
//                               />
//                             </td>
//                           </tr>
//                         </>
//                       );
//                     })}
//                 </tbody>
//               </table>
//             </div>
//           </Box>
//         </Modal>
//         <Modal open={showModal3} onClose={handleUpdateClose3}>
//           <Box
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: 650,
//               bgcolor: "background.paper",
//               border: "2px solid #000",
//               boxShadow: 24,
//               p: 4,
//             }}
//           >
//             <div className="d-flex justify-content-between">
//               <div>Add Warehouse Order</div>
//               <div>
//                 <button
//                   className="fs-2 px-3 rounded-circle bg-dark text-white"
//                   onClick={handleclickfunc3}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//             <div className="row mt-3">
//               <div className="col-lg-6">
//                 <label htmlFor="clientName">Product Description </label>
//                 <input
//                   type="text"
//                   id="clientName w-100"
//                   className="w-100"
//                   name="product_description"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="col-lg-6">
//                 <label htmlFor="contactPerson">Hazardous </label>
//                 <input
//                   type="text"
//                   id="contactPerson"
//                   className="w-100"
//                   name="Hazardous"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="row mt-3">
//               <div className="col-lg-6">
//                 <label htmlFor="clientName">Date Received </label>
//                 <input
//                   type="date"
//                   id="clientName w-100"
//                   className="w-100"
//                   name="date_received"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="col-lg-6">
//                 <label htmlFor="contactPerson">Package Type </label>
//                 <input
//                   type="text"
//                   id="contactPerson"
//                   className="w-100"
//                   name="package_type"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="row mt-3">
//               <div className="col-lg-6">
//                 <label htmlFor="clientName">Packages </label>
//                 <input
//                   type="text"
//                   id="clientName w-100"
//                   className="w-100"
//                   name="packages"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="col-lg-6">
//                 <label htmlFor="contactPerson">Dimension </label>
//                 <input
//                   type="text"
//                   id="contactPerson"
//                   className="w-100"
//                   name="dimension"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="row mt-3">
//               <div className="col-lg-6">
//                 <label htmlFor="clientName">Weight </label>
//                 <input
//                   type="text"
//                   id="clientName w-100"
//                   className="w-100"
//                   name="weight"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="col-lg-6">
//                 <label htmlFor="contactPerson">Warehouse Ref. </label>
//                 <input
//                   type="text"
//                   id="contactPerson"
//                   className="w-100"
//                   name="warehouse_ref"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//             <Button className="mt-3" onClick={handleclickpostdataitem}>
//               Add Item
//             </Button>
//           </Box>
//         </Modal>
//         <Modal open={showModald5} onClose={handleUpdateClose5}>
//           <Box
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: 750,
//               bgcolor: "background.paper",
//               border: "2px solid #000",
//               boxShadow: 24,
//               p: 4,
//             }}
//           >
//             <p className="fs-4 fw-bold">Filter</p>
//             <div className="row d-flex mb-3">
//               <div className="col-6">
//                 <h5 className="labelTitle">Collection from</h5>
//                 <select
//                   className="py-2 w-100"
//                   name="origin"
//                   onChange={handechangefilter}
//                 >
//                   <option value="">Select...</option>
//                   {country?.map((item) => (
//                     <option key={item.id} value={item.id}>
//                       {item.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="col-6">
//                 <h5 className="labelTitle">Destination</h5>
//                 <select
//                   className="py-2 w-100"
//                   name="destination"
//                   onChange={handechangefilter}
//                 >
//                   <option value="">Select...</option>
//                   {country?.map((item) => (
//                     <option key={item.id} value={item.id}>
//                       {item.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <div className="row d-flex mb-3">
//               <div className="col-6 ">
//                 <h5 className="labelTitle">Start Date</h5>

//                 <input
//                   className="py-2 w-100"
//                   type="date"
//                   name="startDate"
//                   onChange={handechangefilter}
//                 ></input>
//               </div>
//               <div className="col-6 ">
//                 <h5 className="labelTitle">End Date</h5>
//                 <input
//                   className="py-2 w-100"
//                   type="date"
//                   name="endDate"
//                   onChange={handechangefilter}
//                 ></input>
//               </div>
//             </div>
//             <div className="row d-flex mb-3">
//               <div className="col-6">
//                 <h5 className="labelTitle">Freight</h5>
//                 <select
//                   className="py-2 w-100"
//                   name="freight"
//                   onChange={handechangefilter}
//                 >
//                   <option>Select...</option>
//                   <option value="Sea">Sea</option>
//                   <option value="Air">Air</option>
//                   <option value="Sea">Sea</option>
//                 </select>
//               </div>
//               <div className="col-6">
//                 <h5 className="labelTitle">Freight Type</h5>
//                 <select
//                   className="py-2 w-100"
//                   name="type"
//                   onChange={handechangefilter}
//                 >
//                   <option value="">Select Co</option>
//                   <option value="express">Express</option>
//                   <option value="normal">Consolidation</option>
//                 </select>
//               </div>
//               <button onClick={postapi} className="btn btn-primary mt-3 w-25">
//                 Apply
//               </button>
//             </div>
//             <div className="row d-flex"></div>
//           </Box>
//         </Modal>
//       </>
//       <ToastContainer />
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SidebarWeb from "../homepage/SidebarwWeb";
import NavbarWeb from "../homepage/NavbarWeb";
import Arrow from "../../assestss/Group 2.png";
import { toast, ToastContainer } from "react-toastify";
import { Box, Modal } from "@mui/material";
import { Button } from "react-bootstrap";
import { Delete, Edit } from "@mui/icons-material";
const pageSize = 5;
export default function OrderDetails() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [openmodal99, setOpenmodal99] = useState(false);
  const [objectdata,setObjectdata]=useState({})
  const [showModald5, setShowModald5] = useState(false);
  const [assignwarehouseid, setAssignwarehouseid] = useState(null);
  const [clickdata, setClickdata] = useState([]);
  const [country, setCountry] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [enterdata, setEnterdata] = useState({});
  const [inputval, setInputval] = useState({
    user_id: "",
    origin: "",
    destination: "",
    startDate: "",
    endDate: "",
    freightType: "",
    freightSpeed: "",
  });
  const userdata = JSON.parse(localStorage.getItem("data"));
  const navigaet = useNavigate();
  const handleUpdateClose = () => setShowModal(false);
  const handleUpdateClose3 = () => setShowModal3(false);
  const handleUpdateClose99 = () =>setOpenmodal99(false);
  const openmodalhandle = () => setOpenmodal99(true);
  const updatefunction = (warehouse_assign_order_id, item) => {
    setShowModal(true);
    getrefreshdata(warehouse_assign_order_id);
  };
  const updatefunction3 = (warehouse_assign_order_id, item) => {
    setShowModal3(true);
    getrefreshdata(warehouse_assign_order_id);
  };
  const getdata = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}order-details`, {
        user_id: userdata.id,
      })
      .then((response) => {
        setData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const handleclcick = (id, order_id) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}get-order-status`, {
        order_id: `${order_id}`,
      })
      .then((response) => {
        if (response.data.success === true) {
          navigaet("/Tracking-status", {
            state: { data12: response.data.data },
          });
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const handleclickschangestatus11 = (freight_id, ORDER_ID) => {
    console.log(freight_id, ORDER_ID);
    const data11 = {
      freight_id: freight_id,
      order_id: ORDER_ID,
    };
    axios
      .post(`${process.env.REACT_APP_BASE_URL}add_freight_to_warehouse`, data11)
      .then((response) => {
        getdata();
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const filteredData = data.filter((item) => {
    console.log(item);
    return (
      String(item.full_name)
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      item.freight.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.freight_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nature_of_goods.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.product_desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.order_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(item.cartons).toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(item.order_id).toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(item.no_of_packages)
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      String(item.delivery_to_country)
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      String(item.collection_from_country)
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  });
  const totalPage = Math.ceil(filteredData.length / pageSize);
  const startindex = (currentPage - 1) * pageSize;
  const endIndex = startindex + pageSize;
  const currentdata = filteredData.slice(startindex, endIndex);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };
  const handleclickorder = (id) => {
    const orderdata = data.filter((item) => {
      return item.id === id;
    });
    console.log(orderdata[0]);
    navigaet("/Order-details-conform", { state: { data: orderdata[0] } });
  };
  const getrefreshdata = (warehouse_assign_order_id) => {
    const dataget = {
      warehouse_assign_order_id: warehouse_assign_order_id,
    };
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}getWarehouseOrderProduct`,
        dataget
      )
      .then((response) => {
        setClickdata(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const handleclickfunc = () => {
    handleUpdateClose();
    updatefunction3();
  };
  const handleclickfunc3 = () => {
    handleUpdateClose3();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnterdata({ ...enterdata, [name]: value });
  };
  const user = JSON.parse(localStorage.getItem("data"));
  const getdata12 = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}GetCountries`)
      .then((response) => {
        console.log(response.data.data);
        setCountry(response.data.data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  useEffect(() => {
    getdata12();
  }, []);
  const handleclickpostdataitem = () => {
    const datapostitem = {
      user_id: user?.id,
      added_by: user?.user_type,
      warehouse_order_id: assignwarehouseid,
      product_description: enterdata.product_description,
      Hazardous: enterdata.Hazardous,
      date_received: enterdata.date_received,
      package_type: enterdata.package_type,
      packages: enterdata.packages,
      dimension: enterdata.dimension,
      weight: enterdata.weight,
      warehouse_ref: enterdata.warehouse_refs,
      freight: enterdata.freight,
      groupage_batch_ref: enterdata.groupage_batch_ref,
      supplier: enterdata.supplier,
      warehouse_receipt_number: enterdata.warehouse_receipt_number,
      tracking_number: enterdata.tracking_number,
      date_dspatched: enterdata.date_dspatched,
      supplier_address: enterdata.supplier_address,
      warehouse_collect: enterdata.warehouse_collect,
      costs_to_collect: enterdata.costs_to_collect,
      port_of_loading: enterdata.port_of_loading,
      warehouse_dispatch: enterdata.warehouse_dispatch,
      warehouse_cost: enterdata.warehouse_cost,
      cost_to_dispatch: enterdata.cost_to_dispatch,
      waybill_ref: enterdata.waybill_ref,
      Supplier_Contact: enterdata.Supplier_Contact,
      supplier_Email: enterdata.supplier_Email,
    };
    console.log(datapostitem);
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}addWarehouseProduct`,
        datapostitem
      )
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handledeleteit = (productId) => {
    const dataget = clickdata.filter((item) => {
      return item.warehouse_products_id === productId;
    })
    setObjectdata(dataget[0])
    openmodalhandle()
console.log(productId)
console.log(objectdata)
// handleUpdateClose()
  }
  const handledeleteitem = (warehouse_products_id) => {
    const datadelete = {
      warehouse_products_id: warehouse_products_id,
    };
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}DeleteWarehouseProduct`,
        datadelete
      )
      .then((response) => {
        getrefreshdata();
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const openmodalopen = () => setShowModald5(true);
  const handleUpdateClose5 = () => setShowModald5(false);
  const handechangefilter = (e) => {
    const { name, value } = e.target;
    setInputval({ ...inputval, [name]: value });
  };
  const postapi = () => {
    const postdata = {
      user_id: user.id,
      origin: inputval.origin,
      destination: inputval.destination,
      startDate: inputval.startDate,
      endDate: inputval.endDate,
      freightType: inputval.freight,
      freightSpeed: inputval.type,
    };
    console.log(postdata);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}order-details`, postdata)
      .then((response) => {
        handleUpdateClose5();
        setData(response.data.data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handleChangeedit = (e) => {
    const { name, value } = e.target;
    setObjectdata({ ...objectdata, [name]: value });
  }


  const handlepostdataedit =async () => {
    const datapost = {
      warehouse_products_id : objectdata.warehouse_products_id, // Ensure this is passed to identify the product
      product_description : objectdata.product_description,
      Hazardous: objectdata.Hazardous,
      date_received: objectdata.date_received,
      package_type: objectdata.package_type,
      packages: objectdata.packages,
      dimension: objectdata.dimension,
      weight: objectdata.weight,
      warehouse_ref: objectdata.warehouse_ref,
      supplier: objectdata.supplier,
      warehouse_receipt_number: objectdata.warehouse_receipt_number,
      tracking_number: objectdata.tracking_number,
      supplier_address: objectdata.supplier_address,
      Supplier_Contact: objectdata.Supplier_Contact,
      supplier_Email: objectdata.supplier_Email,
    }
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}updateWarehouseProduct`, datapost)
    .then((response) => {
      toast.success(response.data.message);
      handleUpdateClose99()
      getrefreshdata(assignwarehouseid);
    }).catch((error) => {
      toast.error(error.response.data.message);
    })

    }
  return (
    <div>
      <NavbarWeb />
      <SidebarWeb />
      <>
        <section className="manageFrightSec">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                {data.length == 0 ? (
                  <p className="text-center my-5">
                    !!! Please Add freight & clearance to get our service !!!
                  </p>
                ) : (
                  <>
                    <div className="tableManageFright">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h4 className="para_det">Order Details</h4>
                        </div>
                        <div className="d-flex">
                          <div>
                            <input
                              className="my-3 mx-2 py-1 px-2 rounded"
                              value={searchQuery}
                              onChange={handleSearch}
                              placeholder="Search"
                            ></input>
                          </div>
                          <div>
                            <button
                              onClick={openmodalopen}
                              className=" my-3  py-2  add_button mx-2"
                            >
                              Filter
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="card border-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-striped tableICon">
                              <tbody>
                                {currentdata &&
                                  currentdata.length > 0 &&
                                  currentdata.map((item, index) => {
                                    console.log(item);
                                    const datenw = new Date(item.date);
                                    const options = {
                                      year: "numeric",
                                      month: "2-digit",
                                      day: "2-digit",
                                    };
                                    const formattedDate =
                                      datenw.toLocaleDateString(
                                        "en-GB",
                                        options
                                      );
                                    console.log(formattedDate);
                                    return (
                                      <>
                                        <tr key={index}>
                                          <td className="list_bd">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="d-flex align-items-center">
                                                <p
                                                  className="client_nm"
                                                  onClick={() => {
                                                    handleclickorder(item.id);
                                                  }}
                                                >
                                                  {item.full_name}
                                                </p>
                                                <p
                                                  className="fright_no mx-2 fs-6"
                                                  onClick={() => {
                                                    handleclickorder(item.id);
                                                  }}
                                                >
                                                  {item.freight_number} /{" "}
                                                  {item.order_id}
                                                </p>
                                              </div>
                                              <div
                                                className="fright_no mx-2 fs-6"
                                                onClick={() => {
                                                  handleclickorder(item.id);
                                                }}
                                              >
                                                <p className="port_date">
                                                  {new Date(
                                                    item.created_at
                                                  ).toLocaleDateString("en-GB")}
                                                </p>
                                              </div>
                                            </div>
                                            <div className="">
                                              <div className="row">
                                                <div className="col-md-3">
                                                  <div className="">
                                                    <p className="origin">
                                                      {item.product_desc}
                                                    </p>
                                                  </div>
                                                </div>
                                                <div
                                                  className="col-md-5"
                                                  onClick={() => {
                                                    handleclickorder(item.id);
                                                  }}
                                                >
                                                  <div className="country_mnge">
                                                    <img
                                                      src={`${process.env.REACT_APP_FLAGURL}${item.collection_from_country_flag_url}`}
                                                      alt="flag img"
                                                      className="flag_img"
                                                    />
                                                    {
                                                      item.collection_from_country
                                                    }
                                                    <img
                                                      src={Arrow}
                                                      className="flag_img1"
                                                    />
                                                    <img
                                                      src={`${process.env.REACT_APP_FLAGURL}${item.delivery_to_country_flag_url}`}
                                                      alt="flag img"
                                                      className="flag_img"
                                                    />
                                                    {item.delivery_to_country}
                                                    <span className="fright_type">
                                                      ({item.freight})
                                                    </span>
                                                  </div>
                                                </div>
                                                <div className="col-md-2">
                                                  <div className="text-center">
                                                    <p className="origin">
                                                      {item.nature_of_goods}
                                                    </p>
                                                  </div>
                                                </div>
                                                <div className="col-md-2 d-flex justify-content-end">
                                                  <div className="dropdown">
                                                    <a
                                                      href=""
                                                      type="button"
                                                      className="act_btn dropdown-toggle"
                                                      data-bs-toggle="dropdown"
                                                      aria-expanded="false"
                                                    >
                                                      Action
                                                    </a>
                                                    <div
                                                      className="dropdown-menu drop_down"
                                                      aria-labelledby="dropdownMenuButton1"
                                                    >
                                                      <div className="btnManageFreight">
                                                        <div className="drpIcons dropdown-item item_drop">
                                                          <div
                                                            className=" "
                                                            onClick={() => {
                                                              setAssignwarehouseid(
                                                                item.warehouse_assign_order_id
                                                              );
                                                              updatefunction(
                                                                item.warehouse_assign_order_id,
                                                                item
                                                              );
                                                            }}
                                                          >
                                                            {item.warehouse_status ==
                                                            1 ? (
                                                              <i
                                                                onClick={() => {
                                                                  setAssignwarehouseid(
                                                                    item.warehouse_assign_order_id
                                                                  );
                                                                  updatefunction(
                                                                    item.warehouse_assign_order_id,
                                                                    item
                                                                  );
                                                                }}
                                                                className="fi fi-ss-warehouse-alt"
                                                                style={{
                                                                  cursor:
                                                                    "pointer",
                                                                }}
                                                              />
                                                            ) : (
                                                              <p
                                                                onClick={() => {
                                                                  handleclickschangestatus11(
                                                                    item.freight_id,
                                                                    item.ORDER_ID
                                                                  );
                                                                  console.log(
                                                                    "ASDFG"
                                                                  );
                                                                }}
                                                                className="fi fi-ss-warehouse-alt fright_no mx-2 fs-6"
                                                                style={{
                                                                  cursor:
                                                                    "pointer",
                                                                }}
                                                              ></p>
                                                            )}
                                                            Send Warehouse
                                                          </div>
                                                        </div>

                                                        <div className="drpIcons dropdown-item item_drop">
                                                          Assin for Clearing
                                                        </div>
                                                        <div className="drpIcons dropdown-item item_drop">
                                                          <div
                                                            className=""
                                                            onClick={() => {
                                                              handleclcick(
                                                                item.id,
                                                                item.order_id
                                                              );
                                                            }}
                                                          >
                                                            <i
                                                              className="fi fi-br-track"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                            />
                                                            Track order
                                                          </div>
                                                        </div>
                                                      
                                                        {/* <div className="drpIcons dropdown-item item_drop">
                                                          <div className="">
                                                            <i
                                                              className="fi fi-br-copy"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                              // onClick={() => {
                                                              //   handleclcick(
                                                              //     item.id,
                                                              //     item.order_id
                                                              //   );
                                                              // }}
                                                            />
                                                            Copy
                                                          </div>
                                                        </div> */}
                                                        {/* <div className="drpIcons dropdown-item item_drop">
                                                          <div className="">
                                                            <i
                                                              className="fi fi-br-query"
                                                              style={{
                                                                cursor:
                                                                  "pointer",
                                                              }}
                                                                onClick={() => {
                                                                  handleclcick(
                                                                    item.id,
                                                                    item.order_id
                                                                  );
                                                                }}
                                                            />
                                                            Query
                                                          </div>
                                                        </div> */}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      </>
                                    );
                                  })}
                              </tbody>
                            </table>
                            <div className="text-center">
                              <button
                                disabled={currentPage === 1}
                                className="btn rounded"
                                onClick={() =>
                                  handlePageChange(currentPage - 1)
                                }
                              >
                                <i class="fi fi-rr-angle-small-left page_icon"></i>
                              </button>
                              <span>{` ${currentPage}`}</span>
                              <button
                                disabled={currentPage === totalPage}
                                className="btn rounded"
                                onClick={() =>
                                  handlePageChange(currentPage + 1)
                                }
                              >
                                <i class="fi fi-rr-angle-small-right page_icon"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        <Modal open={openmodal99} onClose={handleUpdateClose99}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 1050,
              height:500,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              overflow:"scroll",
              p: 4,
            }}
          >
            <div className="d-flex justify-content-between">
              <div><h5>Update Order List</h5></div>
              <div>
                {/* <button
                  className="fs-2 px-3 rounded-circle bg-dark text-white"
                  onClick={() => {
                    handleclickfunc();
                  }}
                >
                  +
                </button> */}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="text-center mb-2 mb-4"></div>
              {/* <div>
                <button
                  className="fs-2 px-3 rounded-circle bg-dark text-white"
                  onClick={handleclickfunc3}
                >
                  +
                </button>
              </div> */}
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <label htmlFor="clientName">Product Description </label>
                <input
                  type="text"
                  id="clientName w-100"
                  className="w-100"
                  value={objectdata.product_description}
                  placeholder="Product Description"
                  name="product_description"
                  onChange={handleChangeedit}
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="contactPerson">Hazardous </label>
                <input
                  type="text"
                  id="contactPerson"
                  className="w-100"
                  name="Hazardous"
                  value={objectdata.Hazardous}
                  placeholder="Hazardous"
                  onChange={handleChangeedit}
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <label htmlFor="clientName">Date Received </label>
                <input
                  type="date"
                  id="clientName w-100"
                  className="w-100 py-2 px-3 rounded"
                  name="date_received"
                  value={objectdata.date_received}
                  onChange={handleChangeedit}
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="contactPerson">Package Type </label>
                <input
                  type="text"
                  id="contactPerson"
                  value={objectdata.package_type}
                  placeholder="Package Type"
                  className="w-100"
                  name="package_type"
                  onChange={handleChangeedit}
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <label htmlFor="clientName">Packages </label>
                <input
                  type="text"
                  id="clientName w-100"
                  className="w-100"
                  value={objectdata.packages}
                  placeholder="Package"
                  name="packages"
                  onChange={handleChangeedit}
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="contactPerson">Dimension </label>
                <input
                  type="text"
                  id="contactPerson"
                  className="w-100"
                  value={objectdata.dimension}
                  name="dimension"
                  placeholder="Dimension"
                  onChange={handleChangeedit}
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <label htmlFor="clientName">Weight </label>
                <input
                  type="text"
                  id="clientName w-100"
                  value={objectdata.weight}
                  className="w-100"
                  placeholder="Weight"
                  name="weight"
                  onChange={handleChangeedit}
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="contactPerson">Warehouse Ref. </label>
                <input
                  type="text"
                  id="contactPerson"
                  className="w-100"
                  value={objectdata.warehouse_ref}
                  placeholder="Warehouse Reference"
                  name="warehouse_ref"
                  onChange={handleChangeedit}
                  required
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-lg-6">
                <label htmlFor="clientName">supplier </label>
                <input
                  type="text"
                  id="clientName w-100"
                  className="w-100"
                  name="supplier"
                  value={objectdata.supplier}
                  placeholder="Supplier"
                  onChange={handleChangeedit}
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="contactPerson">Warehouse Receipt Number </label>
                <input
                  type="text"
                  value={objectdata.warehouse_receipt_number}
                  id="contactPerson"
                  className="w-100"
                  placeholder="Warehouse reciept number"
                  name="warehouse_receipt_number"
                  onChange={handleChangeedit}
                  required
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-lg-6">
                <label htmlFor="clientName">Tracking Number </label>
                <input
                  type="text"
                  id="clientName w-100"
                  className="w-100"
                  value={objectdata.tracking_number}
                  placeholder="Tracking number"
                  name="tracking_number"
                  onChange={handleChangeedit}
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="clientName">Supplier Address </label>
                <input
                  type="text"
                  id="clientName w-100"
                  className="w-100"
                  value={objectdata.supplier_address}
                  name="supplier_address"
                  placeholder="Supplier Address"
                  onChange={handleChangeedit}
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <label htmlFor="clientName">Supplier Contact </label>
                <input
                  type="text"
                  id="clientName w-100"
                  className="w-100"
                  value={objectdata.Supplier_Contact}
                  placeholder="Supplier Contact"
                  name="Supplier_Contact"
                  onChange={handleChangeedit}
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="clientName">supplier Email </label>
                <input
                  type="text"
                  id="clientName w-100"
                  className="w-100"
                  value={objectdata.supplier_Email}
                  name="supplier_Email"
                  placeholder="Supplier Email"
                  onChange={handleChangeedit}
                  required
                />
              </div>
              <div className="col-3 my-2">
              <button onClick={handlepostdataedit} className="btn btn-secondary">Update</button>
                </div>
            </div>
          </Box>
        </Modal>
        <Modal open={showModal} onClose={handleUpdateClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 1050,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <div className="d-flex justify-content-between">
              <div>Warehouse Order List</div>
              <div>
                <button
                  className="fs-2 px-3 rounded-circle bg-dark text-white"
                  onClick={() => {
                    handleclickfunc();
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="table-responsive mt-2">
              <table className="table mt-4 table-striped tableICon">
                <thead>
                  <tr>
                    <th scope="col">Sr.No.</th>
                    <th scope="col">Package</th>
                    <th scope="col">Description</th>
                    <th scope="col">Weight (kgs)</th>
                    <th scope="col">Dim (Cbm)</th>
                    <th scope="col">Packs</th>
                    <th scope="col">Waybill</th>
                    <th scope="col">Received</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody style={{ border: "none" }}>
                  {clickdata &&
                    clickdata.length > 0 &&
                    clickdata.map((item, index) => {
                      console.log(item);
                      return (
                        <>
                          <tr className="border-bottom" key={index}>
                            <th>{index + 1}</th>
                            <td>{item.package_type}</td>
                            <td className="col-2">
                              {item.product_description}{" "}
                            </td>
                            <td>{item.weight}</td>
                            <td>{item.dimension}</td>
                            <td>{item.packages}</td>
                            <td>{item.tracking_number}</td>
                            <td>
                              {new Date(item.date_received).toLocaleDateString(
                                "EN-gb"
                              )}
                            </td>
                            <td>
                              <Delete
                                onClick={() => {
                                  handledeleteitem(item.warehouse_products_id);
                                }}
                              />
                              <Edit
                                onClick={() => {
                                  handledeleteit(item.warehouse_products_id);
                                }}
                              />
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </Box>
        </Modal>
        <Modal open={showModal3} onClose={handleUpdateClose3}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 650,
              height: 530,
              bgcolor: "background.paper",
              overflow: "scroll",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <div className="d-flex justify-content-between">
              <div className="text-center my-2 mb-4">Add Warehouse Order</div>
              <div>
                <button
                  className="fs-2 px-3 rounded-circle bg-dark text-white"
                  onClick={handleclickfunc3}
                >
                  +
                </button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <label htmlFor="clientName">Product Description </label>
                <input
                  type="text"
                  id="clientName w-100"
                  className="w-100"
                  placeholder="Product Description"
                  name="product_description"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="contactPerson">Hazardous </label>
                <input
                  type="text"
                  id="contactPerson"
                  className="w-100"
                  name="Hazardous"
                  placeholder="Hazardous"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <label htmlFor="clientName">Date Received </label>
                <input
                  type="date"
                  id="clientName w-100"
                  className="w-100 py-2 px-3 rounded"
                  name="date_received"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="contactPerson">Package Type </label>
                <input
                  type="text"
                  id="contactPerson"
                  placeholder="Package Type"
                  className="w-100"
                  name="package_type"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <label htmlFor="clientName">Packages </label>
                <input
                  type="text"
                  id="clientName w-100"
                  className="w-100"
                  placeholder="Package"
                  name="packages"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="contactPerson">Dimension </label>
                <input
                  type="text"
                  id="contactPerson"
                  className="w-100"
                  name="dimension"
                  placeholder="Dimension"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <label htmlFor="clientName">Weight </label>
                <input
                  type="text"
                  id="clientName w-100"
                  className="w-100"
                  placeholder="Weight"
                  name="weight"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="contactPerson">Warehouse Ref. </label>
                <input
                  type="text"
                  id="contactPerson"
                  className="w-100"
                  placeholder="Warehouse Reference"
                  name="warehouse_ref"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-lg-6">
                <label htmlFor="clientName">supplier </label>
                <input
                  type="text"
                  id="clientName w-100"
                  className="w-100"
                  name="supplier"
                  placeholder="Supplier"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="contactPerson">Warehouse Receipt Number </label>
                <input
                  type="text"
                  id="contactPerson"
                  className="w-100"
                  placeholder="Warehouse reciept number"
                  name="warehouse_receipt_number"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-lg-6">
                <label htmlFor="clientName">Tracking Number </label>
                <input
                  type="text"
                  id="clientName w-100"
                  className="w-100"
                  placeholder="Tracking number"
                  name="tracking_number"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="clientName">Supplier Address </label>
                <input
                  type="text"
                  id="clientName w-100"
                  className="w-100"
                  name="supplier_address"
                  placeholder="Supplier Address"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <label htmlFor="clientName">Supplier Contact </label>
                <input
                  type="text"
                  id="clientName w-100"
                  className="w-100"
                  placeholder="Supplier Contact"
                  name="Supplier_Contact"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="clientName">supplier Email </label>
                <input
                  type="text"
                  id="clientName w-100"
                  className="w-100"
                  name="supplier_Email"
                  placeholder="Supplier Email"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row mt-3"></div>

            <Button
              className="mt-3 btn"
              style={{ backgroundColor: "#1b2245" }}
              onClick={handleclickpostdataitem}
            >
              Add Item
            </Button>
          </Box>
        </Modal>
        <Modal open={showModald5} onClose={handleUpdateClose5}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 750,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <p className="fs-4 fw-bold">Filter</p>
            <div className="row d-flex mb-3">
              <div className="col-6">
                <h5 className="labelTitle">Collection from</h5>
                <select
                  className="py-2 w-100"
                  name="origin"
                  onChange={handechangefilter}
                >
                  <option value="">Select...</option>
                  {country?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-6">
                <h5 className="labelTitle">Destination</h5>
                <select
                  className="py-2 w-100"
                  name="destination"
                  onChange={handechangefilter}
                >
                  <option value="">Select...</option>
                  {country?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row d-flex mb-3">
              <div className="col-6 ">
                <h5 className="labelTitle">Start Date</h5>

                <input
                  className="py-2 w-100"
                  type="date"
                  name="startDate"
                  onChange={handechangefilter}
                ></input>
              </div>
              <div className="col-6 ">
                <h5 className="labelTitle">End Date</h5>
                <input
                  className="py-2 w-100"
                  type="date"
                  name="endDate"
                  onChange={handechangefilter}
                ></input>
              </div>
            </div>
            <div className="row d-flex mb-3">
              <div className="col-6">
                <h5 className="labelTitle">Freight</h5>
                <select
                  className="py-2 w-100"
                  name="freight"
                  onChange={handechangefilter}
                >
                  <option>Select...</option>
                  <option value="Sea">Sea</option>
                  <option value="Air">Air</option>
                  <option value="Sea">Sea</option>
                </select>
              </div>
              {/* <div className="col-6">
                <h5 className="labelTitle">Freight Type</h5>
                <select
                  className="py-2 w-100"
                  name="type"
                  onChange={handechangefilter}
                >
                  <option value="">Select Co</option>
                  <option value="express">Express</option>
                  <option value="normal">Consolidation</option>
                </select>
              </div> */}
              <div className="col-6">
                <h5 className="labelTitle">Freight Type</h5>
                <select
                  className="py-2 w-100"
                  name="type"
                  onChange={handechangefilter}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Co
                  </option>
                  <option value="express">Express</option>
                  <option value="normal">Consolidation</option>
                </select>
              </div>

              <div className="d-flex justify-content-center">
                <button onClick={postapi} className="btn btn-primary mt-3 w-25">
                  Apply
                </button>
              </div>
            </div>
            <div className="row d-flex"></div>
          </Box>
        </Modal>
      </>
      <ToastContainer />
    </div>
  );
}
