import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { ToastContainer} from "react-toastify";
export default function ReleasedDashboadrs() {
  return (
    <div className="wpWrapper">
      <div className="container-fluid">
        <div className="row"> 
          <div className="row manageFreight">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="freight_hd">Released Dashboard</h4>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                  <div class="me-2">
                    <input
                      class="py-1 rounded ps-1"
                      type="text"
                      placeholder="Search"
                      id="outlined-basic"
                      // value={querry}
                      // onChange={handlechnage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive mt-4">
            <TableContainer
              component={Paper}
              className="table table-striped tableICon">
              <Table className="batch_table">
                <TableHead>
                  <TableRow className="border-bottom">
                    <TableCell className="fw-bold">Freight</TableCell>
                    <TableCell className="fw-bold">Customer Name</TableCell>
                    <TableCell className="fw-bold">Clearing Status</TableCell>
                    <TableCell className="fw-bold">Cargo Inspection</TableCell>
                    <TableCell className="fw-bold">Payment</TableCell>
                    <TableCell className="fw-bold col-1">Release Instruction</TableCell>
                    <TableCell className="fw-bold">Delivery</TableCell>
                    <TableCell className="fw-bold">Status</TableCell>
                  </TableRow>
                </TableHead>
                {/* <TableBody>
                {filterData &&
                  filterData.length > 0 &&
                  filterData.map((item, index) => {
                    console.log(item);
                    return (
                      <>
                        <TableRow key={index + 1} className="border-bottom">
                          <TableCell>{item?.batch_number}</TableCell>
                          <TableCell>{item?.freight}</TableCell>
                          <TableCell>
                            {new Date(item?.date_start).toLocaleDateString(
                              "en-CA"
                            )}
                          </TableCell>
                          <TableCell>{item?.total_dimensions}</TableCell>
                          <TableCell>{item?.total_weight}</TableCell>
                          <TableCell className="col-1">
                            {item?.origin_country_name}
                          </TableCell>
                          <TableCell>{item?.des_country_name}</TableCell>
                          <TableCell>{item?.forwarding_agent}</TableCell>
                          <TableCell
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              handleclickid(item.id);
                            }}
                          >
                            {/* {item?.count_freight} */}
                {/* </TableCell> */}
                {/* <TableCell>{item.track_status}</TableCell> */}
                {/* <div className="dropdown">
                            <a
                              href=""
                              type="button"
                              className="act_btn dropdown-toggle mb-3"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Action
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item det_page">
                                <ul className="p-0 m-0">
                                  <li
                                    className="page_list"
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "15px",
                                    }}
                                    // onClick={() => {
                                    //   handleclickid(item.id);
                                    // }}
                                  >
                                    <RemoveRedEyeIcon /> View Details
                                  </li>
                                  <li
                                    className="page_list"
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "15px",
                                    }}
                                    // onClick={() => {
                                    //   openModal2(item.id);
                                    // }}
                                  >
                                    <ContentCopyIcon /> Edit Batch
                                  </li>
                                  <li
                                    className="page_list"
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "15px",
                                    }}
                                    // onClick={() => {
                                    //   track(item?.id);
                                    // }}
                                  >
                                    <RoomIcon /> Track Batch
                                  </li>
                                  <li
                                    className="page_list"
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "15px",
                                    }}
                                    // onClick={() => {
                                    //   track123(item);
                                    // }}
                                  >
                                    <WarehouseIcon /> Assign Clearing
                                  </li>
                                  <li
                                    className="page_list"
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "15px",
                                    }}
                                    // onClick={() => {
                                    //   handledelivery(item?.id);
                                    // }}
                                  >
                                    <DownloadingIcon /> Loading Details
                                  </li>
                                  <li
                                    className="page_list"
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "15px",
                                    }}
                                    // onClick={() => {
                                    //   handlenavival(item?.id);
                                    // }}
                                  >
                                    <LocalShippingIcon /> Delivery details
                                  </li>
                                  <li
                                    className="page_list"
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "15px",
                                    }}
                                    onClick={() => {
                                      // handleclickdelete(item?.id);
                                    }}
                                  >
                                    <DeleteIcon /> Delete Batch
                                  </li>
                                </ul>
                              </a>
                            </div>
                          </div>
                        </TableRow>
                      </>
                    );
                  })} */}
                {/* </TableBody> */}
              </Table>
            </TableContainer>
          </div>
          <ToastContainer />
          {/* <div className="text-center d-flex justify-content-end align-items-center mt-3">
          <button
            disabled={currentPage === 1}
            className="bg_page"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <i class="fi fi-rr-angle-small-left page_icon"></i>
          </button>
          <span className="mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            disabled={currentPage === totalPages}
            className="bg_page"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <i class="fi fi-rr-angle-small-right page_icon"></i>
          </button>
        </div> */}
        </div>
      </div>
    </div>
  );
}
