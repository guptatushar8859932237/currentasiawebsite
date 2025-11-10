import React, { useEffect, useState } from "react";
import Topbar from "../Topbar";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import { toast, ToastContainer } from "react-toastify";
export default function FreightDetails() {
  const location = useLocation();
  const [document, setDocument] = useState([]);
  const [document1, setDocument1] = useState([]);
  const [packing, setPacking] = useState([]);
  const [licenses, setLicenses] = useState([]);
  const data1 = location?.state?.printdata[0];
  console.log(data1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  useEffect(()=>{
    GetFreightImages()
  },[])
  const GetFreightImages = () => {
    const data = { freight_id: data1.id,uploaded_by:"2" };
    axios
      .post(`${process.env.REACT_APP_BASE_URL}GetFreightImages`, data)
      .then((response) => {
        setDocument(response.data.data["Supplier Invoice"]);
        setLicenses(response.data.data["Licenses"]);
        setDocument1(response.data.data["Other Documents"]);
        setPacking(response.data.data["Packing List"]);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const deleteapi =(id) =>{
    console.log(id)
    const data11={
      doc_id:id
    }
    axios.post(`${process.env.REACT_APP_BASE_URL}DeleteDocument`,data11).then((response)=>{
      GetFreightImages();
      toast.success(response.data.message)
    }).catch((error)=>{
      console.log(error.response.data)
    })
  }
  return (
    <div>
      <Topbar />
      <Navbar />
      <section class="sec_freight">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="page-banner full-row">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-md-6">
                      <h3 class="fre_det_hd">Freight Details</h3>
                    </div>
                    <div class="col-md-6">
                      <nav class="float-start float-md-end">
                        <ol class="breadcrumb m-0">
                          <li class="breadcrumb-item">
                            <a href="">Home</a>
                          </li>
                          <li class="breadcrumb-item active">
                            <Link to={"/freight-details"}>
                              All Freight Detail's
                            </Link>
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
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card desti_card">
              <div className="card-body">
                <div className="">
                  <h6 className="orgin_hd">Shipper Details</h6>
                  <span className="line"></span>
                </div>
                <div className="main_det">
                  <div class="table-responsive">
                    <table class="det_show">
                      <tbody>
                        <tr>
                          <td class="fright_num">
                            <p class="client_para1">Shipper:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.full_name}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Contact Person:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.contact_person}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Cell:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.cellphone}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Telephone:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.telephone}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1 mb-2">Email:</p>
                          </td>
                          <td>
                            <p class="client_para1 mb-2">{data1.email}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="ship_hd">Pickup Address</p>
                          </td>
                        </tr>
                        {/* <tr>
                              <td>
                                <p class="client_para1">Str Add:</p>
                              </td>
                              <td>
                                <p class="client_para1">000000</p>
                              </td>
                            </tr> */}
                        <tr>
                          <td>
                            <p class="client_para1">Address1:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.address_1}</p>
                          </td>
                        </tr>
                        {/* <tr>
                              {/* <td>
                                <p class="client_para1">Town:</p>
                              </td> */}
                        {/* <td>
                                <p class="client_para1">000000</p>
                              </td> */}
                        {/* </tr>  */}
                        <tr>
                          <td>
                            <p class="client_para1">City:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.city}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Country:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.country}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1 mb-2">Postal Code:</p>
                          </td>
                          <td>
                            <p class="client_para1 mb-2">{data1.code}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="ship_hd">Export details</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Exporter:</p>
                          </td>
                          <td>
                            <p class="client_para1">Asia Direct</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Export Code:</p>
                          </td>
                          <td>
                            <p class="client_para1">204101</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Vat/Tax No:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.tax_ref}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card desti_card">
              <div className="card-body">
                <div className="">
                  <h6 className="orgin_hd">Attachments</h6>
                  <span className="line"></span>
                  {/* <tr>
                    <td>
                      <p class="client_para1">Document Name:</p>
                    </td>
                    <td>
                      <p class="client_para1">{data1.add_attachments}</p>
                    </td>
                  </tr>
                  <a
                    href={`${process.env.REACT_APP_BASE_URLdocument}${data1.add_attachment_file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Document
                  </a> */}
                   <div className="mb-4 ">
                      <label>Supplier Invoice : </label>
                      {document?.map((item, index) => {
                        return (
                          <>
                            <a
                              href={`${process.env.REACT_APP_BASE_URLdocument}${item?.document}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="view_docu ms-2"
                            >
                              View Document
                            </a>
                            <DeleteIcon onClick={()=>{deleteapi(item.id)}} className="text-danger" style={{cursor:"pointer"}} />
                          </>
                        );
                      })}
                    </div>
                    <div className="mb-4 ">
                      <label>Other Document :</label>
                      {document1?.map((item, index) => {
                        return (
                          <>
                            <a
                              href={`${process.env.REACT_APP_BASE_URLdocument}${item?.document}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="view_docu ms-2"
                            >
                              View Document
                            </a>
                             <DeleteIcon onClick={()=>{deleteapi(item.id)}} className="text-danger" style={{cursor:"pointer"}} />
                          </>
                        );
                      })}
                    </div>
                    <div className="mb-4 ">
                      <label>packing List :</label>
                      {packing?.map((item, index) => {
                        return (
                          <>
                            <a
                              href={`${process.env.REACT_APP_BASE_URLdocument}${item?.document}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="view_docu ms-2"
                            >
                              View Document
                            </a>
                             <DeleteIcon onClick={()=>{deleteapi(item.id)}} className="text-danger" style={{cursor:"pointer"}} />
                          </>
                        );
                      })}
                    </div>
                    <div className="mb-4 ">
                      <label>Licenses Docs :</label>
                      {licenses?.map((item, index) => {
                        return (
                          <>
                            <a
                              href={`${process.env.REACT_APP_BASE_URLdocument}${item?.document}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="view_docu ms-2"
                            >
                              View Document
                            </a>
                             <DeleteIcon onClick={()=>{deleteapi(item.id)}} className="text-danger" style={{cursor:"pointer"}} />
                          </>
                        );
                      })}
                    </div>
                    <div className="mb-4 ">
                      <label>Attach Quote :</label>
                            <a
                              href={`${process.env.REACT_APP_BASE_URLdocument}${data1?.attachment_Estimate}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="view_docu ms-2"
                            >
                              View Document
                            </a>
                             {/* <DeleteIcon onClick={()=>{deleteapi(item.id)}} className="text-danger" style={{cursor:"pointer"}} /> */}
                    </div>
                </div>
              </div>
            </div>
          </div>
                   <div className="col-md-4">
            <div className="card desti_card">
              <div className="card-body">
                <div className="">
                  <h6 className="orgin_hd">Booking Information</h6>
                  <span className="line"></span>
                </div>
                <div className="main_det">
                  <div class="table-responsive">
                    <table class="det_show">
                      <tbody>
                        <tr>
                          <td>
                            <p className="ship_hd">POL Information</p>
                          </td>
                        </tr>
                        <tr>
                          <td class="fright_num">
                            <p class="client_para1">Place of loading:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.port_of_loading}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Port of Loading:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.port_of_loading}</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="instr_td">
                            <p className="client_para1 mb-2">Instructions:</p>
                          </td>
                          <td>
                            <p className="client_para1 mb-2">
                              {data1.shipment_origin}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="ship_hd">Transit Information</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Freight Option:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.freight_type}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Type:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.fcl_lcl}</p>
                          </td>
                        </tr>
                        {/* <tr>
                          <td>
                            <p class="client_para1">Efficiency:</p>
                          </td>
                          <td>
                            <p class="client_para1"></p>
                          </td>
                        </tr> */}
                        {/* <tr>
                          <td>
                            <p class="client_para1">Incoterms:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.incoterm}</p>
                          </td>
                        </tr> */}
                        <tr>
                          <td>
                            <p class="client_para1">Insurance:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.insurance}</p>
                          </td>
                        </tr>
                        {/* <tr>
                          <td>
                            <p class="client_para1 mb-2">Warehouse:</p>
                          </td>
                          <td>
                            <p class="client_para1 mb-2">
                              {data1.assign_warehouse}
                            </p>
                          </td>
                        </tr> */}
                        <tr>
                          <td>
                            <p className="ship_hd">POD Information</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Place of delivery:</p>
                          </td>
                          <td>
                            <p class="client_para1">
                              {data1.place_of_delivery}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Port of Discharge:</p>
                          </td>
                          <td>
                            <p class="client_para1">
                              {data1.post_of_discharge}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            <p class="client_para1"></p>
                          </td>
                        </tr>
                        <tr>
                          <td className="instr_td">
                            <p className="client_para1 mb-2">Instructions:</p>
                          </td>
                          <td>
                            <p className="client_para1 mb-2">
                              {data1.shipment_des}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="ship_hd">Comment</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.comment}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-4">
            <div className="card desti_card1">
              <div className="card-body">
                <div className="">
                  <h6 className="orgin_hd">Cargo Details</h6>
                  <span className="line"></span>
                </div>
                <div className="main_det">
                  <div class="table-responsive">
                    <table class="det_show">
                      <tbody>
                        <tr>
                          <td class="fright_num">
                            <p class="client_para1">Product Description:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.product_desc}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Hazardous:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.nature_of_goods}</p>
                          </td>
                        </tr>
                        {/* <tr>
                              <td>
                                <p class="client_para1">Industry:</p>
                              </td>
                              <td>
                                <p class="client_para1">{data1.industry}</p>
                              </td>
                            </tr> */}
                        <tr>
                          <td>
                            <p class="client_para1">Packaging:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.package_type}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Commodity:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.commodity}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">No of Packages:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.no_of_packages}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Dimensions(cbm):</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.dimension}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Weight(kgs):</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.weight}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Vol weight(kgs):</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.auto_calculate}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p class="client_para1">Document Name:</p>
                          </td>
                          <td>
                            <p class="client_para1">{data1.add_attachments}</p>
                          </td>
                        </tr>
                        <tr>
                          {/* <td>
                              <p class="client_para1">Chargeable weight:</p>
                            </td>
                            <td>
                              <p class="client_para1"></p>
                            </td> */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="card desti_card1">
              <div className="card-body">
                <div className="">
                  <h6 className="orgin_hd">Shipping Estimate</h6>
                  <span className="line"></span>
                </div>
                <div className="main_det">
                  <div className="table-responsive">
                    <table className="det_show">
                      <thead>
                        <tr>
                          <td className="ship_hd1"></td>
                          <td className="ship_hd2">Cost</td>
                          <td className="ship_hd3">Billing</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="ship_hd">
                            Freight
                            <br />
                            <p className="client_para1 mb-3"></p>
                          </td>
                          <td>
                            <p className="client_para1 mb-3"></p>
                          </td>
                          <td>
                            <p className="client_para1 mb-3"></p>
                          </td>
                        </tr>
                        <tr>
                          <td className="ship_hd">
                            Origin Charges
                            <br />
                            <p className="client_para1">Collection</p>
                          </td>
                          <td>
                            <p className="client_para1"></p>
                          </td>
                          <td>
                            <p className="client_para1"></p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="client_para1">Warehousing</p>
                          </td>
                          <td>
                            <p className="client_para1"></p>
                          </td>
                          <td>
                            <p className="client_para1"></p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="client_para1 mb-3">Origin Handling</p>
                          </td>
                          <td>
                            <p className="client_para1 mb-3"></p>
                          </td>
                          <td>
                            <p className="client_para1 mb-3"></p>
                          </td>
                        </tr>
                        <tr>
                          <td className="ship_hd">
                            Destination Charges
                            <br />
                            <p className="client_para1">Delivery</p>
                          </td>
                          <td>
                            <p className="client_para1"></p>
                          </td>
                          <td>
                            <p className="client_para1"></p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="client_para1">Warehousing</p>
                          </td>
                          <td>
                            <p className="client_para1"></p>
                          </td>
                          <td>
                            <p className="client_para1"></p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="client_para1">Destination Handling</p>
                          </td>
                          <td>
                            <p className="client_para1"></p>
                          </td>
                          <td>
                            <p className="client_para1"></p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
