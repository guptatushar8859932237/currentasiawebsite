import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import {
  Modal,
  Box,
  Button,
} from "@mui/material";
const pageSize = 10;
export default function ClearanceOrder() {
  const [age, setAge] = React.useState("");
  const [data1, setData1] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [country, setCountry] = useState([]);
  const [data, setData] = useState()
   const [loader, setLoader]=useState(true)
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    setLoader(true)
    axios
      .post(`${process.env.REACT_APP_BASE_URL}getCleranceOrder`)
      .then((response) => {
        console.log(response.data.data);
        setLoader(false)
        setData1(response.data.data);
      })
      .catch((error) => {
        setLoader(false)
        console.log(error.response.data);
      });
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleclick = (item) => {
    const data11 = {
      clerance_id: item.id,
    };
    axios
      .post(`${process.env.REACT_APP_BASE_URL}CompleteCleranceOrder`,data11)
      .then((response) => {
        getdata();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const handleclick1212 = (item) => {
    const data11 = {
      clerance_id: item.id,
    };
    axios
      .post(`${process.env.REACT_APP_BASE_URL}InprocessCleranceOrder`,data11)
      .then((response) => {
        getdata();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const handleclick121212 = (item) => {
    const data11 = {
      clerance_id: item.id,
    };
    axios
      .post(`${process.env.REACT_APP_BASE_URL}StillToCleranceOrder`,data11)
      .then((response) => {
        getdata();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };
  const filteredData = data1.filter((item) => {
    console.log(item);
    return (
      item?.clearance_number?.toLowerCase()?.includes(searchQuery?.toLowerCase()) || item?.client_name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      item?.goods_desc?.toLowerCase()?.includes(searchQuery?.toLowerCase()) || item?.port_of_entry_name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
       item?.port_of_exit_name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
    );
  });
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = filteredData.slice(startIndex, endIndex);
  const handlePageChange = (currentData) => {
    setCurrentPage(currentData);
  };
  useEffect(() => {
    getcountry();
  }, []);
  const getcountry = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}GetCountries`)
      .then((response) => {
        console.log(response.data);
        setCountry(response.data.data);
      })
      .catch((error) => {
        toast.errror(error.response.data.data);
      });
  };
  const handlechange = (e) => {
    const {name,value }=e.target
    setData({...data,[name]:value})
   }
   const postData = () => { 
    const datapost={
      status:data.status,
       origin:data.origin, 
       destination:data.destination,
        startDate:data.startDate,
         endDate:data.endDate,
          clearingType:data.clearingType,
    }
    axios.post(`${process.env.REACT_APP_BASE_URL}getCleranceOrder`,datapost).then((response) => {
      if(response.data.success===true){
        handleCloseModal()
        setData1(response.data.data)
      }
    }).catch((error) => {toast.error(error.response.data.message);} 
    )}
   const handleOpenModal = () => setIsModalOpen(true);
   const handleCloseModal = () => setIsModalOpen(false);

   const handleclickdelete = async (item) => {
    console.log(item);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}DeleteClearanceOrder`, {
        clearance_order_id: item.clearance_id
      });
      console.log(response);
      getdata();
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error); 
    }
  }
  
  return (
    <>
   {loader ? (
      <div class="loader-container">
        <div class="loader"></div>
        <p class="loader-text">Updating... This may take some time</p>
      </div>
    ) : (
      <>
      <div className="wpWrapper">
        <div className="container-fluid">
          <div className="row manageFreight">
            <div className="d-flex justify-content-between">
              <h4 className="freight_hd">Order clearance</h4>
              <div className="d-flex align-items-center">
              <button className="me-2" onClick={handleOpenModal}>Filter</button>
                <div className="">
                  <input
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search..."
                    className="px-2 py-1 rounded"/>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className=" ">
              <div className="table-responsive">
                <table className="table table-striped tableICon">
                  <tbody style={{ border: "none" }}>
                    {currentData &&
                      currentData.length > 0 &&
                      currentData.map((item, index) => {
                        console.log(item);
                        return (
                          <>
                            <tr className="border-bottom">
                              <td className="list_bd">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-flex align-items-center">
                                    <p className="client_nm">
                                      {item.client_name}
                                    </p>
                                    <p className="fright_no mx-2 fs-6">
                                      {item?.clearance_number}
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
                                <div className="container-fluid">
                                  <div className="row">
                                    <div className="col-md-3 ps-0">
                                      <div className="">
                                        <p className="origin">
                                          {item?.goods_desc}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-5">
                                      <div className="d-flex align-items-center justify-content-center">
                                        <p className="origin">
                                          {item?.port_of_entry_name}
                                        </p>
                                        <div className="arrow">
                                          <i className="fi fi-rr-arrow-right mx-2 arr_icon"></i>
                                        </div>
                                        <p className="origin">
                                          {item?.port_of_exit_name}
                                        </p>
                                        <p className="origin">
                                          {item?.freight}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-2">
                                      <div className="text-center"></div>
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
                                          <div className="dropdown-menu">
                                            <a className="dropdown-item det_page">
                                              <ul
                                                className="p-0 m-0"
                                                onChange={handleChange}
                                              >
                                                <li
                                                  className="page_list"
                                                  onClick={() => {
                                                    handleclick(item);
                                                  }}
                                                >
                                                  Cleared
                                                </li>
                                                <li
                                                  className="page_list"
                                                  onClick={() => {
                                                    handleclick1212(item);
                                                  }}
                                                >
                                                  In process
                                                </li>
                                                <li
                                                  className="page_list"
                                                  onClick={() => {
                                                    handleclick121212(item);
                                                  }}
                                                >
                                                  Still to clear
                                                </li>
                                                <li
                                                  className="page_list"
                                                  onClick={() => {
                                                    handleclickdelete(item);
                                                  }}
                                                >
                                                  Delete
                                                </li>
                                              </ul>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="">
                                  <p type="radio" className="input_user" />
                                  <label className="status">
                                    {item?.order_status == "Accepted" ? (
                                      <div className="d-flex align-items-center">
                                        <span className="dot bg-secondary me-2"></span>
                                        <p className="text-secondary mb-0">
                                          Accepted
                                        </p>
                                      </div>
                                    ) : item.order_status == "Cleared" ? (
                                      <div className="d-flex align-items-center">
                                        <span className="dot bg-success me-2"></span>
                                        <p className="text-success mb-0">
                                          Cleared
                                        </p>
                                      </div>
                                    ) : item.order_status == "In process" ? (
                                      <div className="d-flex align-items-center">
                                        <span className="dot bg-primary me-2"></span>
                                        <p className="text-primary mb-0">
                                          In process
                                        </p>
                                      </div>
                                    ) : item.order_status ==
                                      "Still to clear" ? (
                                      <div className="d-flex align-items-center">
                                        <span className="dot bg-danger me-2"></span>
                                        <p className="text-danger mb-0">
                                          Still to clear
                                        </p>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                  </tbody>
                </table>
                <div className="text-center d-flex justify-content-end align-items-center">
                    <button
                      disabled={currentPage === 1}
                      className="bg_page"
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      <i class="fi fi-rr-angle-small-left page_icon"></i>
                    </button>
                    <span className="mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
                    <button
                      disabled={currentPage === totalPages}
                      className="bg_page"
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      <i class="fi fi-rr-angle-small-right page_icon"></i>
                    </button>
                  </div>
                {/* <div className="mt-4">
                  <button
                    disabled={currentPage === 1}
                    className="btn pagePre"
                    onClick={() => handlePageChange(currentPage - 1)}
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    Previous
                  </button>
                  <span className="mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
                  <button
                    className="btn btn-success pageNext"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    style={{ backgroundColor: "green", color: "white" }}
                  >
                    Next
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <Modal
            open={isModalOpen}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                height: 400,
                overflow: "scroll",
                width: 600,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
              }}
            >
              <h2 id="modal-modal-title">Filter</h2>
              {/* <div className="row my-3  ">
                <div className="col-6">
                  <label>Delivery Type</label>
                  <select
                    name="type"
                    onChange={handlechange}
                    className="form-control"
                  >
                    <option value="">Select</option>
                    <option value="express">Express</option>
                    <option value="normal">Consolidation</option>
                  </select>
                </div>
                <div className="col-6">
                  <label>Priority </label>
                  <div className="shipRefer1 d-flex">
                    <div>
                      <input
                        type="radio"
                        id="shipper"
                        name="priority"
                        style={{ cursor: "pointer" }}
                        value="High"
                        onChange={handlechange}
                      />
                      <label htmlFor="shipper">High</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="shipper2"
                        style={{ cursor: "pointer" }}
                        name="priority"
                        value="Medium"
                        onChange={handlechange}
                      />
                      <label htmlFor="consignee">Medium</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="shipper3"
                        name="priority"
                        style={{ cursor: "pointer" }}
                        value="Low"
                        onChange={handlechange}
                      />
                      <label htmlFor="mediumPr">Low</label>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="row mb-3">
                <div className="col-6">
                  <label>Country of Origin</label>
                  <select
                    name="origin"
                    onChange={handlechange}
                    className="form-control"
                  >
                    <option value="">Select</option>
                    {country &&
                      country.length > 0 &&
                      country.map((item, index) => {
                        return (
                          <>
                            <option value={item.id}>{item.name}</option>
                          </>
                        );
                      })}
                  </select>
                </div>
                <div className="col-6">
                  <label>Delivery to Country </label>
                  <select
                    name="destination"
                    onChange={handlechange}
                    className="form-control"
                  >
                    <option value="">Select</option>
                    {country &&
                      country.length > 0 &&
                      country.map((item, index) => {
                        return (
                          <>
                            <option value={item.id}>{item.name}</option>
                          </>
                        );
                      })}
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <label>Start Date</label>
                  <input
                    type="date"
                    id="shipper3"
                    name="startDate"
                    style={{ cursor: "pointer" }}
                    className="form-control"
                    onChange={handlechange}
                  />
                </div>
                <div className="col-6">
                  <label>End Date </label>
                  <input
                    type="date"
                    id="shipper3"
                    name="endDate"
                    style={{ cursor: "pointer" }}
                    className="form-control"
                    onChange={handlechange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <label>Freight</label>
                  <select
                    name="freight"
                    onChange={handlechange}
                    className="form-control"
                  >
                    <option value="">Select...</option>
                    <option value="Sea">Sea</option>
                    <option value="Air">Air</option>
                    <option value="Road">Road</option>
                  </select>
                </div>
                {/* <div className="col-6">
                      <label>freight Type </label>
                      <select
                        name="type"
                        onChange={handlechange}
                        className="form-control"
                      >
                        <option value="">Select...</option>
                        <option value="express">Express</option>
                        <option value="normal">Normal</option>
                      </select>
                    </div> */}
              </div>
              <Button variant="contained" onClick={postData}>
                Apply
              </Button>
            </Box>
          </Modal>
      </div>
      <ToastContainer />
      </>
    )}
    </>
  );
}
