import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function IndividualUserDocument() {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("File selected:", file.name);
        }
    };


    const [formDetails, setFormDetails] = useState({
        enteredCaptcha1: '',
    });

    const generateCaptcha = () => {
        return Math.random().toString(36).substring(2, 8);
    };


    const [captchas, setCaptchas] = useState({
        captcha1: generateCaptcha(),
    });

    const handleChange = (e) => {
        setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value,
        });
    };
    const handleVerify = () => {
        // Add verification logic here
        alert('Verify Clicked!');
    };



    const handleVerifyCaptcha = (captcha, enteredCaptcha) => {
        if (captchas[captcha] === formDetails[enteredCaptcha]) {
            alert('Captcha Verified!');
        } else {
            alert('Incorrect Captcha!');
        }
    };

    const handleCaptchaRefresh = (captchaKey) => {
        setCaptchas((prevCaptchas) => ({
            ...prevCaptchas,
            [captchaKey]: generateCaptcha(),
        }));
    };

    const handleValidation = () => {
        alert('Validation Clicked!');
    };

    const handleAadhaarOtp = () => {
        // Add Aadhaar OTP logic here
        alert('Aadhaar OTP Clicked!');
    };

       const [selectedQualificationn, setSelectedQualificationn] = useState('');
    
        const handleQualificationChanges = (event) => {
            setSelectedQualificationn(event.target.value);
        };


    return (
        <div className="kyc-container">
            <div className="per-det">
                <span className="text-personal">
                    <h5>Upload Your KYC Documents</h5>
                </span>
                <span className="line-personal" style={{ margin: '10px 0' }}></span>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                    <div className="kyc-row">
                        <div className="aadhaar-section">
                            <label htmlFor="document-type">Select Document</label>
                            <span className="mandatory-text">(Any 2 doc mandatory)</span>
                            <div className="aadhaar-input">
                                <select id="document-type" className="document-dropdown" value={selectedQualificationn}
                                    onChange={handleQualificationChanges}>
                                    
                                    <option value="PAN card">Income Tax PAN *</option>
                                    <option value="Aadhar card">Aadhar card *</option>
                                    <option value="Voter ID">Voter ID Number</option>
                                    <option value="Passport">Driving License Number</option>
                                    <option value="Driving license">Ration Card Number</option>
                                    <option value="Driving license">Passport Number *</option>
                                </select>
                                <input type="text" id="aadhaar-number" placeholder="Enter Document No." />
                                <button onClick={handleValidation} className='btn btn-cancel me-3'>Validation</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='col-md-12'>
                    <div className="kyc-row">
                        <div className="aadhaar-section">
                            <div className="aadhaar-input">
                                <input type="text" name="enteredCaptcha1" value={formDetails.enteredCaptcha1} onChange={handleChange} placeholder="Enter Captcha Code" />
                                <div className="input-row captcha-container">
                                    <span className="captcha-box">{captchas.captcha1}</span>
                                </div>
                                <button
                                    onClick={() => handleCaptchaRefresh('captcha1')}
                                    className="btn btn-cancel me-3"
                                >
                                    🔄
                                </button>
                                <button onClick={handleVerify} className='btn btn-cancel me-3'>Verify</button>
                            </div>

                        </div>
                    </div>
                </div>

                {selectedQualificationn === 'Aadhar card' && (
                    <div className='col-md-12'>
                        <div className="kyc-row">
                            <div className="aadhaar-section">
                                <div className="aadhaar-input">
                                    <input type="text" name="otp" placeholder='Enter OTP ' />
                                    <button onClick={handleAadhaarOtp} className='btn btn-cancel me-3'>Send Aadhaar OTP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                <div className='col-md-8'>
                    <div className="documents-list">
                        {['Aadhar card', 'Income Tax PAN', 'Voter ID Number', 'Driving License Number', 'Ration Card Number', 'Passport Number'].map((doc, index) => (
                            <div className="document-item" key={index}>
                                <div className="document-icon">
                                    <img src="assets\img\Group 245.png" alt="PDF Icon" />
                                </div>
                                <span>{doc}</span>
                                <img
                                    src="assets\img\Group 261.png"
                                    alt="Upload Icon" style={{ paddingLeft: '5px' }}
                                />
                                <p className="verify-bttn" style={{ marginLeft: 'auto', marginBottom: '0' }}> <img
                                    src="assets\img\Vector (13).png"
                                    alt="Upload Icon" style={{ paddingRight: '5px' }}
                                /> Verified</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="upload-section-wrapper">
                        <div className="upload-section">
                            <div className="upload-icon">
                                <img src="assets\img\Layer_1 (1).png" alt="Folder Icon" />
                            </div>
                            <label htmlFor="file-upload" className="choose-file-btn">Choose File</label>
                            <input
                                type="file"
                                id="file-upload"
                                style={{ display: 'none' }}
                                onChange={handleFileUpload}
                            />
                        </div>
                    </div>
                </div>
            </div>





            <div className="btn-path">
                <Link to={'/IndividualUserAddress'} className="btn btn-cancel me-3 white-or small-long">Back</Link>
                {/* <Link to={'/PersonSignIn'} className="btn btn-cancel me-3 small-long">Next</Link> */}
                <Link to={'/IndividualUserAddress'} className="btn btn-cancel me-3 small-long">Next</Link>
                <button type="submit" className="btn btn-submit small-long">Save</button>
            </div>


            <style jsx>{`
/* IndividualUserDocument.css */
.upload-section-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* Adjust based on the container's height */
}

.per-det {
    display: grid
;
    align-items: center;
}
.kyc-container {
 max-width: 796px;
        margin: 40px auto;
    padding: 50px;
    border: 1px solid #ECECEC;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top:10px;
}

.aadhaar-input input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
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
.btn-path {
    text-align: right;
    display: flex
;
    justify-content: end;
    margin-top: 50px;
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

.back-btn, .next-btn, .save-btn {
    flex: 1;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;
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

        </div>
    );
}

export default IndividualUserDocument;