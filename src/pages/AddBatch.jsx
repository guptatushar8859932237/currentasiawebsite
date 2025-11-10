import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddBatch = () => {
  const [lcientlist, setLcientlist] = useState([]);
  const [apidata, setApidata] = useState([]);
  const [loader, setLoader] = useState(false);
  const [showhazardous, setShowhazardous] = useState(false);
  const [data1, setData1] = useState("");
  const [data, setData] = useState({
    date_created: "",
    date_of_first_received: "",
    ETD: "",
    total_days_in_storage: "",
    Are_you: "",
    freight: "",
    Batch_Reference: "",
    Batch_Name: "",
    freight_speed: "",
    freight_option: "",
    Collection_from_Warehouse: "",
    Destination_from_Warehouse: "",
    country_of_origin: "",
    destination_country: "",
    port_of_loading: "",
    post_of_discharge: "",
    Collection_Address: "",
    Delivery_Address: "",
    Origin_Handler: "",
    Destination_Handler: "",
    cost_to_collect: "",
    destination_cost_to_collect: "",
    warehouse_cost: "",
    destination_Warehouse_cost: "",
    Documentation_Costs: "",
    destination_Documentation_Costs: "",
    Oncarriage_Costs: "",
    destination_On_carriage_Costs: "",
    incidental_Cost: "",
    destination_incidental_cost: "",
    freight_cost: "",
    num_of_shipment: "",
    nature_of_goods: "",
    type_of_packing: "",
    no_of_packages: "",
    dimension: "",
    weight: "",
    volumetric_weight: "",
    master_waybill: "",
    house_waybill: "",
    carrier: "",
    vessel: "",
    Container_no: "",
    Delivery_Port_of_loading: "",
    Delivery_Port_of_Discharge: "",
    final_destination: "",
    Origin_Carrier: "",
    Destination_carrier: "",
    Registration_number: "",
    Destination_registration_number: "",
    comment: "",
  });
  const [error, setError] = useState({});
  const [countries, setCountruies] = useState([]);
  const navigate = useNavigate();
  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setShowhazardous(data.hazardous);
  };
  const handlehange1 = (e) => {
    setData1(e.target.value);
    console.log(data1);
  };
  ////////////////////////////////////////////////////////////////getdate///////////////////////////////////////////////////////////////////////////
  let today = new Date();
  let year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let day = String(today.getDate()).padStart(2, "0");
  let formattedDate = `${year}-${month}-${day}`;
  useEffect(() => {
    getcountry();
  }, []);
  const getcountry = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}GetCountries`)
      .then((response) => {
        setCountruies(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.data);
      });
  };
 
  const handleclick = () => {
    apihit()
  };
  const apihit = () => {
    const data123 = {
            // warehouse_id,           
      date_created:formattedDate,
      date_first_received:data.date_of_first_received,
      ETD:data.ETD,
      total_days_storage:data.total_days_in_storage,
      is_exporImport:data.Are_you,
      freight:data1,
      batch_number:data.Batch_Reference,
      batch_name:data.Batch_Name,
      freight_speed:data.freight_speed,
      freight_option:data.freight_option,
      collection_warehouse:data.Collection_from_Warehouse,
      delivery_warehouse:data.Destination_from_Warehouse,
      origin_country_id:data.country_of_origin,
      detination_country_id:data.destination_country,
      port_loading:data.port_of_loading,
      port_discharge:data.post_of_discharge,
      collection_address:data.Collection_Address,
      delivery_address:data.Delivery_Address,
      origin_handler:data.Origin_Handler,
      des_handler:data.Destination_Handler,
      costs_to_collect:data.cost_to_collect,
      costs_to_collect_des:data.destination_cost_to_collect,
      warehouse_cost:data.warehouse_cost,
      warehouse_cost_des:data.destination_Warehouse_cost,
      origin_doc_costs:data.Documentation_Costs,
      des_doc_costs:data.destination_Documentation_Costs,
      origin_oncarriage_costs:data.Oncarriage_Costs,
      des_oncarriage_costs:data.destination_On_carriage_Costs,
      origin_Incidental_costs:data.incidental_Cost,
      des_Incidental_costs:data.destination_incidental_cost,
      freight_cost:data.freight_cost,
      no_of_shipments:data.num_of_shipment,
      nature_of_good:data.nature_of_goods,
      type_of_packaging:data.type_of_packing,
      total_boxes:data.no_of_packages,
      total_dimensions:data.dimension,
      total_weight:data.weight,
      volumentric_weight:data.volumetric_weight,
      master_waybill:data.master_waybill,
      house_waybill:data.house_waybill,
      carrier:data.carrier,
      vessel:data.vessel,
      container_no:data.Container_no,
      devy_port_of_loading:data.Delivery_Port_of_loading,
      devy_port_of_discharge:data.Delivery_Port_of_Discharge,
      devy_final_des:data.final_destination,
      origin_carrier:data.Origin_Carrier,
      des_carrier:data.Destination_carrier,
      registration_number:data.Registration_number,
      comment:data.comment,
    }
    console.log(data123)
    setLoader(true);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}createBatch`, data123)
      .then((response) => {
        toast.success(response.data.message);
        if (response.data.success === true) {
          setLoader(false);
          setTimeout(() => {
            navigate("/Admin/Batches");
          }, [1500]);
        }
      })
      .catch((error) => {
        setLoader(false);
        toast.error(error.response.data.message);
      });
  };
  const handlekey123 = (e) => {
    if ((e.charCode < 44 || e.charCode > 57) && e.charCode !== 46) {
      e.preventDefault();
    }
  };
  const handlekey = (e) => {
    if (e.charCode < 44 || e.charCode > 57) {
      e.preventDefault();
    }
  };
 
  useEffect(() => {
    getClient();
  }, []);
  const getClient = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}client-list`)
      .then((response) => {
        console.log(response.data.data);
        setLcientlist(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
 
  useEffect(() =>{
    getwarehouse()      
  },[]) 
  const getwarehouse = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}getWarehouse`)
      .then((response) => {
        console.log(response.data);
        setApidata(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  return (
    <>
      <div className="wpWrapper ">
        <div className="container-fluid">
          <div className="row manageFreight">
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div>
                  <h4 className="freight_hd">Add Batch</h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" add_fre_cd">
              <div className="row">
                <div className="col-12">
                  <h4 className="freight_hd mt-0">Shipment details</h4>
                  <span class="line"></span>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="borderShip updateLoading">
                    <div className="row">
                      <div className="col-6">
                        <label>Date Created</label>
                        <input
                          type="date"
                          className="form-control"
                          value={formattedDate}
                          onChange={handlechange}
                          name="date_created"
                        />
                      </div>
                      <div className="col-6">
                        <label>Date of First Received</label>

                        <input
                          type="date"
                          name="date_of_first_received"
                          onChange={handlechange}
                          className="form-control"            
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                                  
                      </div>
                      <div className="col-6">
                        <label>Total Days in Storage</label>
                        <input
                          type="text"
                          name="total_days_in_storage"
                          onChange={handlechange}
                          placeholder="Num of Days"
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>You are</label>
                        <div className="shipRefer1">
                          <input
                            type="radio"
                            style={{ cursor: "pointer" }}
                            id="collectOne1"
                            name="Are_you"
                            defaultValue="Exporting"
                            onChange={handlechange} />
                          <label htmlFor="collectOne">Exporting</label>
                          <input
                            type="radio"
                            style={{ cursor: "pointer" }}
                            id="collectOne1"
                            name="Are_you"
                            defaultValue="Importing"
                            onChange={handlechange}
                          />
                          <label htmlFor="collectTwo">Importing</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <label>Freight Type</label>
                        <select name="freight" onChange={handlehange1}>
                          <option value="">Select</option>
                          <option value="Sea">Sea</option>
                          <option value="Air">Air</option>
                          <option value="Road">Road</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>Batch Reference</label>
                        <input
                          type="text"
                          // onKeyPress={handlekey}
                          placeholder="Batch Reference"
                          onChange={handlechange}
                          name="Batch_Reference"
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label>Batch Name</label>
                        <input
                          type="text"
                          className="w-100 rounded"
                          name="Batch_Name"
                          placeholder="Batch Name"
                          onChange={handlechange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>Freight Speed</label>
                        <select name="freight_speed" onChange={handlechange}>
                          <option value="">Select</option>
                          <option value="Express">Express</option>
                          <option value="Normal">Normal</option>
                        </select>
                      </div>
                      {data1 === "Sea" ? (
                        <div className="col-6">
                          <label>Freight Option</label>
                          <select name="freight_option" onChange={handlechange}>
                            <option value="">Select</option>
                            <option value="Full_container">
                              Full Container
                            </option>
                            <option value="Less_then_container_size">
                              Less then Container size
                            </option>
                          </select>
                        </div>
                      ) : data1 === "Air" ? (
                        ""
                      ) : data1 === "Road" ? (
                        <div className="col-6">
                          <label>Freight Option</label>
                          <select name="freight_option" onChange={handlechange}>
                            <option value="">Select</option>
                            <option value="Full_Load">Full Load</option>
                            <option value="Small_cargo_for_console">
                              Small Cargo for Console
                            </option>
                          </select>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <h4 className="freight_hd">Location Details</h4>
                  <span class="line"></span>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="borderShip updateLoading">
                    <div className="row">
                      <div className="col-6">
                        <label>Collection from (Warehouse Name)</label>
                          <select  name="Collection_from_Warehouse" onChange={handlechange} className="form-control" placeholder="Collection From Warehouse">
                            <option>Select...</option>
                            {
                              apidata && apidata.length > 0 && apidata.map((item, index) => {
                                console.log(item)
                                return (
                                  <>
                                    <option key={index} value={item.id}>{item.warehouse_name}</option>
                                  </>
                                )
                              })
                            }
                          </select>
                      </div>
                      <div className="col-6">
                        <label> Delivery to (Warehouse Name)</label>
                          <select name="Destination_from_Warehouse"
                          onChange={handlechange} className="form-control" placeholder="Collection From Warehouse">
                    
                     <option>Select...</option>
                            {
                              apidata && apidata.length > 0 && apidata.map((item, index) => {
                                console.log(item)
                                return (
                                  <>
                                    <option key={index} value={item.id}>{item.warehouse_name}</option>
                                  </>
                                )
                              })
                            }
                    </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>Country of Origin</label>
                        <select
                          name="country_of_origin"
                          onChange={handlechange}
                        >
                          <option>Select</option>
                          {countries &&
                            countries.length > 0 &&
                            countries.map((item, index) => {
                              // console.log(item);
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
                      <div className="col-6">
                        <label> Destination Country</label>
                        <select
                          name="destination_country"
                          onChange={handlechange}
                        >
                          <option>Select</option>
                          {countries &&
                            countries.length > 0 &&
                            countries.map((item, index) => {
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
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>Port of Loading</label>
                        <input
                          type="text"
                          onChange={handlechange}
                          name="port_of_loading"
                          placeholder="Port of Loading"
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label>Port of Discharge</label>
                        <input
                          type="text"
                          onChange={handlechange}
                          name="post_of_discharge"
                          placeholder="Port of Discharge"
                          className="form-control"
                        />
                        <p className="text-danger mb-0">
                          {error.post_of_discharge}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>Collection Address</label>
                        <input
                          type="text"
                          onChange={handlechange}
                          name="Collection_Address"
                          placeholder="Place of Delivery"
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label>Delivery Address</label>
                        <input
                          name="Delivery_Address"
                          placeholder="Delivery Address"
                          className="form-control"
                          onChange={handlechange}
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label className="ware_label">Origin Handler</label>
                        <select
                          className="form-control mb-3 py-2"
                          name="Origin_Handler"
                          onChange={handlechange}
                        >
                          <option>Select...</option>
                          <option>DHL</option>
                          <option>Fedex</option>
                          <option>SACO CFR</option>
                          <option>Contra Consolidations</option>
                          <option>Afristar</option>
                          <option>Asia Direct - Africa</option>
                        </select>
                      </div>
                      <div className="col-6">
                        <label className="ware_label">
                          Destination Handler
                        </label>
                        <select
                          className="form-control mb-3 py-2"
                          name="Destination_Handler"
                          onChange={handlechange}
                        >
                          <option>Select...</option>
                          <option>Shenzhen Nimbus Shipping</option>
                          <option>Shenzhen Portline</option>
                          <option>OBD Logistics</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <h4 className="freight_hd">Cost details</h4>
                  <span class="line"></span>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="borderShip ">
                    <div className="row mb-3">
                      <div className="col-6">
                        <label className="mb-3 fs-bold fw-bold">Origin</label>
                        <br />
                        <label>Cost to Collect</label>
                        <input
                          type="text"
                          onChange={handlechange}
                          name="cost_to_collect"
                          placeholder="Cost to Collect"
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label className="mb-3 fs-bold fw-bold">
                          Destination
                        </label>
                        <br />
                        <label>Cost to Collect</label>
                        <input
                          type="text"
                          onChange={handlechange}
                          name="destination_cost_to_collect"
                          placeholder="Cost to Collect"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-6">
                        <label>Warehouse Cost</label>
                        <input
                          type="text"
                          onChange={handlechange}
                          name="warehouse_cost"
                          placeholder="Warehouse Cost"
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label>Warehouse Cost</label>
                        <input
                          type="text"
                          onChange={handlechange}
                          name="destination_Warehouse _cost"
                          placeholder="Warehouse Cost"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-6">
                        <label>Documentation Costs</label>
                        <input
                          type="text"
                          onChange={handlechange}
                          name="Documentation_Costs"
                          placeholder="Documentation Costs"
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label>Documentation Costs </label>
                        <input
                          type="text"
                          onChange={handlechange}
                          name="destination_Warehouse_cost"
                          placeholder="Documentation Costs"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-6">
                        <label>On carriage Costs</label>
                        <input
                          type="text"
                          onChange={handlechange}
                          name="Oncarriage_Costs"
                          placeholder="On carriage Costs"
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label>On carriage Costs</label>
                        <input
                          type="text"
                          onChange={handlechange}
                          name="destination_On_carriage_Costs"
                          placeholder="On carriage Costs"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-6">
                        <label>Incidental Cost</label>
                        <input
                          type="text"
                          onChange={handlechange}
                          name="incidental_Cost"
                          placeholder="Incidental Cost"
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label>Incidental Cost</label>
                        <input
                          type="text"
                          onChange={handlechange}
                          name="destination_incidental_cost"
                          placeholder="Incidental Cost"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-6">
                        <label>Freight Cost</label>
                        <input
                          type="text"
                          onChange={handlechange}
                          name="freight_cost"
                          placeholder="Freight Cost"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <h4 className="freight_hd">Cargo Details</h4>
                  <span class="line"></span>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="borderShip updateLoading">
                    <div className="row">
                      <div className="col-6">
                        <label>Num. of Shipment</label>
                              <input  name="num_of_shipment"
                          onChange={handlechange}
                          placeholder="Number of Shipment"
                          className="form-control"></input>
                      </div>
                      <div className="col-6 ">
                        <label>Nature of Goods</label>
                        <select name="nature_of_goods" onChange={handlechange}>
                          <option value="">Select...</option>
                          <option value="General_Cargo">General Cargo</option>
                          <option value="Battery">Battery</option>
                          <option value="Liquids">Liquids</option>
                          <option value="Powders">Powders</option>
                          <option value="Harzadous">Harzadous</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <label>Type of Packing</label>
                        <select
                          name="type_of_packing"
                          onChange={handlechange}
                          className="form-control"
                        >
                          <option>select...</option>
                          <option>Box</option>
                          <option>Crate</option>
                          <option>Pallet</option>
                          <option>Bags</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>Total Box</label>
                        <input
                          type="text"
                          onKeyPress={handlekey}
                          name="no_of_packages"
                          placeholder="Num.. of Package"
                          onChange={handlechange}
                          className="form-control"
                        />
                        <p className="text-danger mb-0">
                          {error.no_of_packages}
                        </p>
                      </div>
                      <div className="col-6">
                        <label>Total Dimension</label>
                        <input
                          type="text"
                          onKeyPress={handlekey123}
                          name="dimension"
                          onChange={handlechange}
                          placeholder="Dimension"
                          className="form-control"
                        />
                        <p className="text-danger mb-0">{error.dimension}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>Total Weight</label>
                        <input
                          type="text"
                          onKeyPress={handlekey123}
                          name="weight"
                          onChange={handlechange}
                          placeholder="Weight"
                          className="form-control"
                        />
                        <p className="text-danger mb-0">{error.weight}</p>
                      </div>
                      <div className="col-6">
                        <label>Volumetric Weight</label>
                        <input
                          type="text"
                          onKeyPress={handlekey}
                          onChange={handlechange}
                          //   value={isNaN(volumetricweight.toLocaleString())}
                          name="volumetric_weight"
                          placeholder="Volumetric Weight"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <h4 className="freight_hd">Delivery details</h4>
                  <span class="line"></span>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="borderShip updateLoading">
                    <div className="row">
                      <div className="col-6">
                        <label>Master Waybill</label>

                        <input
                            onChange={handlechange}
                          name="master_waybill"
                          className="form-control"
                          placeholder="master_waybill"
                        ></input>
                      </div>

                      <div className="col-6 ">
                        <label>House Waybill</label>
                        <input
                            onChange={handlechange}
                          name="house_waybill"
                          className="form-control"
                          placeholder="house_waybill"
                        ></input>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <label>Carrier</label>
                        <input
                          type="text"
                          //   onKeyPress={handlekey}
                          name="carrier"
                          placeholder="carrier"
                          onChange={handlechange}
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label>Vessel</label>
                        <input
                          type="text"
                          name="vessel"
                          onChange={handlechange}
                          placeholder="vessel"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>Container Number / Flight Number</label>
                        <input
                          type="text"
                          onKeyPress={handlekey123}
                          name="Container_no"
                          onChange={handlechange}
                          placeholder="Container_no"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>Port of Loading</label>
                        <input
                          type="text"
                          //   onKeyPress={handlekey}
                          name="Delivery_Port_of_loading"
                          placeholder="Port of Loading"
                          onChange={handlechange}
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label>Port of Discharge</label>
                        <input
                          type="text"
                          name="Delivery_Port_of_Discharge"
                          onChange={handlechange}
                          placeholder="Port_of_Discharge"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>Final Destination</label>
                        <input
                          type="text"
                          name="final_destination"
                          onChange={handlechange}
                          placeholder="Final Destination"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>Origin Carrier</label>
                        <input
                          type="text"
                          name="Origin_Carrier"
                          onChange={handlechange}
                          placeholder="Origin Carrier"
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label>Destination Carrier</label>
                        <input
                          type="text"
                          name="Destination_carrier"
                          onChange={handlechange}
                          placeholder="Destination carrier"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>Registration Number</label>
                        <input
                          type="text"
                          name="Registration_number"
                          onChange={handlechange}
                          placeholder="Registration Number"
                          className="form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label>comment </label>
                        <input
                          type="text"
                          name="comment"
                          onChange={handlechange}
                          placeholder="Comment"
                          className="form-control"
                        />
                      </div>
                      {/* <div className="col-6">
                        <label>Registration Number</label>
                        <input
                          type="text"
                          name="Destination_registration_number"
                          onChange={handlechange}
                          placeholder="Registration Number"
                          className="form-control"
                        />
                      </div> */}
                    </div>
                    {/* <div className="row">
                      <div className="col-6">
                        <label>comment </label>
                        <input
                          type="text"
                          name="comment"
                          onChange={handlechange}
                          placeholder="Comment"
                          className="form-control"
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="btnAddFre">
                <button onClick={handleclick} className="px-4 py-1 rounded text-white" style={{backgroundColor:"#1b2245"}}>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
export default AddBatch;
