import React from 'react'
import Topbar from '../Topbar'
import Navbar from './Navbar'
import image1 from '../../assestss/slide3.jpg'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { WidthFull } from '@mui/icons-material'
export default function Shipment() {
    const navigate = useNavigate()
    const hanldenavigate =()=>{
        navigate("/addfreight")
    }
    return (
        <div>
            <Topbar />
            <Navbar />
            <section
                className="bannerBg"
                style={{ backgroundImage: `url(${image1})` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Shipment</h1>
                            <h5>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. illo quae
                                vero{" "}
                            </h5>
                        </div>
                    </div>
                </div>
            </section>
            <div className='d-flex mx-4 justify-content-between my-3'>
                <div>
                    <input className='ms-auto my-3 py-2 px-2 mx-2 rounded border'
                        placeholder='Search Shipment...'></input>
                </div>
                <div>
                    <button
                        className="btn text-white fw-bolder px-4 py-2"
                          onClick={hanldenavigate}
                        style={{ backgroundColor: "#ce1d22" }}
                    >
                        Add Freight
                    </button>
                </div>
            </div>
            <div>
                <div className="tableManageFright mainTableClearnce  rounded p-2">
                    <table className="table border">
                        <thead>
                            <tr >
                                {/* <th scope="col">Date</th> */}
                                {/* <th scope="col">Client Name</th> */}
                                {/* <th scope="col">Freight</th> */}
                                <th scope="col" style={{width:"25%"}}>In-Transit</th>
                                <th scope="col" style={{width:"25%"}}>Shipments(All)</th>
                                <th scope="col" style={{width:"25%"}}>Drafts((Pending inquiry))</th>
                                <th scope="col" style={{width:"25%"}}>Archived (Older then 120 days)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className='col-1'></td>
                                <td className='col-1'></td>
                                {/* <td onClick={() => { handleclicknavigfh(item.id) }}>{formatteddate}</td> */}
                                {/* <td onClick={() => { handleclicknavigfh(item.id) }}>{item?.client_name}</td> */}
                                {/* <td onClick={() => { handleclicknavigfh(item.id) }}>{item.freight}</td> */}
                                {/* <td onClick={() => { handleclicknavigfh(item.id) }}>{item?.no_of_packages}</td> */}
                                <td ></td>
                                <td ></td>
                                <td>
                                    <div className="dropdown">
                                      
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}
