import React, { useEffect, useState, useContext } from 'react';
import Topbar from '../Topbar';
import Navbar from '../homepage/Navbar';
import Footer from '../homepage/Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import image1from from "../../assestss/logoasia.png"
import { MyContext } from '../../MyContext';


export default function UpdateProfile() {

    const [selectedImage, setSelectedImage] = useState('default-image-url.jpg');
    const [userData, setUserData] = useState({});
    const [error, setError] = useState({});
    const [country, setCountry] = useState([]);
    const [file, setFile] = useState(null);
    const { text, setText } = useContext(MyContext)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
        setFile(file);
    };

    const handlefunclocal = () => {
        localStorage.setItem("profile2", JSON.stringify(selectedImage))
    }

    const fetchData = () => {
        const user = JSON.parse(localStorage.getItem('data'));
        axios.post(`${process.env.REACT_APP_BASE_URL}client-details`, {
            client_id: user?.id
        })
            .then((response) => {
                console.log(response.data.data)
                setUserData(response.data.data);
                if (response.data.data.profile) {
                    setSelectedImage(response?.data?.data?.profile);
                }
            })
            .catch((error) => {
                toast.error(error.response.data.msg);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleUpdate = () => {
        handlevalidate(userData)
    }

    const handlevalidate = (value) => {
        let error = {}
        if (!value.telephone) {
            error.telephone = "telephone is required"
            toast.error("Telephone is Required")
        }
        if (!value.cellphone) {
            error.cellphone = "Cellphone is Required"
        } else {
            apihit()
        }
        setError(error)
    }

    const apihit = () => {
        const user = JSON.parse(localStorage.getItem('data'));
        const formData = new FormData();
        formData.append('client_id', user.id);
        formData.append('email', userData.email);
        formData.append('address_1', userData.address_1);
        formData.append('address_2', userData.address_2);
        formData.append('city', userData.city);
        formData.append('code', userData.code);
        formData.append('telephone', userData.telephone);
        formData.append('contact_person', userData.contact_person);
        formData.append('cellphone', userData.cellphone);
        formData.append('country', userData.country);
        formData.append('province', userData.province);
        formData.append('client_name', userData.full_name);
        formData.append('importers_ref', userData.importers_ref);
        formData.append('tax_ref', userData.tax_ref);
        formData.append('company_id', userData.company_id);
        if (file) {
            formData.append('profile', file);
        }
        console.log(formData)
        axios.post(`${process.env.REACT_APP_BASE_URL}update-client-profile`, formData)
            .then((response) => {
                handlefunclocal();

                setText(response.data.data[0].profile)
                console.log(response.data.data);
                toast.success(response.data.message);
                setTimeout(() => {
                    navigate('/My-profile', { state: { dataloc: file } });
                }, 500);
            })
            .catch((error) => {
                console.log(error.response.data.message);
                toast.error(error.response.data.message);
            });
    };
    const file1212 = userData.profile
    console.log(file1212)
    console.log(process.env.REACT_APP_BASE_URL_image)

    const handlekeypreaa = (e) => {
        if (e.charCode < 48 || e.charCode > 57) {
            e.preventDefault();
        }
    };


    const getdata = () => {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}GetCountries`)
            .then((response) => {
                console.log(response.data.data)
                setCountry(response.data.data);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };
    useEffect(() => {
        getdata()
    }, [])
    return (
        <>
            <Topbar />
            <Navbar />
            <section
                className="bannerBg"
                style={{
                    backgroundImage: `url($))`,
                    position: "relative"
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Profile </h1>
                            <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. illo quae vero{" "}</h5>
                        </div>
                    </div>
                </div>
            </section>
            <div className="profileSec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="profileBgImg d-flex align-self-center h-100 justify-content-center">
                                <div className="profileFrontImg">
                                    {
                                        userData.profile ? (
                                            <img src={`${process.env.REACT_APP_BASE_URL_image}${userData.profile}`} style={{ maxWidth: '100%' }} />
                                        ) : (
                                            <img src={image1from} style={{ maxWidth: '100%' }} />
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="mainRightForm">
                                <div className="row">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="">Full Name</label>
                                            <input type="text" name='full_name' value={userData?.full_name} onChange={handleChange} className="form-control" />
                                        </div>
                                        <div className="col">
                                            <label>Email </label>
                                            <input type="email" name='email' value={userData?.email} onChange={handleChange} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="">Address 1</label>
                                            <input type="text" name='address_1' value={userData?.address_1} onChange={handleChange} className="form-control" />
                                        </div>
                                        <div className="col">
                                            <label>Address 2</label>
                                            <input type="text" name='address_2' value={userData?.address_2} onChange={handleChange} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="">City</label>
                                            <input type="text" name='city' value={userData?.city} onChange={handleChange} className="form-control" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="">Code</label>
                                            <input type="text" name='code' value={userData?.code} onChange={handleChange} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="">Cellphone</label>
                                            <input type="text" name='cellphone' value={userData?.cellphone} onKeyPress={handlekeypreaa} maxLength={13} onChange={handleChange} className="form-control" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="">Telephone</label>
                                            <input type="text" name='telephone' value={userData?.telephone} onKeyPress={handlekeypreaa} maxLength={13} onChange={handleChange} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label>Country</label>
                                            {/* <input type="text" name='country' value={userData?.country} onChange={handleChange} className="form-control" /> */}
                                            <select id="country" value={userData?.country} onChange={handleChange} className="form-control" name="country" >
                                                <option>Select...</option>
                                                {
                                                    country && country.length > 0 && country.map((item, index) => {
                                                        return (<>

                                                            <option key={index} value={item.id}>{item.name}</option>
                                                        </>)
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label>Province</label>
                                            <input type="text" name='province' value={userData?.province} onChange={handleChange} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label>Company ID</label>
                                            <input type="text" name='company_id' value={userData?.company_id} onChange={handleChange} className="form-control" />
                                        </div>
                                        <div className="col">
                                            <label>Tax Ref</label>
                                            <input type="text" name='tax_ref' value={userData?.tax_ref} onChange={handleChange} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label>Importer Ref</label>
                                            <input type="text" name='importers_ref' value={userData?.importers_ref} onChange={handleChange} className="form-control" />
                                        </div>

                                        <div className="col">
                                            <label>Contact Person</label>
                                            <input type="text" name='contact_person' value={userData?.contact_person} onChange={handleChange} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="">Choose Image</label>
                                            <input type="file" name='profile' onChange={handleImageChange} className='col form-control' accept="image/*" />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col">
                                            <div className='text-center'>
                                                <button className='btn btn-danger px-5' onClick={handleUpdate}>Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </>
    );
}