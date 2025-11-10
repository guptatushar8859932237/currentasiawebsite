import React, { useState } from "react";
import Topbar from "../Topbar";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Contactus() {
  const [data, setData] = useState({
    name: "",
    phone_no: "",
    email: "",
    subject: "",
    message: "",
  });
  const naviagte = useNavigate();
  const handlechnage = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const postdata = () => {
    const data1 = {
      name: data.name,
      phone_no: data.phone_no,
      email: data.email,
      subject: data.subject,
      message: data.message, 
     nature_of_enq:data.enquiryType, 
     country:data.country
    };
    axios
      .post(`${process.env.REACT_APP_BASE_URL}addContactUs`, data1)
      .then((response) => {
        console.log(response.data.message);
        toast.success(response.data.message);
        setTimeout(() => {
          naviagte("/");
        }, [1000]);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  const openGmail = () => {
    const email = "sa@asiadirect.africa";
    const subject = "Inquiry";
    const body = "Hello, I would like to know more...";
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
      "_blank"
    );
  };
  return (
    <div>
      <div>
        <Topbar />
        <Navbar />
        <>
          <section>ccccccccccccc
            <div class="container my-5">
              <div class="row justify-content-center mt-5 align-items-center asiaContact">
                <div class="col-md-9">
                  <div class="div1 mb-4">
                    <h2 class="heading_1">Get in touch</h2>
                  </div>
                  <form method="post">
                    <div class="row">
                      <div class="col-md-6">
                        <label class="div_label">Name <span className="redStar">*</span></label>
                        <input
                          type="text"
                          class="box1 form-control "
                          name="name"
                          placeholder="Name"
                          onChange={handlechnage}
                          required
                        />
                      </div>
                      <div class="col-md-6">
                        <label class="div_label">Phone No <span className="redStar">*</span></label>
                        <input
                          type="text"
                          class="box1 form-control "
                          name="phone_no"
                          placeholder="Phone no."
                          onChange={handlechnage}
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label class="div_label">Email <span className="redStar">*</span></label>
                        <input
                          type="email"
                          name="email"
                          class="box1 form-control"
                          placeholder="Email"
                          onChange={handlechnage}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label class="div_label">Subject <span className="redStar">*</span></label>
                        <input
                          type="text"
                          name="subject"
                          class="box1 form-control"
                          placeholder="Subject"
                          onChange={handlechnage}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label class="div_label">Nature of Enquiry <span className="redStar">*</span></label>
                        <div>
                          <select name="enquiryType" required>
                            <option value="">Select...</option>
                            <option value="Sales">Sales</option>
                            <option value="Accounts">Accounts</option>
                            <option value="Support">Support</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label class="div_label">Country / Office <span className="redStar">*</span></label>
                        <div>
                          <select name="country" required>
                            <option value="">Select...</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Dubai">Dubai</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label class="div_label">Message <span className="redStar">*</span></label>
                        <textarea
                          class="box2 form-control "
                          name="message"
                          onChange={handlechnage}
                          required
                        ></textarea>
                      </div>
                    </div>
<div className="text-center">

                    <button className="btn_add_web" onClick={postdata}>
                      Submit
                    </button>
</div>
                  </form>
                </div>
                <div class="col-md-3">
                  <div class="main3">
                    <div class="">
                      <div
                        class="d-flex mb-3"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          window.open(
                            "https://www.google.com/maps?q=Johannesburg, South+Africa",
                            "_blank"
                          )
                        }
                      >
                        <div class="">
                          <i class="fi fi-rr-marker icon1"></i>
                        </div>
                        <div class="">
                          <h6 class="call_heading">Address:</h6>
                          <p class="para1">Johannesburg, South Africa</p>
                        </div>
                      </div>
                      <div class="d-flex mb-3">
                        <div class="">
                          <i class="fi fi-rr-phone-call icon1"></i>
                        </div>
                        <div  style={{ cursor: "pointer" }}>
                          <h6 className="call_heading">Phone Number:</h6>

                         <a href="tel:+27104480733"> <p className="para1">+271 0448 0733</p></a>
                        </div>
                      </div>
                      <div class="d-flex mb-3">
                        <div class="">
                          <i class="fi fi-rr-envelope icon1"></i>
                        </div>
                        <div
                          onClick={openGmail}
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          <h6 className="call_heading">Email Address:</h6>
                          <p className="para1">sa@asiadirect.africa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}
