import React, { useState } from 'react';
import { Link } from "react-router-dom";
const CompanyForm = () => {
    const [directors, setDirectors] = useState([{
        name: '',
        din: '',
        pan: '',
        aadhaar: '',
        passport: '',
        email: '',
        mobile: '',
    }]);


    const handleChange = (index, e) => {
        const newDirectors = [...directors];
        newDirectors[index][e.target.name] = e.target.value;
        setDirectors(newDirectors);
    };


    const handleChangee = (e) => {
        setDirectorDetails({
            ...directorDetails,
            [e.target.name]: e.target.value,
        });
    };

    const [foreignDirectors, setForeignDirectors] = useState([{
        name: '',
        passport: '',
        email: '',
        mobile: '',
        emailOtp: '',
        mobileOtp: '',
    }]);

    const handleForeignDirectorChange = (index, e) => {
        const newForeignDirectors = [...foreignDirectors];
        newForeignDirectors[index][e.target.name] = e.target.value;
        setForeignDirectors(newForeignDirectors);
    };

    const handleAddForeignDirector = () => {
        setForeignDirectors([...foreignDirectors, {
            name: '',
            passport: '',
            email: '',
            mobile: '',
            emailOtp: '',
            mobileOtp: '',
        }]);
    };

    const handleRemoveForeignDirector = (index) => {
        const newForeignDirectors = foreignDirectors.filter((_, i) => i !== index);
        setForeignDirectors(newForeignDirectors);
    };

    const handleValidation = () => {
        // Add validation logic here
        alert('Validation Clicked!');
    };

    const handleAadhaarOtp = () => {
        // Add Aadhaar OTP logic here
        alert('Aadhaar OTP Clicked!');
    };

    const handleEmailMobileOtp = () => {
        // Add Aadhaar OTP logic here
        alert('Generate Email & Mobile OTP Clicked!');
    };

    const handleVerify = () => {
        // Add verification logic here
        alert('Verify Clicked!');
    };

    // const handleAdd = () => {
    //     // Add logic to handle adding the director or employee
    //     alert('Add Clicked!');
    // };

    const handleAdd = () => {
        setDirectors([...directors, {
            name: '',
            din: '',
            pan: '',
            aadhaar: '',
            passport: '',
            email: '',
            mobile: '',
        }]);
    };



    const [directorDetails, setDirectorDetails] = useState({
        addEmployee: '',
    });

    const [employees, setEmployees] = useState([{
        employeeName: '',
        designation: '',
        employeeEmail: '',
        employeeMobile: '',
    }]);

    const handleDirectorDetailsChange = (e) => {
        setDirectorDetails({
            ...directorDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleEmployeeChange = (index, e) => {
        const newEmployees = [...employees];
        newEmployees[index][e.target.name] = e.target.value;
        setEmployees(newEmployees);
    };

    const handleAddEmployee = () => {
        setEmployees([...employees, {
            employeeName: '',
            designation: '',
            employeeEmail: '',
            employeeMobile: '',
        }]);
    };

    const handleRemoveEmployee = (index) => {
        const newEmployees = employees.filter((_, i) => i !== index);
        setEmployees(newEmployees);
    };

    return (
        <div className="main-personal">
            <div className="container">
                <div className="registration-main">
                    <div className="registration-form">
                        <div className="login-details">
                            <div className="per-det">
                                <span className="text-personal">
                                    <h3>Company Detail</h3>
                                </span>
                                <span className="line-personal"></span>
                            </div>
                            {/* <h2>Company Details</h2> */}
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className="form-group">
                                        <label>CIN/LLPIN/FLIPIN/FCRN* </label>
                                        <input type="text" name="cin" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group">
                                        <label>Company/LLP Name* </label>
                                        <input type="text" name="companyName" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group">
                                        <label>Date Of Incorporation* </label>
                                        <input type="date" name="incorporationDate" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group">
                                        <label>COMPANY PAN* </label>
                                        <input type="text" name="companyPan" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group">
                                        <label>GST NUMBER </label>
                                        <input type="text" name="GST NUMBER" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>

                            {directors.map((director, index) => (
                                <div key={index} className="section">
                                    <h3>Details of Director to be used for OTP validation *</h3>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <div className="form-group">
                                                <label>Director's Name </label>
                                                <input type="text" name="name" value={director.name} onChange={(e) => handleChange(index, e)} />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className="form-group">
                                                <label>DIN/DPIN </label>
                                                <input type="text" name="din" value={director.din} onChange={(e) => handleChange(index, e)} />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className="form-group">
                                                <label>Director's PAN </label>
                                                <input type="text" name="pan" value={director.pan} onChange={(e) => handleChange(index, e)} />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className="form-group" style={{ marginTop: '13px' }}>
                                                <div className="btn-pathhh" style={{ display: 'flex' }}>
                                                    <button onClick={handleValidation} className='btn btn-cancel me-3'>Validation</button>
                                                    <button onClick={() => setDirectors(directors.filter((_, i) => i !== index))} className='btn btn-cancel me-3'>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <div className="form-group">
                                                <label>Enter Your Aadhaar Number </label>
                                                <input type="text" name="aadhaar" value={director.aadhaar} onChange={(e) => handleChange(index, e)} />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="form-group" style={{ marginTop: '13px' }}>
                                                <div className="btn-pathhh" style={{ display: 'flex' }}>
                                                    <button onClick={handleValidation} className='btn btn-cancel me-3'>Validation</button>
                                                    <button onClick={handleAadhaarOtp} className='btn btn-cancel me-3'>Send Aadhaar OTP</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-md-3'>
                                            <div className="form-group">
                                                <label>Enter OTP </label>
                                                <input type="text" name="otp" onChange={(e) => handleChange(index, e)} />
                                            </div>
                                        </div>
                                        <div className='col-md-2'>
                                            <div className="form-group" style={{ marginTop: '13px' }}>
                                                <div className="btn-pathhh" style={{ display: 'flex' }}>
                                                    <button onClick={handleVerify} className='btn btn-cancel me-3'>Verify</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-pathhh" style={{ display: 'flex' }}>
                                        <button onClick={() => setDirectorDetails({ ...directorDetails, pan: '' })} className='btn btn-cancel me-3'>Remove</button>
                                        <button onClick={handleAdd} className='btn btn-cancel me-3'>Add More Director</button>
                                    </div>
                                </div>
                            ))}

                            {foreignDirectors.map((foreignDirector, index) => (
                                <div key={index} className="section">
                                    <h3>If a director is a Foreign national, the following screen will be displayed.</h3>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className="form-group">
                                                <label>Director's Name </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={foreignDirector.name}
                                                    onChange={(e) => handleForeignDirectorChange(index, e)}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="form-group">
                                                <label>Passport Number </label>
                                                <input
                                                    type="text"
                                                    name="passport"
                                                    value={foreignDirector.passport}
                                                    onChange={(e) => handleForeignDirectorChange(index, e)}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="form-group" style={{ marginTop: '13px' }}>
                                                <div className="btn-pathhh" style={{ display: 'flex' }}>
                                                    <button onClick={handleValidation} className='btn btn-cancel me-3'>Validation</button>
                                                    <button onClick={() => handleRemoveForeignDirector(index)} className='btn btn-cancel me-3'>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className="form-group">
                                                <label>Email ID </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={foreignDirector.email}
                                                    onChange={(e) => handleForeignDirectorChange(index, e)}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="form-group">
                                                <label>Mobile Number </label>
                                                <input
                                                    type="tel"
                                                    name="mobile"
                                                    value={foreignDirector.mobile}
                                                    onChange={(e) => handleForeignDirectorChange(index, e)}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="form-group" style={{ marginTop: '13px' }}>
                                                <div className="btn-pathhh" style={{ display: 'flex' }}>
                                                    <button onClick={handleEmailMobileOtp} className='btn btn-cancel me-3'>Generate Email & Mobile OTP</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className="form-group">
                                                <label>Enter Email OTP </label>
                                                <input
                                                    type="text"
                                                    name="emailOtp"
                                                    value={foreignDirector.emailOtp}
                                                    onChange={(e) => handleForeignDirectorChange(index, e)}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="form-group">
                                                <label>Enter Mobile OTP </label>
                                                <input
                                                    type="text"
                                                    name="mobileOtp"
                                                    value={foreignDirector.mobileOtp}
                                                    onChange={(e) => handleForeignDirectorChange(index, e)}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="form-group" style={{ marginTop: '13px' }}>
                                                <div className="btn-pathhh" style={{ display: 'flex' }}>
                                                    <button onClick={handleVerify} className='btn btn-cancel me-3'>Verify</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="btn-pathhh" style={{ display: 'flex' }}>
                                        <button onClick={() => handleRemoveForeignDirector(index)} className='btn btn-cancel me-3'>Remove</button>
                                        <button onClick={handleAddForeignDirector} className='btn btn-cancel me-3'>Add More Foreign Director</button>
                                    </div>
                                </div>
                            ))}

                            {/* <div className="section">
                                <h3>If a director is a Foreign national, the following screen will be displayed.</h3>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className="form-group">
                                            <label>Director's Name </label>
                                            <input type="text" name="name" value={directorDetails.name} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="form-group">
                                            <label>Passport Number </label>
                                            <input type="text" name="passport" value={directorDetails.passport} onChange={handleChange} />

                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="form-group" style={{ marginTop: '13px' }}>
                                            <div className="btn-pathhh" style={{ display: 'flex' }}>
                                                <button onClick={handleValidation} className='btn btn-cancel me-3'>Validation</button>
                                                <button onClick={() => setDirectorDetails({ ...directorDetails, pan: '' })} className='btn btn-cancel me-3'>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className="form-group">
                                            <label>Email ID </label>
                                            <input type="email" name="email" value={directorDetails.email} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="form-group">
                                            <label>Mobile Number </label>
                                            <input type="tel" name="mobile" value={directorDetails.mobile} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="form-group" style={{ marginTop: '13px' }}>
                                            <div className="btn-pathhh" style={{ display: 'flex' }}>
                                                <button onClick={handleEmailMobileOtp} className='btn btn-cancel me-3' >Generate Email & Mobile OTP</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className="form-group">
                                            <label>Enter E mail OTP </label>
                                            <input type="text" name="otp" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="form-group">
                                            <label>Enter Mobile OTP </label>
                                            <input type="text" name="otp" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="form-group" style={{ marginTop: '13px' }}>
                                            <div className="btn-pathhh" style={{ display: 'flex' }}>
                                                <button onClick={handleVerify} className='btn btn-cancel me-3'>Verify</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-pathhh" style={{ display: 'flex' }}>
                                    <button onClick={() => setDirectorDetails({ ...directorDetails, pan: '' })} className='btn btn-cancel me-3'>Remove</button>
                                    <button onClick={handleAdd} className='btn btn-cancel me-3'>Add More Foreign Director</button>
                                </div>

                            </div> */}

                            <div className="section">
                                <h3>Do You Want to Add Employee or Other Users to Access the Portal</h3>
                                <div className="form-group-emp">
                                    <label className="form-label">Do you want to add Employee or Other Users to Access the Portal?</label>
                                    <div className="radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                name="addEmployee"
                                                value="yes"
                                                onChange={handleChangee}
                                                checked={directorDetails.addEmployee === 'yes'}
                                            />
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="addEmployee"
                                                value="no"
                                                onChange={handleChangee}
                                                checked={directorDetails.addEmployee === 'no'}
                                            />
                                            No
                                        </label>
                                    </div>
                                </div>



                                {directorDetails.addEmployee === 'yes' && employees.map((employee, index) => (
                                    <div key={index}>
                                        <div className='row'>
                                            <div className='col-md-3'>
                                                <div className="form-group">
                                                    <label>Name </label>
                                                    <input
                                                        type="text"
                                                        name="employeeName"
                                                        value={employee.employeeName}
                                                        onChange={(e) => handleEmployeeChange(index, e)}
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className="form-group">
                                                    <label>Designation </label>
                                                    <input
                                                        type="text"
                                                        name="designation"
                                                        value={employee.designation}
                                                        onChange={(e) => handleEmployeeChange(index, e)}
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className="form-group">
                                                    <label>Email ID </label>
                                                    <input
                                                        type="email"
                                                        name="employeeEmail"
                                                        value={employee.employeeEmail}
                                                        onChange={(e) => handleEmployeeChange(index, e)}
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className="form-group">
                                                    <label>Mobile Number </label>
                                                    <input
                                                        type="tel"
                                                        name="employeeMobile"
                                                        value={employee.employeeMobile}
                                                        onChange={(e) => handleEmployeeChange(index, e)}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="btn-pathhh" style={{ display: 'flex', marginBottom: '30px' }}>
                                            <button onClick={() => handleRemoveEmployee(index)} className='btn btn-cancel me-3'>Remove</button>
                                            <button onClick={handleAddEmployee} className='btn btn-cancel me-3'>Add More Employee Or Other Users</button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="btn-path">
                            <Link to={'/registration'} className="btn btn-cancel me-3">Back</Link>

                            <Link to={'/CompanyDocumentsForm'} className="btn btn-cancel me-3">Next</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyForm;