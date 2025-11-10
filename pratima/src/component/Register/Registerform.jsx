// // // import axios from 'axios';
// // // import React, { useEffect, useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { ToastContainer, toast } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';

// // // function RegisterForm() {
// // //     const [error, setError] = useState({});
// // //     const [country, setCountry] = useState([]);
// // //     const navigate = useNavigate();
// // //     const [formData, setFormData] = useState({
// // //         client_name: '',
// // //         contact_person: '',
// // //         cellphone: '',
// // //         telephone: '',
// // //         email: '',
// // //         address_1: '',
// // //         address_2: '',
// // //         city: '',
// // //         province: '',
// // //         country: '',
// // //         code: '',
// // //         company_id: '',
// // //         importers_ref: '',
// // //         tax_ref: '',
// // //         password: ""
// // //     });

// // //     const handleChange = (e) => {
// // //         const { name, value } = e.target;
// // //         setFormData({
// // //             ...formData,
// // //             [name]: value
// // //         });
// // //     };

// // //     const handleKeyPress = (e) => {
// // //         if (e.charCode < 48 || e.charCode > 57) {
// // //             e.preventDefault();
// // //         }
// // //     };

// // //     const handleValidate = (value) => {
// // //         let errors = {};
// // //         if (!value.client_name) errors.client_name = 'Client Name is required';
// // //         if (!value.contact_person) errors.contact_person = 'Contact Person is required';
// // //         if (!value.cellphone) errors.cellphone = 'Cellphone is required';
// // //         if (!value.email) errors.email = 'Email is required';
// // //         if (!value.city) errors.city = 'City is required';
// // //         if (!value.province) errors.province = 'Province is required';
// // //         if (!value.country) errors.country = 'Country is required';
// // //         if (!value.code) errors.code = 'Code is required';
// // //         if (!value.company_id) errors.company_id = 'Company ID is required';
// // //         if (!value.password) errors.password = 'Password is required';

// // //         setError(errors);
// // //         return Object.keys(errors).length === 0;
// // //     };

// // //     const handleSubmit = (e) => {
// // //         e.preventDefault();
// // //         if (handleValidate(formData)) {
// // //             apihit();
// // //         }
// // //     };

// // //     const apihit = () => {
// // //         axios.post(`${process.env.REACT_APP_BASE_URL}customer-register`, formData)
// // //             .then((response) => {
// // //                 toast.success(response.data.message);
// // //                 setTimeout(() => {
// // //                     navigate('/login');
// // //                 }, 1000);
// // //             })
// // //             .catch((error) => {
// // //                 if (error.response) {
// // //                     // Server responded with a status other than 2xx
// // //                     toast.error(error.response.data.message || "An error occurred. Please try again.");
// // //                 } else if (error.request) {
// // //                     // Request was made but no response was received
// // //                     toast.error("No response from server. Please check your internet connection.");
// // //                 } else {
// // //                     // Something happened in setting up the request
// // //                     toast.error("Error in setting up request: " + error.message);
// // //                 }
// // //             });
// // //     };

// // //     const getdata = () => {
// // //         axios
// // //           .get(`${process.env.REACT_APP_BASE_URL}GetCountries`)
// // //           .then((response) => {
// // //             console.log(response.data.data)
// // //             setCountry(response.data.data);
// // //           })
// // //           .catch((error) => {
// // //             toast.error(error.response.data.message);
// // //           });
// // //       };
// // // useEffect(()=>{
// // //     getdata()
// // // },[])
// // //     return (
// // //         <>
// // //             <section className='registrationForm'>
// // //                 <div className="container">
// // //                     <div className='row'>
// // // <div className="col-8">
// // //                         <h2>Register Form</h2>
// // // </div>
// // //                         <form onSubmit={handleSubmit}>
// // //                             <div className="row mt-3">
// // //                                 <div className="col-lg-4">
// // //                                     <label htmlFor="clientName">Client Name (Company / Individual)* :</label>
// // //                                     <input type="text" id="clientName" name="client_name" onChange={handleChange} required />
// // //                                     <p className='text-danger'>{error.client_name}</p>
// // //                                 </div>
// // //                                 <div className="col-lg-4">
// // //                                     <label htmlFor="contactPerson">Contact Person* :</label>
// // //                                     <input type="text" id="contactPerson" name="contact_person" onChange={handleChange} required />
// // //                                     <p className='text-danger'>{error.contact_person}</p>
// // //                                 </div>
// // //                             </div>
// // //                             <div className="row">
// // //                                 <div className='col-lg-4'>
// // //                                     <label htmlFor="cellphone">Cellphone* :</label>
// // //                                     <input type="tel" id="cellphone" maxLength={12} name="cellphone" onKeyPress={handleKeyPress} onChange={handleChange} required />
// // //                                     <p className='text-danger'>{error.cellphone}</p>
// // //                                 </div>
// // //                                 <div className='col-lg-4'>
// // //                                     <label htmlFor="telephone">Telephone:</label>
// // //                                     <input type="tel" id="telephone" maxLength={12} onKeyPress={handleKeyPress} name="telephone" onChange={handleChange} />
// // //                                 </div>
// // //                             </div>
// // //                             <div className="row">
// // //                                 <div className='col-lg-4'>
// // //                                     <label htmlFor="email">Email* :</label>
// // //                                     <input type="email" id="email" name="email" onChange={handleChange} required />
// // //                                     <p className='text-danger'>{error.email}</p>
// // //                                 </div>
// // //                                 <div className='col-lg-4'>
// // //                                     <label htmlFor="password">Password* :</label>
// // //                                     <input type="password" id="password" name="password" onChange={handleChange} required />
// // //                                     <p className='text-danger'>{error.password}</p>
// // //                                 </div>
// // //                             </div>
// // //                             <div className="row">
// // //                                 <div className='col-lg-4'>
// // //                                     <label htmlFor="address1">Address 1:</label>
// // //                                     <input type="text" id="address1" name="address_1" onChange={handleChange} />
// // //                                 </div>
// // //                                 <div className='col-lg-4'>
// // //                                     <label htmlFor="city">City* :</label>
// // //                                     <input type="text" id="city" name="city" onChange={handleChange} required />
// // //                                     <p className='text-danger'>{error.city}</p>
// // //                                 </div>
// // //                             </div>
// // //                             <div className="row">
// // //                                 <div className='col-lg-4'>
// // //                                     <label htmlFor="province">Province* :</label>
// // //                                     <input type="text" id="province" name="province" onChange={handleChange} required />
// // //                                     <p className='text-danger'>{error.province}</p>
// // //                                 </div>
// // //                                 <div className='col-lg-4'>
// // //                                     <label htmlFor="country">Country* :</label>
// // //                                     {/* <input type="text" id="country" name="country" onChange={handleChange} required /> */}
// // //                                     <select id="country" className='w-100 bg-white rounded py-2' name="country" onChange={handleChange}>
// // //                                         <option>Select...</option>
// // //                                         {
// // //                                             country && country.length>0 && country.map((item,index)=>{
// // //                                                 return(<>
                                                
// // //                                                 <option key={index} value={item.id}>{item.name}</option>
// // //                                                 </>)
// // //                                             })
// // //                                         }
// // //                                     </select>
// // //                                     <p className='text-danger'>{error.country}</p>
// // //                                 </div>
// // //                             </div>
// // //                             <div className="row">
// // //                                 <div className='col-lg-4'>
// // //                                     <label htmlFor="code">Code* :</label>
// // //                                     <input type="text" id="code" name="code" onKeyPress={handleKeyPress} onChange={handleChange} required />
// // //                                     <p className='text-danger'>{error.code}</p>
// // //                                 </div>
// // //                                 <div className='col-lg-4'>
// // //                                     <label htmlFor="companyRegId">Company Reg / ID #* :</label>
// // //                                     <input type="text" id="companyRegId" name="company_id" onChange={handleChange} required />
// // //                                     <p className='text-danger'>{error.company_id}</p>
// // //                                 </div>
// // //                             </div>
// // //                             <div className="row">
// // //                                 <div className='col-lg-4'>
// // //                                     <label htmlFor="importersRef">Importers Ref:</label>
// // //                                     <input type="text" id="importersRef" name="importers_ref" onChange={handleChange} />
// // //                                 </div>
// // //                                 <div className='col-lg-4'>
// // //                                     <label htmlFor="vatTaxRef">Vat / Tax Ref:</label>
// // //                                     <input type="text" id="vatTaxRef" name="tax_ref" onChange={handleChange} />
// // //                                 </div>
// // //                             </div>
// // //                             <div className="row">
// // //                                 <div className='col-lg-4'>
// // //                                     <label htmlFor="address2">Address 2:</label>
// // //                                     <input type="text" id="address2" name="address_2" onChange={handleChange} />
// // //                                 </div>
// // //                             </div>
// // //                             <div className='col-8'>
// // //     <div className='text-center'>
// // //                                 <button type="button" onClick={handleSubmit}>Register</button>
// // //                             </div>
// // //                             </div>
                        
// // //                         </form>
// // //                     </div>
// // //                 </div>
// // //                 <ToastContainer />
// // //             </section>
// // //         </>
// // //     );
// // // }

// // // export default RegisterForm;
// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // function RegisterForm() {
// //   const [error, setError] = useState({});
// //   const [country, setCountry] = useState([]);
// //   const navigate = useNavigate();

// //   const [formData, setFormData] = useState({
// //     client_name: '',
// //     contact_person: '',
// //     cellphone: '',
// //     telephone: '',
// //     email: '',
// //     address_1: '',
// //     address_2: '',
// //     city: '',
// //     province: '',
// //     country: '',
// //     code: '',
// //     company_id: '',
// //     importers_ref: '',
// //     tax_ref: '',
// //     password: ''
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   const handleKeyPress = (e) => {
// //     if (e.charCode < 48 || e.charCode > 57) {
// //       e.preventDefault();
// //     }
// //   };

// //   const handleValidate = (value) => {
// //     let errors = {};
// //     if (!value.client_name) errors.client_name = 'Client Name is required';
// //     if (!value.contact_person) errors.contact_person = 'Contact Person is required';
// //     if (!value.cellphone) errors.cellphone = 'Cellphone is required';
// //     if (!value.email) errors.email = 'Email is required';
// //     if (!value.city) errors.city = 'City is required';
// //     if (!value.province) errors.province = 'Province is required';
// //     if (!value.country) errors.country = 'Country is required';
// //     if (!value.code) errors.code = 'Code is required';
// //     if (!value.company_id) errors.company_id = 'Company ID is required';
// //     if (!value.password) errors.password = 'Password is required';

// //     setError(errors);
// //     return Object.keys(errors).length === 0;
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (handleValidate(formData)) {
// //       apihit();
// //     }
// //   };

// //   const apihit = () => {
// //     axios.post(`${process.env.REACT_APP_BASE_URL}customer-register`, formData)
// //       .then((response) => {
// //         toast.success(response.data.message);
// //         setTimeout(() => {
// //           navigate('/login');
// //         }, 1000);
// //       })
// //       .catch((error) => {
// //         if (error.response) {
// //           toast.error(error.response.data.message || "An error occurred. Please try again.");
// //         } else if (error.request) {
// //           toast.error("No response from server. Please check your internet connection.");
// //         } else {
// //           toast.error("Error in setting up request: " + error.message);
// //         }
// //       });
// //   };

// //   const getdata = () => {
// //     axios.get(`${process.env.REACT_APP_BASE_URL}GetCountries`)
// //       .then((response) => {
// //         setCountry(response.data.data);
// //       })
// //       .catch((error) => {
// //         toast.error(error.response.data.message);
// //       });
// //   };

// //   useEffect(() => {
// //     getdata();
// //   }, []);

// //   return (
// //     <section className='bg-gray-100 min-h-screen flex items-center justify-center'>
// //       <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-5xl">
// //         <h2 className='text-3xl font-semibold text-center mb-6 text-blue-600'>Register Form</h2>
// //         <form onSubmit={handleSubmit} className='space-y-6'>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //             <div>
// //               <label className='block font-medium'>Client Name*</label>
// //               <input type="text" name="client_name" onChange={handleChange} className='input-style' />
// //               <p className='text-red-500 text-sm'>{error.client_name}</p>
// //             </div>
// //             <div>
// //               <label className='block font-medium'>Contact Person*</label>
// //               <input type="text" name="contact_person" onChange={handleChange} className='input-style' />
// //               <p className='text-red-500 text-sm'>{error.contact_person}</p>
// //             </div>
// //             <div>
// //               <label className='block font-medium'>Cellphone*</label>
// //               <input type="tel" name="cellphone" maxLength={12} onKeyPress={handleKeyPress} onChange={handleChange} className='input-style' />
// //               <p className='text-red-500 text-sm'>{error.cellphone}</p>
// //             </div>
// //             <div>
// //               <label className='block font-medium'>Telephone</label>
// //               <input type="tel" name="telephone" maxLength={12} onKeyPress={handleKeyPress} onChange={handleChange} className='input-style' />
// //             </div>
// //             <div>
// //               <label className='block font-medium'>Email*</label>
// //               <input type="email" name="email" onChange={handleChange} className='input-style' />
// //               <p className='text-red-500 text-sm'>{error.email}</p>
// //             </div>
// //             <div>
// //               <label className='block font-medium'>Password*</label>
// //               <input type="password" name="password" onChange={handleChange} className='input-style' />
// //               <p className='text-red-500 text-sm'>{error.password}</p>
// //             </div>
// //             <div>
// //               <label className='block font-medium'>Address 1</label>
// //               <input type="text" name="address_1" onChange={handleChange} className='input-style' />
// //             </div>
// //             <div>
// //               <label className='block font-medium'>Address 2</label>
// //               <input type="text" name="address_2" onChange={handleChange} className='input-style' />
// //             </div>
// //             <div>
// //               <label className='block font-medium'>City*</label>
// //               <input type="text" name="city" onChange={handleChange} className='input-style' />
// //               <p className='text-red-500 text-sm'>{error.city}</p>
// //             </div>
// //             <div>
// //               <label className='block font-medium'>Province*</label>
// //               <input type="text" name="province" onChange={handleChange} className='input-style' />
// //               <p className='text-red-500 text-sm'>{error.province}</p>
// //             </div>
// //             <div>
// //               <label className='block font-medium'>Country*</label>
// //               <select name="country" onChange={handleChange} className='input-style'>
// //                 <option value=''>Select...</option>
// //                 {country.map((item, index) => (
// //                   <option key={index} value={item.id}>{item.name}</option>
// //                 ))}
// //               </select>
// //               <p className='text-red-500 text-sm'>{error.country}</p>
// //             </div>
// //             <div>
// //               <label className='block font-medium'>Code*</label>
// //               <input type="text" name="code" onKeyPress={handleKeyPress} onChange={handleChange} className='input-style' />
// //               <p className='text-red-500 text-sm'>{error.code}</p>
// //             </div>
// //             <div>
// //               <label className='block font-medium'>Company Reg / ID #*</label>
// //               <input type="text" name="company_id" onChange={handleChange} className='input-style' />
// //               <p className='text-red-500 text-sm'>{error.company_id}</p>
// //             </div>
// //             <div>
// //               <label className='block font-medium'>Importers Ref</label>
// //               <input type="text" name="importers_ref" onChange={handleChange} className='input-style' />
// //             </div>
// //             <div>
// //               <label className='block font-medium'>Vat / Tax Ref</label>
// //               <input type="text" name="tax_ref" onChange={handleChange} className='input-style' />
// //             </div>
// //           </div>
// //           <div className='text-center'>
// //             <button type="submit" className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>Register</button>
// //           </div>
// //         </form>
// //       </div>
// //       <ToastContainer />
// //     </section>
// //   );
// // }

// // export default RegisterForm;

// // // Tailwind CSS styles for input fields
// // // You can also place this in your CSS file or configure with Tailwind utilities
// // // .input-style {
// // //   @apply w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300;
// // // }
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function RegisterForm() {
//     const [error, setError] = useState({});
//     const [country, setCountry] = useState([]);
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         client_name: '', contact_person: '', cellphone: '', telephone: '', email: '',
//         address_1: '', address_2: '', city: '', province: '', country: '', code: '',
//         company_id: '', importers_ref: '', tax_ref: '', password: ""
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleKeyPress = (e) => {
//         if (e.charCode < 48 || e.charCode > 57) e.preventDefault();
//     };

//     const handleValidate = (value) => {
//         let errors = {};
//         if (!value.client_name) errors.client_name = 'Client Name is required';
//         if (!value.contact_person) errors.contact_person = 'Contact Person is required';
//         if (!value.cellphone) errors.cellphone = 'Cellphone is required';
//         if (!value.email) errors.email = 'Email is required';
//         if (!value.city) errors.city = 'City is required';
//         if (!value.province) errors.province = 'Province is required';
//         if (!value.country) errors.country = 'Country is required';
//         // if (!value.code) errors.code = 'Code is required';
//         // if (!value.company_id) errors.company_id = 'Company ID is required';
//         if (!value.password) errors.password = 'Password is required';

//         setError(errors);
//         return Object.keys(errors).length === 0;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (handleValidate(formData)) {
//             axios.post(`${process.env.REACT_APP_BASE_URL}customer-register`, formData)
//                 .then((res) => {
//                     toast.success(res.data.message);
//                     setTimeout(() => navigate('/login'), 1000);
//                 })
//                 .catch((err) => {
//                     const msg = err.response?.data?.message || "Something went wrong.";
//                     toast.error(msg);
//                 });
//         }
//     };

//     const getdata = () => {
//         axios.get(`${process.env.REACT_APP_BASE_URL}GetCountries`)
//             .then((res) => setCountry(res.data.data))
//             .catch((err) => toast.error(err.response?.data?.message || "Error loading countries"));
//     };

//     useEffect(() => { getdata(); }, []);

//     return (
//         <>
//             <div className=" py-5 loginSec">
//                 <div className="row justify-content-center">
//                     <div className="col-lg-10 col-md-12">
//                         <div className="card shadow">
//                             <div className="card-header bg-secondary text-white">
//                                 <h4 className="mb-0 text-center">Register Form</h4>
//                             </div>
//                             <div className="card-body">
//                                 <form onSubmit={handleSubmit}>
//                                     <div className="row g-3">
//                                         <div className="col-md-6">
//                                             <label className="form-label">Client Name*</label>
//                                             <input type="text" name="client_name" className="form-control rounded" onChange={handleChange} />
//                                             <small className="text-danger">{error.client_name}</small>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label">Contact Person*</label>
//                                             <input type="text" name="contact_person" className="form-control" onChange={handleChange} />
//                                             <small className="text-danger">{error.contact_person}</small>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label">Cellphone*</label>
//                                             <input type="tel" name="cellphone" className="form-control" maxLength={12} onKeyPress={handleKeyPress} onChange={handleChange} />
//                                             <small className="text-danger">{error.cellphone}</small>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label">Telephone</label>
//                                             <input type="tel" name="telephone" className="form-control" maxLength={12} onKeyPress={handleKeyPress} onChange={handleChange} />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label">Email*</label>
//                                             <input type="email" name="email" className="form-control" onChange={handleChange} />
//                                             <small className="text-danger">{error.email}</small>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label">Password*</label>
//                                             <input type="password" name="password" className="form-control" onChange={handleChange} />
//                                             <small className="text-danger">{error.password}</small>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label">Address 1</label>
//                                             <input type="text" name="address_1" className="form-control" onChange={handleChange} />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label">City*</label>
//                                             <input type="text" name="city" className="form-control" onChange={handleChange} />
//                                             <small className="text-danger">{error.city}</small>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label">Province*</label>
//                                             <input type="text" name="province" className="form-control" onChange={handleChange} />
//                                             <small className="text-danger">{error.province}</small>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label">Country*</label>
//                                             <select name="country" className="form-select" onChange={handleChange}>
//                                                 <option value="">Select...</option>
//                                                 {country.map((c, idx) => (
//                                                     <option key={idx} value={c.id}>{c.name}</option>
//                                                 ))}
//                                             </select>
//                                             <small className="text-danger">{error.country}</small>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label">Code*</label>
//                                             <input type="text" name="code" className="form-control" onKeyPress={handleKeyPress} onChange={handleChange} />
//                                             <small className="text-danger">{error.code}</small>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label">Company ID*</label>
//                                             <input type="text" name="company_id" className="form-control" onChange={handleChange} />
//                                             <small className="text-danger">{error.company_id}</small>
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label">Importers Ref</label>
//                                             <input type="text" name="importers_ref" className="form-control" onChange={handleChange} />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label">Vat / Tax Ref</label>
//                                             <input type="text" name="tax_ref" className="form-control" onChange={handleChange} />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <label className="form-label">Address 2</label>
//                                             <input type="text" name="address_2" className="form-control" onChange={handleChange} />
//                                         </div>
//                                         <div className="col-12 text-center mt-4">
//                                             <button type="submit" className="btn  px-5">Register</button>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                         <ToastContainer />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default RegisterForm;
// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // function RegisterForm() {
// //     const [error, setError] = useState({});
// //     const [country, setCountry] = useState([]);
// //     const navigate = useNavigate();
// //     const [formData, setFormData] = useState({
// //         client_name: '',
// //         contact_person: '',
// //         cellphone: '',
// //         telephone: '',
// //         email: '',
// //         address_1: '',
// //         address_2: '',
// //         city: '',
// //         province: '',
// //         country: '',
// //         code: '',
// //         company_id: '',
// //         importers_ref: '',
// //         tax_ref: '',
// //         password: ""
// //     });

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData({
// //             ...formData,
// //             [name]: value
// //         });
// //     };

// //     const handleKeyPress = (e) => {
// //         if (e.charCode < 48 || e.charCode > 57) {
// //             e.preventDefault();
// //         }
// //     };

// //     const handleValidate = (value) => {
// //         let errors = {};
// //         if (!value.client_name) errors.client_name = 'Client Name is required';
// //         if (!value.contact_person) errors.contact_person = 'Contact Person is required';
// //         if (!value.cellphone) errors.cellphone = 'Cellphone is required';
// //         if (!value.email) errors.email = 'Email is required';
// //         if (!value.city) errors.city = 'City is required';
// //         if (!value.province) errors.province = 'Province is required';
// //         if (!value.country) errors.country = 'Country is required';
// //         if (!value.code) errors.code = 'Code is required';
// //         if (!value.company_id) errors.company_id = 'Company ID is required';
// //         if (!value.password) errors.password = 'Password is required';

// //         setError(errors);
// //         return Object.keys(errors).length === 0;
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         if (handleValidate(formData)) {
// //             apihit();
// //         }
// //     };

// //     const apihit = () => {
// //         axios.post(`${process.env.REACT_APP_BASE_URL}customer-register`, formData)
// //             .then((response) => {
// //                 toast.success(response.data.message);
// //                 setTimeout(() => {
// //                     navigate('/login');
// //                 }, 1000);
// //             })
// //             .catch((error) => {
// //                 if (error.response) {
// //                     // Server responded with a status other than 2xx
// //                     toast.error(error.response.data.message || "An error occurred. Please try again.");
// //                 } else if (error.request) {
// //                     // Request was made but no response was received
// //                     toast.error("No response from server. Please check your internet connection.");
// //                 } else {
// //                     // Something happened in setting up the request
// //                     toast.error("Error in setting up request: " + error.message);
// //                 }
// //             });
// //     };

// //     const getdata = () => {
// //         axios
// //           .get(`${process.env.REACT_APP_BASE_URL}GetCountries`)
// //           .then((response) => {
// //             console.log(response.data.data)
// //             setCountry(response.data.data);
// //           })
// //           .catch((error) => {
// //             toast.error(error.response.data.message);
// //           });
// //       };
// // useEffect(()=>{
// //     getdata()
// // },[])
// //     return (
// //         <>
// //             <section className='registrationForm'>
// //                 <div className="container">
// //                     <div className='row'>
// // <div className="col-8">
// //                         <h2>Register Form</h2>
// // </div>
// //                         <form onSubmit={handleSubmit}>
// //                             <div className="row mt-3">
// //                                 <div className="col-lg-4">
// //                                     <label htmlFor="clientName">Client Name (Company / Individual)* :</label>
// //                                     <input type="text" id="clientName" name="client_name" onChange={handleChange} required />
// //                                     <p className='text-danger'>{error.client_name}</p>
// //                                 </div>
// //                                 <div className="col-lg-4">
// //                                     <label htmlFor="contactPerson">Contact Person* :</label>
// //                                     <input type="text" id="contactPerson" name="contact_person" onChange={handleChange} required />
// //                                     <p className='text-danger'>{error.contact_person}</p>
// //                                 </div>
// //                             </div>
// //                             <div className="row">
// //                                 <div className='col-lg-4'>
// //                                     <label htmlFor="cellphone">Cellphone* :</label>
// //                                     <input type="tel" id="cellphone" maxLength={12} name="cellphone" onKeyPress={handleKeyPress} onChange={handleChange} required />
// //                                     <p className='text-danger'>{error.cellphone}</p>
// //                                 </div>
// //                                 <div className='col-lg-4'>
// //                                     <label htmlFor="telephone">Telephone:</label>
// //                                     <input type="tel" id="telephone" maxLength={12} onKeyPress={handleKeyPress} name="telephone" onChange={handleChange} />
// //                                 </div>
// //                             </div>
// //                             <div className="row">
// //                                 <div className='col-lg-4'>
// //                                     <label htmlFor="email">Email* :</label>
// //                                     <input type="email" id="email" name="email" onChange={handleChange} required />
// //                                     <p className='text-danger'>{error.email}</p>
// //                                 </div>
// //                                 <div className='col-lg-4'>
// //                                     <label htmlFor="password">Password* :</label>
// //                                     <input type="password" id="password" name="password" onChange={handleChange} required />
// //                                     <p className='text-danger'>{error.password}</p>
// //                                 </div>
// //                             </div>
// //                             <div className="row">
// //                                 <div className='col-lg-4'>
// //                                     <label htmlFor="address1">Address 1:</label>
// //                                     <input type="text" id="address1" name="address_1" onChange={handleChange} />
// //                                 </div>
// //                                 <div className='col-lg-4'>
// //                                     <label htmlFor="city">City* :</label>
// //                                     <input type="text" id="city" name="city" onChange={handleChange} required />
// //                                     <p className='text-danger'>{error.city}</p>
// //                                 </div>
// //                             </div>
// //                             <div className="row">
// //                                 <div className='col-lg-4'>
// //                                     <label htmlFor="province">Province* :</label>
// //                                     <input type="text" id="province" name="province" onChange={handleChange} required />
// //                                     <p className='text-danger'>{error.province}</p>
// //                                 </div>
// //                                 <div className='col-lg-4'>
// //                                     <label htmlFor="country">Country* :</label>
// //                                     {/* <input type="text" id="country" name="country" onChange={handleChange} required /> */}
// //                                     <select id="country" className='w-100 bg-white rounded py-2' name="country" onChange={handleChange}>
// //                                         <option>Select...</option>
// //                                         {
// //                                             country && country.length>0 && country.map((item,index)=>{
// //                                                 return(<>

// //                                                 <option key={index} value={item.id}>{item.name}</option>
// //                                                 </>)
// //                                             })
// //                                         }
// //                                     </select>
// //                                     <p className='text-danger'>{error.country}</p>
// //                                 </div>
// //                             </div>
// //                             <div className="row">
// //                                 <div className='col-lg-4'>
// //                                     <label htmlFor="code">Code* :</label>
// //                                     <input type="text" id="code" name="code" onKeyPress={handleKeyPress} onChange={handleChange} required />
// //                                     <p className='text-danger'>{error.code}</p>
// //                                 </div>
// //                                 <div className='col-lg-4'>
// //                                     <label htmlFor="companyRegId">Company Reg / ID #* :</label>
// //                                     <input type="text" id="companyRegId" name="company_id" onChange={handleChange} required />
// //                                     <p className='text-danger'>{error.company_id}</p>
// //                                 </div>
// //                             </div>
// //                             <div className="row">
// //                                 <div className='col-lg-4'>
// //                                     <label htmlFor="importersRef">Importers Ref:</label>
// //                                     <input type="text" id="importersRef" name="importers_ref" onChange={handleChange} />
// //                                 </div>
// //                                 <div className='col-lg-4'>
// //                                     <label htmlFor="vatTaxRef">Vat / Tax Ref:</label>
// //                                     <input type="text" id="vatTaxRef" name="tax_ref" onChange={handleChange} />
// //                                 </div>
// //                             </div>
// //                             <div className="row">
// //                                 <div className='col-lg-4'>
// //                                     <label htmlFor="address2">Address 2:</label>
// //                                     <input type="text" id="address2" name="address_2" onChange={handleChange} />
// //                                 </div>
// //                             </div>
// //                             <div className='col-8'>
// //     <div className='text-center'>
// //                                 <button type="button" onClick={handleSubmit}>Register</button>
// //                             </div>
// //                             </div>

// //                         </form>
// //                     </div>
// //                 </div>
// //                 <ToastContainer />
// //             </section>
// //         </>
// //     );
// // }

// // export default RegisterForm;
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function RegisterForm() {
//   const [error, setError] = useState({});
//   const [country, setCountry] = useState([]);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     client_name: '',
//     contact_person: '',
//     cellphone: '',
//     telephone: '',
//     email: '',
//     address_1: '',
//     address_2: '',
//     city: '',
//     province: '',
//     country: '',
//     code: '',
//     company_id: '',
//     importers_ref: '',
//     tax_ref: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleKeyPress = (e) => {
//     if (e.charCode < 48 || e.charCode > 57) {
//       e.preventDefault();
//     }
//   };

//   const handleValidate = (value) => {
//     let errors = {};
//     if (!value.client_name) errors.client_name = 'Client Name is required';
//     if (!value.contact_person) errors.contact_person = 'Contact Person is required';
//     if (!value.cellphone) errors.cellphone = 'Cellphone is required';
//     if (!value.email) errors.email = 'Email is required';
//     if (!value.city) errors.city = 'City is required';
//     if (!value.province) errors.province = 'Province is required';
//     if (!value.country) errors.country = 'Country is required';
//     if (!value.code) errors.code = 'Code is required';
//     if (!value.company_id) errors.company_id = 'Company ID is required';
//     if (!value.password) errors.password = 'Password is required';

//     setError(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (handleValidate(formData)) {
//       apihit();
//     }
//   };

//   const apihit = () => {
//     axios.post(`${process.env.REACT_APP_BASE_URL}customer-register`, formData)
//       .then((response) => {
//         toast.success(response.data.message);
//         setTimeout(() => {
//           navigate('/login');
//         }, 1000);
//       })
//       .catch((error) => {
//         if (error.response) {
//           toast.error(error.response.data.message || "An error occurred. Please try again.");
//         } else if (error.request) {
//           toast.error("No response from server. Please check your internet connection.");
//         } else {
//           toast.error("Error in setting up request: " + error.message);
//         }
//       });
//   };

//   const getdata = () => {
//     axios.get(`${process.env.REACT_APP_BASE_URL}GetCountries`)
//       .then((response) => {
//         setCountry(response.data.data);
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//       });
//   };

//   useEffect(() => {
//     getdata();
//   }, []);

//   return (
//     <section className='bg-gray-100 min-h-screen flex items-center justify-center'>
//       <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-5xl">
//         <h2 className='text-3xl font-semibold text-center mb-6 text-blue-600'>Register Form</h2>
//         <form onSubmit={handleSubmit} className='space-y-6'>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className='block font-medium'>Client Name*</label>
//               <input type="text" name="client_name" onChange={handleChange} className='input-style' />
//               <p className='text-red-500 text-sm'>{error.client_name}</p>
//             </div>
//             <div>
//               <label className='block font-medium'>Contact Person*</label>
//               <input type="text" name="contact_person" onChange={handleChange} className='input-style' />
//               <p className='text-red-500 text-sm'>{error.contact_person}</p>
//             </div>
//             <div>
//               <label className='block font-medium'>Cellphone*</label>
//               <input type="tel" name="cellphone" maxLength={12} onKeyPress={handleKeyPress} onChange={handleChange} className='input-style' />
//               <p className='text-red-500 text-sm'>{error.cellphone}</p>
//             </div>
//             <div>
//               <label className='block font-medium'>Telephone</label>
//               <input type="tel" name="telephone" maxLength={12} onKeyPress={handleKeyPress} onChange={handleChange} className='input-style' />
//             </div>
//             <div>
//               <label className='block font-medium'>Email*</label>
//               <input type="email" name="email" onChange={handleChange} className='input-style' />
//               <p className='text-red-500 text-sm'>{error.email}</p>
//             </div>
//             <div>
//               <label className='block font-medium'>Password*</label>
//               <input type="password" name="password" onChange={handleChange} className='input-style' />
//               <p className='text-red-500 text-sm'>{error.password}</p>
//             </div>
//             <div>
//               <label className='block font-medium'>Address 1</label>
//               <input type="text" name="address_1" onChange={handleChange} className='input-style' />
//             </div>
//             <div>
//               <label className='block font-medium'>Address 2</label>
//               <input type="text" name="address_2" onChange={handleChange} className='input-style' />
//             </div>
//             <div>
//               <label className='block font-medium'>City*</label>
//               <input type="text" name="city" onChange={handleChange} className='input-style' />
//               <p className='text-red-500 text-sm'>{error.city}</p>
//             </div>
//             <div>
//               <label className='block font-medium'>Province*</label>
//               <input type="text" name="province" onChange={handleChange} className='input-style' />
//               <p className='text-red-500 text-sm'>{error.province}</p>
//             </div>
//             <div>
//               <label className='block font-medium'>Country*</label>
//               <select name="country" onChange={handleChange} className='input-style'>
//                 <option value=''>Select...</option>
//                 {country.map((item, index) => (
//                   <option key={index} value={item.id}>{item.name}</option>
//                 ))}
//               </select>
//               <p className='text-red-500 text-sm'>{error.country}</p>
//             </div>
//             <div>
//               <label className='block font-medium'>Code*</label>
//               <input type="text" name="code" onKeyPress={handleKeyPress} onChange={handleChange} className='input-style' />
//               <p className='text-red-500 text-sm'>{error.code}</p>
//             </div>
//             <div>
//               <label className='block font-medium'>Company Reg / ID #*</label>
//               <input type="text" name="company_id" onChange={handleChange} className='input-style' />
//               <p className='text-red-500 text-sm'>{error.company_id}</p>
//             </div>
//             <div>
//               <label className='block font-medium'>Importers Ref</label>
//               <input type="text" name="importers_ref" onChange={handleChange} className='input-style' />
//             </div>
//             <div>
//               <label className='block font-medium'>Vat / Tax Ref</label>
//               <input type="text" name="tax_ref" onChange={handleChange} className='input-style' />
//             </div>
//           </div>
//           <div className='text-center'>
//             <button type="submit" className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>Register</button>
//           </div>
//         </form>
//       </div>
//       <ToastContainer />
//     </section>
//   );
// }

// export default RegisterForm;

// // Tailwind CSS styles for input fields
// // You can also place this in your CSS file or configure with Tailwind utilities
// // .input-style {
// //   @apply w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300;
// // }
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterForm() {
  const [error, setError] = useState({});
  const [country, setCountry] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    client_name: "",
    contact_person: "",
    cellphone: "",
    telephone: "",
    email: "",
    address_1: "",
    address_2: "",
    city: "",
    province: "",
    country: "",
    code: "",
    company_id: "",
    importers_ref: "",
    tax_ref: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleKeyPress = (e) => {
    if (e.charCode < 48 || e.charCode > 57) e.preventDefault();
  };

  const handleValidate = (value) => {
    let errors = {};
    if (!value.client_name) errors.client_name = "Client Name is required";
    if (!value.contact_person)
      errors.contact_person = "Contact Person is required";
    if (!value.cellphone) errors.cellphone = "Cellphone is required";
    if (!value.email) errors.email = "Email is required";
    if (!value.city) errors.city = "City is required";
    if (!value.province) errors.province = "Province is required";
    if (!value.country) errors.country = "Country is required";
    // if (!value.code) errors.code = 'Code is required';
    // if (!value.company_id) errors.company_id = 'Company ID is required';
    if (!value.password) errors.password = "Password is required";

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidate(formData)) {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}customer-register`, formData)
        .then((res) => {
          toast.success(res.data.message);
          setTimeout(() => navigate("/login"), 1000);
        })
        .catch((err) => {
          const msg = err.response?.data?.message || "Something went wrong.";
          toast.error(msg);
        });
    }
  };

  const getdata = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}GetCountries`)
      .then((res) => setCountry(res.data.data))
      .catch((err) =>
        toast.error(err.response?.data?.message || "Error loading countries")
      );
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className=" py-5 loginSec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-7">
              <div className="card shadow">
                <div className="card-header bg-secondary text-white">
                  <h4 className="mb-0 text-center">Register Form</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Client Name*</label>
                        <input
                          type="text"
                          name="client_name"
                          className="form-control rounded"
                          onChange={handleChange}
                        />
                        <small className="text-danger">
                          {error.client_name}
                        </small>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Contact Person*</label>
                        <input
                          type="text"
                          name="contact_person"
                          className="form-control"
                          onChange={handleChange}
                        />
                        <small className="text-danger">
                          {error.contact_person}
                        </small>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Cellphone*</label>
                        <input
                          type="tel"
                          name="cellphone"
                          className="form-control"
                          maxLength={12}
                          onKeyPress={handleKeyPress}
                          onChange={handleChange}
                        />
                        <small className="text-danger">{error.cellphone}</small>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Telephone</label>
                        <input
                          type="tel"
                          name="telephone"
                          className="form-control"
                          maxLength={12}
                          onKeyPress={handleKeyPress}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email*</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          onChange={handleChange}
                        />
                        <small className="text-danger">{error.email}</small>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Password*</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          onChange={handleChange}
                        />
                        <small className="text-danger">{error.password}</small>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Address 1</label>
                        <input
                          type="text"
                          name="address_1"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                        <div className="col-md-6">
                        <label className="form-label">Address 2</label>
                        <input
                          type="text"
                          name="address_2"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">City*</label>
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                          onChange={handleChange}
                        />
                        <small className="text-danger">{error.city}</small>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Province*</label>
                        <input
                          type="text"
                          name="province"
                          className="form-control"
                          onChange={handleChange}
                        />
                        <small className="text-danger">{error.province}</small>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Country*</label>
                        <select
                          name="country"
                          className="form-select"
                          onChange={handleChange}
                        >
                          <option value="">Select...</option>
                          {country.map((c, idx) => (
                            <option key={idx} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                        <small className="text-danger">{error.country}</small>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Postal Code</label>
                        <input
                          type="text"
                          name="code"
                          className="form-control"
                          onKeyPress={handleKeyPress}
                          onChange={handleChange}
                        />
                        <small className="text-danger">{error.code}</small>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Company Reg / ID #</label>
                        <input
                          type="text"
                          name="company_id"
                          className="form-control"
                          onChange={handleChange}
                        />
                        <small className="text-danger">
                          {error.company_id}
                        </small>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Importers #</label>
                        <input
                          type="text"
                          name="importers_ref"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">Vat / Tax Ref</label>
                        <input
                          type="text"
                          name="tax_ref"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                    
                      <div className="col-12 text-center mt-4">
                        <button type="submit" className="btn  px-5">
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
