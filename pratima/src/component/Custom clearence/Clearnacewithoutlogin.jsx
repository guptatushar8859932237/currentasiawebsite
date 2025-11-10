
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Topbar from '../Topbar';
import Navbar from '../homepage/Navbar';
import Footer from '../homepage/Footer';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function Clearnacewithoutlogin() {
    const [error, setError] = useState({})
    const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(null);
  const [freightMode, setFreightMode] = useState("");
    const [country, setCountry] = useState([])
    const [data, setData] = useState({
        trans_reference: "",
        client: "",
        customer_ref: "",
        goods_desc: "",
        destination: "",
        port_of_entry: "",
        port_of_exit: "",
        clearing_agent: "",
        clearing_status: "",
        clearing_result: "",
        document_req: "",
        document: null,
        sad500: "",
        comment_on_docs: ""
    })
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const handleclick = () => {
        handlevalidate(data)
    }
    const handlevalidate = (value) => {
        let error = {}
        if (!value.customer_ref) {
            error.customer_ref = 'Customer reference is required'
        }
        if (!value.trans_reference) {
            error.trans_reference = 'Transaction reference is required'
        }
        if (!value.goods_desc) {
            error.goods_desc = 'Goods description is required'
        }
        if (!value.port_of_entry) {
            error.port_of_entry = 'Port of entry is required'
        }
        if (!value.destination) {
            error.destination = 'Destination is required'
        }
        else {
            handleapi()
        }
        setError(error)
    }

    const handleInputChangefile = (e) => {
        const file = e.target.file
        setSelectedImage(file)
      }
    const handleapi = () => {

        const Storeddata = {
            'freight': data?.freight,
        'freight_option': data?.freight_option,
        'destination':data?.destination,
       'is_Import_Export': data?.is_Import_Export,
        'is_cong_shipp': data?.is_cong_shipp,
        'loading_country': data?.loading_country,
        'discharge_country': data?.discharge_country,
        'port_of_loading': data?.port_of_loading,
        'port_of_discharge': data?.port_of_discharge,
        'goods_desc': data?.goods_desc,
        'nature_of_goods': data?.nature_of_goods,
        'packing_type': data?.packing_type,
        'total_dimension': data?.total_dimension,
        'total_box': data?.total_box,
        'total_weight': data?.total_weight,
        'document_name': data?.document_name,
        'comment_on_docs': data?.comment_on_docs,
        'document': selectedImage,
        }
       
    sessionStorage.setItem("freight",Storeddata.freight)
    sessionStorage.setItem("freight_option",Storeddata.freight_option)
    sessionStorage.setItem("destination",Storeddata.destination)
    sessionStorage.setItem("is_Import_Export",Storeddata.is_Import_Export)
    sessionStorage.setItem("is_cong_shipp",Storeddata.is_cong_shipp)
    sessionStorage.setItem("loading_country",Storeddata.loading_country)
    sessionStorage.setItem("discharge_country",Storeddata.discharge_country)
    sessionStorage.setItem("port_of_loading",Storeddata.port_of_loading)
    sessionStorage.setItem("port_of_discharge",Storeddata.port_of_discharge)
    sessionStorage.setItem("goods_desc",Storeddata.goods_desc)
    sessionStorage.setItem("nature_of_goods",Storeddata.nature_of_goods)
    sessionStorage.setItem("packing_type",Storeddata.packing_type)
    sessionStorage.setItem("total_dimension",Storeddata.total_dimension)
    sessionStorage.setItem("total_box",Storeddata.total_box)
    sessionStorage.setItem("total_weight",Storeddata.total_weight)
    sessionStorage.setItem("document_name",Storeddata.document_name)
    sessionStorage.setItem("comment_on_docs",Storeddata.comment_on_docs)
    sessionStorage.setItem("document",selectedImage)
    navigate('/Calculate-in-clearance')
    }
    useEffect(() => {
        getcountry()
    }, [])
    const getcountry = () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}GetCountries`).then((response) => {

            console.log(response.data.data)
            setCountry(response.data.data)
        }).catch((error) => {
            toast.errror(error.response.data.data)
        })
    }


    const handleFreightModeChange = (e) => {
        const { value } = e.target;
        setFreightMode(value);
        setData({ ...data, customer_ref: value });
      };
    return (
        <div>
            <Topbar />
            <Navbar />
            <>
                <section className="freightSec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Custom Clearance</h1>
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
                                <option key={index} value={item.id}>
                                  {item.name}
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
                                <option key={index} value={item.id}>
                                  {item.name}
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
                {/* <section className="manageFrightSec pt80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="addClearance">
                                    <form action="">
                                        <div className="row mt-2">
                                            <div className="col-lg-6">
                                                <label htmlFor="">Customer Ref</label>
                                                <input type="text" className="form-control" onChange={handleInputChange} name="customer_ref" />
                                                <p className='text-danger'>{error.customer_ref}</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="">Goods Description</label>
                                                <input type="text" className="form-control" onChange={handleInputChange} name="goods_desc" />
                                                <p className='text-danger'> {error.goods_desc}</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="">Destination</label>
                                                <input type="text" className="form-control" onChange={handleInputChange} name="destination" />
                                                <p className='text-danger'> {error.destination}</p>
                                            </div>

                                            <div className="col-lg-6">
                                                <label htmlFor="">Port of Origin</label>
                                                <select className='form-select' onChange={handleInputChange} name="port_of_entry">
                                                    <option>Select...</option>
                                                    {
                                                        country && country.length > 0 && country.map((item, index) => {
                                                            return (
                                                                <>
                                                                    <option key={index} value={item.id}>{item.name}</option>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                <p className='text-danger'>{error.port_of_exit}</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="">Port of Exit</label>
                                                <select className='form-select' onChange={handleInputChange} name="port_of_exit">
                                                    <option>Select...</option>
                                                    {
                                                        country && country.length > 0 && country.map((item, index) => {
                                                            return (
                                                                <>
                                                                    <option key={index} value={item.id}>{item.name}</option>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                <p className='text-danger'>{error.port_of_exit}</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="">Comment on Docs</label>
                                                <input type="text" className="form-control" onChange={handleInputChange} name="comment_on_docs" />
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="">Industry</label>
                                                <select className="form-select" onChange={handleInputChange} name="industry">
                                                    <option>Select...</option>
                                                    <option>Medical</option>
                                                    <option>Electronic</option>
                                                    <option>Cosmetic</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="">Currency</label>
                                                <select className="form-select" onChange={handleInputChange} name="industry">
                                                    <option>Select...</option>
                                                    <option>USD</option>
                                                    <option>RAND</option>
                                                    <option>EURO</option>
                                                    <option>INR</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                    <button className='btn btnFreight2 mb-3' onClick={handleclick}>Add Clearance</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </>
            <Footer />
            <ToastContainer />
        </div>
    )
}