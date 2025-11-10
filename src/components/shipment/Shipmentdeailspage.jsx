import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
export default function Shipmentdeailspage() {
  const navigate = useNavigate();
  const [datat1, setDatat1] = useState("");
  const [tabledata, setTabledata] = useState([]);
  const location = useLocation();
  console.log(location.state.data[0]);
  const datat = location.state.data[0];
  const handleclick = () => {
    navigate("/admin/manage-shipment");
  };
  useEffect(() => {
    GetShipmentDetails();
  }, []);
  const GetShipmentDetails = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}GetShipmentDetails`, {
        shipment_id: location.state.data[0].id,
      })
      .then((response) => {
        setDatat1(response.data.shipment);
        setTabledata(response.data.details);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
 
  return (
    <div className="wpWrapper">
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="container">
                <div className="client_details">
                  <div className="d-flex">
                    <div>
                      <ArrowBackIcon
                        onClick={handleclick}
                        className="mt-2 me-2"
                      />
                    </div>
                    <div>
                      <h2>Shipment Details</h2>
                    </div>
                  </div>
                  <div className="card border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">ETD</h6>
                            <p>{new Date(datat1?.ATD).toLocaleDateString("en-GB")}</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">ETA</h6>
                            <p>{new Date(datat1?.ETD).toLocaleDateString("en-GB")}</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">Carrier</h6>
                            <p>{datat1?.carrier}</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">Container No</h6>
                            <h6>{datat1?.container}</h6>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">Destination Agent</h6>
                            <h6>{datat1?.destination_agent}</h6>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">Freight</h6>
                            <p>{datat1?.freight}</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">Load</h6>
                            <p>{datat1?.load}</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">Origin Agent</h6>
                            <p>{datat1?.origin_agent}</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">Port of Discharge</h6>
                            <p>{datat1?.port_of_discharge}</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">Port of Loading</h6>
                            <p>{datat1?.port_of_loading}</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">Release Type</h6>
                            <p>{datat1.release_type}</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">Status</h6>
                            <p>{datat1.status}</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">Vessel</h6>
                            <p>{datat1?.vessel}</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">Waybill</h6>
                            <p>{datat1.waybill}</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">Country of Origin</h6>
                            <p>{datat.origin_country_name}</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">Country of Destination</h6>
                            <p>{datat.des_country_name}</p>
                          </div>
                          
                        </div>
                        <div className="row">
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">View Document</h6>
                            <a href={`${process.env.REACT_APP_BASE_URLdocument}${datat?.document}`}>View Document</a>
                            {/* <p>{datat.document}</p> */}
                          </div>
                    
                        </div>
                        <div className="col-md-3">
                          <div className="inner_section">
                            <h6 className="fw-bold">Date of Dispatch</h6>
                            <p >{new Date(datat1?.date_of_dispatch).toLocaleDateString("en-GB")}</p>
                            {/* <p>{datat.document}</p> */}
                          </div>
                    
                        </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
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
                    </tr>
                  </thead>
                  <tbody>
                    {tabledata?.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          {item?.freight_number} / {item?.order_number}
                        </td>
                        <td>{item?.client_name}</td>
                        <td>{item?.hawb}</td>
                        <td>{item?.weight}</td>
                        <td>{item?.dimensions}</td>
                        <td>{item?.nature_of_goods}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
