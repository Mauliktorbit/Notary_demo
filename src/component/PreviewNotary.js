import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function PreviewNotary() {
    const [content, setContent] = useState('');

    const handleChange = (value) => {
        setContent(value);
    };

    const modules = {
        toolbar: [
            ['bold', 'italic'], // Bold and Italic buttons
            [{ list: 'bullet' }], // Bullet list
        ],
    };

    const formats = ['bold', 'italic', 'list'];

    const [showPopup, setShowPopup] = useState(false);

    const handleNextClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <Navbar />
            <div className='main-component'>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                First party (individual)
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="per-det">
                                    <span className="text-personal">
                                        <h5>New Notary</h5>
                                    </span>
                                    <span className="line-personal" style={{ margin: "10px 0" }}></span>
                                </div>
                                <div className="kyc-row">
                                    <div className="aadhaar-section">
                                        <label htmlFor="aadhaar-number">Existing ID</label>
                                        <span className="mandatory-text">
                                            ( If you have existing noatarial KYC ID , please enter and fetch )
                                        </span>
                                        <div className="aadhaar-input">
                                            <input
                                                type="text"
                                                id="aadhaar-number"
                                                placeholder="Aadhar Number"
                                            />
                                            <button className="verify-btn">Fetch</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Title of document</label>
                                                <select name="">
                                                    <option value="">Select Title of document</option>
                                                    <option value="">Affidavit </option>
                                                    <option value="">Agreements</option>
                                                    <option value="">Deed</option>
                                                    <option value="">Certification </option>
                                                    <option value="">Power of Attorney </option>
                                                    <option value="">Any other documents
                                                    </option>



                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Type of concerned</label>
                                                <select name="state">
                                                    <option value="">Select Title of document</option>
                                                    <option value="">Affidavit </option>
                                                    <option value="">Agreements</option>
                                                    <option value="">Deed</option>
                                                    <option value="">Certification </option>
                                                    <option value="">Power of Attorney </option>
                                                    <option value="">Any other documents
                                                    </option>



                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="mandatory-text">
                                    ( If you have existing noatarial KYC ID , please enter and fetch )
                                </span>
                                <hr></hr>
                                <div className="aadhaar-section">
                                    <label htmlFor="aadhaar-number">First party (individual)</label>
                                </div>
                                <div className="profile-picture">
                                    <img
                                        src="assets/img/Group 720.png"
                                        alt="User Profile"
                                        className="profile-img"
                                    />
                                    <label className="upload-button" style={{ marginLeft: "10px" }}>
                                        Upload photo
                                        <input type="file" accept="image/*" style={{ display: "none" }} />
                                        <img
                                            src="assets/img/Group 260.png"
                                            alt="Upload Icon"
                                            style={{ paddingLeft: "5px" }}
                                        />
                                    </label>

                                    <button className="upload-button" style={{ marginLeft: "10px" }}>
                                        Remove photo
                                    </button>

                                    <p className="upload-note">Upload photo up to 1 MB</p>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Middle Name</label>
                                                <input type="text" placeholder="Middle  Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input type="text" placeholder="Last  Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Date of Birth</label>
                                                <input type="date" placeholder="Date of Birth" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Gender</label>
                                                <select name="state">
                                                    <option value=""> Gender</option>
                                                    {/* Populate options dynamically */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Whether a citizen of India</label>
                                                <select name="state">
                                                    <option value=""> </option>
                                                    {/* Populate options dynamically */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Nationality </label>
                                                <select name="state">
                                                    <option value=""> </option>
                                                    {/* Populate options dynamically */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Whether resident in India</label>
                                                <select name="state">
                                                    <option value=""> </option>
                                                    {/* Populate options dynamically */}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <select name="state">
                                                    <option value=""> </option>
                                                    {/* Populate options dynamically */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Educational qualification </label>
                                                <select name="state">
                                                    <option value=""> </option>
                                                    {/* Populate options dynamically */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Occupation Type </label>
                                                <select name="state">
                                                    <option value=""> </option>
                                                    {/* Populate options dynamically */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Area occupation Type</label>
                                                <select name="state">
                                                    <option value=""> </option>
                                                    {/* Populate options dynamically */}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="aadhaar-section">
                                    <label htmlFor="aadhaar-number">
                                        <b>First party (individual)</b>
                                    </label>
                                </div>

                                <div className="row">
                                    {/* <div className='col-md-8'> */}
                                    <div className="kyc-row">
                                        <div className="aadhaar-section">
                                            <div className="upload-section-wrapper">
                                                <div className="upload-section">
                                                    <div className="upload-icon">
                                                        <img src="assets\img\Layer_1 (1).png" alt="Folder Icon" />
                                                    </div>
                                                    <label htmlFor="file-upload" className="choose-file-btn">
                                                        Choose File
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id="file-upload"
                                                        style={{ display: "none" }}
                                                    />
                                                </div>

                                                <div className="aadhaar-input">
                                                    <select id="document-type" className="document-dropdown">
                                                        <option value="Aadhar card">Aadhar card</option>
                                                        <option value="PAN card">Income Tax PAN</option>
                                                        <option value="Voter ID">Voter ID Number</option>
                                                        <option value="Passport">Driving License Number</option>
                                                        <option value="Driving license">Ration Card Number</option>
                                                        <option value="Driving license">Passport Number</option>
                                                    </select>
                                                    <input
                                                        type="text"
                                                        id="aadhaar-number"
                                                        placeholder="Enter Document Number"
                                                    />
                                                    <button className="verify-btn">Verify</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* </div> */}

                                        <div className="container">
                                            <div className="row">
                                                {[
                                                    "Aadhar card",
                                                    "Income Tax PAN",
                                                    "Voter ID Number",
                                                    "Driving License Number",
                                                    "Ration Card Number",
                                                    "Passport Number",
                                                ].map((doc, index) => (
                                                    <div className="col-md-6 mb-4" key={index}>
                                                        <div className="document-item d-flex align-items-center border p-3 rounded">
                                                            <div className="document-icon">
                                                                <img src="assets/img/Group 245.png" alt="PDF Icon" />
                                                            </div>
                                                            <span className="mx-2 flex-grow-1">{doc}</span>
                                                            <img
                                                                src="assets/img/Group 261.png"
                                                                alt="Upload Icon"
                                                                style={{ paddingLeft: "5px" }}
                                                            />
                                                            <p
                                                                className="verify-bttn d-flex align-items-center ml-auto mb-0"
                                                                style={{ marginLeft: "auto" }}
                                                            >
                                                                <img
                                                                    src="assets/img/Vector (13).png"
                                                                    alt="Verify Icon"
                                                                    style={{ paddingRight: "5px" }}
                                                                />
                                                                Verify
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Address Line 1</label>
                                                            <input
                                                                type="text"
                                                                name="addressLine1"
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
                                                                placeholder="Address Line 2"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Address Line 3</label>
                                                            <input
                                                                type="text"
                                                                name="addressLine3"
                                                                placeholder="Address Line 3"
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
                                          <label>Country
                                          </label>

                                          <input
                                            type="text"
                                            name="pinCode"
                                            placeholder="Select Country"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <label>State</label>
                                          <select name="country">
                                            <option value="">
                                              Select State
                                            </option>
                                            {/* Populate options dynamically */}
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <label>Pin Code
                                          </label>
                                          <input
                                            type="text"
                                            name="pinCode"
                                            placeholder="pincode"
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
                                          <label>District</label>
                                          <select name="state">
                                            <option value="">
                                              Select District
                                            </option>
                                            {/* Populate options dynamically */}
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <label>City</label>
                                          <select name="country">
                                            <option value="">
                                              Select City
                                            </option>
                                            {/* Populate options dynamically */}
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <label>Taluka / Tehsil</label>
                                          <select name="country">
                                            <option value="">
                                              Select Taluka / Tehsil
                                            </option>
                                            {/* Populate options dynamically */}
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                        <div className="form-row">
                                            <div
                                                className="form-group"
                                                style={{ display: "flex", gap: "8%" }}
                                            >
                                                <label>Correspondence Address Same As Above</label>
                                                <div className="radio-group">
                                                    <label>
                                                        <input type="radio" name="citizen" value="Yes" />
                                                        Yes
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="citizen" value="No" />
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Address Line 1</label>
                                                            <input
                                                                type="text"
                                                                name="addressLine1"
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
                                                                placeholder="Address Line 2"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Address Line 3</label>
                                                            <input
                                                                type="text"
                                                                name="addressLine3"
                                                                placeholder="Address Line 3"
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
                                          <label>Country
                                          </label>

                                          <input
                                            type="text"
                                            name="pinCode"
                                            placeholder="Select Country"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <label>State</label>
                                          <select name="country">
                                            <option value="">
                                              Select State
                                            </option>
                                            {/* Populate options dynamically */}
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <label>Pin Code
                                          </label>
                                          <input
                                            type="text"
                                            name="pinCode"
                                            placeholder="pincode"
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
                                          <label>District</label>
                                          <select name="state">
                                            <option value="">
                                              Select District
                                            </option>
                                            {/* Populate options dynamically */}
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <label>City</label>
                                          <select name="country">
                                            <option value="">
                                              Select City
                                            </option>
                                            {/* Populate options dynamically */}
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <label>Taluka / Tehsil</label>
                                          <select name="country">
                                            <option value="">
                                              Select Taluka / Tehsil
                                            </option>
                                            {/* Populate options dynamically */}
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Second party (individual)
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="aadhaar-section">
                                    <label htmlFor="aadhaar-number"><b>Second party (individual)</b></label>
                                </div>
                                <div className="profile-picture">
                                    <img
                                        src="assets/img/Group 720.png"
                                        alt="User Profile"
                                        className="profile-img"
                                    />
                                    <label className="upload-button" style={{ marginLeft: "10px" }}>
                                        Upload photo
                                        <input type="file" accept="image/*" style={{ display: "none" }} />
                                        <img
                                            src="assets/img/Group 260.png"
                                            alt="Upload Icon"
                                            style={{ paddingLeft: "5px" }}
                                        />
                                    </label>

                                    <button className="upload-button" style={{ marginLeft: "10px" }}>
                                        Remove photo
                                    </button>

                                    <p className="upload-note">Upload photo up to 1 MB</p>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Middle Name</label>
                                                <input type="text" placeholder="Middle  Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input type="text" placeholder="Last  Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Date of Birth</label>
                                                <input type="date" placeholder="Date of Birth" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Gender</label>
                                                <select name="state">
                                                    <option value=""> Gender</option>
                                                    {/* Populate options dynamically */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Whether a citizen of India</label>
                                                <select name="state">
                                                    <option value=""> </option>
                                                    {/* Populate options dynamically */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Nationality </label>
                                                <select name="state">
                                                    <option value=""> </option>
                                                    {/* Populate options dynamically */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Whether resident in India</label>
                                                <select name="state">
                                                    <option value=""> </option>
                                                    {/* Populate options dynamically */}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <select name="state">
                                                    <option value=""> </option>
                                                    {/* Populate options dynamically */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Educational qualification </label>
                                                <select name="state">
                                                    <option value=""> </option>
                                                    {/* Populate options dynamically */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Occupation Type </label>
                                                <select name="state">
                                                    <option value=""> </option>
                                                    {/* Populate options dynamically */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Area occupation Type</label>
                                                <select name="state">
                                                    <option value=""> </option>
                                                    {/* Populate options dynamically */}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="aadhaar-section">
                                    <label htmlFor="aadhaar-number">
                                        <b>First party (individual)</b>
                                    </label>
                                </div>

                                <div className="row">
                                    {/* <div className='col-md-8'> */}
                                    <div className="kyc-row">
                                        <div className="aadhaar-section">
                                            <div className="upload-section-wrapper">
                                                <div className="upload-section">
                                                    <div className="upload-icon">
                                                        <img src="assets\img\Layer_1 (1).png" alt="Folder Icon" />
                                                    </div>
                                                    <label htmlFor="file-upload" className="choose-file-btn">
                                                        Choose File
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id="file-upload"
                                                        style={{ display: "none" }}
                                                    />
                                                </div>

                                                <div className="aadhaar-input">
                                                    <select id="document-type" className="document-dropdown">
                                                        <option value="Aadhar card">Aadhar card</option>
                                                        <option value="PAN card">Income Tax PAN</option>
                                                        <option value="Voter ID">Voter ID Number</option>
                                                        <option value="Passport">Driving License Number</option>
                                                        <option value="Driving license">Ration Card Number</option>
                                                        <option value="Driving license">Passport Number</option>
                                                    </select>
                                                    <input
                                                        type="text"
                                                        id="aadhaar-number"
                                                        placeholder="Enter Document Number"
                                                    />
                                                    <button className="verify-btn">Verify</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* </div> */}

                                        <div className="container">
                                            <div className="row">
                                                {[
                                                    "Aadhar card",
                                                    "Income Tax PAN",
                                                    "Voter ID Number",
                                                    "Driving License Number",
                                                    "Ration Card Number",
                                                    "Passport Number",
                                                ].map((doc, index) => (
                                                    <div className="col-md-6 mb-4" key={index}>
                                                        <div className="document-item d-flex align-items-center border p-3 rounded">
                                                            <div className="document-icon">
                                                                <img src="assets/img/Group 245.png" alt="PDF Icon" />
                                                            </div>
                                                            <span className="mx-2 flex-grow-1">{doc}</span>
                                                            <img
                                                                src="assets/img/Group 261.png"
                                                                alt="Upload Icon"
                                                                style={{ paddingLeft: "5px" }}
                                                            />
                                                            <p
                                                                className="verify-bttn d-flex align-items-center ml-auto mb-0"
                                                                style={{ marginLeft: "auto" }}
                                                            >
                                                                <img
                                                                    src="assets/img/Vector (13).png"
                                                                    alt="Verify Icon"
                                                                    style={{ paddingRight: "5px" }}
                                                                />
                                                                Verify
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Address Line 1</label>
                                                            <input
                                                                type="text"
                                                                name="addressLine1"
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
                                                                placeholder="Address Line 2"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Address Line 3</label>
                                                            <input
                                                                type="text"
                                                                name="addressLine3"
                                                                placeholder="Address Line 3"
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

                                                            <input
                                                                type="text"
                                                                name="pinCode"
                                                                placeholder="Taluka  / Tehsil"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>City</label>
                                                            <select name="country">
                                                                <option value="">Select City</option>
                                                                {/* Populate options dynamically */}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>District</label>
                                                            <input
                                                                type="text"
                                                                name="pinCode"
                                                                placeholder="District"
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
                                                            <label>State</label>
                                                            <select name="state">
                                                                <option value="">Select State</option>
                                                                {/* Populate options dynamically */}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>Country</label>
                                                            <select name="country">
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
                                                                placeholder="Pin Code"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div
                                                className="form-group"
                                                style={{ display: "flex", gap: "8%" }}
                                            >
                                                <label>Correspondence Address Same As Above</label>
                                                <div className="radio-group">
                                                    <label>
                                                        <input type="radio" name="citizen" value="Yes" />
                                                        Yes
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="citizen" value="No" />
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Address Line 1</label>
                                                            <input
                                                                type="text"
                                                                name="addressLine1"
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
                                                                placeholder="Address Line 2"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Address Line 3</label>
                                                            <input
                                                                type="text"
                                                                name="addressLine3"
                                                                placeholder="Address Line 3"
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

                                                            <input
                                                                type="text"
                                                                name="pinCode"
                                                                placeholder="Taluka  / Tehsil"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>City</label>
                                                            <select name="country">
                                                                <option value="">Select City</option>
                                                                {/* Populate options dynamically */}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>District</label>
                                                            <input
                                                                type="text"
                                                                name="pinCode"
                                                                placeholder="District"
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
                                                            <label>State</label>
                                                            <select name="state">
                                                                <option value="">Select State</option>
                                                                {/* Populate options dynamically */}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>Country</label>
                                                            <select name="country">
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
                                                                placeholder="Pin Code"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Description
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className='childe-component'>
                                    <h3 className='childe-title'>Description</h3>

                                    <div className='row mt-4'>
                                        <div className="col-1">
                                            <div className="form-group">
                                                <p>Tenure Date</p>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-group">
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-1">
                                            <div className="form-group">
                                                <p>To</p>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-group">
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-1">
                                            <div className="form-group">
                                                <p>- -</p>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-group">
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <label className='mb-2 mt-2'>Notary Description</label>
                                    <div className="notary-writer-container">
                                        <ReactQuill
                                            value={content}
                                            onChange={handleChange}
                                            modules={modules}
                                            formats={formats}
                                            className="custom-quill"
                                        />
                                    </div>
                                    <p className='my-4' style={{ textAlign: 'center' }}>Or</p>
                                    <div className='col-12'>
                                        <div className='uploadfile-notry'>
                                            <i class="fa-regular fa-file-pdf"></i>
                                            Upload a pdf of Job  Description
                                            <input type='file' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-path mt-5" style={{ justifyContent: 'space-around' }}>
                        <Link to={'/notary-writer'} className="btn btn-cancel me-3 small-long">Back</Link>
                        <button type="submit" className="btn btn-submit small-long" onClick={handleNextClick}>Next</button>
                    </div>
                </div>
            </div>
            {/* Popup Modal */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">              
                        <button className="btn btn-close" onClick={handleClosePopup}>
                            ✖
                        </button>
                        <div className='popup-contain-preview'>
                            <h4 style={{ paddingTop: '15px' }}>Assign To Notary</h4>
                            <p style={{ paddingTop: '15px' }}>All Executants To Single Notary Publicutor</p>
                            <p style={{ paddingTop: '15px' }}>All Executants To Diffrent Notary Publicutor</p>
                            <div className="btn-path mt-5" style={{ justifyContent: 'space-around' }}>
                                <Link to={'/BusinessUserSelectLoyer'} className="btn btn-cancel me-3 small-long">Single</Link>
                                <Link to={'/BusinessUserSelectLoyer'} className="btn btn-submit small-long" onClick={handleNextClick}>Multiple</Link>
                            </div>
                        </div>
                    </div>

                </div>
            )}

            <style jsx>{`

.per-det {
    display: grid
;
    align-items: center;
}
    h2 {
    margin-bottom: 20px;
    text-align: center;
    color: #333;
}

.aadhaar-section {
    margin-bottom: 20px;
}
    .mandatory-text {
    color: red;
    font-size: 12px;
    margin-left: 10px;
}

.aadhaar-input {
    display: flex
;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
}
.aadhaar-input input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ddd;
    background-color: aliceblue;
    border-radius: 4px;
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
    .upload-button {
    background-color: #164370;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
}
.upload-section-wrapper {
    display: flex;
    // justify-content: space-between;
    align-items: center;
}
.verify-btn {
  float: right;
    padding: 8px 16px;
    background: #164370;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.verify-bttn {
  float: right;
    padding: 8px 16px;

    color: #1D71B7;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.documents-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.document-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #1D71B714;
    border-radius: 4px;
   background: #1D71B714;
    gap: 10px;
}

.document-icon img {
    width: 24px;
    height: 24px;
}

.upload-section {
    text-align: center;
    margin-bottom: 20px;
}

.upload-icon img {
    width: 50px;
    height: 50px;
}

.choose-file-btn {
    padding: 8px 16px;
    background: #fff;
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;
        text-decoration: underline;
}

.kyc-actions {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}
select {
    width: 100%;
    background: #1D71B714;
    padding: 10px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
}
`}</style>
        </>

    );
}