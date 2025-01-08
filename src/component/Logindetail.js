import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Logindetail() {
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

        <div className="container">
            <div className="registration-main">
                <div className="registration-form">

                    <form onSubmit={handleSubmit}>
                        <div className="login-details">
                            <div className="per-det">
                                <span className="text-personal">
                                    <h3>Login Details</h3>
                                </span>
                                <span className="line-personal"></span>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <small>Should be between 8-11 characters and include at least one special character.</small>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
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

                        <div className="btn-path">
                            <Link to={'/IndividualUserDocument'} className="btn btn-cancel me-3">Back</Link>

                            <Link to={'/individual-login'} className="btn btn-cancel me-3">Submit</Link>
                        </div>


                    </form>
                </div>
            </div>
        </div>

    );
}

export default Logindetail;
