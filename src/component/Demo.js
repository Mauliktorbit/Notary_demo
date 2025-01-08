import React from 'react'
import { Link } from 'react-router-dom'

export default function Demo() {
    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <form >
                        <div className="row">
                            <nav aria-label="breadcrumb" style={{ '--bs-breadcrumb-divider': 'none' }}>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page">Add Customer</li>
                                </ol>
                            </nav>
                            <div className="col-lg-12 col-sm-12">
                                <div className="content-page-header">
                                    <h5>Add Customer</h5>
                                </div>
                                <h1 className='mt-5'>Basic Details :</h1>
                                <div className="row mt-4">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"

                                                placeholder="Enter Name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                type="mail"
                                                name="email"
                                                className="form-control"

                                                placeholder="Enter Email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input
                                                type="number"
                                                name="phone"
                                                className="form-control"

                                                placeholder="Enter Phone"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control"

                                                placeholder="Enter Password"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Joining Date</label>
                                            <input
                                                type="date"
                                                name="joining_date"
                                                className="form-control"

                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label>Subscription</label>
                                            <div className="siderbar-toggle">
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        name="subscription"
                                                        defaultChecked={true}

                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h1 className='mt-5'>Address Details :</h1>
                                <div className="row mt-4">
                                    <div className="col-lg-2">
                                        <div className="form-group">
                                            <label>House Number</label>
                                            <input
                                                type="text"
                                                name="house_number"
                                                className="form-control"

                                                placeholder="Enter House Number"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-1">
                                        <div className="form-group">
                                            <label>Floor</label>
                                            <input
                                                type="number"
                                                name="floor"
                                                className="form-control"

                                                placeholder="Floor"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <label>Building</label>
                                            <input
                                                type="text"
                                                name="building"
                                                className="form-control"

                                                placeholder="Enter Building"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <label>Street</label>
                                            <input
                                                type="text"
                                                name="street"
                                                className="form-control"

                                                placeholder="Enter street"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <label>Society</label>
                                            <input
                                                type="text"
                                                name="society"
                                                className="form-control"

                                                placeholder='Enter Society'
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                        <div className="form-group">
                                            <label>State</label>
                                            <div>
                                                <select
                                                    name="state"
                                                    id="state"
                                                    className="form-select"
                                                    required
                                                >
                                                    <option selected >Select State</option>
                                                    <option value={'Gujarat'}>Gujarat</option>
                                                    <option value={'Rajasthan'}>Rajasthan</option>
                                                    <option value={'Delhi'}>Delhi</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                        <div className="form-group">
                                            <label>City</label>
                                            <div>
                                                <select
                                                    name="city"
                                                    id="city"
                                                    className="form-select"
                                                    required
                                                >
                                                    <option selected >Select City</option>
                                                    <option value={'Ahmedabad'}>Ahmedabad</option>
                                                    <option value={'gandhinagar'}>Gandhinagar</option>
                                                    <option value={'Bhavnagar'}>Bhavnagar</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <textarea
                                                style={{ height: '95px' }}
                                                type="text"
                                                name="message"
                                                className="form-control"
                                                placeholder="Message"
                                            />
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                        <div className="form-group">
                                            <label>Area</label>
                                            <div>
                                                <select
                                                    name="area"
                                                    id="area"
                                                    className="form-select"
                                                    required
                                                    placeholder="Area"
                                                >
                                                    <option selected >Select Area</option>
                                                    <option value={'maninagar'}>Maninagar</option>
                                                    <option value={'isanpur'}>Isanpur</option>
                                                    <option value={'ghodasar'}>Ghodasar</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                        <div className="form-group">
                                            <label>Pincode</label>
                                            <div>
                                                <select
                                                    name="pincode"
                                                    id="pincode"
                                                    className="form-select"
                                                    required
                                                    placeholder="pincode"
                                                >
                                                    <option selected >Select Pincode</option>
                                                    <option value={'342450'}>342450</option>
                                                    <option value={'654321'}>654321</option>
                                                    <option value={'684222'}>684222</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-path">
                                    <Link to={'/customer'} className="btn btn-cancel me-3 white-or">Generate Link</Link>
                                    <Link to={'/customer'} className="btn btn-cancel me-3">Back</Link>
                                    <button type="submit" className="btn btn-submit">Submit</button>
                                </div>

                                <div className="btn-path">
                                    <Link to={'/customer'} className="btn btn-cancel me-3 white-or small-long">Generate Link</Link>
                                    <Link to={'/customer'} className="btn btn-cancel me-3 small-long">Next</Link>
                                    <button type="submit" className="btn btn-submit small-long">Save</button>
                                </div>
                                

                                <div className="btn-path">
                                    <Link to={'/customer'} className="btn btn-cancel me-3 white-or medium-long">Generate Link</Link>
                                    <Link to={'/customer'} className="btn btn-cancel me-3 medium-long">Back</Link>
                                    <button type="submit" className="btn btn-submit medium-long">Submit</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
