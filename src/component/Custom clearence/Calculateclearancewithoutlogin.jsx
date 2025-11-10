import React, { useEffect, useState } from 'react';
import Topbar from '../Topbar';
import Navbar from '../homepage/Navbar';
import Footer from '../homepage/Footer';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
                      
export default function Calculateclearancewithoutlogin() {
    console.log("aaa")
  const navigate = useNavigate();
  const [hfCode, setHfCode] = useState('');
  const [data, setData] = useState({});
  const [rows, setRows] = useState([]);
  const [error, setError] = useState({});
  const [finalAmount, setFinalAmount] = useState(0);

  const handleInputChange = (e) => {
    setHfCode(e.target.value);
  };

  const handleValidate = (e) => {
    if (e.charCode < 46 || e.charCode > 57) {
      e.preventDefault();
    }
  };

  const handleClickHf = () => {
    if (rows.length >= 3) {
      toast.error('You can only add up to 3 rows.');
      return;
    }
    const hfcoede = { hs_code: hfCode };
    
    axios
      .post(`${process.env.REACT_APP_BASE_URL}find-hs-code`, hfcoede)
      .then((response) => {
        setData(response.data.data);
        setRows([...rows, { 
          hs_code: hfCode, 
          hs_cod_desc: response.data.data.hs_cod_desc, 
          valueofgoods: '', 
          quotedRate: '', 
          csercount: 0, 
          datavalttac: 0, 
          datavat: 0, 
          estimate: 0 
        }]);
        setHfCode('');
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handleChangeValueOfGood = (e, index) => {
    const { name, value } = e.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    setRows(newRows);
  };

  const handleClickValue = (index) => {
    const finalVal = rows[index].valueofgoods;
    const calculate10 = finalVal * 0.1;
    const overall = parseFloat(finalVal) + calculate10;
    const finalRes = overall * parseFloat(rows[index].quotedRate);
    
    const newRows = [...rows];
    newRows[index].csercount = finalRes;
    newRows[index].datavalttac = (finalRes * 0.1).toFixed(2);
    newRows[index].datavat = ((parseFloat(newRows[index].datavalttac) + finalRes) * 0.15).toFixed(2);
    newRows[index].estimate = (parseFloat(newRows[index].datavat) + parseFloat(newRows[index].datavalttac)).toFixed(2);
    setRows(newRows);

    const totalEstimate = newRows.reduce((acc, row) => acc + parseFloat(row.estimate), 0);
    setFinalAmount(totalEstimate);
  };

  const handleSaveValue = () => {
    handleValidate12();
  };

  const handleValidate12 = () => {
    let error = {};
    rows.forEach((row, index) => {
      if (!row.valueofgoods) {
        toast.error('Value of goods is required');
        error[`valueofgoods${index}`] = 'Value of goods is required';
      }
      if (!row.quotedRate) {
        toast.error('Quoted Rate is required');
        error[`quotedRate${index}`] = 'Quoted Rate is required';
      }
    });
    setError(error);
    if (Object.keys(error).length === 0) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, add it!'
      }).then((result) => {
        if (result.isConfirmed) {
          handleApi();
        }
      });
    }
  };

// const handleApi = () => {
//     const reqdata = rows.map(row => ({
//       quoted_rate: row.quotedRate,
//       HS_tariff_code: row.hs_code,
//       HS_description: row.hs_cod_desc,
//       goods_value: row.valueofgoods,
//       values_of_good: row.csercount,
//       vat: row.datavalttac,
//       import_duty_per: row.datavalttac,
//       vat_per: "15",
//       import_duty: row.datavat,
//       customs_amount_due: row.estimate,
//       total_amount: finalAmount,
//     }));
//     sessionStorage.setItem('reqdata', JSON.stringify(reqdata));
//     toast.success("Please login")
//     setTimeout(()=>{
//         navigate('/login')
//     },[])
  
//   };
  
//   const retrievedData = JSON.parse(sessionStorage.getItem('reqdata'));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleApi = () => {
    rows.forEach((row, index) => {
      const reqdata = {
        quoted_rate: row.quotedRate,
        HS_tariff_code: row.hs_code,
        HS_description: row.hs_cod_desc,
        goods_value: row.valueofgoods,
        values_of_good: row.csercount,
        vat: row.datavalttac,
        import_duty_per: row.datavalttac,
        vat_per: "15",
        import_duty: row.datavat,
        customs_amount_due: row.estimate,
        total_amount: finalAmount,
      };
      sessionStorage.setItem(`reqdata_${index}`, JSON.stringify(reqdata));
    });
    toast.success("Please login");
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };
  

  const handleSaveValue12 =()=>{
    sessionStorage.clear()
  }
  return (
    <div>
      <Topbar />
      <Navbar />
      <p className="my-3 fs-3 fw-bold text-center">Get Estimate</p>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <label style={{ fontWeight: '600' }}>Enter your HS code</label>
            <br />
            <div className="d-flex mb-3">
              <input
                type="text"
                className="form-control py-2"
                placeholder="HS Code"
                value={hfCode}
                onChange={handleInputChange}
                onKeyPress={handleValidate}
              />
              <div className="ms-2">
                {hfCode && (
                  <button className="btn btn-primary fw-bold rounded-circle" onClick={handleClickHf}>
                    +
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table border">
              <thead>
                <tr>
                  <th scope="col">HS Code</th>
                  <th className="col-3" style={{ maxWidth: '200px' }}>Description</th>
                  <th scope="col">VAT%</th>
                  <th scope="col">Value of Goods</th>
                  <th scope="col">Quoted Rate</th>
                  <th scope="col">Value Of Goods</th>
                  <th scope="col">VAT</th>
                  <th scope="col">Import Duty</th>
                  <th scope="col">Calculate</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <th scope="row">{row.hs_code}</th>
                    <td className="col-3">{row.hs_cod_desc}</td>
                    <td>15%</td>
                    <td>
                      <input
                        onKeyPress={handleValidate}
                        name="valueofgoods"
                        value={row.valueofgoods}
                        onChange={(e) => handleChangeValueOfGood(e, index)}
                      />
                    </td>
                    <td>
                      <input
                        onKeyPress={handleValidate}
                        name="quotedRate"
                        value={row.quotedRate}
                        onChange={(e) => handleChangeValueOfGood(e, index)}
                      />
                      <button
                        className="ms-2 py-1 btn rounded"
                        onClick={() => handleClickValue(index)}
                        style={{ backgroundColor: 'red', color: 'white' }}
                      >
                        Add
                      </button>
                    </td>
                    <td>{row.csercount}</td>
                    <td>{row.datavalttac}</td>
                    <td>{row.datavat}</td>
                    <td>{row.estimate}</td>
                  </tr>
                ))}
                {rows.length > 0 && (
                  <>
                    <tr>
                      <td colSpan="9" className="text-end">
                        <strong>Final Amount: </strong> {finalAmount.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="6" className="text-center">
                        <button
                          className="btn btn-primary"
                          onClick={handleSaveValue}
                          style={{ backgroundColor: '#0b5ed7', color: 'white' }}
                        >
                          Add Clearance Request
                        </button>
                        </td>
                     
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
