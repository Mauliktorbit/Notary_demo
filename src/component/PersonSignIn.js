import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PersonSignIn() {
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
        hintQuestion: '',
        hintAnswer: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here
        console.log('Form data submitted:', formData);
    };
    return (
        <div>
            <div className='main-com'>
                <div className='col-md-6 login-img' style={{ background: 'linear-gradient(218.22deg, #E57403 -4.99%, #EF880F 23.61%, #FBA11D 66.99%, #FFAA22 93.62%)', }}>
                    <img src='assets/img/login2.png' />
                </div>
                <div className='col-md-6 login-form'>
                    <div className='container-fluid col-7'>
                        <h1>Login Details</h1>
                        <div className='form-fild mt-5'>
                       
                            <div className="col-12">
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder=". . . . . . . . . . "
                                        required
                                    />
                                    <p>Should be between 8-11 characters and include at least one special character.</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder=". . . . . . . . . . "
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Password Recovery Question</label>
                                <select
                                    name="hintQuestion"
                                    value={formData.hintQuestion}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Hint Question</option>
                                    <option value="q1">What was your first pet's name?</option>
                                    <option value="q2">What is your mother's maiden name?</option>
                                    <option value="q3">What was the name of your first school?</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Hint Answer</label>
                                <input
                                    type="text"
                                    name="hintAnswer"
                                    value={formData.hintAnswer}
                                    onChange={handleChange}
                                    required
                                />
                                <small>Make sure you remember your answer, but it’s hard for others to guess!</small>
                            </div>

                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <Link to={'/notarylogin'} className="btn btn-cancel me-3 small-long" style={{ width: '80%' }}>Submit</Link>
                        </div>
                   
                    </div>
                </div>
            </div>
  <style jsx>{`
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
    )
}
