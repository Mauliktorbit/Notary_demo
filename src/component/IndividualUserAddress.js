import React from 'react';
import { Link } from 'react-router-dom'
function IndividualUserAddress() {
    
    return (
        <>
            <div className="kyc-container">
                <div className="per-det">
                    <span className="text-personal">
                        <h3>Contact Detail</h3>
                    </span>
                    <span className="line-personal" style={{}}></span>
                </div>
                <form className="signup-form" >
                    <div className="form-row">
                        <div className="form-group">
                            <label>Address Line 1</label>
                            <input type="text" placeholder="Enter Here Address 1" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Address Line 2</label>
                            <input type="text" placeholder="Enter Here Address 2" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Address Line 3</label>
                            <input type="text" placeholder="Enter Here Address 3" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Country
                            </label>
                            <select>
                                <option>India</option>
                                <option>USA</option>
                                <option>UK</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>State</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Select"
                                required
                                style={{ height: '39px' }} />
                        </div>
                        <div className="form-group">
                            <label>Pin Code</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Select"
                                required
                                style={{ height: '39px' }} />
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>District</label>
                            <select>
                                <option>Ahmedabad</option>
                                <option>Surat</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <select>
                            <option>Ahmedabad</option>
                            <option>Surat</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Taluka / Tehsil
                            </label>
                            <input
                                type="number"
                                name="name"
                                className="form-control"
                                placeholder="Enter Pin Code No."
                                required
                                style={{ height: '39px' }} />
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group" style={{ display: 'flex', gap: '8%' }}>
                            <label>Correspondence Address Same As Above</label>
                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="citizen"
                                        value="Yes"
                                    />
                                    Yes
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="citizen"
                                        value="No"
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Address Line 1</label>
                            <input type="text" placeholder="Enter Here Address 1" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Address Line 2</label>
                            <input type="text" placeholder="Enter Here Address 2" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Address Line 3</label>
                            <input type="text" placeholder="Enter Here Address 3" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Country
                            </label>
                            <select>
                                <option>India</option>
                                <option>USA</option>
                                <option>UK</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>State</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Select"
                                required
                                style={{ height: '39px' }} />
                        </div>
                        <div className="form-group">
                            <label>Pin Code</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Select"
                                required
                                style={{ height: '39px' }} />
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>District</label>
                            <select>
                                <option>Ahmedabad</option>
                                <option>Surat</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <select>
                            <option>Ahmedabad</option>
                            <option>Surat</option>   
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Taluka / Tehsil
                            </label>
                            <input
                                type="number"
                                name="name"
                                className="form-control"
                                placeholder="Enter Pin Code No."
                                required
                                style={{ height: '39px' }} />
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group" style={{ display: 'flex', gap: '8%' }}>
                            <label>Whether you wish to avail SMS alert facility</label>
                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="citizen"
                                        value="Yes"
                                    />
                                    Yes
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="citizen"
                                        value="No"
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className="form-row">
                
                        <div className="form-group">
                            <label>Telephone No.</label>
                            <input
                                type="number"
                                name="name"
                                className="form-control"
                                placeholder="Lorem ipsum"
                                required
                                style={{ height: '39px' }} />
                        </div>
                        <div className="form-group">
                            <label>Mobile</label>
                            <input
                                type="number"
                                name="name"
                                className="form-control"
                                placeholder="Lorem ipsum"
                                required
                                style={{ height: '39px' }} />
                        </div>

                    </div>
                    <div className="form-row">
                   
                        <div className="form-group">
                            <label>Email ID</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Lorem ipsum "
                                required
                                style={{ height: '39px' }} />
                        </div>
                        <div className="form-group">
                            <label>Confirm Email ID</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Lorem ipsum "
                                required
                                style={{ height: '39px' }} />
                        </div>

                    </div>
                    <div className="btn-path">
                    <Link to={'/IndividualUserSignUp'} className="btn btn-cancel me-3 white-or small-long">Back</Link>
                    <Link to={'/PersonSignIn'} className="btn btn-cancel me-3 small-long">Next</Link>
                    <button type="submit" className="btn btn-submit small-long">Save</button>
                </div>
                </form>
            </div>
            <style jsx>{`
            .btn-path {
    text-align: right;
    display: flex
;
    justify-content: center;
    margin-top: 20px;
}
            .radio-group {
    margin: 0;
    display: flex
;
    gap: 40px;
}
         .signup-form {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
}
         .form-row {
    display: flex
;
    justify-content: space-between;

}
    .form-group {
    flex: 1;
    margin-right: 10px;
}
    .form-group input, .form-group select {
    width: 100%;
    background: #F5F7FA;
    padding: 10px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
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
h3 {
    color: #EC820B;
        margin-bottom: 0;
}
    .line-personal {
    width: 26%;
    flex-grow: 1;
    height: 2px;
    background-color: #EC820B;
}
    .per-det {
    display: grid
;
    align-items: center;
}
          `}</style>
        </>
    )
}
export default IndividualUserAddress;