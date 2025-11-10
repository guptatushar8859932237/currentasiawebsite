import React, { useEffect, useState } from "react";
import axios from "axios";
import Topbar from "../Topbar";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Addclearing() {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [country, setCountry] = useState([]);
  const [freightMode, setFreightMode] = useState("");
  const [data, setData] = useState({
    user_id: "",
    freight: "",
    freight_option: "",
    is_Import_Export: "",
    is_cong_shipp: "",
    customer_ref: "",
    goods_desc: "",
    nature_of_goods: "",
    packing_type: "",
    total_dimension: "",
    total_box: "",
    total_weight: "",
    destination: "",
    loading_country: "",
    discharge_country: "",
    port_of_loading: "",
    port_of_discharge: "",
    comment_on_docs: "",
    added_by: "",
    document: "",
    document_name: ""
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const userid = JSON.parse(localStorage.getItem("data"));
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data.industry);

  };
  const handleInputChangefile = (e) => {
    const file = e.target.file
    setSelectedImage(file)
  }
  const handleFreightModeChange = (e) => {
    const { value } = e.target;
    setFreightMode(value);
    setData({ ...data, customer_ref: value });
  };
  const handleclick = () => {
    handleapi(data);
  };
  const handlevalidate = (value) => {
    let error = {};
    // if (!value.customer_ref) {
    //   error.customer_ref = "Customer reference is required";
    // }
    if (!value.trans_reference) {
      error.trans_reference = "Transaction reference is required";
    }
    // if (!value.goods_desc) {
    //   error.goods_desc = "Goods description is required";
    // }
    if (!value.port_of_entry) {
      error.port_of_entry = "Port of entry is required";
    }
    if (!value.is_cong_shipp) {
      error.is_cong_shipp = "shipper or consignee is required";
    }
    if (!value.destination) {
      error.destination = "Destination is required";
    } else {
      handleapi();
    }
    setError(error);
  };
  const handleapi = () => {
    console.log(data.industry);
    const formdata = new FormData();
    formdata.append("freight", data?.freight)
    formdata.append("freight_option", data.freight_option)
    formdata.append("is_Import_Export", data.is_Import_Export)
    formdata.append("is_cong_shipp", data.is_cong_shipp)
    formdata.append("goods_desc", data.goods_desc)
    formdata.append("nature_of_goods", data.nature_of_goods)
    formdata.append("packing_type", data.packing_type)
    formdata.append("total_dimension", data.total_dimension)
    formdata.append("total_box", data.total_box)
    formdata.append("total_weight", data.total_weight)
    formdata.append("loading_country", data.loading_country)
    formdata.append("discharge_country", data.discharge_country)
    formdata.append("port_of_discharge", data.port_of_discharge)
    formdata.append("port_of_loading", data.port_of_loading)
    formdata.append("added_by", "2")
    formdata.append("user_id", userid?.id);
    formdata.append("customer_ref", data?.customer_ref);
    formdata.append("destination", data?.destination);
    formdata.append("document", selectedImage);
    formdata.append("comment_on_docs", data?.comment_on_docs);
    formdata.append("document_name", data?.document_name);
    for (let [key, value] of formdata.entries()) {
      console.log(`${key} : ${value}`);
    }
    axios
      .post(`${process.env.REACT_APP_BASE_URL}add-clearing-customer`, formdata)
      .then((response) => {
        if (response.data.success === true) {
          console.log(response.data);
          toast.success(response.data.message);
          setTimeout(() => {
            navigate("/calculate-clearence", {
              state: { dataIID: response.data.data },
            });
          }, 500);
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  useEffect(() => {
    getcountry();
  }, []);
  const getcountry = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}country-list`)
      .then((response) => {
        console.log(response.data.data);
        setCountry(response.data.data);
      })
      .catch((error) => {
        toast.errror(error.response.data.data);
      });
  };

  return (
    <div>
      <Topbar />
      <Navbar />
      <>
        <section class="sec_freight">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="page-banner full-row">
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="col-md-6">
                        <h3 class="fre_det_hd">Custom Clearance</h3>
                      </div>
                      <div class="col-md-6">
                        <nav class="float-start float-md-end">
                          <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item">
                              <a href="">Home</a>
                            </li>
                            <li class="breadcrumb-item active">
                              <a href="#">Custom Clearance</a>
                            </li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="frightFormSec">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="borderShip mt-0">
                  <h3 className="mb-3">Custom Clearance Details</h3>
                  <div className="row">
                    <div className="col-md-6 mb-3">

                      <h5>Freight</h5>
                      <select
                        className="form-control"
                        onChange={handleFreightModeChange}
                        name="freight"
                      >
                        <option>Select...</option>
                        <option value="Sea">Sea</option>
                        <option value="Air">Air</option>
                        <option value="Road">Road</option>
                        <option value="Rail">Rail</option>
                      </select>

                    </div>
                    {freightMode === "Air" && (
                      <div className="col-md-6 mb-3">
                        <label htmlFor="">Air Freight Option </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={handleInputChange}
                          name="freight_option"
                          placeholder="Air Freight Option"
                        />
                      </div>
                    )}
                    {freightMode === "Sea" && (
                      <div className="col-md-6 mb-3">
                        <label htmlFor="">Sea Freight Option</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={handleInputChange}
                          name="freight_option"
                          placeholder="Enter sea Name"
                        />
                      </div>
                    )}
                    <div className="col-md-6 mb-3">
                      <h5>Destination</h5>
                      <input
                        type="text"
                        className="form-control"
                        onChange={handleInputChange}
                        name="destination"
                      />
                      <p className="text-danger mb-0"> {error.destination}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="col-12 ">
                        <div className="">
                          <h5>Is this</h5>
                          <div className="shipRefer d-flex align-items-center">

                            <input
                              type="radio"
                              id="stausone"
                              name="is_Import_Export"
                              defaultValue="import"
                              value="import"
                              onChange={handleInputChange}
                            />
                            <label htmlFor="stausone" className="mb-0">Import</label>

                            <input
                              type="radio"
                              id="stausone"
                              name="is_Import_Export"
                              defaultValue="export"
                              value="export"
                              onChange={handleInputChange}
                            />
                            <label htmlFor="staustwo" className="mb-0">Export</label>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <h5>Are You The</h5>
                        <div className="shipRefer d-flex align-items-center">

                          <input
                            type="radio"
                            id="stausonee"
                            name="is_cong_shipp"
                            defaultValue="Shipper"
                            value="Shipper"
                            onChange={handleInputChange}
                          />
                          <label htmlFor="stausone" className="mb-0">Shipper</label>

                          <input
                            type="radio"
                            id="stausonee"
                            name="is_cong_shipp"
                            defaultValue="Consignee"
                            value="Consignee"
                            onChange={handleInputChange}
                          />
                          <label htmlFor="staustwo" className="mb-0">Consignee</label>
                        </div>
                        <p className="text-danger mb-0">
                          {" "}
                          {error.is_cong_shipp}
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="borderShip">
                  <div className="row">
                    <div className="">
                      <h3 className="mb-3">Port Clearing Details</h3>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h5>Port of Loading Country</h5>
                      <select
                        className="form-select"
                        onChange={handleInputChange}
                        name="loading_country"
                      >
                        <option>Select...</option>
                        {country &&
                          country.length > 0 &&
                          country.map((item, index) => {
                            return (
                              <>
                                <option key={index} value={item.country_id}>
                                  {item.country_name}
                                </option>
                              </>
                            );
                          })}
                      </select>
                      <p className="text-danger mb-0">{error.port_of_exit}</p>
                      <p className="text-danger mb-0">{error.port_of_exit}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h5>Port of Discharge Country</h5>
                      <select
                        className="form-select"
                        onChange={handleInputChange}
                        name="discharge_country"
                      >
                        <option>Select...</option>
                        {country &&
                          country.length > 0 &&
                          country.map((item, index) => {
                            return (
                              <>
                                <option key={index} value={item.country_id}>
                                  {item.country_name}
                                </option>
                              </>
                            );
                          })}
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h5>Port of Loading</h5>
                      <input
                        type="text"
                        name="port_of_loading"
                        className="form-control"
                        onChange={handleInputChange}
                      ></input>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h5>Port of Discharge</h5>
                      <input
                        type="text"
                        name="port_of_discharge"
                        className="form-control"
                        onChange={handleInputChange}
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="borderShip">
                  <div className="row">
                <div className="">
                  <h3 className="mb-3">Cargo Details</h3>
                </div>
                <div className="col-md-6 mb-3">
                  <h5>Product Description</h5>
                  <input
                    className="form-control"
                    onChange={handleInputChange}
                    name="goods_desc"
                  ></input>
                </div>
                <div className="col-md-6 mb-3">
                  <h5>Nature of Goods</h5>
                  <select
                    className="form-select"
                    onChange={handleInputChange}
                    name="nature_of_goods"
                  >
                    <option> Select...</option>
                    <option> General Cargo</option>
                    <option> Battery</option>
                    <option> Liquid</option>
                    <option> Powder</option>
                    <option> Harzadous</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <h5>Packing Type</h5>
                  <select
                    className="form-select"
                    onChange={handleInputChange}
                    name="packing_type"
                  >
                    <option>Select...</option>
                    <option>Box</option>
                    <option>Crate</option>
                    <option>Pallet</option>
                    <option>Bags</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <h5>Total Dimension</h5>
                  <input
                    className="form-control"
                    onChange={handleInputChange}
                    placeholder="0.00"
                    name="total_dimension"
                  ></input>
                </div>
                <div className="col-md-6 mb-3">
                  <h5>num. of Boxes</h5>
                  <input
                    className="form-control"
                    onChange={handleInputChange}
                    placeholder="0.00"
                    name="total_box"
                  ></input>
                </div>
                <div className="col-md-6 mb-3">
                  <h5>Total weight</h5>
                  <input
                    className="form-control"
                    onChange={handleInputChange}
                    placeholder="0.00"
                    name="total_weight"
                  ></input>
                </div>
                <div className="col-md-6 mb-3">
                  <h5>Add Attachment</h5>
                  <select
                    onChange={handleInputChange}
                    name="document_name"
                  >
                    <option>Select...</option>
                    <option>Packing List</option>
                    <option>Licenses/Permits</option>
                    <option>Product Literature</option>
                    <option>Other documents</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <h5>Add Documents</h5>
                  <input
                    type="file"
                    onChange={handleInputChangefile}
                    name="document"
                  >
                  </input>
                </div>
                <div className="col-md-12 mb-3">
                  <h5>Comment on Docs</h5>
                  <textarea
                    type="textarea"
                    rows="4"
                    className="form-control"
                    onChange={handleInputChange}
                    name="comment_on_docs"
                  />
                </div>
               

                <div className="text-center">
                  <button className="btn btnFreight2" onClick={handleclick}>
                    Add Clearance
                  </button>
                </div>
                </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </>
      <Footer />
      <ToastContainer />
    </div>
  );
}
