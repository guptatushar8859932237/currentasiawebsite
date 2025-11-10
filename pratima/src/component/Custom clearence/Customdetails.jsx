import React, { useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Topbar from "../Topbar";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import { Link, useLocation } from "react-router-dom";

export default function CustomDetails() {
  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    window.scrollTo(0, 0);
  };
  const location = useLocation();
  const data1 = location?.state?.data;
  console.log(data1);
  const data = {
    clearing_status: data1?.clearing_status,
    comment_on_document: data1?.comment_on_docs,
    customer_reference: data1?.customer_ref,
    destination: data1?.destination,
    goods_description: data1?.goods_desc,
    port_of_entry: data1?.port_of_entry_name,
    port_of_exit: data1?.port_of_exit_name,
    document_upload: data1?.document_upload,
  };
  const excludedKeys = ["Comment", "Dimension", "Hazardous"]; // Add keys you want to exclude
  const filteredData = Object.fromEntries(
    Object.entries(data).filter(([key]) => !excludedKeys.includes(key))
  );
  return (
    <>
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
                        <h3 class="fre_det_hd">Custom Clearance Details</h3>
                      </div>
                      <div class="col-md-6">
                        <nav class="float-start float-md-end">
                          <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item">
                              <a href="">Home</a>
                            </li>
                            <li class="breadcrumb-item active">
                              <Link to={'/Custom-clearence'}>Clearance Details</Link>
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
                                <p className="ship_hd">Pickup Address</p>
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
                                <p class="client_para1">000000</p>
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
                                <p class="client_para1">India</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="client_para1 mb-2">Postal Code:</p>
                              </td>
                              <td>
                                <p class="client_para1 mb-2">000252</p>
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
                                <p class="client_para1">0000000000000</p>
                              </td>
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
                                <p class="client_para1">000000</p>
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
                                <p class="client_para1">Gunagazhou</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="client_para1">Country:</p>
                              </td>
                              <td>
                                <p class="client_para1">China</p>
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
                                <p class="client_para1">00000000000000</p>
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
                              <td>
                                <p className="ship_hd">POL Information</p>
                              </td>
                            </tr>
                            <tr>
                              <td class="fright_num">
                                <p class="client_para1">Place of loading:</p>
                              </td>
                              <td>
                                <p class="client_para1"></p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="client_para1">Port of Loading:</p>
                              </td>
                              <td>
                                <p class="client_para1"></p>
                              </td>
                            </tr>
                            <tr>
                              <td className="instr_td">
                                <p className="client_para1 mb-2">
                                  Instructions:
                                </p>
                              </td>
                              <td>
                                <p className="client_para1 mb-2"></p>
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
                                <p class="client_para1"></p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="client_para1">Efficiency:</p>
                              </td>
                              <td>
                                <p class="client_para1"></p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="client_para1">Incoterms:</p>
                              </td>
                              <td>
                                <p class="client_para1"></p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="client_para1">Insurance:</p>
                              </td>
                              <td>
                                <p class="client_para1"></p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="client_para1 mb-2">Warehouse:</p>
                              </td>
                              <td>
                                <p class="client_para1 mb-2"></p>
                              </td>
                            </tr>
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
                                <p class="client_para1"></p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="client_para1">Port of Discharge:</p>
                              </td>
                              <td>
                                <p class="client_para1"></p>
                              </td>
                            </tr>
                            <tr>
                              <td className="instr_td">
                                <p className="client_para1 mb-2">
                                  Instructions:
                                </p>
                              </td>
                              <td>
                                <p className="client_para1 mb-2"></p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="ship_hd">Comment</p>
                              </td>
                              <td>
                                <p class="client_para1"></p>
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
                                <p class="client_para1"></p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="client_para1">Hazardous:</p>
                              </td>
                              <td>
                                <p class="client_para1"></p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="client_para1">Industry:</p>
                              </td>
                              <td>
                                <p class="client_para1"></p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="client_para1">Packaging:</p>
                              </td>
                              <td>
                                <p class="client_para1"></p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="client_para1">No of Packages:</p>
                              </td>
                              <td>
                                <p class="client_para1"></p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="client_para1">Dimensions(cbm):</p>
                              </td>
                              <td>
                                <p class="client_para1"></p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="client_para1">Weight(kgs):</p>
                              </td>
                              <td>
                                <p class="client_para1"></p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="client_para1">Vol weight(kgs):</p>
                              </td>
                              <td>
                                <p class="client_para1"></p>
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
                                <p className="client_para1 mb-3">
                                  Origin Handling
                                </p>
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
              <div className="col-md-4">
                <div className="card desti_card">
                  <div className="card-body">
                    <div className="">
                      <h6 className="orgin_hd">Attachments</h6>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <Container className="mt-5">
                        <Row>
                            {Object.entries(filteredData).map(([key, value]) => (
                                <Col key={key} lg={4} className="">
                                    <Form.Group className="mb-3">
                                        <Form.Label className='text-capitalize'>{key.replace(/_/g, ' ')}</Form.Label>
                                        <Form.Control type="text" placeholder={value} readOnly />
                                    </Form.Group>
                                </Col>
                            ))}
                        </Row>
                    </Container> */}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
