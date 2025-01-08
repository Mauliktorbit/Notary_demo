

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NotarySignup() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        notaryNumber: '',
        barCouncilNumber: '',
        addressLine1: '',
        addressLine2: '',
        addressLine3: '',
        taluka: '',
        city: '',
        district: '',
        state: '',
        country: '',
        password: '',
        pinCode: ''
    });

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="signup-container">
            <div className="form-header">
                <div className="profile-picture">
                    <img
                        src="assets/img/Group 720.png"
                        alt="User Profile"
                        className="profile-img"
                    />
                    <label className="upload-button">
                        Upload photo
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <img
                            src="assets/img/Group 260.png"
                            alt="Upload Icon"
                            style={{ paddingLeft: '5px' }}
                        />
                    </label>
                    <p className="upload-note">Upload photo up to 1 MB</p>
                </div>
            </div>

            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Middle Name</label>
                                    <input
                                        type="text"
                                        name="middleName"
                                        value={formData.middleName}
                                        onChange={handleChange}
                                        placeholder="Middle Name"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Notary Public Number</label>
                                    <select
                                        name="notaryNumber"
                                        value={formData.notaryNumber}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Notary Number</option>
                                        {/* Populate options dynamically here */}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Bar Council Number</label>
                                    <select
                                        name="barCouncilNumber"
                                        value={formData.barCouncilNumber}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Bar Council Number</option>
                                        {/* Populate options dynamically here */}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Address Line 1</label>
                                    <input
                                        type="text"
                                        name="addressLine1"
                                        value={formData.addressLine1}
                                        onChange={handleChange}
                                        placeholder="Address Line 1"
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Address Line 2</label>
                                    <input
                                        type="text"
                                        name="addressLine2"
                                        value={formData.addressLine2}
                                        onChange={handleChange}
                                        placeholder="Address Line 2"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Address Line 3</label>
                                    <input
                                        type="text"
                                        name="addressLine3"
                                        value={formData.addressLine3}
                                        onChange={handleChange}
                                        placeholder="Address Line 3"
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>
                            <div className="form-group">

                            <label>Password</label>
                                    <input
                                        type="password"
                                        name="Password"
                                        value={formData.addressLine3}
                                        onChange={handleChange}
                                        placeholder="Password"
                                    />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Taluka / Tehsil</label>
                                    <select
                                        name="taluka"
                                        value={formData.taluka}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Taluka</option>
                                        {/* Populate options dynamically */}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="City"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>District</label>
                                    <select
                                        name="district"
                                        value={formData.district}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select District</option>
                                        {/* Populate options dynamically */}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>State</label>
                                    <select
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select State</option>
                                        {/* Populate options dynamically */}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Country</label>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Country</option>
                                        {/* Populate options dynamically */}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Pin Code</label>
                                    <input
                                        type="text"
                                        name="pinCode"
                                        value={formData.pinCode}
                                        onChange={handleChange}
                                        placeholder="Pin Code"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="btn-path">
                    <Link to={'/notarylogin'} className="btn btn-cancel me-3 white-or small-long">Back</Link>
                    <Link to={'/IndividualUserAddress'} className="btn btn-cancel me-3 small-long">Next</Link>
                    <button type="submit" className="btn btn-submit small-long">Save</button>
                </div>
            </form>

            <style jsx>{`
                .btn-path {
                    text-align: right;
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                }
                .signup-container {
                    max-width: 796px;
                    margin: 40px auto;
                    padding: 50px;
                    border: 1px solid #ececec;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .form-header {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .profile-picture {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .profile-img {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    border: 2px solid #f0f0f0;
                    margin-bottom: 10px;
                }
                .upload-button {
                    background-color: #164370;
                    color: white;
                    border: none;
                    padding: 5px 10px;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .upload-note {
                    font-size: 12px;
                    color: gray;
                    margin-top: 5px;
                }
                .signup-form {
                    display: flex;
                    flex-direction: column;
                }
                .form-row {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 20px;
                }
                .form-group {
                    flex: 1;
                    margin-right: 10px;
                }
                .form-group:last-child {
                    margin-right: 0;
                }
                label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                }
                input, select {
                    width: 100%;
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    font-size: 14px;
                }
                .form-actions {
                    display: flex;
                    justify-content: space-between;
                }
                button {
                    padding: 10px 20px;
                    font-size: 14px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .back-button {
                    background-color: #f8f9fa;
                    color: #333;
                }
                .next-button {
                    background-color: #007bff;
                    color: #fff;
                }
                .save-button {
                    background-color: #ffc107;
                    color: #fff;
                }
                .form-group input, .form-group select {
                    width: 100%;
                    background: #f5f7fa;
                    padding: 10px;
                    border: none;
                    border-radius: 4px;
                    font-size: 14px;
                    outline: none;
                }
            `}</style>
        </div>
    );
}

export default NotarySignup;
