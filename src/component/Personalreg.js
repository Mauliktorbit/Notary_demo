// import React from 'react'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
function Personalreg() {

    const [isCitizen, setIsCitizen] = useState(true);
    const [isResident, setIsResident] = useState(true);

    const handleCitizenChange = (e) => {
        setIsCitizen(e.target.value === 'Yes');
    };

    const handleResidentChange = (e) => {
        setIsResident(e.target.value === 'Yes');
    };

    return (
        <>
            <div className="main-personal">
                <div className="container">
                    <div className="registration-main">
                        <div className="registration-form">
                            <div className="login-details">
                                <div className="per-det">
                                    <span className="text-personal"><h3>Personal Detail</h3></span>
                                    <span className="line-personal"><div className="kycc">IF YOU HAVE EXISTING NOTARIAL KYC ID, PLEASE ENTER AND FETCH</div><div className="kyc">KYC ID : NTXXXXXXX</div></span>
                                </div>
                                <div className="photo-pre">
                                    <p>PHOTOGRAPH (ATTACH A LATEST PASSPORT SIZE PHOTOGRAPH BY CLICKING ON THE  ALONGSIDE BOX)</p>
                                </div>
                                <div className="row personal-photo">
                                    <div className="col-md-3 ph">
                                        <input
                                            type="text"
                                            placeholder="Upto 1MB"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3 ph">
                                        <input
                                            type="file"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-3 ph">
                                        <input
                                            type="button"
                                            value="Take Photo"
                                            className="form-control"
                                            onClick={() => alert('Live photo functionality not implemented yet')}
                                        />
                                    </div>
                                    <div className="col-md-3 ph">
                                        <button
                                            className="btn btn-cancel me-3 white-or"
                                            onClick={() => alert('Photograph removed')}
                                        >
                                            Remove Photograph
                                        </button>
                                    </div>
                                </div>

                                <div className="row personal-name">
                                    <h5>Choosing One Field is Mandatory.</h5>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <div className="radio-group-yes">
                                                <label className="radio-inline">
                                                    <select
                                                        name="state"
                                                        id="state"
                                                        className="form-select"
                                                        required
                                                    >
                                                        <option selected >Aadhaar Card Number</option>
                                                        <option value={'PAN'}>Permanent Account Number (PAN)</option>
                                                        <option value={'Passport Number'}>Passport Number</option>
                                                    </select>
                                                </label>
                                            </div>
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

                                <div className="row personal-name">
                                    <div className="col-md-3">
                                        <div className='form-group'>
                                            <label>Name as Per Identity Proof.</label>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <div className="radio-group-yes">



                                                <label className="radio-inline">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="RAMESH SHARMA (DETAILS ARE FILLED BY API)"
                                                        required
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row personal-name">
                                    <div className="col-md-3">
                                        <div className='form-group'>
                                            <label>Father Name.</label>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <div className="radio-group-yes">



                                                <label className="radio-inline">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="RAMESH SHARMA"
                                                        required
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="row">

                                    <div className="col-md-6">

                                        <div className='row'>
                                            <div className='col-5'>
                                                <label className="radio-inline">
                                                    Date Of Birth
                                                </label>

                                            </div>
                                            <div className='col-6'>
                                                <div className="form-group">
                                                    <div className="radio-group-yes">
                                                        <label className="radio-inline">
                                                            <input
                                                                type="date"
                                                                name="joining_date"
                                                                className="form-control"
                                                                required
                                                            />
                                                        </label>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className='row'>
                                            <div className='col-2'>
                                                <label className="radio-inline">
                                                    Gender
                                                </label>

                                            </div>
                                            <div className='col-5'>
                                                <div className="form-group">
                                                    <div className="radio-group-yes">

                                                        <select
                                                            name="state"
                                                            id="state"
                                                            className="form-select"
                                                            required
                                                        >
                                                            <option selected >Male</option>
                                                            <option value={'Female'}>Female</option>
                                                            <option value={'Other'}>Other</option>
                                                        </select>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="row personal-name">
                                    <div className="col-md-6 d-flex align-items-center">
                                        <label className="radio-inline">Whether a Citizen of India</label>
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

                                    {/* Conditional Nationality section */}
                                    {!isCitizen && (
                                        <div className="col-md-6 d-flex align-items-center">
                                            <label className="radio-inline me-3">Nationality</label>
                                            <div className="form-group flex-grow-1">
                                                <select
                                                    name="nationality"
                                                    id="nationality"
                                                    className="form-select"
                                                    required
                                                >
                                                    <option selected>Select Nationality</option>
                                                    <option value="India">India</option>
                                                    <option value="USA">USA</option>
                                                    <option value="UK">UK</option>
                                                </select>
                                            </div>
                                        </div>
                                    )}

                                </div>


                                {/* Resident in India Section */}
                                <div className="row personal-name">
                                    <div className="col-md-6 d-flex align-items-center">
                                        <label className="radio-inline">Whether resident in India</label>
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

                                    {/* Conditional Country section */}
                                    {!isResident && (
                                        <div className="col-md-6 d-flex align-items-center">
                                            <label className="radio-inline">Country</label>
                                            <div className="form-group flex-grow-1">
                                                <select
                                                    name="country"
                                                    id="country"
                                                    className="form-select"
                                                    required
                                                >
                                                    <option selected>Select Country</option>
                                                    <option value="India">India</option>
                                                    <option value="USA">USA</option>
                                                    <option value="UK">UK</option>
                                                </select>
                                            </div>
                                        </div>
                                    )}
                                </div>



                                <div className="row " style={{ marginTop: '15px' }}>
                                    <div className="col-md-6">

                                        <div className='row'>
                                            <div className='col-5 ' >
                                                <label className="radio-inline">
                                                    Occupation Type
                                                </label>

                                            </div>
                                            <div className='col-5 d-flex align-items-center'>
                                                <div className="form-group flex-grow-1">
                                                    <select
                                                        name="state"
                                                        id="state"
                                                        className="form-select"
                                                        required
                                                    >
                                                        <option selected >Enter Here</option>
                                                        <option value={'Self Employed'}>Self Employed</option>
                                                        <option value={'Professional'}>Professional</option>
                                                        <option value={'Homemaker'}>Homemaker</option>
                                                        <option value={'Student'}>Student</option>
                                                        <option value={'Serviceman'}>Serviceman</option>
                                                        <option value={'Other'}>Other</option>
                                                    </select>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">

                                        <div className='row'>
                                            <div className='col-6'>
                                                <label className="radio-inline">
                                                    If 'others' selected, please specify
                                                </label>

                                            </div>
                                            <div className='col-6'>
                                                <div className="form-group">
                                                    <label className="radio-inline">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            className="form-control"
                                                            placeholder="Enter Here"
                                                            required
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>


                                    </div>


                                </div>

                                <div className="row " style={{ marginTop: '15px' }}>

                                    <div className="col-md-6">

                                        <div className='row'>
                                            <div className='col-5'>
                                                <label className="radio-inline">
                                                    Education Qualification
                                                </label>

                                            </div>
                                            <div className='col-5 d-flex align-items-center'>
                                                <div className="form-group flex-grow-1">
                                                    <select
                                                        name="state"
                                                        id="state"
                                                        className="form-select"
                                                        required
                                                    >
                                                        <option selected >Enter Here</option>
                                                        <option value={'Primary Education'}>Primary Education</option>
                                                        <option value={'Secondary Education'}>Secondary Education</option>
                                                        <option value={'Vocational Qualification'}>Vocational Qualification</option>
                                                        <option value={'Bechlors Degree'}>Bechlor's Degree</option>
                                                        <option value={'Master Degree'}>Master Degree</option>
                                                        <option value={'Doctorate or Higher'}>Doctorate or Higher</option>
                                                        <option value={'Professional'}>Professional</option>
                                                        <option value={'Diploma'}>Diploma</option>
                                                        <option value={'Other'}>Other</option>
                                                    </select>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <label className="radio-inline">
                                                    If 'others' selected, please specify
                                                </label>

                                            </div>
                                            <div className='col-6'>
                                                <div className="form-group">
                                                    <label className="radio-inline">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            className="form-control"
                                                            placeholder="Enter Here"
                                                            required
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>


                            <div className="btn-path">
                                <Link to={'/Registration'} className="btn btn-cancel me-3">Back</Link>

                                <Link to={'/IdentityProofs'} className="btn btn-cancel me-3">Next</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Personalreg;



