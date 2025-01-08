import React from "react";
import { Link } from "react-router-dom";
export default function SecondParty() {
  return (
    <div>
      <div className="kyc-container">
        <div className="aadhaar-section">
          <label htmlFor="aadhaar-number">
            <b>Second party (individual)</b>
          </label>
        </div>
        <div className="profile-picture">
          <img
            src="assets/img/Group 720.png"
            alt="User Profile"
            className="profile-img"
          />
          <label className="upload-button" style={{ marginLeft: "10px" }}>
            Take Photo
            <input
              type="file"
              accept="image/*"
              capture="camera"
              style={{ display: "none" }}
            />
            <img
              src="assets/img/Group 260.png"
              alt="Camera Icon"
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
        <div className="btn-path">
          <Link to={"/"} className="btn btn-cancel me-3 white-or small-long">
            Generate Link{" "}
          </Link>
          <Link
            to={"/notary-writer"}
            className="btn btn-cancel me-3 small-long"
          >
            Next
          </Link>
          <button type="submit" className="btn btn-submit small-long">
            Save
          </button>
        </div>
      </div>
      <style jsx>{`
/* IndividualUserDocument.css */
.per-det {
    display: grid
;
    align-items: center;
}
.kyc-container {
 max-width: 55% !important;
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
}
.aadhaar-input input {
    flex: 1;
    padding: 8px;
    border: none;
    border-radius: 4px;
    background-color: aliceblue;
        outline: none;
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
 .profile-picture {
    // display: ruby;
    
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
    display: flex
;
     justify-content: center;
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
  )
}
 `}</style>
    </div>
  );
}
