import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SidebarWeb from '../homepage/SidebarwWeb';
import NavbarWeb from '../homepage/NavbarWeb';
import Arrow from "../../assestss/Group 2.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const pageSize = 5;
export default function ClearanceOrder() {
    const [data1, setData1] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        getdata();
    }, []);
    useEffect(() => {
        setFilteredData(
            data1.filter((item) =>
                item.goods_desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.clearance_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.port_of_entry_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.client_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.port_of_exit_name.toLowerCase().includes(searchQuery.toLowerCase()) 
            )
        );
        setCurrentPage(1);                   
    }, [searchQuery, data1]);

    const gtedatauserid = JSON.parse(localStorage.getItem("data")).id
    console.log(gtedatauserid)
    const getdata = () => {
        axios.post(`${process.env.REACT_APP_BASE_URL}CleranceOrderList`,{user_id:gtedatauserid}).then((response) => {
            console.log(response.data.data);
            setData1(response.data.data);
        }).catch((error) => {
            console.log(error.response.data);
        });
    };
    const totalPages = Math.ceil(filteredData.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = filteredData.slice(startIndex, endIndex);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    return (
        <>
            <NavbarWeb />
            <SidebarWeb />
            <section className="manageFrightSec">
                <div className="container-fluid">
                    <div className="row">
                        <div className='col-md-12'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h4 className="para_det">Order clearance</h4>
                                </div>
                                <div>
                                    <input className='my-3 py-1 px-2 mx-2 rounded customSearch' value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search'></input>
                                </div>
                            </div>
                            <div className="card border-0">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped tableICon">
                                            <tbody style={{ border: "none" }}>
                                                {currentData.length > 0 ? (
                                                    currentData.map((item, index) => (
                                                        <tr key={index}>
                                                            <td className="list_bd">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="d-flex align-items-center">
                                                                        <p className="client_nm">{item.client_name}</p>
                                                                        <p className="fright_no mx-2 fs-6">{item.clearance_number}</p>
                                                                    </div>
                                                                    <div className="">
                                                                        <p className="port_date">{new Date(item.created_at).toLocaleDateString("en-GB")}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="">
                                                                    <div className="row">
                                                                        <div className="col-md-3">
                                                                            <div className="">
                                                                                <p className="origin">{item.goods_desc}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-5">
                                                                            <div className="country_mnge">
                                                                                {item.port_of_entry_name}
                                                                                <img src={Arrow} className="flag_img1" />
                                                                                {item.port_of_exit_name}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className=''>
                                                                    {item.clearing_status == "Cleared" ? (
                                                                        <button className="dec_btn dot_icon">
                                                                            <FiberManualRecordIcon />
                                                                            Cleared
                                                                        </button>
                                                                    ) : item.clearing_status == "0" ? (
                                                                        <button className="acc_btn dot_icon">
                                                                            <FiberManualRecordIcon />
                                                                            Accept
                                                                        </button>
                                                                    ) : item.clearing_status == "Still to clear" ? (
                                                                        <button className="dec_btn dot_icon">
                                                                            <FiberManualRecordIcon />
                                                                            Still to clear
                                                                        </button>
                                                                    ) : item.clearing_status == "In process" ? (
                                                                        <button className="dec_btn dot_icon">
                                                                            <FiberManualRecordIcon />
                                                                          In process
                                                                        </button>
                                                                    ) : (
                                                                        ""
                                                                    )}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="8" className="text-center">No results found</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                        <div className='text-center d-flex align-items-center justify-content-center'>
                                            <button disabled={currentPage === 1} className='bg_page' onClick={() => handlePageChange(currentPage - 1)}><i class="fi fi-rr-angle-small-left page_icon"></i></button>
                                            <span className='mx-2'>{` ${currentPage}`}</span>
                                            <button disabled={currentPage === totalPages} className='bg_page' onClick={() => handlePageChange(currentPage + 1)}><i class="fi fi-rr-angle-small-right page_icon"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}