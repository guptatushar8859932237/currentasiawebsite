import axios from "axios";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import airImg from "../../assestss/airFrieght.png";
import seaImg from "../../assestss/seaImg.jpg";
import roadImg from "../../assestss/roadImg.jpg";
import wareImg from "../../assestss/wareImg.jpg";
import customImg from "../../assestss/customImg.jpg";
import compleImg from "../../assestss/compleImg.webp";

export default function Trackingsection() {
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const hanldechnage = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const ghandlelcick = () => {
    handlevalidate(data);
  };

  const handlevalidate = (value) => {
    let error = {};
    if (!value.name23) {
      error.name23 = "Name is Required";
    } else {
      if (localStorage.getItem("data") === null || undefined) {
        navigate("/login");
      } else {
        navigate("/Add-Custom-clearence");
      }
    }
    setError(error);
  };

  const [trackerror, setTrackerror] = useState({});
  const [track, setTrack] = useState({});

  const trackingnumber = (e) => {
    const { name, value } = e.target;
    setTrack({ ...track, [name]: value });
  };

  const onclicktrack = () => {
    handletach(track);
  };

  const handletach = (value) => {
    let trackerror = {};
    if (!value.order_id) {
      trackerror.order_id = "Consingment Number is Required";
    } else {
      apihit();
    }
    setTrackerror(trackerror);
  };

  const apihit = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}get-order-status`, {
        order_id: track.order_id,
      })
      .then((response) => {
        toast.success(response.data.message);
        navigate("/Tracking-status", { state: { data12: response.data.data } });
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div>
      <section className="trackingSec">
        <div className="container">
          <div className="row trackRow  wow fadeInDown">
            <div className="col-lg-6 pe-0 ps-0">
              <div className="traceSpace">
                <h2>Track &amp; Trace</h2>
                <div className="inputTrack">
                  <div>
                    <input
                      type="text"
                      name="order_id"
                      onChange={trackingnumber}
                      placeholder="Tracking Number"
                    />
                    <p className="text-danger">{trackerror.order_id}</p>
                  </div>
                  <div>
                    <button onClick={onclicktrack}>Track</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pe-0 ps-0">
              <div className="traceSpace">
                <h2>Custom Clearance</h2>
                <div className="inputTrack">
                  <div>
                    <input
                      type="text"
                      name="name23"
                      onChange={hanldechnage}
                      placeholder="Enter name"
                    />
                    <p className="text-danger">{error.name23}</p>
                  </div>
                  <div>
                    <button onClick={ghandlelcick}>Add Clearance</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div
              className="row pt80  wow fadeInDown "
              style={{ paddingTop: "75px", paddingBottom: "50px" }}
            >
              <div className="col-lg-6">
                <h2 className="safeHead">Safe Reliable Cargo Services</h2>
              </div>
              <div className="col-lg-6">
                <p className="paraSafe">
                  Safe Reliable Cargo Solutions is an essential aspect of any
                  logistics operation. Whether you are shipping valuable goods.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="row roadFrieght pt50  wow fadeInDown">
              <div className="col-lg-4 mb-4">
                <Link to="/airFreight">
                  <div className="newCard">
                    <div>
                      <div className="iconFright">
                        <i className="fi fi-rr-plane" />
                      </div>

                      <h2>Air Freight</h2>
                      <p className="paraSafe">
                        Air Freight Services are designed to meet your most
                        demanding logistics needs, providing a swift and secure
                        transportation solution that connects you to
                        destinations worldwide.
                      </p>
                    </div>
                    <div className="imgNewCard">
                      <div className="cardOverlay">
                        <img src={airImg} alt="" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 mb-4">
                <Link to="/seaFreight">
                  <div className="newCard">
                    <div>
                      <div className="iconFright">
                        <i className="fi fi-rr-ship" />
                      </div>
                      <h2>Sea Freight</h2>
                      <p className="paraSafe">
                        Sea Freight Services offer a reliable and cost-effective
                        solution for your global shipping needs.
                      </p>
                    </div>
                    <div className="imgNewCard">
                      <div className="cardOverlay">
                        <img src={seaImg} alt="" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 mb-4">
                <Link to="/roadFreight">
                  <div className="newCard">
                    <div>
                      <div className="iconFright">
                        <i className="fi fi-rs-shipping-timed" />
                      </div>

                      <h2>Road Freight</h2>
                      <p className="paraSafe">
                        Road Freight Services are the backbone of commerce in
                        South Africa and the SADC regions.
                      </p>
                    </div>

                    <div className="imgNewCard">
                      <div className="cardOverlay">
                        <img src={roadImg} alt="Road Freight" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="row roadFrieght wow fadeInDown">
              <div className="col-lg-4 mb-4">
                <Link to="/warehouse">
                  <div className="newCard">
                    <div>
                      <div className="iconFright">
                        <i className="fi fi-rs-warehouse-alt" />
                      </div>
                      <h2>Warehousing</h2>
                      <p className="paraSafe">
                        Warehousing Solutions tailored to the dynamic needs of
                        businesses in South Africa and beyond.
                      </p>
                    </div>
                    <div className="imgNewCard">
                      <div className="cardOverlay">
                        <img src={wareImg} alt="Warehousing" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 mb-4">
                <Link to="/customClear">
                  <div className="newCard">
                    <div>
                      <div className="iconFright">
                        <i className="fi fi-tr-clear-alt" />
                      </div>
                      <h2>Customs Clearing Services</h2>
                      <p className="paraSafe">
                        Customs Clearing Services that streamline your import
                        and export processes.
                      </p>
                    </div>
                    <div className="imgNewCard">
                      <div className="cardOverlay">
                        <img src={customImg} alt="Customs Clearing" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 mb-4">
                <Link to="/ComplianceSupportServices">
                  <div className="newCard">
                    <div>
                      <div className="iconFright">
                        <i className="fi fi-rs-headset" />
                      </div>
                      <h2>Compliance Support Services</h2>
                      <p className="paraSafe">
                        Compliance Support Services are the cornerstone of
                        seamless shipping and logistics operations.
                      </p>
                    </div>
                    <div className="imgNewCard">
                      <div className="cardOverlay">
                        <img src={compleImg} alt="Compliance Support" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}
