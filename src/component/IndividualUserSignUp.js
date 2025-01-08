import React, { useState } from 'react';
import { Link } from 'react-router-dom'
function IndividualUserSignUp() {
    const [selectedFile, setSelectedFile] = useState(null);


    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0]);
    };


    const [selectedQualification, setSelectedQualification] = useState('');

    const handleQualificationChange = (event) => {
        setSelectedQualification(event.target.value);
    };


    const [selectedQualificationn, setSelectedQualificationn] = useState('');

    const handleQualificationChanges = (event) => {
        setSelectedQualificationn(event.target.value);
    };


    const [isCitizen, setIsCitizen] = useState(true);
    const [isResident, setIsResident] = useState(true);

    const handleCitizenChange = (e) => {
        setIsCitizen(e.target.value === 'Yes');
    };

    const handleResidentChange = (e) => {
        setIsResident(e.target.value === 'Yes');
    };

    return (
        <div className="signup-container">
            <div className="form-header">
                <div className="profile-picture">
                    <img
                        src="assets\img\Group 720.png"
                        alt="User Profile"
                        className="profile-img"
                    />
                    <label className="upload-button">
                        Take photo
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}

                        />
                    </label>
                    <label className="upload-button">
                        Upload photo
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <img
                            src="assets\img\Group 260.png"
                            alt="Upload Icon" style={{ paddingLeft: '5px' }}
                        />
                    </label>

                    <p className="upload-note">Upload photo up to 1 MB</p>
                </div>
            </div>

            <form className="signup-form">
                <div className="row personal-name">
                    <label>Choosing One Field is Mandatory</label>
                    <div className="col-md-6">
                        <div className="form-group">

                            <select>
                                <option>Aadhaar Card Number</option>
                                <option>Permanent Account Number (PAN)</option>
                                <option>Passport Number</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="radio-group-yes">
                                <label className="radio-inline">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="XXXX XXXX XXXX"
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Name as Per Identity Proof</label>
                        <input type="text" placeholder="User" />
                    </div>

                    <div className="form-group">
                        <label>Father Name</label>
                        <input type="text" placeholder="User" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input type="date" />
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <select>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Other</option>
                        </select>
                    </div>

                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Whether a citizen of India</label>
                        {/* <div className="radio-group">
                            <label>
                                <input type="radio" name="citizen" value="Yes" checked={isCitizen} onChange={handleCitizenChange} /> Yes </label>
                            <label>
                                <input type="radio" name="citizen" value="No" checked={!isCitizen} onChange={handleCitizenChange} /> No</label>
                        </div> */}

                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="citizen"
                                    value="Yes"
                                    checked={isCitizen}
                                    onChange={handleCitizenChange}
                                />
                                <label className="ms-2">Yes</label>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="citizen"
                                    value="No"
                                    checked={!isCitizen}
                                    onChange={handleCitizenChange}
                                />
                                <label className="ms-2">No</label>
                            </label>
                        </div>

                    </div>

                    {!isCitizen && (
                        <div className="form-group">
                            <label>Nationality</label>
                            <select>
                                <option>India</option>
                                <option>Other</option>
                            </select>
                        </div>
                    )}



                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Whether resident in India</label>
                        {/* <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="Resident"
                                    value="Yes"
                                    checked={isResident}
                                    onChange={handleResidentChange}

                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="citizen"
                                    value="No"
                                    checked={!isResident}
                                    onChange={handleResidentChange}
                                />
                                No
                            </label>
                        </div> */}

                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="resident"
                                    value="Yes"
                                    checked={isResident}
                                    onChange={handleResidentChange}
                                />
                                <label className="ms-2">Yes</label>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="resident"
                                    value="No"
                                    checked={!isResident}
                                    onChange={handleResidentChange}
                                />
                                <label className="ms-2">No</label>
                            </label>
                        </div>
                    </div>

                    {!isResident && (
                        <div className="form-group">
                            <label>Country</label>
                            <select>
                                <option>Select</option>
                                <option>India</option>
                                <option>USA</option>
                            </select>
                        </div>
                    )}
                </div>


                <div className="form-row">
                    <div className="form-group">
                        <label>Educational Qualification</label>
                        <select
                            value={selectedQualification}
                            onChange={handleQualificationChange}
                        >
                            <option value="Bachelor">Bachelor's degree</option>
                            <option value="Master">Master's degree</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    {selectedQualification === 'Other' && (
                        <div className="form-group">
                            <label>If 'others' selected, please specify</label>
                            <label>
                                <input
                                    type="text"
                                    name="otherQualification"
                                    className="form-control"
                                    placeholder="Enter Here"
                                    required
                                />
                            </label>
                        </div>
                    )}

                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Occupation Type</label>
                        <select
                            value={selectedQualificationn}
                            onChange={handleQualificationChanges}
                        >
                            <option value="Serviceman">Serviceman</option>
                            <option value="Business">Business</option>
                            <option value="Student">Student</option>
                            <option value="Others">Other</option>
                        </select>
                    </div>
                    {selectedQualificationn === 'Others' && (
                        <div className="form-group">
                            <label>If 'others' selected, please specify</label>
                            <label>
                                <input
                                    type="text"
                                    name="otherQualificationn"
                                    className="form-control"
                                    placeholder="Enter Here"
                                    required
                                />
                            </label>
                        </div>
                    )}
                </div>

                <div className="btn-path">
                    <Link to={'/notarylogin'} className="btn btn-cancel me-3 white-or small-long">Back</Link>
                    <Link to={'/IndividualUserDocument'} className="btn btn-cancel me-3 small-long">Next</Link>
                    {/* <Link to={'/IndividualUserAddress'} className="btn btn-cancel me-3 small-long">Next</Link> */}
                    <button type="submit" className="btn btn-submit small-long">Save</button>
                </div>
            </form>
            <style jsx>{`
            .radio-group {
    display: flex
;
    gap: 20px;
}
            .btn-path {
    text-align: right;
    display: flex
;
    justify-content: center;
    margin-top: 20px;
}
      .signup-container {
    max-width: 796px;
        margin: 40px auto;
    padding: 50px;
    border: 1px solid #ECECEC;
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
    button.btn.btn-submit.small-long {
    margin: 0;
}
    .form-group input, .form-group select {
    width: 100%;
    background: #F5F7FA;
    padding: 10px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
}



      `}</style>
        </div>
    );
}

export default IndividualUserSignUp;