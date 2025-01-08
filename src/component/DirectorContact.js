import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DirectorContact() {


  return (
    <>
      <div className="main-personal">
        <div className="container">
          <div className="registration-main">
          <div className="registration-form">
        <div className="login-details">
            <div className="per-det">
              <span className="text-personal">
                <h3>Contact Detail</h3>
              </span>
              <span className="line-personal"></span>
            </div>
            <div className="photo-pre">
              <p>
                Please Provide Correct Details For Permanent Residential
                Address.
              </p>
            </div>

            <div className="row">
              {/* <h6></h6> */}
              <div class="col-12">
                <div class="form-group">
                  <label>Address Line 1*</label>
                  <input
                    type="email"
                    name="user_id"
                    class="form-control"
                    placeholder="Enter Here Address 1"
                    required=""
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label>Address Line 2</label>
                  <input
                    type="email"
                    name="user_id"
                    class="form-control"
                    placeholder="Enter Here Address 2"
                    required=""
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label>Address Line 3</label>
                  <input
                    type="email"
                    name="user_id"
                    class="form-control"
                    placeholder="Enter Here Address 3"
                    required=""
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6> Country</h6>
                    </label>
                    <select
                      name="state"
                      id="state"
                      className="form-select"
                      required
                    >
                      <option selected>India</option>
                      <option value={"Gujarat"}>Japan</option>
                      <option value={"Rajasthan"}>USA</option>
                      <option value={"Delhi"}>UK</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6>State</h6>
                    </label>
                    <select
                      name="state"
                      id="state"
                      className="form-select"
                      required
                    >
                      <option selected>Andhra Pradesh</option>
                      <option value={"Gujarat"}>Andaman and Nicobar Islands</option>
                      <option value={"Rajasthan"}>Arunachal Pradesh</option>
                      <option value={"Delhi"}>Assam</option>
                      <option value={"Gujarat"}>Bihar</option>
                      <option value={"Rajasthan"}>Chandigarh</option>
                      <option value={"Delhi"}>Chhattisgarh</option>
                      <option value={"Gujarat"}>Delhi</option>
                      <option value={"Rajasthan"}>Goa</option>
                      <option value={"Delhi"}>Gujarat</option>
                      <option value={"Gujarat"}>Rajasthan</option>
                      <option value={"Rajasthan"}>Himachal Pradesh</option>
                      <option value={"Delhi"}>Haryana</option>
                    </select>
                  </div>
                </div>
              </div>


              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6> Pin Code </h6>
                    </label>
                    <label className="radio-inline">
                      <input
                        type="number"
                        name="name"
                        className="form-control"
                        placeholder="Enter Pin Code No."
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>


            </div>

            <div className="row">

              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6>District</h6>
                    </label>
                    <select
                      name="state"
                      id="state"
                      className="form-select"
                      required
                    >
                      <option selected>Select</option>
                      <option value={"Gujarat"}>Ahmedabad</option>
                      <option value={"Rajasthan"}>Anand</option>
                      <option value={"Delhi"}>Vapi</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6>Taluka / Tehsil</h6>
                    </label>
                    <select
                      name="state"
                      id="state"
                      className="form-select"
                      required
                    >
                      <option selected>Ahmedabad</option>
                      <option value={"Gujarat"}>Surat</option>
                      <option value={"Rajasthan"}>Vapi</option>
                      <option value={"Delhi"}>Anand</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6>City</h6>
                    </label>
                    <select
                      name="state"
                      id="state"
                      className="form-select"
                      required
                    >
                      <option selected>Ahmedabad</option>
                      <option value={"Gujarat"}>Surat</option>
                      <option value={"Rajasthan"}>Vapi</option>
                      <option value={"Delhi"}>Anand</option>
                    </select>
                  </div>
                </div>
              </div>


            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6> Telephone No.</h6>
                    </label>
                    <label className="radio-inline">
                      <input
                        type="number"
                        name="name"
                        className="form-control"
                        placeholder="Lorem ipsum "
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>



              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6> Mobile* </h6>
                    </label>
                    <label className="radio-inline">
                      <input
                        type="number"
                        name="name"
                        className="form-control"
                        placeholder="Lorem ipsum "
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6> Email ID</h6>
                    </label>
                    <label className="radio-inline">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Your Director's E Mail Id"
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6> Confirm Email </h6>
                    </label>
                    <label className="radio-inline">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Your Director's E Mail Id"
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="photo-pre">
              <p>
                Note : Please make sure you provide a valid email address as
                your user account details shall be sent to this address.
              </p>
            </div>

            <div className="row personal">
              <div className="col-md-8">
                <div className="radio-group-yess">
                  <h6>Correspondence Address Same As Above</h6>

                  <div className="radio-group-yes">
                    <div
                      className="siderbar-toggle d-flex gap-2 "
                      style={{ marginTop: "0px" }}
                    >
                      Yes
                      <label className="switch">
                        <input type="checkbox" name="present" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <div className="radio-group-yes">
                    <div
                      className="siderbar-toggle d-flex gap-2 "
                      style={{ marginTop: "0px" }}
                    >
                      No
                      <label className="switch">
                        <input type="checkbox" name="present" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
            <div className="photo-pre">
              <p>
                Please Provide Correct Details For Permanent Residential
                Address.
              </p>
            </div>

            <div className="row">
              {/* <h6></h6> */}
              <div class="col-12">
                <div class="form-group">
                  <label>Address Line 1*</label>
                  <input
                    type="email"
                    name="user_id"
                    class="form-control"
                    placeholder="Enter Here Address 1"
                    required=""
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label>Address Line 2</label>
                  <input
                    type="email"
                    name="user_id"
                    class="form-control"
                    placeholder="Enter Here Address 2"
                    required=""
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label>Address Line 3</label>
                  <input
                    type="email"
                    name="user_id"
                    class="form-control"
                    placeholder="Enter Here Address 3"
                    required=""
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6> Country</h6>
                    </label>
                    <select
                      name="state"
                      id="state"
                      className="form-select"
                      required
                    >
                      <option selected>India</option>
                      <option value={"Gujarat"}>Japan</option>
                      <option value={"Rajasthan"}>USA</option>
                      <option value={"Delhi"}>UK</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6>State</h6>
                    </label>
                    <select
                      name="state"
                      id="state"
                      className="form-select"
                      required
                    >
                      <option selected>Andhra Pradesh</option>
                      <option value={"Gujarat"}>Andaman and Nicobar Islands</option>
                      <option value={"Rajasthan"}>Arunachal Pradesh</option>
                      <option value={"Delhi"}>Assam</option>
                      <option value={"Gujarat"}>Bihar</option>
                      <option value={"Rajasthan"}>Chandigarh</option>
                      <option value={"Delhi"}>Chhattisgarh</option>
                      <option value={"Gujarat"}>Delhi</option>
                      <option value={"Rajasthan"}>Goa</option>
                      <option value={"Delhi"}>Gujarat</option>
                      <option value={"Gujarat"}>Rajasthan</option>
                      <option value={"Rajasthan"}>Himachal Pradesh</option>
                      <option value={"Delhi"}>Haryana</option>
                    </select>
                  </div>
                </div>
              </div>


              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6> Pin Code </h6>
                    </label>
                    <label className="radio-inline">
                      <input
                        type="number"
                        name="name"
                        className="form-control"
                        placeholder="Enter Pin Code No."
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>


            </div>

            <div className="row">

              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6>District</h6>
                    </label>
                    <select
                      name="state"
                      id="state"
                      className="form-select"
                      required
                    >
                      <option selected>Select</option>
                      <option value={"Gujarat"}>Ahmedabad</option>
                      <option value={"Rajasthan"}>Anand</option>
                      <option value={"Delhi"}>Vapi</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6>Taluka / Tehsil</h6>
                    </label>
                    <select
                      name="state"
                      id="state"
                      className="form-select"
                      required
                    >
                      <option selected>Ahmedabad</option>
                      <option value={"Gujarat"}>Surat</option>
                      <option value={"Rajasthan"}>Vapi</option>
                      <option value={"Delhi"}>Anand</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6>City</h6>
                    </label>
                    <select
                      name="state"
                      id="state"
                      className="form-select"
                      required
                    >
                      <option selected>Ahmedabad</option>
                      <option value={"Gujarat"}>Surat</option>
                      <option value={"Rajasthan"}>Vapi</option>
                      <option value={"Delhi"}>Anand</option>
                    </select>
                  </div>
                </div>
              </div>


            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6> Telephone No.</h6>
                    </label>
                    <label className="radio-inline">
                      <input
                        type="number"
                        name="name"
                        className="form-control"
                        placeholder="Lorem ipsum "
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>



              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6> Mobile* </h6>
                    </label>
                    <label className="radio-inline">
                      <input
                        type="number"
                        name="name"
                        className="form-control"
                        placeholder="Lorem ipsum "
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6> Email ID</h6>
                    </label>
                    <label className="radio-inline">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Your Director's E Mail Id "
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <div className="radio-group-yes">
                    <label className="radio-inline">
                      <h6> Confirm Email </h6>
                    </label>
                    <label className="radio-inline">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Your Director's E Mail Id"
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="photo-pre">
              <p>
                Note : Please make sure you provide a valid email address as
                your user account details shall be sent to this address.
              </p>
            </div>

            </div>
                

         
            <div className="btn-path">
                            <Link to={'/DirectorIdentity'} className="btn btn-cancel me-3">Back</Link>

                            <Link to={'/DirectorLogin'} className="btn btn-cancel me-3">Next</Link>
                        </div>
                      
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default DirectorContact;
