import React, { useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Topbar from "../Topbar";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import { Link, useLocation } from "react-router-dom";

export default function OrderDetailsConform() {
  const location = useLocation();
  const data = location?.state?.data;
  console.log(data);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const keyMapping = {
    post: "port",
  };
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
                      <h3 class="fre_det_hd">Freight Order Details</h3>
                    </div>
                    <div class="col-md-6">
                      <nav class="float-start float-md-end">
                        <ol class="breadcrumb m-0">
                          <li class="breadcrumb-item">
                            <a href="">Home</a>
                          </li>
                          <li class="breadcrumb-item active">
                            <Link to={'/order-details'}>Order Detail's</Link>
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
      <section className="">
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
                              <p class="client_para1">{data.full_name}</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">Contact Person:</p>
                            </td>
                            <td>
                              <p class="client_para1">{data.contact_person}</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">Cell:</p>
                            </td>
                            <td>
                              <p class="client_para1">{data.cellphone}</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">Telephone:</p>
                            </td>
                            <td>
                              <p class="client_para1">{data.telephone}</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1 mb-2">Email:</p>
                            </td>
                            <td>
                              <p class="client_para1 mb-2">{data.email}</p>
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
                              <p class="client_para1">{data.address_1}</p>
                            </td>
                          </tr>
                          {/* <tr>
                            <td>
                              <p class="client_para1">Town:</p>
                            </td>
                            <td>
                              <p class="client_para1">000000</p>
                            </td>
                          </tr> */}
                          <tr>
                            <td>
                              <p class="client_para1">City:</p>
                            </td>
                            <td>
                              <p class="client_para1">{data.city}</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">Country:</p>
                            </td>
                            <td>
                              <p class="client_para1">
                                {data.collection_from_country}
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1 mb-2">Postal Code:</p>
                            </td>
                            <td>
                              <p class="client_para1 mb-2">{data.code}</p>
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
                            {/* <td>
                              <p class="client_para1">Asia Direct</p>
                            </td> */}
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">Export Code:</p>
                            </td>
                            {/* <td>
                              <p class="client_para1">256000</p>
                            </td> */}
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">Vat/Tax No:</p>
                            </td>
                            {/* <td>
                              <p class="client_para1">0000000000000</p>
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
              <div className="card desti_card">
                <div className="card-body">
                  <div className="">
                    <h6 className="orgin_hd">Consignee Details</h6>
                    <span className="line"></span>
                  </div>
                  <div className="main_det">
                    <div class="table-responsive">
                      <table class="det_show">
                        <tbody>
                          <tr>
                            <td class="fright_num">
                              <p class="client_para1">Consignee:</p>
                            </td>
                            <td>
                              <p class="client_para1">Asia Direct</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">Contact Person:</p>
                            </td>
                            <td>
                              <p class="client_para1">Tushar Gupta</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">Cell:</p>
                            </td>
                            <td>
                              <p class="client_para1">1234567890</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">Telephone:</p>
                            </td>
                            <td>
                              <p class="client_para1">0000000000</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1 mb-2">Email:</p>
                            </td>
                            <td>
                              <p class="client_para1 mb-2">
                                asiadirect@gmail.com
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="ship_hd">Delivery Address</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">Str Add:</p>
                            </td>
                            <td>
                              <p class="client_para1">000000</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">Address1:</p>
                            </td>
                            <td>
                              <p class="client_para1">
                                {data.delivery_address}
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">Town:</p>
                            </td>
                            <td>
                              <p class="client_para1">000000</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">City:</p>
                            </td>
                            <td>
                              <p class="client_para1">Noida</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">Country:</p>
                            </td>
                            <td>
                              <p class="client_para1">
                                {data.delivery_to_country}
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1 mb-2">Postal Code:</p>
                            </td>
                            <td>
                              <p class="client_para1 mb-2">30253</p>
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
                              <p class="client_para1">5461500</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">Vat/Tax No:</p>
                            </td>
                            <td>
                              <p class="client_para1">000000000000</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
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
                            {/* <td>
                                                            <p className="ship_hd">POL Information</p>
                                                        </td> */}
                          </tr>
                          {/* <tr>
                                                        <td class="fright_num">
                                                            <p class="client_para1">Place of loading:</p>
                                                        </td>
                                                        <td>
                                                            <p class="client_para1">{data.port_of_loading}</p>
                                                        </td> */}
                          {/* </tr> */}
                          <tr>
                            <td>
                              <p class="client_para1">Port of Loading:</p>
                            </td>
                            <td>
                              <p class="client_para1">{data.port_of_loading}</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="instr_td">
                              <p className="client_para1 mb-2">Instructions:</p>
                            </td>
                            <td>
                              <p className="client_para1 mb-2">
                                {data.shipment_origin}
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="instr_td">
                              <p className="client_para1 mb-2">Type:</p>
                            </td>
                            <td>
                              <p className="client_para1 mb-2">
                                {data.fcl_lcl}
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
                              <p class="client_para1">{data.freight_type}</p>
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
                                                            <p class="client_para1"></p>
                                                        </td>
                                                    </tr> */}
                          <tr>
                            <td>
                              <p class="client_para1">Insurance:</p>
                            </td>
                            <td>
                              <p class="client_para1">{data.insurance}</p>
                            </td>
                          </tr>
                          {/* <tr>
                                                        <td>
                                                            <p class="client_para1">Warehouse:</p>
                                                        </td>
                                                        <td>
                                                            <p class="client_para1"></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p class="client_para1">Origin Handler:</p>
                                                        </td>
                                                        <td>
                                                            <p class="client_para1"></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p class="client_para1">Destination Handler:</p>
                                                        </td>
                                                        <td>
                                                            <p class="client_para1"></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p class="client_para1">ETD:</p>
                                                        </td>
                                                        <td>
                                                            <p class="client_para1"></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p class="client_para1">Carrier:</p>
                                                        </td>
                                                        <td>
                                                            <p class="client_para1"></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p class="client_para1">Vessel Name:</p>
                                                        </td>
                                                        <td>
                                                            <p class="client_para1"></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p class="client_para1">Master Bill:</p>
                                                        </td>
                                                        <td>
                                                            <p class="client_para1"></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p class="client_para1">House Bill:</p>
                                                        </td>
                                                        <td>
                                                            <p class="client_para1"></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p class="client_para1">Container No:</p>
                                                        </td>
                                                        <td>
                                                            <p class="client_para1"></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p class="client_para1 mb-2">Release Type:</p>
                                                        </td>
                                                        <td>
                                                            <p class="client_para1 mb-2"></p>
                                                        </td>
                                                    </tr> */}
                          <tr>
                            <td>
                              <p className="ship_hd">POD Information</p>
                            </td>
                            <td>
                              <p class="client_para1"></p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">Place of delivery:</p>
                            </td>
                            <td>
                              <p class="client_para1">
                                {data.delivery_address}
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="client_para1">Port of Discharge:</p>
                            </td>
                            <td>
                              <p class="client_para1">
                                {data.post_of_discharge}
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="instr_td">
                              <p className="client_para1 mb-2">Instructions:</p>
                            </td>
                            <td>
                              <p className="client_para1 mb-2">
                                Consignee will collect at Asia Direct Warehouse
                              </p>
                            </td>
                          </tr>
                          {/* <tr>
                                                        <td>
                                                            <p class="client_para1">Local Carrier:</p>
                                                        </td>
                                                        <td>
                                                            <p class="client_para1"></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p class="client_para1">Driver Name:</p>
                                                        </td>
                                                        <td>
                                                            <p class="client_para1"></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p class="client_para1">Vehicle Registration:</p>
                                                        </td>
                                                        <td>
                                                            <p class="client_para1"></p>
                                                        </td>
                                                    </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="details_box">
            <div className="row my-4">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
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
                                    <p class="client_para1">
                                      Product Description:
                                    </p>
                                  </td>
                                  <td>
                                    <p class="client_para1">
                                      {data.product_desc}
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p class="client_para1">Hazardous:</p>
                                  </td>
                                  <td>
                                    <p class="client_para1">{data.hazardous}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p class="client_para1">Industry:</p>
                                  </td>
                                  <td>
                                    <p class="client_para1">
                                      {data.nature_of_goods}
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p class="client_para1">Packaging:</p>
                                  </td>
                                  <td>
                                    <p class="client_para1">
                                      {data.package_type}
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p class="client_para1">Commodity:</p>
                                  </td>
                                  <td>
                                    <p class="client_para1">
                                      {data.commodity}
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p class="client_para1">No of Packages:</p>
                                  </td>
                                  <td>
                                    <p class="client_para1">
                                      {data.no_of_packages}
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p class="client_para1">Dimensions(cbm):</p>
                                  </td>
                                  <td>
                                    <p class="client_para1">{data.dimension}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p class="client_para1">Weight(kgs):</p>
                                  </td>
                                  <td>
                                    <p class="client_para1">{data.weight}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p class="client_para1">Vol weight(kgs):</p>
                                  </td>
                                  <td>
                                    <p class="client_para1">
                                      {data.volumetric_weight}
                                    </p>
                                  </td>
                                </tr>
                                {/* <tr>
                                                                    <td>
                                                                        <p class="client_para1">
                                                                            Chargeable weight:
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <p class="client_para1"></p>
                                                                    </td>
                                                                </tr> */}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-6">
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
                                    <p className="client_para1 mb-2"></p>
                                  </td>
                                  <td>
                                    <p className="client_para1 mb-2"></p>
                                  </td>
                                  <td>
                                    <p className="client_para1 mb-2"></p>
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
                                    <p className="client_para1">{}</p>
                                  </td>
                                  <td>
                                    <p className="client_para1"></p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="client_para1 mb-2">
                                      Origin Handling
                                    </p>
                                  </td>
                                  <td>
                                    <p className="client_para1 mb-2"></p>
                                  </td>
                                  <td>
                                    <p className="client_para1 mb-2"></p>
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
                                    <p className="client_para1">
                                      Destination Handling
                                    </p>
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
                  {/* <div className="col-md-12">
                                        <div className="card comm_ent">
                                            <div className="card-body">
                                                <div className="">
                                                    <h6 className="orgin_hd">Comments</h6>
                                                    <span className="line"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                  {/* <div className="col-md-12">
                                        <div className="card comm_ent">
                                            <div className="card-body">
                                                <div className="">
                                                    <h6 className="orgin_hd">Attachments</h6>
                                                    <span className="line"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                </div>
              </div>
              <div className="col-md-12 ">
                {/* <div
                  className="timeline-container w-100"
                  style={{
                    height: "750px",
                    overflowY: "auto",
                    border: "1px solid #ccc",
                    padding: "10px",
                    boxSizing: "border-box",
                  }}
                >
                  <VerticalTimeline lineColor="black">
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                        width: "200px",
                        padding: "10px",
                        marginLeft: "303px",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid rgb(33, 150, 243)",
                        marginLeft: "-10px",
                      }}
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                      icon={<WorkIcon />}
                    >
                      <h6 className="vertical-timeline-element-title">
                        Collected from supplier
                      </h6>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                        width: "200px",
                        padding: "10px",
                        marginRight: "305px",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid rgb(33, 150, 243)",
                        marginLeft: "-10px",
                      }}
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                      icon={<WorkIcon />}
                    >
                      <h6 className="vertical-timeline-element-title">
                        Received at Asia Direct warehouse
                      </h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                        width: "200px",
                        padding: "10px",
                        marginLeft: "303px",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid rgb(33, 150, 243)",
                        marginLeft: "-10px",
                      }}
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                      icon={<WorkIcon />}
                    >
                      <h6 className="vertical-timeline-element-title">
                        Dispatched to port
                      </h6>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                        width: "200px",
                        padding: "10px",
                        marginRight: "305px",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid rgb(33, 150, 243)",
                        marginLeft: "-10px",
                      }}
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                      icon={<WorkIcon />}
                    >
                      <h6 className="vertical-timeline-element-title">
                        Goods at origin port
                      </h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                        width: "200px",
                        padding: "10px",
                        marginLeft: "303px",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid rgb(33, 150, 243)",
                        marginLeft: "-10px",
                      }}
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                      icon={<WorkIcon />}
                    >
                      <h6 className="vertical-timeline-element-title">
                        Goods are in transit
                      </h6>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                        width: "200px",
                        padding: "10px",
                        marginRight: "305px",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid rgb(33, 150, 243)",
                        marginLeft: "-10px",
                      }}
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                      icon={<WorkIcon />}
                    >
                      <h6 className="vertical-timeline-element-title">
                        Arrived at destination port
                      </h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                        width: "200px",
                        padding: "10px",
                        marginLeft: "303px",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid rgb(33, 150, 243)",
                        marginLeft: "-10px",
                      }}
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                      icon={<WorkIcon />}
                    >
                      <h6 className="vertical-timeline-element-title">
                        Customs clearing in progress
                      </h6>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                        width: "200px",
                        padding: "10px",
                        marginRight: "305px",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid rgb(33, 150, 243)",
                        marginLeft: "-10px",
                      }}
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                      icon={<WorkIcon />}
                    >
                      <h6 className="vertical-timeline-element-title">
                        Customs released
                      </h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                        width: "200px",
                        padding: "10px",
                        marginLeft: "303px",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid rgb(33, 150, 243)",
                        marginLeft: "-10px",
                      }}
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                      icon={<WorkIcon />}
                    >
                      <h6 className="vertical-timeline-element-title">
                        Goods in transit to warehouse
                      </h6>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                        width: "200px",
                        padding: "10px",
                        marginRight: "305px",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid rgb(33, 150, 243)",
                        marginLeft: "-10px",
                      }}
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                      icon={<WorkIcon />}
                    >
                      <h6 className="vertical-timeline-element-title">
                        Imported at Asia Direct warehouse
                      </h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                        width: "200px",
                        padding: "10px",
                        marginLeft: "303px",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid rgb(33, 150, 243)",
                        marginLeft: "-10px",
                      }}
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                      }}
                      icon={<WorkIcon />}
                    >
                      <h6 className="vertical-timeline-element-title">
                        Out for delivery
                      </h6>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      iconStyle={{
                        background: "rgb(16, 204, 82)",
                        color: "#fff",
                      }}
                      icon={<StarIcon />}
                    />
                  </VerticalTimeline>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}
