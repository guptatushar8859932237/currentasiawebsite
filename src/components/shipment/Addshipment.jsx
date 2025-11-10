// import React, { useEffect, useState } from "react";
// import { Autocomplete, TextField, Box } from "@mui/material";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { ToastContainer } from "react-bootstrap";
// import { useLocation, useNavigate } from "react-router-dom";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import DeleteIcon from "@mui/icons-material/Delete";
// // import { ArrowBack } from "@material-ui/icons";
// export default function Addshipment() {
//   const [data, setData] = useState({});
//   const [freightOptions, setFreightOptions] = useState([]);
//   const [batchOptions, setBatchOptions] = useState([]);
//   const [resdata, setResdata] = useState([]);
//   const [countries, setCountries] = useState([]);
//   const [aggregatedArray, setAggregatedArray] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const navigate = useNavigate();
//   const getFreightOptions = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}AllFreightOrderNumbers`
//       );
//       setFreightOptions(response.data.data);
//     } catch (error) {
//       console.error("Error fetching freight options:", error.message);
//     }
//   };
//   const getBatchOptions = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}AllBatchNumbers`
//       );
//       setBatchOptions(response.data.data);
//     } catch (error) {
//       console.error("Error fetching batch options:", error.message);
//     }
//   };
//   useEffect(() => {
//     getFreightOptions();
//     getBatchOptions();
//     getcountry();
//   }, []);
//   const handleFileChange1 = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const getcountry = () => {
//     axios
//       .get(`${process.env.REACT_APP_BASE_URL}GetCountries`)
//       .then((response) => {
//         setCountries(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error.response.data.data);
//       });
//   };
//   const handleOptionChange = (event, newValue) => {
//     setSelectedOption(newValue);
//   };
//   const postApiGetTabData = async (type, id) => {
//     try {
//       const payload = {
//         type,
//         id,
//       };
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}getAssignShipmentList`,
//         payload
//       );
//       const newResponseData = response.data.data;
//       console.log(response.data.data);
//       setResdata(newResponseData);
//       setAggregatedArray((prevArray) => [
//         ...prevArray,
//         ...newResponseData,
//         ...resdata,
//       ]);
//       console.log(...newResponseData);
//       console.log("final data", ...resdata);
//     } catch (error) {
//       console.error(
//         "Error fetching assigned shipment data:",
//         error.response?.data || error.message
//       );
//     }
//   };
//   const addShipment = async () => {
//     const payload = {
//       waybill: data.shipment_waybill1,
//       freight: data123 ? data123.freight : data.freight,
//       carrier: data123 ? data123.carrier : data.carrier,
//       vessel: data123 ? data123.vessel : data.vessel,
//       ETD: data123 ? data123.ETD : data.ETD,
//       ATD: data123 ? data123.ATD : data.ATD,
//       status: data123 ? data123.status : data.status,
//       origin_agent: data123 ? data123.origin_agent : data.origin_agent,
//       port_of_loading: data123 ? data123.port_of_loading : data.port_of_loading,
//       port_of_discharge: data123
//         ? data123.port_of_discharge
//         : data.port_of_discharge,
//       destination_agent: data123
//         ? data123.destination_agent
//         : data.destination_agent,
//       load: data123 ? data123.load : data.load,
//       release_type: data123 ? data123.release_type : data.release_type,
//       origin_country_id: data123
//         ? data123.origin_country_id
//         : data.origin_country_id,
//       des_country_id: data123 ? data123.des_country_id : data.des_country_id,
//       container: data.shipment_containerno,
//       seal: data.shipment_sealno,
//       details: aggregatedArray,
//     };
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}AddShipment`,
//         payload
//       );
//       toast.success(response.data.message);
//       if (response.data.success === true) {
//         setTimeout(() => {
//           navigate("/Admin/manage-shipment");
//         }, [1000]);
//       }
//     } catch (error) {
//       toast.error("Error adding shipment");
//       console.error(
//         "Error adding shipment:",
//         error.response?.data || error.message
//       );
//     }
//   };
//   const handleclickprintdate = async () => {
//     if (!selectedOption) {
//       toast.error("Please select an option before adding.");
//       return;
//     }
//     try {
//       const type = data.shipment_waybill === "freight" ? "1" : "2";
//       const origin_country_id = data.origin_country_id;
//       const des_country_id = data.des_country_id;
//       const id =
//         data.shipment_waybill === "freight"
//           ? selectedOption.order_id
//           : selectedOption.batch_id;
//       const payload = { type, id, origin_country_id, des_country_id };
//       console.log(payload);
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}getAssignShipmentList`,
//         payload
//       );
//       const newResponseData = response.data.data;
//       console.log(newResponseData);
//       setAggregatedArray((prevArray) => [...prevArray, ...newResponseData]);
//       toast.success("Data added successfully.");
//     } catch (error) {
//       console.error(
//         "Error fetching assigned shipment data:",
//         error.response?.data || error.message
//       );
//       toast.error(error.response.data.message);
//     }
//   };
//   const location = useLocation();
//   const data123 = location?.state?.id;
//   // console.log(data123);
//   const handleclickback = () => {
//     navigate("/Admin/manage-shipment");
//   };
//   const handleClick = (item) => {
//     setAggregatedArray(
//       aggregatedArray.filter((currentItem) => currentItem !== item)
//     );
//   };
//   return (
//     <div className="wpWrapper">
//       <div className="container-fluid">
//         <div className="card">
//           <div className="card-body">
//             <div className="row">
//               <p className="fw-500">
//                 <span>
//                   <ArrowBackIcon
//                     className="fs-1 me-2"
//                     style={{ cursor: "pointer" }}
//                     onClick={handleclickback}
//                   />
//                 </span>
//                 <span className="fs-5">Shipment Details / Form</span>
//               </p>
//               <div className="col-4">
//                 <label className="ware_label">Waybill</label>
//                 <input
//                   type="text"
//                   placeholder="Waybill"
//                   onChange={handleFileChange1}
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                   name="shipment_waybill1"
//                 />
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Freight</label>
//                 <select
//                   value={data123?.freight}
//                   name="freight"
//                   onChange={handleFileChange1}
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 >
//                   <option>Select...</option>
//                   <option>Sea</option>
//                   <option>Air</option>
//                   <option>Land</option>
//                 </select>
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Carrier</label>
//                 <input
//                   type="text"
//                   onChange={handleFileChange1}
//                   name="carrier"
//                   value={data123?.carrier}
//                   placeholder="Carrier"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-4">
//                 <label className="ware_label">Vessel</label>
//                 <input
//                   type="text"
//                   onChange={handleFileChange1}
//                   value={data123?.vessel}
//                   name="vessel"
//                   placeholder="Vessel"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">ATD</label>
//                 <input
//                   type="date"
//                   value={data123?.ATD}
//                   onChange={handleFileChange1}
//                   name="ATD"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">ETD</label>
//                 <input
//                   type="date"
//                   onChange={handleFileChange1}
//                   value={data123?.ETD}
//                   name="ETD"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-4">
//                 <label className="ware_label">Release Type</label>
//                 <input
//                   type="text"
//                   value={data123?.release_type}
//                   onChange={handleFileChange1}
//                   name="release_type"
//                   placeholder="Release Type"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Origin Agent</label>
//                 <select
//                   className="form-control mb-3 py-2"
//                   onChange={handleFileChange1}
//                   value={data123?.origin_agent}
//                   name="origin_agent"
//                 >
//                   <option>Select...</option>
//                   <option>Asia Direct</option>
//                   <option>OBD Logistics</option>
//                   <option>Shenzhen Nimbus Shipping</option>
//                   <option>Shenzhen Portline</option>
//                 </select>
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Place of Loading</label>
//                 <input
//                   type="text"
//                   onChange={handleFileChange1}
//                   value={data123?.port_of_loading}
//                   name="port_of_loading"
//                   placeholder="Place of Loading"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-4">
//                 <label className="ware_label">Place of Delivery</label>
//                 <input
//                   type="text"
//                   onChange={handleFileChange1}
//                   value={data123?.port_of_discharge}
//                   name="port_of_discharge"
//                   placeholder="Place of Delivery"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Destination Agent</label>
//                 <select
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                   name="destination_agent"
//                   value={data123?.destination_agent}
//                   onChange={handleFileChange1}
//                 >
//                   <option>Select...</option>
//                   <option>Afristar</option>
//                   <option>Asia Direct - Africa</option>
//                   <option>Contra Consolidations</option>
//                   <option>DHL</option>
//                   <option>Fedex</option>
//                   <option>SACO CFR</option>
//                 </select>
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Country of Origin</label>
//                 <select
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                   name="origin_country_id"
//                   value={data123?.origin_country_id}
//                   onChange={handleFileChange1}
//                 >
//                   <option>Select...</option>
//                   {countries.map((item, index) => {
//                     return (
//                       <>
//                         <option key={index} value={item.id}>
//                           {item.name}
//                         </option>
//                       </>
//                     );
//                   })}
//                 </select>
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Destination Country</label>
//                 <select
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                   name="des_country_id"
//                   value={data123?.des_country_id}
//                   onChange={handleFileChange1}
//                 >
//                   <option>Select...</option>
//                   {countries.map((item, index) => {
//                     return (
//                       <>
//                         <option key={index} value={item.id}>
//                           {item.name}
//                         </option>
//                       </>
//                     );
//                   })}
//                 </select>
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Load</label>
//                 <input
//                   type="text"
//                   onChange={handleFileChange1}
//                   name="load"
//                   value={data123?.load}
//                   placeholder="Load"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Status</label>
//                 <select
//                   onChange={handleFileChange1}
//                   name="status"
//                   value={data123?.status}
//                   placeholder="Email address"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 >
//                   <option>Select</option>
//                   <option value="Goods at origin port">
//                     Goods at origin port
//                   </option>
//                   <option value="Goods are in transit">
//                     Goods are in transit
//                   </option>
//                   <option value="Arrived at destination port">
//                     Arrived at destination port
//                   </option>
//                   <option value="Customs clearing in progress">
//                     Customs clearing in progress
//                   </option>
//                   <option value="Customs released">Customs released</option>
//                 </select>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-4">
//                 <label className="ware_label">Container No.</label>
//                 <input
//                   type="text"
//                   onChange={handleFileChange1}
//                   name="shipment_containerno"
//                   placeholder="Container No."
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Seal No.</label>
//                 <input
//                   type="text"
//                   onChange={handleFileChange1}
//                   name="shipment_sealno"
//                   placeholder="Seal No."
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <p className="fs-3 fw-500 ">Assign Shipments</p>
//               <div className="col-4">
//                 <label className="ware_label">Assign Shipment</label>
//                 <select
//                   onChange={handleFileChange1}
//                   className="mb-3 border ps-2 py-3 rounded w-100"
//                   name="shipment_waybill"
//                 >
//                   <option>Select...</option>
//                   <option value="freight">Freight / Order</option>
//                   <option value="batch">Groupage / Batch</option>
//                 </select>
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">
//                   {data.shipment_waybill === "freight" ? "Freight" : "Batch"}
//                 </label>
//                 <Box sx={{ width: 300 }}>
//                   <Autocomplete
//                     options={
//                       data.shipment_waybill === "freight"
//                         ? freightOptions
//                         : batchOptions
//                     }
//                     getOptionLabel={(option) =>
//                       data.shipment_waybill === "freight"
//                         ? `${option.freight_number || "N/A"} / ${
//                             option.order_number || "N/A"
//                           }`
//                         : option.batch_number
//                     }
//                     value={selectedOption}
//                     onChange={handleOptionChange}
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="Search & Select"
//                         variant="outlined"
//                       />
//                     )}
//                   />
//                 </Box>
//               </div>
//               <div className="col-4 mt-4">
//                 <button
//                   className="w-25 btn btn-secondary rounded py-2 px-2"
//                   onClick={handleclickprintdate}
//                 >
//                   Add
//                 </button>
//               </div>
//             </div>
//             <div className="table-responsive mt-2">
//               <table className="table mt-4 table-striped tableICon">
//                 <thead>
//                   <tr>
//                     <th>Sr.No.</th>
//                     <th>Freight / Order No.</th>
//                     <th>Client Name</th>
//                     <th>HAWB / Tracking</th>
//                     <th>Total Weight</th>
//                     <th>Total CBM</th>
//                     <th>Nature of Goods</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {aggregatedArray?.map((item, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>
//                         {item.freight_number} / {item.order_number}
//                       </td>
//                       <td>{item.client_name}</td>
//                       <td>{item.hawb}</td>
//                       <td>{item.weight}</td>
//                       <td>{item.dimensions}</td>
//                       <td>{item.nature_of_goods}</td>
//                       <td>
//                         <DeleteIcon
//                           onClick={() => {
//                             handleClick(item);
//                           }}
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <button
//                 className="mt-4 btn btn-secondary w-50"
//                 onClick={addShipment}
//               >
//                 Save Shipment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";
// import { Autocomplete, TextField, Box } from "@mui/material";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { ToastContainer } from "react-bootstrap";
// import { useLocation, useNavigate } from "react-router-dom";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import DeleteIcon from "@mui/icons-material/Delete";
// export default function Addshipment() {
//   const [data, setData] = useState({});
//   const [freightOptions, setFreightOptions] = useState([]);
//   const [batchOptions, setBatchOptions] = useState([]);
//   const [resdata, setResdata] = useState([]);
//   const [countries, setCountries] = useState([]);
//   const [aggregatedArray, setAggregatedArray] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const navigate = useNavigate();
//   const getFreightOptions = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}AllFreightOrderNumbers`
//       );
//       setFreightOptions(response.data.data);
//     } catch (error) {
//       console.error("Error fetching freight options:", error.message);
//     }
//   };
//   const getBatchOptions = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}AllBatchNumbers`
//       );
//       setBatchOptions(response.data.data);
//     } catch (error) {
//       console.error("Error fetching batch options:", error.message);
//     }
//   };
//   useEffect(() => {
//     getFreightOptions();
//     getBatchOptions();
//     getcountry();
//   }, []);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const getcountry = () => {
//     axios
//       .get(`${process.env.REACT_APP_BASE_URL}GetCountries`)
//       .then((response) => {
//         setCountries(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error.response.data.data);
//       });
//   };
//   const handleOptionChange = (event, newValue) => {
//     setSelectedOption(newValue);
//   };
  
//   const addShipment = async () => {
//     const payload = {
//       waybill: data.shipment_waybill1,
//       freight: data ? data.freight : data.freight,
//       carrier: data123 ? data123.carrier : data.carrier,
//       vessel: data123 ? data123.vessel : data.vessel,
//       ETD: data123 ? data123.ETD : data.ETD,
//       ATD: data123 ? data123.ATD : data.ATD,
//       status: data123 ? data123.status : data.status,
//       origin_agent: data123 ? data123.origin_agent : data.origin_agent,
//       port_of_loading: data123 ? data123.port_of_loading : data.port_of_loading,
//       port_of_discharge: data123
//         ? data123.port_of_discharge
//         : data.port_of_discharge,
//       destination_agent: data123
//         ? data123.destination_agent
//         : data.destination_agent,
//       load: data123 ? data123.load : data.load,
//       release_type: data123 ? data123.release_type : data.release_type,
//       origin_country_id: data123
//         ? data123.origin_country_id
//         : data.origin_country_id,
//       des_country_id: data123 ? data123.des_country_id : data.des_country_id,
//       container: data.shipment_containerno,
//       seal: data.shipment_sealno,
//       details: aggregatedArray,
//     };
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}AddShipment`,
//         payload
//       );
//       toast.success(response.data.message);
//       if (response.data.success === true) {
//         setTimeout(() => {
//           navigate("/Admin/manage-shipment");
//         }, [1000]);
//       }
//     } catch (error) {
//       toast.error("Error adding shipment");
//       console.error(
//         "Error adding shipment:",
//         error.response?.data || error.message
//       );
//     }
//   };
//   const handleclickprintdate = async () => {
//     if (!selectedOption) {
//       toast.error("Please select an option before adding.");
//       return;
//     }
//     try {
//       const type = data.shipment_waybill === "freight" ? "1" : "2";
//       const origin_country_id = data.origin_country_id;
//       const des_country_id = data.des_country_id;
//       const id =
//         data.shipment_waybill === "freight"
//           ? selectedOption.order_id
//           : selectedOption.batch_id;
//       const payload = { type, id, origin_country_id, des_country_id };
//       console.log(payload);
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}getAssignShipmentList`,
//         payload
//       );
//       const newResponseData = response.data.data;
//       console.log(newResponseData);
//       setAggregatedArray((prevArray) => [...prevArray, ...newResponseData]);
//       toast.success("Data added successfully.");
//     } catch (error) {
//       console.error(
//         "Error fetching assigned shipment data:",
//         error.response?.data || error.message
//       );
//       toast.error(error.response.data.message);
//     }
//   };
//   const location = useLocation();
//   const data123 = location?.state?.id ||{};
//   console.log(data123);
//   const handleclickback = () => {
//     navigate("/Admin/manage-shipment");
//   };
//   const handleClick = (item) => {
//     setAggregatedArray(
//       aggregatedArray.filter((currentItem) => currentItem !== item)
//     );
//   };
//   return (
//     <div className="wpWrapper">
//       <div className="container-fluid">
//         <div className="card">
//           <div className="card-body">
//             <div className="row">
//               <p className="fw-500">
//                 <span>
//                   <ArrowBackIcon
//                     className="fs-1 me-2"
//                     style={{ cursor: "pointer" }}
//                     onClick={handleclickback}
//                   />
//                 </span>
//                 <span className="fs-5">Shipment Details / Form</span>
//               </p>
//               <div className="col-4">
//                 <label className="ware_label">Waybill</label>
//                 <input
//                   type="text"
//                   placeholder="Waybill"
//                   onChange={handleFileChange1}
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                   name="shipment_waybill1"
//                 />
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Freight</label>
//                 <select
//                   value={data123?.freight}
//                   name="freight"
//                   onChange={handleFileChange1}
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 >
//                   <option>Select...</option>
//                   <option>Sea</option>
//                   <option>Air</option>
//                   <option>Land</option>
//                 </select>
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Carrier</label>
//                 <input
//                   type="text"
//                   onChange={handleFileChange1}
//                   name="carrier"
//                   value={data123?.carrier}
//                   placeholder="Carrier"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-4">
//                 <label className="ware_label">Vessel</label>
//                 <input
//                   type="text"
//                   onChange={handleFileChange1}
//                   value={data123?.vessel}
//                   name="vessel"
//                   placeholder="Vessel"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">ATD</label>
//                 <input
//                   type="date"
//                   value={data123?.ATD}
//                   onChange={handleFileChange1}
//                   name="ATD"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">ETD</label>
//                 <input
//                   type="date"
//                   onChange={handleFileChange1}
//                   value={data123?.ETD}
//                   name="ETD"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-4">
//                 <label className="ware_label">Release Type</label>
//                 <input
//                   type="text"
//                   value={data123?.release_type}
//                   onChange={handleFileChange1}
//                   name="release_type"
//                   placeholder="Release Type"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Origin Agent</label>
//                 <select
//                   className="form-control mb-3 py-2"
//                   onChange={handleFileChange1}
//                   value={data123?.origin_agent}
//                   name="origin_agent"
//                 >
//                   <option>Select...</option>
//                   <option>Asia Direct</option>
//                   <option>OBD Logistics</option>
//                   <option>Shenzhen Nimbus Shipping</option>
//                   <option>Shenzhen Portline</option>
//                 </select>
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Place of Loading</label>
//                 <input
//                   type="text"
//                   onChange={handleFileChange1}
//                   value={data123?.port_of_loading}
//                   name="port_of_loading"
//                   placeholder="Place of Loading"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-4">
//                 <label className="ware_label">Place of Delivery</label>
//                 <input
//                   type="text"
//                   onChange={handleFileChange1}
//                   value={data123?.port_of_discharge}
//                   name="port_of_discharge"
//                   placeholder="Place of Delivery"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Destination Agent</label>
//                 <select
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                   name="destination_agent"
//                   value={data123?.destination_agent}
//                   onChange={handleFileChange1}
//                 >
//                   <option>Select...</option>
//                   <option>Afristar</option>
//                   <option>Asia Direct - Africa</option>
//                   <option>Contra Consolidations</option>
//                   <option>DHL</option>
//                   <option>Fedex</option>
//                   <option>SACO CFR</option>
//                 </select>
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Country of Origin</label>
//                 <select
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                   name="origin_country_id"
//                   value={data123?.origin_country_id}
//                   onChange={handleFileChange1}
//                 >
//                   <option>Select...</option>
//                   {countries.map((item, index) => {
//                     return (
//                       <>
//                         <option key={index} value={item.id}>
//                           {item.name}
//                         </option>
//                       </>
//                     );
//                   })}
//                 </select>
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Destination Country</label>
//                 <select
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                   name="des_country_id"
//                   value={data123?.des_country_id}
//                   onChange={handleFileChange1}
//                 >
//                   <option>Select...</option>
//                   {countries.map((item, index) => {
//                     return (
//                       <>
//                         <option key={index} value={item.id}>
//                           {item.name}
//                         </option>
//                       </>
//                     );
//                   })}
//                 </select>
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Load</label>
//                 <input
//                   type="text"
//                   onChange={handleFileChange1}
//                   name="load"
//                   value={data123?.load}
//                   placeholder="Load"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Status</label>
//                 <select
//                   onChange={handleFileChange1}
//                   name="status"
//                   value={data123?.status}
//                   placeholder="Email address"
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 >
//                   <option>Select</option>
//                   <option value="Goods at origin port">
//                     Goods at origin port
//                   </option>
//                   <option value="Goods are in transit">
//                     Goods are in transit
//                   </option>
//                   <option value="Arrived at destination port">
//                     Arrived at destination port
//                   </option>
//                   <option value="Customs clearing in progress">
//                     Customs clearing in progress
//                   </option>
//                   <option value="Customs released">Customs released</option>
//                 </select>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-4">
//                 <label className="ware_label">Container No.</label>
//                 <input
//                   type="text"
//                   onChange={handleFileChange1}
//                   name="shipment_containerno"
//                   placeholder="Container No."
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">Seal No.</label>
//                 <input
//                   type="text"
//                   onChange={handleFileChange1}
//                   name="shipment_sealno"
//                   placeholder="Seal No."
//                   className="mb-3 border ps-2 py-2 rounded w-100"
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <p className="fs-3 fw-500 ">Assign Shipments</p>
//               <div className="col-4">
//                 <label className="ware_label">Assign Shipment</label>
//                 <select
//                   onChange={handleFileChange1}
//                   className="mb-3 border ps-2 py-3 rounded w-100"
//                   name="shipment_waybill"
//                 >
//                   <option>Select...</option>
//                   <option value="freight">Freight / Order</option>
//                   <option value="batch">Groupage / Batch</option>
//                 </select>
//               </div>
//               <div className="col-4">
//                 <label className="ware_label">
//                   {data.shipment_waybill === "freight" ? "Freight" : "Batch"}
//                 </label>
//                 <Box sx={{ width: 300 }}>
//                   <Autocomplete
//                     options={
//                       data.shipment_waybill === "freight"
//                         ? freightOptions
//                         : batchOptions
//                     }
//                     getOptionLabel={(option) =>
//                       data.shipment_waybill === "freight"
//                         ? `${option.freight_number || "N/A"} / ${
//                             option.order_number || "N/A"
//                           }`
//                         : option.batch_number
//                     }
//                     value={selectedOption}
//                     onChange={handleOptionChange}
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="Search & Select"
//                         variant="outlined"
//                       />
//                     )}
//                   />
//                 </Box>
//               </div>
//               <div className="col-4 mt-4">
//                 <button
//                   className="w-25 btn btn-secondary rounded py-2 px-2"
//                   onClick={handleclickprintdate}
//                 >
//                   Add
//                 </button>
//               </div>
//             </div>
//             <div className="table-responsive mt-2">
//               <table className="table mt-4 table-striped tableICon">
//                 <thead>
//                   <tr>
//                     <th>Sr.No.</th>
//                     <th>Freight / Order No.</th>
//                     <th>Client Name</th>
//                     <th>HAWB / Tracking</th>
//                     <th>Total Weight</th>
//                     <th>Total CBM</th>
//                     <th>Nature of Goods</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {aggregatedArray?.map((item, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>
//                         {item.freight_number} / {item.order_number}
//                       </td>
//                       <td>{item.client_name}</td>
//                       <td>{item.hawb}</td>
//                       <td>{item.weight}</td>
//                       <td>{item.dimensions}</td>
//                       <td>{item.nature_of_goods}</td>
//                       <td>
//                         <DeleteIcon
//                           onClick={() => {
//                             handleClick(item);
//                           }}
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <button
//                 className="mt-4 btn btn-secondary w-50"
//                 onClick={addShipment}
//               >
//                 Save Shipment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Autocomplete, TextField, Box } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Addshipment() {
  const location = useLocation();
  const data123 = location?.state?.id || {};
  const [data, setData] = useState({
    freight: data123.freight || "",
    carrier: data123.carrier || "",
    vessel: data123.vessel || "",
    ETD: data123.ETD || "",
    ATD: data123.ATD || "",
    status: data123.status || "",
    origin_agent: data123.origin_agent || "",
    port_of_loading: data123.port_of_loading || "",
    port_of_discharge: data123.port_of_discharge || "",
    destination_agent: data123.destination_agent || "",
    origin_country_id: data123.origin_country_id || "",
    des_country_id: data123.des_country_id || "",
    load: data123.load || "",
    release_type: data123.release_type || "",
  });
const [data1,setData1]=useState("")
  const [freightOptions, setFreightOptions] = useState([]);
  const [batchOptions, setBatchOptions] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filedata,setFiledata]=useState(null)
  const [aggregatedArray, setAggregatedArray] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // getFreightOptions();
    // getBatchOptions();
    getCountries();
  }, []);


  useEffect(()=>{
    getFreightOptions(data)
    getBatchOptions(data)
  },[data?.des_country_id,data?.origin_country_id ])
  const getFreightOptions = async (data) => {
    try {
      const payload ={
        des_country_id:data.des_country_id, 
        origin_country_id:data.origin_country_id ,
        freight:data.freight
      }
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}AllFreightOrderNumbers`,payload);
      setFreightOptions(response.data.data);
    } catch (error) {
      console.error("Error fetching freight options:", error.message);
    }
  };
  
  const getBatchOptions = async (data) => {
    try {
      const payload={
        des_country_id:data.des_country_id, 
        origin_country_id : data.origin_country_id,
        freight:data.freight
      }
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}AllBatchNumbers`,payload
      );
      setBatchOptions(response.data.data);
    } catch (error) {
      console.error("Error fetching batch options:", error.message);
    }
  };
  const getCountries = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}GetCountries`
      );
      setCountries(response.data.data);
    } catch (error) {
      console.error("Error fetching countries:", error.message);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };        
  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setData1((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleOptionChange = (event, newValue) => {
    setSelectedOption(newValue);
  };
  const handleAddShipmentDetails = async () => {
  };
  const handleDeleteShipmentDetail = (item) => {
    setAggregatedArray(
      aggregatedArray.filter((currentItem) => currentItem !== item)
    );
  };
  const addShipment = async () => {
    const payload = { ...data, details: aggregatedArray,waybill:data.waybill};
console.log(payload)
    const formdata = new FormData()
    formdata.append('ATD',data.ATD)
    formdata.append('ETD',data.ETD)
    formdata.append('carrier',data.carrier)
    formdata.append('container',data.container)
    formdata.append('des_country_id',data.des_country_id)
    formdata.append('destination_agent',data.destination_agent)
    formdata.append('freight',data.freight)
    formdata.append('load',data.load)
    formdata.append('origin_agent',data.origin_agent)
    formdata.append('origin_country_id',data.origin_country_id)
    formdata.append('port_of_discharge',data.port_of_discharge)
    formdata.append('port_of_loading',data.port_of_loading)
    formdata.append('release_type',data.release_type)
    formdata.append('seal',data.seal)
    formdata.append('status',data.status)
    formdata.append('vessel',data.vessel)
    formdata.append('waybill',data.waybill)
    formdata.append('details',JSON.stringify(aggregatedArray))
    formdata.append('document',filedata)
    formdata.append('date_of_dispatch',data.date_of_dispatch)
console.log(formdata)
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}AddShipment`,
        formdata
      );
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/Admin/manage-shipment");
      }
    } catch (error) {
      toast.error("Error adding shipment");
    }
  };
   const handleclickprintdate = async () => {
     if (!selectedOption) {
       toast.error("Please select an option before adding.");
       return;
     }
     try {
       const type = data1.shipment_waybill === "freight" ? "1" : "2";
       const origin_country_id = data.origin_country_id;
       const des_country_id = data.des_country_id;
       const id =
       data1.shipment_waybill === "freight"
           ? selectedOption.order_id
           : selectedOption.batch_id;
       const payload = { type, id, origin_country_id, des_country_id };
       console.log(payload);
       const response = await axios.post(
         `${process.env.REACT_APP_BASE_URL}getAssignShipmentList`,
         payload
       );
       const newResponseData = response.data.data;
       console.log(newResponseData);
       setAggregatedArray((prevArray) => [...prevArray, ...newResponseData]);
       toast.success("Data added successfully.");
     } catch (error) {
       console.error(
         "Error fetching assigned shipment data:",
         error.response?.data || error.message
       );
       toast.error(error.response.data.message);
     }
   };
   const handleClick = (item) => {
         setAggregatedArray(
           aggregatedArray.filter((currentItem) => currentItem !== item)
         );
       };

       const handleInputChangewer =(e)=>{
        const file = e.target.files[0]
        if(file){
          setFiledata(file)
        }
       }
  return (
    <div className="wpWrapper">
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <p className="fw-500">
                <ArrowBackIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/Admin/manage-shipment")}
                  className="me-2 fw-bold"
                />
                Shipment Details / Form
              </p>
              <div className="row">
              <div className="col-4">
                <label className="ware_label">Waybill</label><br />
                <input
                  type="text"
                  name="waybill"
                  onChange={handleInputChange}
                  placeholder="Waybill"
                   className="mb-3 border ps-2 py-2 rounded w-100"
                />
              </div>
              <div className="col-4">
                 <label className="ware_label">Freight</label>
                 <select
                   value={data?.freight}
                   name="freight"
                   onChange={handleInputChange}
                   className="mb-3 border ps-2 py-2 rounded w-100"
                 >
                   <option>Select...</option>
                   <option>Sea</option>
                   <option>Air</option>
                   <option>Land</option>
                 </select>
               </div>
              <div className="col-4">
                 <label className="ware_label">Carrier</label>
                 <input
                   type="text"
                   onChange={handleInputChange}
                   name="carrier"
                   value={data?.carrier}
                   placeholder="Carrier"
                   className="mb-3 border ps-2 py-2 rounded w-100"
                 />
               </div>
            </div>
              </div>
             </div>
             <div className="row">
               <div className="col-3">
                 <label className="ware_label">Vessel</label>
                 <input
                   type="text"
                   onChange={handleInputChange}
                   value={data?.vessel}
                   name="vessel"
                   placeholder="Vessel"
                   className="mb-3 border ps-2 py-2 rounded w-100"
                 />
               </div>
               <div className="col-3">
                 <label className="ware_label">Date of Dispatch</label>
                 <input
                   type="date"
                   value={data?.date_of_dispatch}
                   onChange={handleInputChange}
                   name="date_of_dispatch"
                   className="mb-3 border ps-2 py-2 rounded w-100"/>
               </div>
               <div className="col-3">
                 <label className="ware_label">ETA</label>
                 <input
                   type="date"
                   value={data?.ATD}
                   onChange={handleInputChange}
                   name="ATD"
                   className="mb-3 border ps-2 py-2 rounded w-100"/>
               </div>
               <div className="col-3">
                 <label className="ware_label">ETD</label>
                 <input
                   type="date"
                   onChange={handleInputChange}
                   value={data?.ETD}
                   name="ETD"
                   className="mb-3 border ps-2 py-2 rounded w-100"/>
               </div>
             </div>
             <div className="row">
               <div className="col-4">
                 <label className="ware_label">Release Type</label>
                 <input
                   type="text"
                   value={data?.release_type}
                   onChange={handleInputChange}
                   name="release_type"
                   placeholder="Release Type"
                   className="mb-3 border ps-2 py-2 rounded w-100"/>
               </div>
               <div className="col-4">
                 <label className="ware_label">Origin Agent</label>
                 <select
                   className="form-control mb-3 py-2"
                   onChange={handleInputChange}
                   value={data?.origin_agent}
                   name="origin_agent">
                   <option>Select...</option>
                   <option>Asia Direct</option>
                   <option>OBD Logistics</option>
                   <option>Shenzhen Nimbus Shipping</option>
                   <option>Shenzhen Portline</option>
                 </select>
               </div>
               <div className="col-4">
                 <label className="ware_label">Place of Loading</label>
                 <input
                   type="text"
                   onChange={handleInputChange}
                   value={data?.port_of_loading}
                   name="port_of_loading"
                   placeholder="Place of Loading"
                   className="mb-3 border ps-2 py-2 rounded w-100"/>
               </div>
             </div>
             <div className="row">
               <div className="col-4">
                 <label className="ware_label">Place of Delivery</label>
                 <input
                   type="text"
                   onChange={handleInputChange}
                   value={data?.port_of_discharge}
                   name="port_of_discharge"
                   placeholder="Place of Delivery"
                   className="mb-3 border ps-2 py-2 rounded w-100"/>
               </div>
               <div className="col-4">
                 <label className="ware_label">Destination Agent</label>
                 <select
                   className="mb-3 border ps-2 py-2 rounded w-100"
                   name="destination_agent"
                   value={data?.destination_agent}
                   onChange={handleInputChange}>
                   <option>Select...</option>
                   <option>Afristar</option>
                   <option>Asia Direct - Africa</option>
                   <option>Contra Consolidations</option>
                   <option>DHL</option>
                   <option>Fedex</option>
                   <option>SACO CFR</option>
                 </select>
               </div>
               <div className="col-4">
                 <label className="ware_label">Country of Origin</label>
                 <select
                   className="mb-3 border ps-2 py-2 rounded w-100"
                   name="origin_country_id"
                   value={data?.origin_country_id}
                   onChange={handleInputChange}>
                   <option>Select...</option>
                   {countries.map((item, index) => {
                     return (
                       <>
                         <option key={index} value={item.id}>
                           {item.name}
                         </option>
                       </>
                     );
                   })}
                 </select>
               </div>
               <div className="col-4">
                 <label className="ware_label">Destination Country</label>
                 <select
                   className="mb-3 border ps-2 py-2 rounded w-100"
                   name="des_country_id"
                   value={data?.des_country_id}
                   onChange={handleInputChange}>
                   <option>Select...</option>
                   {countries.map((item, index) => {
                     return (
                       <>
                         <option key={index} value={item.id}>
                           {item.name}
                         </option>
                       </>
                     );
                   })}
                 </select>
               </div>
               <div className="col-4">
                 <label className="ware_label">Load</label>
                 <input
                   type="text"
                   onChange={handleInputChange}
                   name="load"
                   value={data?.load}
                   placeholder="Load"
                   className="mb-3 border ps-2 py-2 rounded w-100"/>
               </div>
               <div className="col-4">
                 <label className="ware_label">Status</label>
                 <select
                   onChange={handleInputChange}
                   name="status"
                   value={data?.status}
                   placeholder="Email address"
                   className="mb-3 border ps-2 py-2 rounded w-100">
                   <option>Select</option>
                   <option value="Goods at origin port">Goods at origin port</option>
                   <option value="Goods are in transit">Goods are in transit</option>
                   <option value="Arrived at destination port">Arrived at destination port</option>
                   <option value="Customs clearing in progress">Customs clearing in progress</option>
                   <option value="Customs released">Customs released</option>
                 </select>
               </div>
             </div>
             <div className="row">
               <div className="col-4">
                 <label className="ware_label">Container No.</label>
                 <input
                   type="text"
                   onChange={handleInputChange}
                   name="container"
                   placeholder="Container No."
                   className="mb-3 border ps-2 py-2 rounded w-100"/>
               </div>
               <div className="col-4">
                 <label className="ware_label">Seal No.</label>
                 <input
                   type="text"
                   onChange={handleInputChange}
                   name="seal"
                   placeholder="Seal No."
                   className="mb-3 border ps-2 py-2 rounded w-100"
                 />
               </div>
               <div className="col-4">
                 <label className="ware_label">Upload Waybill</label>
                 <input
                   type="file"
                   onChange={handleInputChangewer}
                   name="document"
                   className="mb-3 border ps-2 py-2 rounded w-100"
                 />
               </div>
             </div>
             <div className="row">
               <p className="fs-3 fw-500 ">Assign Shipments</p>
               <div className="col-4">
                 <label className="ware_label">Assign Shipment</label>
                 <select
                   onChange={handleInputChange1}
                   className="mb-3 border ps-2 py-3 rounded w-100"
                   name="shipment_waybill">
                   <option>Select...</option>
                   <option value="freight">Freight / Order</option>
                   <option value="batch">Groupage / Batch</option>
                 </select>
               </div>
               <div className="col-4">
                 <label className="ware_label">
                   {data1.shipment_waybill === "freight" ? "Freight" : "Batch"}
                 </label>
                 <Box sx={{ width: 300 }}>
                   <Autocomplete
                     options={
                       data1.shipment_waybill === "freight"
                         ? freightOptions
                         : batchOptions
                     }
                     getOptionLabel={(option) =>
                       data1.shipment_waybill === "freight"
                         ? `${option.freight_number || "N/A"} / ${
                             option.order_number || "N/A"
                           }`
                         : option.batch_number
                     }
                     value={selectedOption}
                     onChange={handleOptionChange}
                     renderInput={(params) => (
                       <TextField
                         {...params}
                         label="Search & Select"
                         variant="outlined"
                       />
                     )}
                   />
                 </Box>
               </div>
               <div className="col-4 mt-4">
                 <button
                   className="w-25 btn btn-secondary rounded py-2 px-2"
                   onClick={handleclickprintdate}>
                   Add
                 </button>
               </div>
             </div>
             <div className="table-responsive mt-2">
               <table className="table mt-4 table-striped tableICon">
                 <thead>
                   <tr>
                     <th>Sr.No.</th>
                     <th>Freight / Order No.</th>
                     <th>Client Name</th>
                     <th>HAWB / Tracking</th>
                     <th>Total Weight</th>
                     <th>Total CBM</th>
                     <th>Nature of Goods</th>
                     <th>Action</th>
                   </tr>
                 </thead>
                 <tbody>
                   {aggregatedArray?.map((item, index) => (
                     <tr key={index}>
                       <td>{index + 1}</td>
                       <td>{item.freight_number} / {item.order_number}</td>
                       <td>{item.client_name}</td>
                       <td>{item.hawb}</td>
                       <td>{item.weight}</td>
                       <td>{item.dimensions}</td>
                       <td>{item.nature_of_goods}</td>
                       <td>
                         <DeleteIcon style={{cursor:"pointer"}}
                           onClick={() => {
                             handleClick(item);
                           }}
                         />
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
               <button
                 className="mt-4 btn btn-secondary w-50"
                 onClick={addShipment}>
                 Save Shipment
               </button>
             </div>
           </div>
         </div>
       <ToastContainer />
     </div>
  );
}
