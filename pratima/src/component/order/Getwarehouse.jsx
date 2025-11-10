import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SidebarWeb from "../homepage/SidebarwWeb";
import NavbarWeb from "../homepage/NavbarWeb";
import Arrow from "../../assestss/Group 2.png";
const pageSize = 5;
export default function Getwarehouse() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const userdata = JSON.parse(localStorage.getItem("data"));
  const navigaet = useNavigate();
  const getdata = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}order-details`, {
        user_id: userdata.id,
      })
      .then((response) => {
        setData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const handleclcick = (id, order_id) => {
    const userOrder = data.filter((item) => {
      return item.id === id;
    });
    axios
      .post(`${process.env.REACT_APP_BASE_URL}get-order-status`, {
        order_id: `${order_id}`,
      })
      .then((response) => {
        if (response.data.success === true) {
          navigaet("/Tracking-status", {
            state: { data12: response.data.data },
          });
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const getwarehouse = (id, order_id) => {
    const userOrder = data.filter((item) => {
      return item.id === id;
    });

    navigaet("/getwarehouse", { state: {} });
  };
  useEffect(() => {
    getdata();
  }, []);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const filteredData = data.filter((item) => {
    console.log(item);
    return (
      String(item.full_name)
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      item.freight.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.freight_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nature_of_goods.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.product_desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.order_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(item.cartons).toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(item.order_id).toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(item.no_of_packages)
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      String(item.delivery_to_country)
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      String(item.collection_from_country)
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  });
  const totalPage = Math.ceil(filteredData.length / pageSize);
  const startindex = (currentPage - 1) * pageSize;
  const endIndex = startindex + pageSize;
  const currentdata = filteredData.slice(startindex, endIndex);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };
  const handleclickorder = (id) => {
    const orderdata = data.filter((item) => {
      return item.id === id;
    });
    console.log(orderdata[0]);
    navigaet("/Order-details-conform", { state: { data: orderdata[0] } });
  };
  return (
    <div>
      <NavbarWeb />
      <SidebarWeb />
      <>
        <section className="manageFrightSec">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                {data.length == 0 ? (
                  <p className="text-center my-5">
                    !!! Please Add freight & clearance for get our service !!!
                  </p>
                ) : (
                  <>
                    <div className="tableManageFright">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h4 className="para_det">Order Detail's</h4>
                        </div>
                        <div>
                          <input
                            className="my-3 py-1 px-2 rounded"
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder="Search"
                          ></input>
                        </div>
                      </div>
                      <div className="card border-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-striped tableICon">
                              <tbody>
                                {currentdata &&
                                  currentdata.length > 0 &&
                                  currentdata.map((item, index) => {
                                    console.log(item);
                                    const datenw = new Date(item.date);
                                    const options = {
                                      year: "numeric",
                                      month: "2-digit",
                                      day: "2-digit",
                                    };
                                    const formattedDate =
                                      datenw.toLocaleDateString(
                                        "en-GB",
                                        options
                                      );
                                    console.log(formattedDate);
                                    return (
                                      <>
                                        <tr key={index}>
                                          <td className="list_bd">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="d-flex align-items-center">
                                                <p
                                                  className="client_nm"
                                                  onClick={() => {
                                                    handleclickorder(item.id);
                                                  }}
                                                >
                                                  {item.full_name}
                                                </p>
                                                <p
                                                  className="fright_no mx-2 fs-6"
                                                  onClick={() => {
                                                    handleclickorder(item.id);
                                                  }}
                                                >
                                                  {item.freight_number} /{" "}
                                                  {item.order_id}
                                                </p>
                                              </div>
                                              <div
                                                className=""
                                                onClick={() => {
                                                  handleclickorder(item.id);
                                                }}
                                              >
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
                                                    <p className="origin">
                                                      {item.product_desc}
                                                    </p>
                                                  </div>
                                                </div>
                                                <div
                                                  className="col-md-5"
                                                  onClick={() => {
                                                    handleclickorder(item.id);
                                                  }}
                                                >
                                                  <div className="country_mnge">
                                                    <img
                                                      src={`${process.env.REACT_APP_FLAGURL}${item.collection_from_country_flag_url}`}
                                                      alt="flag img"
                                                      className="flag_img"
                                                    />
                                                    {
                                                      item.collection_from_country
                                                    }
                                                    <img
                                                      src={Arrow}
                                                      className="flag_img1"
                                                    />
                                                    <img
                                                      src={`${process.env.REACT_APP_FLAGURL}${item.delivery_to_country_flag_url}`}
                                                      alt="flag img"
                                                      className="flag_img"
                                                    />
                                                    {item.delivery_to_country}
                                                    <span className="fright_type">
                                                      ({item.freight})
                                                    </span>
                                                  </div>
                                                </div>
                                                <div className="col-md-2">
                                                  <div className="text-center">
                                                    <p className="origin">
                                                      {item.nature_of_goods}
                                                    </p>
                                                  </div>
                                                </div>
                                                <div className="col-md-2 d-flex justify-content-between">
                                                  <div className=" ms-5">
                                                    <i
                                                      className="fi fi-ss-warehouse-alt"
                                                      style={{
                                                        cursor: "pointer",
                                                      }}
                                                      onClick={() => {
                                                        getwarehouse(
                                                          item.id,
                                                          item.order_id
                                                        );
                                                      }}
                                                    />
                                                  </div>
                                                  <div className="">
                                                    <i
                                                      className="fi fi-br-track"
                                                      style={{
                                                        cursor: "pointer",
                                                      }}
                                                      onClick={() => {
                                                        handleclcick(
                                                          item.id,
                                                          item.order_id
                                                        );
                                                      }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      </>
                                    );
                                  })}
                              </tbody>
                            </table>
                            <div className="text-center">
                              <button
                                disabled={currentPage === 1}
                                className="btn rounded"
                                onClick={() =>
                                  handlePageChange(currentPage - 1)
                                }
                              >
                                <i class="fi fi-rr-angle-small-left page_icon"></i>
                              </button>
                              <span>{` ${currentPage}`}</span>
                              <button
                                disabled={currentPage === totalPage}
                                className="btn rounded"
                                onClick={() =>
                                  handlePageChange(currentPage + 1)
                                }
                              >
                                <i class="fi fi-rr-angle-small-right page_icon"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
