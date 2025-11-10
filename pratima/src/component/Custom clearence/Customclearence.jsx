import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Modal, Box, Typography, Button } from "@mui/material";
import SidebarWeb from "../homepage/SidebarwWeb";
import NavbarWeb from "../homepage/NavbarWeb";
import Arrow from "../../assestss/Group 2.png";
const pageSize = 5;
export default function Customclearence() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [files, setFiles] = useState(null);
  const [country, setCountry] = useState([]);
  const [id, setId] = useState("");
  const [images, setImages] = useState({
    Supplier_invoice: null,
    Packing_list: null,
    Proof_of_payment: null,
    Waybill: null,
    Bill_of_lading: null,
    Arrival_notification: null,
    Product_brochures: null,
    Product_literature: null,
    Letter_of_authority: null,
  });
  const filteredData = data.filter((item) => {
    return (
      item.client_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.clearance_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.goods_desc?.includes(searchQuery?.toLowerCase()) ||
      item.port_of_entry_name
        ?.toLowerCase()
        ?.includes(searchQuery?.toLowerCase()) ||
      item.port_of_exit_name
        ?.toLowerCase()
        ?.includes(searchQuery?.toLowerCase())
    );
  });
  const totalPage = Math.ceil(filteredData.length / pageSize);
  const startindex = (currentPage - 1) * pageSize;
  const endIndex = startindex + pageSize;
  const currentdata = filteredData.slice(startindex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };
  const getdata = JSON.parse(localStorage.getItem("data"));
  const getdatat = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}get-client-clearing`, {
        user_id: getdata.id,
      })
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getdatat();
  }, []);
  ////////////////////////////////////////////////////update clearence ///////////////////////
  const [predata, setPredata] = useState({});
  const handleidvali = (id) => {
    const useridche = data.filter((item) => {
      return item.id === id;
    });
    console.log(useridche[0]);
    const userdata = useridche[0];
    setPredata((prevData) => ({
      ...prevData,
      clearing_id: userdata.clearing_id,
      freight: userdata.freight,
      freight_option: userdata.freight_option,
      is_Import_Export: userdata.is_Import_Export,
      is_cong_shipp: userdata.is_cong_shipp,
      customer_ref: userdata.customer_ref,
      goods_desc: userdata.goods_desc,
      nature_of_goods: userdata.nature_of_goods,
      packing_type: userdata.packing_type,
      total_dimension: userdata.total_dimension,
      total_box: userdata.total_box,
      total_weight: userdata.total_weight,
      destination: userdata.destination,
      loading_country: userdata.loading_country,
      discharge_country: userdata.discharge_country,
      port_of_loading: userdata.port_of_loading,
      port_of_discharge: userdata.port_of_discharge,
      clearing_id: userdata.id,
      document_req: userdata.document_req,
      document: userdata.document,
      document_name: userdata.document_name,
      comment_on_docs: userdata.comment_on_docs,
    }));
  };
  const hanldechange = (e) => {
    const { name, value } = e.target;
    setPredata({ ...predata, [name]: value });
  };
  const updatedata = () => {
    const formdata = new FormData();
    formdata.append("clearing_id", predata.clearing_id);
    formdata.append("client", predata.client);
    formdata.append("comment_on_docs", predata.comment_on_docs);
    formdata.append("freight", predata.freight);
    formdata.append("Freight_option", predata.freight_option);
    formdata.append("is_Import_Export", predata.is_Import_Export);
    formdata.append("is_cong_shipp", predata.is_cong_shipp);
    formdata.append("customer_ref", predata.customer_ref);
    formdata.append("goods_desc", predata.goods_desc);
    formdata.append("nature_of_goods", predata.nature_of_goods);
    formdata.append("packing_type", predata.packing_type);
    formdata.append("total_dimesion", predata.total_dimension);
    formdata.append("total_box", predata.total_box);
    formdata.append("total_weight", predata.total_weight);
    formdata.append("destination", predata.destination);
    formdata.append("loading_country", predata.loading_country);
    formdata.append("discharge_country", predata.discharge_country);
    formdata.append("port_of_loading", predata.port_of_loading);
    formdata.append("port_of_discharge", predata.port_of_discharge);
    formdata.append("document_req", predata.document_req);
    formdata.append("document_name", predata.document_name);
    formdata.append("document", files);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}update-clearing`, formdata)
      .then((response) => {
        getdatat();
        toast.success("Update clearance successfully");
        console.log(response.data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  const handleclicknavi = (id) => {
    const userdata1 = data.filter((item) => {
      return item.id === id;
    });
    navigate("/clearence-details", { state: { data: userdata1[0] } });
  };
  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(`${process.env.REACT_APP_BASE_URL}delete-clearing`, {
            clearing_id: id,
          })
          .then((response) => {
            getdatat();
            toast.success(response.data.message);
          })
          .catch((error) => {
            toast.error(error.response.data.message);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const handleclickbnavigatethe = () => {
    navigate("/Add-Custom-clearence");
  };
  const handleclickuoploaddoc = (item) => {
    setOpenModal(true);
    setId(item.id);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleFileChangeimg = (e) => {
    const { name, files } = e.target;
    setImages((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };
  const handlepostimahe = () => {
    if (
      !images.Supplier_invoice &&
      !images.Packing_list &&
      !images.Proof_of_payment &&
      !images.Waybill &&
      !images.Bill_of_lading &&
      !images.Arrival_notification &&
      !images.Product_brochures &&
      !images.Product_literature &&
      !images.Letter_of_authority
    ) {
      toast.error("Please select at least one document to upload.");
      return;
    }
    const formData = new FormData();
    formData.append("supplier_invoice", images.Supplier_invoice);
    formData.append("packing_list", images.Packing_list);
    formData.append("proof_of_payment", images.Proof_of_payment);
    formData.append("waybill", images.Waybill);
    formData.append("bill_of_lading", images.Bill_of_lading);
    formData.append("arrival_notification", images.Arrival_notification);
    formData.append("product_brochures", images.Product_brochures);
    formData.append("product_literature", images.Product_literature);
    formData.append("letter_of_authority", images.Letter_of_authority);
    formData.append("clearance_id", id);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}upload-clrearance-doc`, formData)
      .then((response) => {
        toast.success(response.data.message);
        setOpenModal(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  useEffect(() => {
    getcountry();
  }, []);
  const getcountry = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}country-list`)
      .then((response) => {
        setCountry(response.data.data);
      })
      .catch((error) => {
        toast.errror(error.response.data.data);
      });
  };

  const handleInputChangefile = (e) => {
    const file = e.target.files[0];
    setFiles(file);
  };
  return (
    <div>
      <NavbarWeb />
      <SidebarWeb />
      <>
        <section className="manageFrightSec">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                {data.length == 0 ? (
                  <div></div>
                ) : (
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                      <h4 className="para_det">Clearance Details</h4>
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                      <div>
                        <input
                          className="my-3 py-1 px-2 mx-2 rounded customSearch"
                          value={searchQuery}
                          onChange={handleSearch}
                          placeholder="Search"
                        ></input>
                      </div>
                      <div>
                        <button
                          className=" add_button"
                          onClick={() => {
                            navigate("/Add-Custom-clearence");
                          }}
                        >
                          Add clearance
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {data.length == 0 ? (
                  <>
                    <p className="text-center fs-1 fw-bold  my-5">
                      Believe in Our service{" "}
                    </p>
                    <div className="text-center mb-5">
                      <button
                        className="btn btn-danger text-center"
                        onClick={handleclickbnavigatethe}
                      >
                        Add Clearance
                      </button>
                    </div>
                    <p className=" text-center">
                      You have not added any clearance Order before{" "}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="card border-0">
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-striped tableICon">
                            <tbody>
                              {currentdata &&
                                currentdata.length > 0 &&
                                currentdata.map((item, index) => {
                                  console.log(currentdata);
                                  return (
                                    <>
                                      <tr key={index}>
                                        <td className="list_bd">
                                          <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                              <p
                                                className="client_nm"
                                                onClick={() => {
                                                  handleclicknavi(item?.id);
                                                }}
                                              >
                                                {item.client_name}
                                              </p>
                                              <p
                                                className="fright_no mx-2 fs-6"
                                                onClick={() => {
                                                  handleclicknavi(item?.id);
                                                }}
                                              >
                                                {item.clearance_number}
                                              </p>
                                            </div>
                                            <div className="">
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
                                                  <p
                                                    className="origin"
                                                    onClick={() => {
                                                      handleclicknavi(item?.id);
                                                    }}
                                                  >
                                                    {item.goods_desc}
                                                  </p>
                                                </div>
                                              </div>
                                              <div className="col-md-5">
                                                <div
                                                  className="country_mnge"
                                                  onClick={() => {
                                                    handleclicknavi(item?.id);
                                                  }}
                                                >
                                                  {item.port_of_entry_name}
                                                  <img
                                                    src={Arrow}
                                                    className="flag_img1"
                                                  />
                                                  {item.port_of_exit_name}
                                                </div>
                                              </div>
                                              <div className="col-md-2">
                                                <td>
                                                  {item.quotation_status ===
                                                  "1" ? (
                                                    <button
                                                      onClick={() => {
                                                        handleclickuoploaddoc(
                                                          item
                                                        );
                                                      }}
                                                      className="btn upload_btn"
                                                    >
                                                      <CloudUploadIcon />
                                                      Upload Doc
                                                    </button>
                                                  ) : (
                                                    "----"
                                                  )}
                                                </td>
                                              </div>
                                              <div className="col-md-2 pe-0">
                                                <div className="text-end">
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
                                                          {item.status ===
                                                          "2" ? (
                                                            <p></p>
                                                          ) : (
                                                            // <i onClick={() => { handlenavi() }}><MessageIcon style={{ fontSize: "20px" }} /></i>
                                                            <a
                                                              className="link_bdy"
                                                              href="https://chat.whatsapp.com/C1SiwQek53B434FSz4BjQo"
                                                              target="_blank"
                                                            >
                                                              <WhatsAppIcon className="text-success" />
                                                              Whatsapp
                                                            </a>
                                                          )}
                                                        </div>
                                                        <div
                                                          className="drpIcons dropdown-item item_drop"
                                                          onClick={() => {
                                                            handledelete(
                                                              item.id
                                                            );
                                                          }}
                                                        >
                                                          <i className="fa fa-trash icon_align"></i>
                                                          Delete
                                                        </div>
                                                        <div className="">
                                                          {item.status ===
                                                          "2" ? (
                                                            <p></p>
                                                          ) : (
                                                            <div
                                                              className="drpIcons dropdown-item item_drop drop_item1"
                                                              data-bs-toggle="modal"
                                                              data-bs-target="#exampleModal"
                                                              onClick={() => {
                                                                handleidvali(
                                                                  item.id
                                                                );
                                                              }}
                                                            >
                                                              <i className="fa fa-edit icon_align"></i>
                                                              Edit
                                                            </div>
                                                          )}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="">
                                            {item.quotation_status == "0" ? (
                                              <button className="dec_btn dot_icon">
                                                <FiberManualRecordIcon />
                                                pending
                                              </button>
                                            ) : item.quotation_status == "1" ? (
                                              <button className="acc_btn dot_icon">
                                                <FiberManualRecordIcon />
                                                Accept
                                              </button>
                                            ) : item.quotation_status == "2" ? (
                                              <button className="dec_btn dot_icon">
                                                <FiberManualRecordIcon />
                                                Declined
                                              </button>
                                            ) : item.quotation_status == "3" ? (
                                              <button className="dec_btn dot_icon">
                                                <FiberManualRecordIcon />
                                                Move to Order
                                              </button>
                                            ) : item.quotation_status == "4" ? (
                                              <button className="dec_btn dot_icon">
                                                <FiberManualRecordIcon />
                                                Estimated
                                              </button>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                        </td>
                                      </tr>
                                    </>
                                  );
                                })}
                            </tbody>
                          </table>
                          <div className="text-center d-flex justify-content-center align-items-center">
                            <button
                              disabled={currentPage === 1}
                              className="bg_page"
                              onClick={() => handlePageChange(currentPage - 1)}
                            >
                              <i class="fi fi-rr-angle-small-left page_icon"></i>
                            </button>
                            <span className="mx-2">{` ${currentPage}`}</span>
                            <button
                              disabled={currentPage === totalPage}
                              className="bg_page"
                              onClick={() => handlePageChange(currentPage + 1)}
                            >
                              <i class="fi fi-rr-angle-small-right page_icon"></i>
                            </button>
                          </div>
                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Update Custom Clearance
                                  </h1>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  />
                                </div>
                                <div className="modal-body">
                                  <section className="frightFormSec my-0">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label htmlFor="" className="text-dark">
                                          Freight
                                        </label>
                                        <select
                                          className="form-control mb-3"
                                          onChange={hanldechange}
                                          value={predata.freight}
                                          name="freight"
                                        >
                                          <option>Select...</option>
                                          <option value="Sea">Sea</option>
                                          <option value="Air">Air</option>
                                          <option value="Road">Road</option>
                                          <option value="Rail">Rail</option>
                                        </select>
                                      </div>
                                      {predata.freight_option ? (
                                        <>
                                          <div className="col-md-6">
                                            <label
                                              htmlFor=""
                                              className="text-dark"
                                            >
                                              freight Option
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control mb-3"
                                              value={predata.freight_option}
                                              onChange={hanldechange}
                                              name="freight_option"
                                              placeholder="freight_option"
                                            />
                                          </div>
                                        </>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label htmlFor="" className="text-dark">
                                          Is This
                                        </label>
                                        <select
                                          className="form-control mb-3"
                                          value={predata.is_Import_Export}
                                          onChange={hanldechange}
                                          name="is_Import_Export"
                                        >
                                          <option>Select...</option>
                                          <option value="import">Import</option>
                                          <option value="export">Export</option>
                                        </select>
                                      </div>
                                      <div className="col-md-6">
                                        <label htmlFor="" className="text-dark">
                                          You are the
                                        </label>
                                        <select
                                          className="form-control mb-3"
                                          value={predata.is_cong_shipp}
                                          onChange={hanldechange}
                                          name="is_cong_shipp"
                                        >
                                          <option>Select...</option>
                                          <option value="Shipper">
                                            Shipper
                                          </option>
                                          <option value="Consignee">
                                            Consignee
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label htmlFor="" className="text-dark">
                                          Port of Entry Country
                                        </label>
                                        <select
                                          name="loading_country"
                                          value={predata.loading_country}
                                          onChange={hanldechange}
                                          className="form-control mb-3"
                                        >
                                          <option>Select...</option>
                                          {country.map((option, index) => {
                                            return (
                                              <>
                                                <option
                                                  key={index}
                                                  value={option.country_id}
                                                >
                                                  {option.country_name}
                                                </option>
                                              </>
                                            );
                                          })}
                                        </select>
                                        {/* <input type='text' className="form-control" value={predata.loading_country} onChange={hanldechange} name='loading_country' placeholder='client id' /> */}
                                      </div>
                                      <div className="col-md-6">
                                        <label htmlFor="" className="text-dark">
                                          Port of Exit Country
                                        </label>
                                        <select
                                          name="discharge_country"
                                          value={predata.discharge_country}
                                          onChange={hanldechange}
                                          className="form-control mb-3"
                                        >
                                          <option>Select...</option>
                                          {country.map((option, index) => {
                                            console.log(
                                              predata.discharge_country
                                            );
                                            return (
                                              <>
                                                <option
                                                  key={index}
                                                  value={option.country_id}
                                                >
                                                  {option.country_name}
                                                </option>
                                              </>
                                            );
                                          })}
                                        </select>
                                        {/* <input type='text' className="form-control" value={predata.port_of_exit} onChange={hanldechange} name='port_of_exit' /> */}
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label htmlFor="" className="text-dark">
                                          Port of Origin
                                        </label>
                                        <input
                                          name="port_of_loading"
                                          value={predata.port_of_loading}
                                          onChange={hanldechange}
                                          className="form-control mb-3"
                                        ></input>

                                        {/* <select
                                            name="discharge_country"
                                            value={predata.discharge_country}
                                            onChange={hanldechange}
                                          >
                                            <option>Select...</option>
                                            {country.map((option, index) => {
                                              console.log(predata.discharge_country);
                                              return (
                                                <>
                                                  <option
                                                    key={index}
                                                    value={option.country_id}
                                                  >
                                                    {option.country_name}
                                                  </option>
                                                </>
                                              );
                                            })}
                                          </select> */}
                                        {/* <input type='text' className="form-control" value={predata.port_of_exit} onChange={hanldechange} name='port_of_exit' /> */}
                                      </div>
                                      <div className="col-md-6">
                                        <label htmlFor="" className="text-dark">
                                          Port of Entry Country
                                        </label>
                                        <input
                                          name="port_of_discharge"
                                          value={predata.port_of_discharge}
                                          onChange={hanldechange}
                                          className="form-control mb-3"
                                        ></input>
                                        {/* <s elect
                                            name="port_of_discharge"
                                            value={predata.port_of_discharge}
                                            onChange={hanldechange}
                                          >
                                            <option>Select...</option>
                                            {country.map((option, index) => {
                                              return (
                                                <>
                                                  <option
                                                    key={index}
                                                    value={option.country_id}
                                                  >
                                                    {option.country_name}
                                                  </option>
                                                </>
                                              );
                                            })}
                                          </select> */}
                                        {/* <input type='text' className="form-control" value={predata.loading_country} onChange={hanldechange} name='loading_country' placeholder='client id' /> */}
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label htmlFor="" className="text-dark">
                                          Nature of Goods
                                        </label>
                                        <select
                                          className="form-select form-control mb-3"
                                          value={predata.nature_of_goods}
                                          onChange={hanldechange}
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
                                      <div className="col-md-6">
                                        <label htmlFor="" className="text-dark">
                                          Packing Type
                                        </label>
                                        <select
                                          className="form-control mb-0 form-select"
                                          value={predata.packing_type}
                                          onChange={hanldechange}
                                          name="packing_type"
                                        >
                                          <option>Select...</option>
                                          <option>Box</option>
                                          <option>Crate</option>
                                          <option>Pallet</option>
                                          <option>Bags</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label htmlFor="" className="text-dark">
                                          Add Attachement
                                        </label>
                                        <select
                                          value={predata.document_name}
                                          onChange={hanldechange}
                                          name="document_name"
                                          className="form-control mb-3"
                                        >
                                          <option>Select...</option>
                                          <option>Packing List</option>
                                          <option>Licenses/Permits</option>
                                          <option>Product Literature</option>
                                          <option>Other documents</option>
                                        </select>
                                      </div>
                                      <div className="col-md-6">
                                        <label htmlFor="" className="text-dark">
                                          Goods Description
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control mb-3"
                                          value={predata.goods_desc}
                                          onChange={hanldechange}
                                          name="goods_desc"
                                          placeholder="client id"
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label htmlFor="" className="text-dark">
                                          Total Weight
                                        </label>
                                        <input
                                          className="form-control mb-3"
                                          value={predata.total_weight}
                                          onChange={hanldechange}
                                          placeholder="0.00"
                                          name="total_weight"
                                        ></input>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="col-md-12 mb-3">
                                          <label>Add Attachment</label>
                                          <input
                                            type="file"
                                            onChange={handleInputChangefile}
                                            name="document"
                                          ></input>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label htmlFor="" className="text-dark">
                                          Total Dimension
                                        </label>
                                        <input
                                          className="form-control mb-3"
                                          onChange={hanldechange}
                                          value={predata.total_dimension}
                                          placeholder="0.00"
                                          name="total_dimension"
                                        ></input>
                                      </div>
                                      <div className="col-md-6">
                                        <label htmlFor="" className="text-dark">
                                          No of packages
                                        </label>
                                        <input
                                          className="form-control mb-3"
                                          value={predata.total_box}
                                          onChange={hanldechange}
                                          placeholder="0.00"
                                          name="total_box"
                                        ></input>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label htmlFor="" className="text-dark">
                                          Destination
                                        </label>

                                        {/* <input
                                            type="text"
                                            className="form-control"
                                            value={predata.destination}
                                            onChange={hanldechange}
                                            name="destination"
                                          /> */}
                                        <input
                                          type="text"
                                          className="form-control mb-0"
                                          value={predata.destination}
                                          onChange={hanldechange}
                                          name="destination"
                                        />
                                      </div>
                                      <div className="col-md-6">
                                        <label htmlFor="" className="text-dark">
                                          Comment On Docs
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control mb-0"
                                          value={predata.comment_on_docs}
                                          onChange={hanldechange}
                                          name="comment_on_docs"
                                        />
                                        {/* <label
                                            htmlFor=""
                                            className="text-dark"
                                          >
                                            Port of Entry Country
                                          </label>
                                          <select
                                            name="loading_country"
                                            value={predata.loading_country}
                                            onChange={hanldechange}
                                          >
                                            <option>Select...</option>
                                            {country.map((option, index) => {
                                              return (
                                                <>
                                                  <option
                                                    key={index}
                                                    value={option.country_id}
                                                  >
                                                    {option.country_name}
                                                  </option>
                                                </>
                                              );
                                            })}
                                          </select> */}
                                        {/* <input type='text' className="form-control" value={predata.loading_country} onChange={hanldechange} name='loading_country' placeholder='client id' /> */}
                                      </div>
                                    </div>

                                    {/* <label
                                            htmlFor=""
                                            className="text-dark"
                                          >
                                            Port of Exit
                                          </label>
                                          <select
                                            name="discharge_country"
                                            value={predata.discharge_country}
                                            onChange={hanldechange}
                                          >
                                            <option>Select...</option>
                                            {country.map((option, index) => {
                                              console.log(predata.discharge_country);
                                              return (
                                                <>
                                                  <option
                                                    key={index}
                                                    value={option.country_id}
                                                  >
                                                    {option.country_name}
                                                  </option>
                                                </>
                                              );
                                            })}
                                          </select> */}
                                    {/* <input type='text' className="form-control" value={predata.port_of_exit} onChange={hanldechange} name='port_of_exit' /> */}
                                  </section>
                                </div>
                                <div className="modal-footer modal_footer">
                                  <button
                                    type="button"
                                    data-bs-dismiss="modal"
                                    className="btn btn-primary"
                                    onClick={updatedata}
                                  >
                                    Submit
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Modal open={openModal} onClose={handleCloseModal}>
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: 400,
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          p: 4,
                          borderRadius: 2,
                          height: 500,
                          overflow: "scroll",
                        }}
                      >
                        <Typography
                          variant="h5"
                          component="h1"
                          className="col-12 mb-3"
                        >
                          Upload Clearance Document
                        </Typography>
                        <form>
                          <div className="form-group">
                            <label htmlFor="uploadDoc">Supplier Invoice</label>
                            <input
                              type="file"
                              className="form-control mb-3"
                              id="uploadDoc"
                              name="Supplier_invoice"
                              onChange={handleFileChangeimg}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="uploadDoc">Packing List</label>
                            <input
                              type="file"
                              className="form-control mb-3"
                              id="uploadDoc"
                              name="Packing_list"
                              onChange={handleFileChangeimg}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="uploadDoc">Proof of Payment</label>
                            <input
                              type="file"
                              className="form-control mb-3"
                              id="uploadDoc"
                              name="Proof_of_payment"
                              onChange={handleFileChangeimg}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="uploadDoc">Waybill</label>
                            <input
                              type="file"
                              className="form-control mb-3"
                              id="uploadDoc"
                              name="Waybill"
                              onChange={handleFileChangeimg}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="uploadDoc">Bill of Lading</label>
                            <input
                              type="file"
                              className="form-control mb-3"
                              id="uploadDoc"
                              name="Bill_of_lading"
                              onChange={handleFileChangeimg}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="uploadDoc">Product Brochures</label>
                            <input
                              type="file"
                              className="form-control mb-3"
                              id="uploadDoc"
                              name="Product_brochures"
                              onChange={handleFileChangeimg}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="uploadDoc">
                              Product Literature
                            </label>
                            <input
                              type="file"
                              className="form-control mb-3"
                              id="uploadDoc"
                              name="Product_literature"
                              onChange={handleFileChangeimg}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="uploadDoc">
                              Letter of Authority
                            </label>
                            <input
                              type="file"
                              className="form-control mb-3"
                              id="uploadDoc"
                              name="Letter_of_authority"
                              onChange={handleFileChangeimg}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="uploadDoc">
                              Arrival Notification
                            </label>
                            <input
                              type="file"
                              className="form-control mb-3"
                              id="uploadDoc"
                              name="Arrival_notification"
                              onChange={handleFileChangeimg}
                            />
                          </div>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handlepostimahe}
                          >
                            Upload
                          </Button>
                        </form>
                      </Box>
                    </Modal>
                    <ToastContainer />
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
