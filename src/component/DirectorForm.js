import React, { useState } from 'react';
import { Link } from "react-router-dom";
const DirectorForm = () => {
    const [directorDetails, setDirectorDetails] = useState({
        name: '',
        din: '',
        pan: '',
        aadhaar: '',
        passport: '',
        email: '',
        mobile: '',
        employeeName: '',
        designation: '',
        employeeEmail: '',
        employeeMobile: '',
        addEmployee: '', // State for the radio button
    });

    const handleChange = (e) => {
        setDirectorDetails({
            ...directorDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleValidation = () => {
        // Add validation logic here
        alert('Validation Clicked!');
    };

    const handleAadhaarOtp = () => {
        // Add Aadhaar OTP logic here
        alert('Aadhaar OTP Clicked!');
    };

    const handleVerify = () => {
        // Add verification logic here
        alert('Verify Clicked!');
    };

    const handleAdd = () => {
        // Add logic to handle adding the director or employee
        alert('Add Clicked!');
    };


    return (
        <div className="main-personal">
            <div className="container">
                <div className="registration-main" style={{width: '500px'}}>
                    <div className="registration-form">
                        <div className="login-details">
                            <div className="per-det">
                                <span className="text-personal">
                                    <h3>Company Detail</h3>
                                </span>
                                <span className="line-personal"></span>
                            </div>
                            {/* <h2>Company Details</h2> */}
                            <div className="form-group">
                                <label>CIN/LLPIN/FLIPIN/FCRN* </label>
                                <input type="text" name="cin" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Company/LLP Name* </label>
                                <input type="text" name="companyName" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Date Of Incorporation* </label>
                                <input type="date" name="incorporationDate" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>COMPANY PAN* </label>
                                <input type="text" name="companyPan" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>GST NUMBER </label>
                                <input type="text" name="GST NUMBER" onChange={handleChange} />
                            </div>

                            {/* <div className="section">
                                <h3>Details of Director to be used for OTP validation *</h3>
                                <div className="form-group">
                                    <label>Director's Name </label>
                                    <input type="text" name="name" value={directorDetails.name} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>DIN/DPIN </label>
                                    <input type="text" name="din" value={directorDetails.din} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Director's PAN </label>
                                    <input type="text" name="pan" value={directorDetails.pan} onChange={handleChange} />
                                    <div className="btn-pathhh" style={{ display: 'flex' }}>
                                        <button onClick={handleValidation} className='btn btn-cancel me-3'>Validation</button>
                                        <button onClick={() => setDirectorDetails({ ...directorDetails, pan: '' })} className='btn btn-cancel me-3'>Remove</button>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Enter Your Aadhaar Number </label>
                                    <input type="text" name="aadhaar" value={directorDetails.aadhaar} onChange={handleChange} />

                                    <button onClick={handleAadhaarOtp} className='btn btn-cancel me-3'>Send Aadhaar OTP</button>

                                </div>
                                <div className="form-group">
                                    <label>Enter OTP </label>
                                    <input type="text" name="otp" onChange={handleChange} />
                                    <div className="btn-pathhh" style={{ display: 'flex' }}>
                                        <button onClick={handleVerify} className='btn btn-cancel me-3'>Verify</button>
                                        <button onClick={handleAdd} className='btn btn-cancel me-3'>Add</button>
                                    </div>
                                </div>
                            </div> */}

                      
                          
                        </div>
                        <div className="btn-path">
                            <Link to={'/registration'} className="btn btn-cancel me-3">Back</Link>

                            <Link to={'/DirectorPerdet'} className="btn btn-cancel me-3">Next</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectorForm;