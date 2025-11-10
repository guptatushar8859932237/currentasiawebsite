import { Box, Modal } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
const pageSize = 10;
export default function Cashbook() {
  const [data, setData] = useState([]);
  const [client, setClient] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loader,setLoader]=useState(true)
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [cashdata, setCashdata] = useState({});
  useEffect(() => {
    getCashbookList();
    getClients();
    getOrderData();
  }, []);
  const getCashbookList = async () => {
    setLoader(true)
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}GetCashbookList`
      );
      setLoader(false)
      setData(response.data.data || []);
    } catch (error) {
      setLoader(false)
      console.error("Error fetching cashbook list:", error.message);
    }
  }
  const getClients = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}client-list`
      );
      setClient(response.data.data || []);
    } catch (error) {
      console.error("Error fetching clients:", error.message);
    }
  };
  
  const getOrderData = async (value) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}OrderInvoiceList?client_id=${value}`
      );
      console.log(response.data.data)
      setTableData(response.data.data || []);
    } catch (error) {
      console.error("Error fetching order data:", error.message);
    }
  };
  const handleDropdownChange = async (e, rowId, field) => {
    // console.log(originalRow)
    const { value } = e.target;
    console.log(value, rowId,field)
    const originalRow = data.find((row) => row.id === rowId);
    const payload = {
      cashbook_id: rowId,
      customer_id: field === "customer_id" ? value : originalRow.customer_id,
      order_id: field === "order_ID" ? value : originalRow.order_id,
      allocated: field === "allocated" ? value : originalRow.allocated,
      receipt: originalRow.receipt,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}ADDcashbook`,
        payload
      );
      toast.success(response.data.message);
      getOrderData(value)
      getCashbookList(); 
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update row.");
    }
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };
  const filteredData = data.filter((item) => {
    return (
      item?.description_on_receipt
        ?.toLowerCase()
        ?.includes(searchQuery.toLowerCase()) ||
      item.receipt.toString().includes(searchQuery)
    );
  });
  const totalPage = Math.ceil(filteredData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = filteredData.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const openModal1 = () => {
    setIsModalOpen1(true);
  };
  const closeModal1 = () => {
    setIsModalOpen1(false);
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    setCashdata({ ...cashdata, [name]: value });
  };
  return (
    <>
    {loader ? (
      <div class="loader-container">
        <div class="loader"></div>
        <p class="loader-text">Updating... This may take some time</p>
      </div>
    ) : (
    <div className="wpWrapper">
      <div className="container-fluid">
        <div className="card-body">
          <div className="col-12 d-flex justify-content-between">
            <div>
              <input
                className="py-1 rounded ps-1"
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search"
              />
            </div>
            <div>
              {/* <button className="btn btn-secondary" onClick={openModal1}>
                Add Cashbook
              </button> */}
            </div>
          </div>
          <div className="table-responsive mt-2">
            <table className="table table-striped tableICon">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Bank Ref.</th>
                  <th>Description of Receipt</th>
                  <th>Receipt</th>
                  <th>Payment</th>
                  <th>Customer</th>
                  <th>Shipment Ref</th>
                  <th>Allocated</th>
                </tr>
              </thead>
              <tbody>
                {currentData.length > 0 ? (
                  currentData.map((item) => (
                    <tr key={item.id}>
                      <td>{new Date(item.date).toLocaleDateString("en-GB")}</td>
                      <td>{item.bank_ref}</td>
                      <td>{item.description_on_receipt}</td>
                      <td>{item.receipt}</td>
                      <td>{item.payment}</td>
                      <td>
                        <select
                          className="form-control"
                          name="customer_id"
                          onChange={(e) =>
                            handleDropdownChange(e, item.id, "customer_id")}
                          value={item.customer_id || ""}>
                          <option value="">Select...</option>
                          {client.map((clientItem) => (
                            <option key={clientItem.id} value={clientItem.id}>
                              {clientItem.full_name}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-control"
                          name="order_ID"
                          onChange={(e) =>
                            handleDropdownChange(e, item.id, "order_ID")
                          }
                          value={item.order_id || ""}
                        >
                          <option value="">Select...</option>
                          {tableData.map((order) => (
                            <option key={order.order_ID} value={order.order_ID}>
                              {order.order_number}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-control"
                          name="allocated"
                          onChange={(e) =>
                            handleDropdownChange(e, item.id, "allocated")}
                          value={item.allocated || ""}>
                          <option value="">Select...</option>
                          <option value="YES">YES</option>
                          <option value="NO">NO</option>
                        </select>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">
                      No data available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="text-center d-flex justify-content-end align-items-center">
              <button
                disabled={currentPage === 1}
                className="bg_page"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <i className="fi fi-rr-angle-small-left page_icon"></i>
              </button>
              <span className="mx-2">{`Page ${currentPage} of ${totalPage}`}</span>
              <button
                disabled={currentPage === totalPage}
                className="bg_page"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <i className="fi fi-rr-angle-small-right page_icon"></i>
              </button>
            </div>
          </div>
          <Modal
            open={isModalOpen1}
            onClose={closeModal1}
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
                width: 550,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
              }}
            >
              <h2 id="modal-modal-title">Cashbook</h2>
              <div className="row my-3  ">
                <div className="col-6">
                  <label>Date</label>
                  <input
                    type="date"
                    name="date"
                    onChange={handlechange}
                    className="form-control"
                  ></input>
                </div>
                <div className="col-6">
                  <label>Bank Reference </label>
                  <input
                    name="date"
                    onChange={handlechange}
                    className="form-control"
                    placeholder="Bank Reference"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <label>Description Receipt</label>
                  <input
                    id="shipper3"
                    name="desc_reciept"
                    style={{ cursor: "pointer" }}
                    className="form-control"
                    onChange={handlechange}
                    placeholder="Description Receipt"
                  />
                </div>
                <div className="col-6">
                  <label>Receipt Num </label>
                  <input
                    id="shipper3"
                    name="reciept"
                    style={{ cursor: "pointer" }}
                    className="form-control"
                    onChange={handlechange}
                    placeholder="Receipt Num"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <label>Payment</label>
                  <input
                    id="shipper3"
                    name="payment"
                    style={{ cursor: "pointer" }}
                    className="form-control"
                    onChange={handlechange}
                    placeholder="Enter Amount"
                  />
                </div>
              </div>
              <Button className="btn btn-secondary">Apply</Button>
            </Box>
          </Modal>
        </div>
        <ToastContainer />
      </div>
    </div>
            )}
            </>
  );
}
