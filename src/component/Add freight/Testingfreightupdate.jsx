import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Testingfreightupdate() {
  const [data, setData] = useState([]);
  const [radioButton, setRadioButton] = useState("");
  const currentuser = JSON.parse(localStorage.getItem("data"));
  const [updatedata, setUpdatedata] = useState({});
  const [inputData, setInputData] = useState({});
  const [secondRadio, setSecondRadio] = useState({});
  const [thirdRadio, setThirdadio] = useState({});
  const [quantdata, setQuantdata] = useState({});
  const [country, setCountry] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    getdata();
  }, []);
  const getdata = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}client-freights`, {
        user_id: currentuser?.id,
      })
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
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
          .post(`${process.env.REACT_APP_BASE_URL}delete-freight`, {
            freight_id: id,
          })
          .then((response) => {
            getdata();
            console.log(response.data.message);
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
  ////////////////////////////////////update////////////////////////////////////
  const handleupdate = (id) => {
    const userdata = data.filter((item) => {
      return item.id === id;
    });
    const reguser = userdata[0];
    setInputData((prevData) => ({
      ...prevData,
      shipment_ref: reguser.shipment_ref,
      freight_id: id,
      status: reguser.status,
      shipment_origin: secondRadio,
      sea_freight_option: reguser.sea_freight_option,
      road_freight_option: reguser.road_freight_option,
      add_attachments: reguser.add_attachments,
      ready_for_collection: reguser.ready_for_collection,
      product_desc: reguser.product_desc,
      post_of_discharge: reguser.post_of_discharge,
      port_of_loading: reguser.port_of_loading,
      package_type: reguser.package_type,
      no_of_packages: reguser.no_of_packages,
      nature_of_goods: reguser.nature_of_goods,
      freight_type: reguser.freight_type,
      freight: reguser.freight,
      auto_calculate: reguser.auto_calculate,
      dimension: reguser.dimension,
      weight: reguser.weight,
      delivery_to: reguser.delivery_to,
      delivery_address: reguser.delivery_address,
      shipment_des: reguser.shipment_des,
      comment: reguser.comment,
      collection_from: reguser.collection_from,
      collection_address: reguser.collection_address,
      client_name: reguser.client_name,
      delivery_to_country: reguser.delivery_to_country,
    }));
    setRadioButton(reguser.user_type);
    setSecondRadio(reguser.shipment_origin);
    setThirdadio(reguser.shipment_des);
  };
  const dddd = (e) => {
    setRadioButton(e.target.value);
  };
  const handlethird = (e) => {
    setThirdadio(e.target.value);
  };
  const secondradi = (e) => {
    setSecondRadio(e.target.value);
  };
  const handklechangeas = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const getcountry = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}countrylist`)
      .then((response) => {
        setUpdatedata(response.data.data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  useEffect(() => {
    getcountry();
  }, []);
  const clienduidi = JSON.parse(localStorage.getItem("data"));
  const handleclicknavi = () => {
    const updatedata = {
      freight_id: inputData.freight_id,
      client_id: clienduidi.id,
      shipment_ref: inputData.shipment_ref,
      user_type: radioButton,
      status: inputData.status,
      shipment_origin: secondRadio,
      sea_freight_option: inputData.sea_freight_option,
      shipment_des: thirdRadio,
      road_freight_option: inputData.road_freight_option,
      ready_for_collection: inputData.ready_for_collection,
      product_desc: inputData.product_desc,
      post_of_discharge: inputData.post_of_discharge,
      port_of_loading: inputData.port_of_loading,
      add_attachments: inputData.add_attachments,
      package_type: inputData.package_type,
      no_of_packages: inputData.no_of_packages,
      nature_of_goods: inputData.nature_of_goods,
      auto_calculate: totaldimension
        ? totaldimension
        : inputData.auto_calculate,
      freight_type: inputData.freight_type,
      freight: inputData.freight,
      dimension: inputData.dimension,
      weight: inputData.weight,
      delivery_to: inputData.delivery_to,
      comment: inputData.comment,
      collection_from: inputData.collection_from,
      delivery_address: inputData.delivery_address,
      collection_address: inputData.collection_address,
      client_name: inputData.client_name,
      delivery_to_country: inputData.delivery_to_country,
    };
    axios
      .post(`${process.env.REACT_APP_BASE_URL}update-freights`, updatedata)
      .then((response) => {
        getdata();
        toast.success(response.data.message);
        const modal = document.getElementById("exampleModal");
        modal.classList.remove("show");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        const modalBackdrop =
          document.getElementsByClassName("modal-backdrop")[0];
        modalBackdrop.parentNode.removeChild(modalBackdrop);
      })
      .catch((error) => {
        toast.error(error.response.data.data.message);
      });
  };
  //////////////////////////////////////////// calculation//////////////////////////////////////////////////
  const dimensiion1 = isNaN(
    parseInt(quantdata?.length) *
      parseInt(quantdata?.width) *
      parseInt(quantdata?.height)
  )
    ? 0
    : parseInt(quantdata?.length) *
      parseInt(quantdata?.width) *
      parseInt(quantdata?.height);
  const [age, setAge] = React.useState("");
  const datauserval = JSON.parse(localStorage.getItem("data"));
  const handleChange = (event) => {
    setAge(event.target.value);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}client-freights`, {
        user_id: datauserval.id,
        status: event.target.value,
      })
      .then((response) => {
        const setSwitch = 10;
        setSwitch(response.data.data.angel);
        setData(response.data.data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  const getdata12 = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}country-list`)
      .then((response) => {
        setCountry(response.data.data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  useEffect(() => {
    getdata12();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const totaldimension = inputData.dimension * inputData.weight;
  return (
    <div>
      <>
        <>
          <section className="bannerBg"></section>
          <section className="manageFrightSec">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="tableManageFright mainTableClearnce  rounded p-2">
                    <table className="w-100">
                      <thead style={{ borderTop: "2px solid #f2f2f2" }}>
                        <tr>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.length > 0 &&
                          data.map((item, index) => {
                            const date = new Date(item.date);
                            const formatteddate = date.toLocaleDateString(
                              "en-GB",
                              {
                                day: "numeric",
                                month: "numeric",
                                year: "numeric",
                              }
                            );
                            return (
                              <tr key={index}>
                                <td>
                                  <div className="btnManageFreight d-flex">
                                    <div className="drpIcons">
                                      <i
                                        className="fa fa-trash"
                                        onClick={() => {
                                          handledelete(item.id);
                                        }}
                                      />
                                    </div>
                                    {item.status === "2" ? (
                                      <p></p>
                                    ) : (
                                      <div className="drpIcons">
                                        <i
                                          type="button"
                                          className="fa fa-edit"
                                          data-bs-toggle="modal"
                                          data-bs-target="#exampleModal"
                                          onClick={() => {
                                            handleupdate(item.id);
                                          }}
                                        />
                                      </div>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </>
      <ToastContainer />
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 fw-bold text-dark"
                id="exampleModalLabel"
              >
                Update freight
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <section className="frightFormSec manageModal pt80 pb80">
                <div className="frightFormSec pb50">
                  <div className="container">
                    <div className="row">
                      <h3>Shipment Details</h3>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-6">
                            <h5 className="labelTitle">Freight Option</h5>
                            <select
                              name="freight"
                              onChange={handklechangeas}
                              id="freightOption"
                              value={inputData.freight}
                            >
                              <option value="">Select...</option>
                              <option value="Sea">Sea</option>
                              <option value="Air">Air</option>
                              <option value="Road">Road</option>
                              <option value="Rail">Rail</option>
                            </select>
                            <p className="text-danger"></p>
                          </div>
                          <div className="col-lg-6">
                            <h5 className="labelTitle">Freight Type</h5>
                            <select
                              name="freight_type"
                              onChange={handklechangeas}
                              value={inputData.freight_type}
                            >
                              <option value="">Select...</option>
                              <option value="express">Express</option>
                              <option value="normal">Normal</option>
                            </select>
                          </div>
                        </div>
                        <div className="borderShip">
                          <h3 className="mb-4">Shipment details</h3>
                          <div className="row">
                            <div className="col-lg-6">
                              <h5 className="labelTitle">Origin</h5>
                              <div className="parentShipper">
                                <div className="childshipper">
                                  <div className="row">
                                    <div className="col-md-2 pe-0">
                                      <input
                                        type="radio"
                                        id="origin1"
                                        name="origin"
                                        onChange={secondradi}
                                        checked={
                                          secondRadio ===
                                          "Shipper will deliver at Asia Direct - Africa warehouse"
                                        }
                                        value="Shipper will deliver at Asia Direct - Africa warehouse"
                                      />
                                    </div>
                                    <div className="col-md-10 ps-0">
                                      <label for="origin1" className="my-0">
                                        Shipper will deliver at Asia Direct -
                                        Africa warehouse
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="parentShipper">
                                <div className="childshipper">
                                  <div className="row">
                                    <div className="col-md-2 pe-0">
                                      <input
                                        type="radio"
                                        id="origin2"
                                        name="origin"
                                        onChange={secondradi}
                                        value="Asia Direct will collect from shipper address"
                                        checked={
                                          secondRadio ===
                                          "Asia Direct will collect from shipper address"
                                        }
                                      />
                                    </div>
                                    <div className="col-md-10 ps-0">
                                      <label for="origin2" className="my-0">
                                        Asia Direct will collect from shipper
                                        address
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="parentShipper">
                                <div className="childshipper">
                                  <div className="row">
                                    <div className="col-md-2 pe-0">
                                      <input
                                        type="radio"
                                        id="origin3"
                                        name="origin"
                                        onChange={secondradi}
                                        value="Shipper will deliver to the port of loading"
                                        checked={
                                          secondRadio ===
                                          "Shipper will deliver to the port of loading"
                                        }
                                      />
                                    </div>
                                    <div className="col-md-10 ps-0">
                                      <label for="origin3" className="my-0">
                                        Shipper will deliver to the port of
                                        loading,
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="parentShipper">
                                <div className="childshipper">
                                  <div className="row">
                                    <div className="col-md-2 pe-0">
                                      <input
                                        type="radio"
                                        id="origin4"
                                        name="origin"
                                        onChange={secondradi}
                                        value="Shipper will deliver and facilitate export at the Port of loading"
                                        checked={
                                          secondRadio ===
                                          "Shipper will deliver and facilitate export at the Port of loading"
                                        }
                                      />
                                    </div>
                                    <div className="col-md-10 ps-0">
                                      <label for="origin4" className="my-0">
                                        Shipper will deliver and facilitate
                                        export at the Port of loading
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p className="text-danger"></p>
                            </div>
                            <div className="col-lg-6">
                              <h5 className="labelTitle">Destination</h5>
                              <div className="parentShipper">
                                <div className="childshipper">
                                  <div className="row">
                                    <div className="col-md-2 pe-0">
                                      <input
                                        type="radio"
                                        id="Destination1"
                                        name="Destination"
                                        onChange={handlethird}
                                        checked={
                                          thirdRadio ===
                                          "Asia Direct will deliver to the Address"
                                        }
                                        value="Asia Direct will deliver to the Address"
                                      />
                                    </div>
                                    <div className="col-md-10 ps-0">
                                      <label
                                        for="Destination1"
                                        className="my-0"
                                      >
                                        Asia Direct will deliver to the Address.
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="parentShipper">
                                <div className="childshipper">
                                  <div className="row">
                                    <div className="col-md-2 pe-0">
                                      <input
                                        type="radio"
                                        id="Destination2"
                                        name="Destination"
                                        onChange={handlethird}
                                        checked={
                                          thirdRadio ===
                                          "Consignee will collect at Asia Direct - Africa warehouse"
                                        }
                                        value="Consignee will collect at Asia Direct - Africa warehouse"
                                      />
                                    </div>
                                    <div className="col-md-10 ps-0">
                                      <label
                                        for="Destination2"
                                        className="my-0"
                                      >
                                        Consignee will collect at Asia Direct -
                                        Africa warehouse
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="parentShipper">
                                <div className="childshipper">
                                  <div className="row">
                                    <div className="col-md-2 pe-0">
                                      <input
                                        type="radio"
                                        id="Destination3"
                                        name="Destination"
                                        onChange={handlethird}
                                        value="Consignee will collect at the nearest port"
                                        checked={
                                          thirdRadio ===
                                          "Consignee will collect at the nearest port"
                                        }
                                      />
                                    </div>
                                    <div className="col-md-10 ps-0">
                                      <label
                                        for="Destination3"
                                        className="my-0"
                                      >
                                        Consignee will collect at the nearest
                                        port
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="parentShipper">
                                <div className="childshipper">
                                  <div className="row">
                                    <div className="col-md-2 pe-0">
                                      <input
                                        type="radio"
                                        id="Destination4"
                                        name="Destination"
                                        onChange={handlethird}
                                        checked={
                                          thirdRadio ===
                                          "Consignee will collect and facilitate import at destination port"
                                        }
                                        value="Consignee will collect and facilitate import at destination port"
                                      />
                                    </div>
                                    <div className="col-md-10 ps-0">
                                      <label
                                        for="Destination4"
                                        className="my-0"
                                      >
                                        Consignee will collect and facilitate
                                        import at destination port
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p className="text-danger"></p>
                            </div>
                          </div>
                        </div>
                        <div className="borderShip">
                          <h3 className="mb-4">Your Shipment reference</h3>
                          <div className="row">
                            <div className="col-lg-6">
                              <h5 className="labelTitle">
                                Your Customer Reference
                              </h5>
                              <input
                                type="text"
                                onChange={handklechangeas}
                                name="shipment_ref"
                                value={inputData.shipment_ref}
                              />
                            </div>
                            <div className="col-lg-6 shipRefer">
                              <h5>Are you the </h5>
                              <div className="mt-3">
                                <input
                                  type="radio"
                                  id="shipper"
                                  name="shipper"
                                  value="shipper"
                                  checked={radioButton === "shipper"}
                                  onChange={dddd}
                                />
                                <label htmlFor="shipper">Shipper</label>
                                <input
                                  type="radio"
                                  id="consignee"
                                  name="shipperOrConsignee"
                                  value="consignee"
                                  checked={radioButton === "consignee"}
                                  onChange={dddd}
                                />
                                <label htmlFor="consignee">Consignee</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="borderShip">
                          <div>
                            <h3 className="mb-4 ">Location details</h3>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="col-lg-12">
                                <h5 className="labelTitle">Collection from</h5>
                                <select
                                  value={inputData.delivery_to}
                                  name="delivery_to"
                                  onChange={handleInputChange}
                                >
                                  <option>select...</option>
                                  {country.map((option, index) => {
                                    return (
                                      <>
                                        <option key={index} value={option.id}>
                                          {option.country_of_origin}
                                        </option>
                                      </>
                                    );
                                  })}
                                </select>
                                <p className="text-danger"></p>
                              </div>
                              <div className="col-lg-12 my-1">
                                <h5 className="labelTitle">Port of Loading</h5>
                                <input
                                  type="text"
                                  name="port_of_loading"
                                  onChange={handleInputChange}
                                  value={inputData.port_of_loading}
                                />
                              </div>
                              <div className="my-3">
                                <h5 className="labelTitle">
                                  Collection Address
                                </h5>
                                <input
                                  type="text"
                                  name="collection_address"
                                  onChange={handleInputChange}
                                  value={inputData.collection_address}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <h5 className="labelTitle">Delivery To</h5>

                              <select
                                value={inputData.collection_from}
                                name="collection_from"
                                onChange={handleInputChange}
                              >
                                <option>select...</option>
                                {country.map((option, index) => {
                                  return (
                                    <>
                                      <option key={index} value={option.id}>
                                        {option.country_of_origin}
                                      </option>
                                    </>
                                  );
                                })}
                              </select>
                              <p className="text-danger"></p>
                              <div className="my-3">
                                <h5 className="labelTitle">
                                  Port of Discharge
                                </h5>
                                <input
                                  type="text"
                                  onChange={handleInputChange}
                                  name="post_of_discharge"
                                  value={inputData.post_of_discharge}
                                />
                              </div>
                              <div className="col-lg-12 my-3">
                                <h5 className="labelTitle">Delivery Address</h5>
                                <input
                                  type="text"
                                  onChange={handleInputChange}
                                  name="delivery_address"
                                  value={inputData.delivery_address}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="borderShip">
                          <h3 className="mb-4">Cargo details</h3>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="shipRefer col-lg-12">
                                <h5 className="labelTitle">
                                  Product Description
                                </h5>
                                <input
                                  type="text"
                                  onChange={handleInputChange}
                                  name="product_desc"
                                  value={inputData.product_desc}
                                  className="w-100"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 ">
                              <h5 className="labelTitle">Nature of Goods</h5>
                              <select
                                name="nature_of_goods"
                                onChange={handleInputChange}
                                value={inputData.nature_of_goods}
                              >
                                <option value="">Select...</option>
                                <option value="generalCargo">
                                  General cargo
                                </option>
                                <option value="battery">Battery</option>
                                <option value="liquids">Liquids</option>
                                <option value="powders">Powders</option>
                                <option value="hazardous">Hazardous</option>
                              </select>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 mt-3">
                              <h5 className="labelTitle">Package Type</h5>
                              <select
                                name="package_type"
                                onChange={handleInputChange}
                                value={inputData.package_type}
                              >
                                <option value="">Select...</option>
                                <option value="box">Box</option>
                                <option value="crate">Crate</option>
                                <option value="pallet">Pallet</option>
                                <option value="bags">Bags</option>
                              </select>
                            </div>
                            <div className="col-lg-6 mt-3">
                              <h5 className="labelTitle">Total Packages</h5>
                              <input
                                type="text"
                                name="no_of_packages"
                                onChange={handleInputChange}
                                value={inputData.no_of_packages}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 mt-3">
                              <h5 className="labelTitle">Total Dimension</h5>
                              <input
                                type="text"
                                name="dimension"
                                onChange={handleInputChange}
                                value={inputData.dimension}
                              />
                            </div>
                            <div className="col-lg-6 mt-3">
                              <h5 className="labelTitle">Total Weight</h5>
                              <input
                                type="text"
                                name="weight"
                                onChange={handleInputChange}
                                value={inputData.weight}
                              />
                            </div>
                            <div className="col-lg-6 mt-3">
                              <h5 className="labelTitle">Auto Calculate</h5>
                              <input
                                type="text"
                                name="autoCalculate"
                                onChange={handleInputChange}
                                value={totaldimension}
                              />
                            </div>
                            <div className="col-lg-6 mt-3">
                              <h5 className="labelTitle">Add attachments</h5>
                              <select
                                name="add_attachments"
                                value={inputData.add_attachments}
                                onChange={handleInputChange}
                              >
                                <option value="">Select...</option>
                                <option value="supplierInvoice">
                                  Supplier Invoice / Quotation / Proforma
                                  Invoice
                                </option>
                                <option value="packingList">
                                  Packing List
                                </option>
                                <option value="licenses">
                                  Licenses/Permits
                                </option>
                                <option value="otherDocuments">
                                  Other documents
                                </option>
                              </select>
                            </div>
                            <div className="col-lg-12 mt-3">
                              <h5 className="labelTitle">Comment</h5>
                              <input
                                type="text"
                                name="comment"
                                className="mb-3"
                                onChange={handleInputChange}
                                value={inputData.comment}
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-danger mt-3 w-25 ms-2"
                              onClick={handleclicknavi}
                            >
                              Update Freight
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ToastContainer />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
