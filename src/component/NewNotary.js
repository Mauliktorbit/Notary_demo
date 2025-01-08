import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function NewNotary() {

  const handleValidation = () => {
    alert('Validation Clicked!');
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

  const handleCaptchaRefresh = (captchaKey) => {
    setCaptchas((prevCaptchas) => ({
      ...prevCaptchas,
      [captchaKey]: generateCaptcha(),
    }));
  };

  const [values, setValues] = useState([{ name: "" }]);
  const [tabs, setTabs] = useState([
    {
      title: "First party 1",
      content: values[0],
      tabsParty: [
        {
          title: "First party 1",
          content: values[0],
        },
      ],
    },
  ]);

  const addFormFields = () => {
    const newFormField = { name: "" };
    const updatedValues = [...values, newFormField];
    setValues(updatedValues);
    setTabs([
      ...tabs,
      {
        title: `First party ${tabs.length + 1}`,
        content: newFormField,
        tabsParty: [
          {
            title: `First party 1`,
            content: newFormField,
          },
        ],
      },
    ]);
  };

  const removeFormFields = (i) => {
    let newValues = [...values];
    newValues.splice(i, 1);
    setValues(newValues);

    let newTabs = [...tabs];
    newTabs.splice(i, 1);
    setTabs(newTabs);
  };

  const addFormFieldsparty = (tabIndex) => {
    const newFormField = { name: "" };
    const updatedTabs = tabs.map((tab, index) => {
      if (index === tabIndex) {
        return {
          ...tab,
          tabsParty: [
            ...tab.tabsParty,
            {
              title: `First party ${tab.tabsParty.length + 1}`,
              content: newFormField,
            },
          ],
        };
      }
      return tab;
    });
    setTabs(updatedTabs);
  };

  const removeFormFieldsparty = (tabIndex, partyIndex) => {
    const updatedTabs = tabs.map((tab, index) => {
      if (index === tabIndex) {
        const newTabsParty = [...tab.tabsParty];
        newTabsParty.splice(partyIndex, 1);
        return { ...tab, tabsParty: newTabsParty };
      }
      return tab;
    });
    setTabs(updatedTabs);
  };

  const [selectedQualificationn, setSelectedQualificationn] = useState('');

  const handleQualificationChanges = (event) => {
    setSelectedQualificationn(event.target.value);
  };

  const handleAadhaarOtp = () => {
    // Add Aadhaar OTP logic here
    alert('Aadhaar OTP Clicked!');
};

  return (
    <div>
      <div className="main-component">
        <div className="per-det">
          <span className="text-personal">
            <h5>New Notary</h5>
          </span>
          <span className="line-personal" style={{ margin: "10px 0" }}></span>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Title of document</label>
                <select name="">
                  <option value="">Select Title of document</option>
                  <option value="">Affidavit </option>
                  <option value="">Agreements</option>
                  <option value="">Deed</option>
                  <option value="">Certification </option>
                  <option value="">Power of Attorney </option>
                  <option value="">Any other documents</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Type of concerned</label>
                <select name="state">
                  <option value="">Select Title of document</option>
                  <option value="">Affidavit </option>
                  <option value="">Agreements</option>
                  <option value="">Deed</option>
                  <option value="">Certification </option>
                  <option value="">Power of Attorney </option>
                  <option value="">Any other documents</option>
                </select>
              </div>
            </div>
          </div>
          <div className="kyc-row">
            <div className="aadhaar-section">
              <label htmlFor="aadhaar-number">Existing ID</label>
              <span className="mandatory-text">
                ( If you have existing noatarial KYC ID , please enter and fetch
                )
              </span>
              <div className="aadhaar-input">
                <input
                  type="text"
                  id="aadhaar-number"
                  placeholder="Existing noatarial KYC ID"
                />
                <button className="verify-btn">Fetch</button>
              </div>
            </div>
          </div>
        </div>
        {/* <span className="mandatory-text">
          ( If you have existing noatarial KYC ID , please enter and fetch )
        </span> */}
        <hr></hr>

        <div className="d-flex justify-content-end">
          <div className="btn btn-primary mx-2" onClick={() => addFormFields()}>
            <i className="fa fa-plus me-1"></i>
          </div>
          {tabs.length > 1 && (
            <div
              className="btn btn-danger button remove"
              onClick={() => removeFormFields(tabs.length - 1)}
            >
              <i className="fa fa-remove me-1"></i>
            </div>
          )}
        </div>

        {tabs.length > 0 && (
          <Tabs>
            <TabList>
              {tabs.map((tab, index) => (
                <Tab key={index}>{tab.title}</Tab>
              ))}
            </TabList>

            {tabs.map((tab, tabIndex) => (
              <TabPanel key={tabIndex}>
                {tab.tabsParty.map((tabParty, partyIndex) => (
                  <div
                    className="accordion mt-2"
                    key={partyIndex}
                    id={`accordionFlushExample${tabIndex}`}
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id={`flush-heading${tabIndex}${partyIndex}`}
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse${tabIndex}${partyIndex}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapse${tabIndex}${partyIndex}`}
                        >
                          First party {tabIndex + 1}
                        </button>
                      </h2>
                      <div
                        id={`flush-collapse${tabIndex}${partyIndex}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`flush-heading${tabIndex}${partyIndex}`}
                        data-bs-parent={`#accordionFlushExample${tabIndex}`}
                      >
                        <div className="accordion-body">
                          <>
                            <div className="profile-picture">
                              <img
                                src="assets/img/Group 720.png"
                                alt="User Profile"
                                className="profile-img"
                              />
                              <label
                                className="upload-button"
                                style={{ marginLeft: "10px" }}
                              >
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

                              <button
                                className="upload-button"
                                style={{ marginLeft: "10px" }}
                              >
                                Remove photo
                              </button>

                              <p className="upload-note">
                                Upload photo up to 1 MB
                              </p>
                            </div>
                            <div className="container">
                              <div className="row">
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                      type="text"
                                      placeholder="First Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label>Middle Name</label>
                                    <input
                                      type="text"
                                      placeholder="Middle  Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                      type="text"
                                      placeholder="Last  Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <label>Date of Birth</label>
                                    <input
                                      type="date"
                                      placeholder="Date of Birth"
                                    />
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
                                        <img
                                          src="assets\img\Layer_1 (1).png"
                                          alt="Folder Icon"
                                        />
                                      </div>
                                      <label
                                        htmlFor="file-upload"
                                        className="choose-file-btn"
                                      >
                                        Choose File
                                      </label>
                                      <input
                                        type="file"
                                        id="file-upload"
                                        style={{ display: "none" }}
                                      />
                                    </div>

                                    <div className="aadhaar-input">
                                      <select id="document-type" className="document-dropdown" value={selectedQualificationn}
                                        onChange={handleQualificationChanges}>

                                        <option value="PAN card">Income Tax PAN </option>
                                        <option value="Aadhar card">Aadhar card </option>
                                        <option value="Voter ID">Voter ID Number</option>
                                        <option value="Passport">Driving License Number</option>
                                        <option value="Driving license">Ration Card Number</option>
                                        <option value="Driving license">Passport Number </option>
                                      </select>
                                      <input
                                        type="text"
                                        id="aadhaar-number"
                                        placeholder="Enter Document No."
                                      />
                                      {/* <button onClick={handleValidation} className='btn btn-cancel me-3'>Validation</button> */}
                                      {/* <button className="verify-btn">
                                        Verify
                                      </button> */}
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
                                        <button onClick={handleValidation} className='btn btn-cancel me-3'>Validation</button>
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
                                      <div
                                        className="col-md-6 mb-4"
                                        key={index}
                                      >
                                        <div className="document-item d-flex align-items-center border p-3 rounded">
                                          <div className="document-icon">
                                            <img
                                              src="assets/img/Group 245.png"
                                              alt="PDF Icon"
                                            />
                                          </div>
                                          <span className="mx-2 flex-grow-1">
                                            {doc}
                                          </span>
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
                                            Verified
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
                                          <label>Country
                                          </label>

                                          <input
                                            type="text"
                                            name="pinCode"
                                            placeholder="Select Country"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <label>State</label>
                                          <select name="country">
                                            <option value="">
                                              Select State
                                            </option>
                                            {/* Populate options dynamically */}
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <label>Pin Code
                                          </label>
                                          <input
                                            type="text"
                                            name="pinCode"
                                            placeholder="pincode"
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
                                          <label>District</label>
                                          <select name="state">
                                            <option value="">
                                              Select District
                                            </option>
                                            {/* Populate options dynamically */}
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <label>City</label>
                                          <select name="country">
                                            <option value="">
                                              Select City
                                            </option>
                                            {/* Populate options dynamically */}
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <label>Taluka / Tehsil</label>
                                          <select name="country">
                                            <option value="">
                                              Select Taluka / Tehsil
                                            </option>
                                            {/* Populate options dynamically */}
                                          </select>
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
                                    <label>
                                      Correspondence Address Same As Above
                                    </label>
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
                                          <label>Country
                                          </label>

                                          <input
                                            type="text"
                                            name="pinCode"
                                            placeholder="Select Country"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <label>State</label>
                                          <select name="country">
                                            <option value="">
                                              Select State
                                            </option>
                                            {/* Populate options dynamically */}
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <label>Pin Code
                                          </label>
                                          <input
                                            type="text"
                                            name="pinCode"
                                            placeholder="pincode"
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
                                          <label>District</label>
                                          <select name="state">
                                            <option value="">
                                              Select District
                                            </option>
                                            {/* Populate options dynamically */}
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <label>City</label>
                                          <select name="country">
                                            <option value="">
                                              Select City
                                            </option>
                                            {/* Populate options dynamically */}
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <label>Taluka / Tehsil</label>
                                          <select name="country">
                                            <option value="">
                                              Select Taluka / Tehsil
                                            </option>
                                            {/* Populate options dynamically */}
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>



                              </div>
                            </div>
                          </>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="d-flex justify-content-end mt-2">
                  <div
                    className="btn btn-primary mx-2"
                    onClick={() => addFormFieldsparty(tabIndex)}
                  >
                    <i className="fa fa-plus me-1"></i>
                  </div>
                  {tab.tabsParty.length > 1 && (
                    <div
                      className="btn btn-danger button remove"
                      onClick={() =>
                        removeFormFieldsparty(
                          tabIndex,
                          tab.tabsParty.length - 1
                        )
                      }
                    >
                      <i className="fa fa-remove me-1"></i>
                    </div>
                  )}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        )}

        {/*      navigation button       */}
        <div className="btn-path">
          <Link
            to={"/notarytype"}
            className="btn btn-cancel me-3 white-or small-long"
          >
            Back
          </Link>
          <Link to={"/notary-writer"} className="btn btn-cancel me-3 small-long">
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
// import React, { useState } from 'react';
// import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'; // Make sure these are correctly imported

// const App = () => {
//   const [values, setValues] = useState([{ name: '' }]);
//   const [tabs, setTabs] = useState([
//     {
//       title: 'First party 1',
//       content: values[0],
//       tabsParty: [
//         {
//           title: 'First party 1',
//           content: values[0],
//         },
//       ],
//     },
//   ]);

//   const addFormFields = () => {
//     const newFormField = { name: '' };
//     const updatedValues = [...values, newFormField];
//     setValues(updatedValues);
//     setTabs([
//       ...tabs,
//       {
//         title: `First party ${tabs.length + 1}`,
//         content: newFormField,
//         tabsParty: [
//           {
//             title: `First party 1`,
//             content: newFormField,
//           },
//         ],
//       },
//     ]);
//   };

//   const removeFormFields = (i) => {
//     let newValues = [...values];
//     newValues.splice(i, 1);
//     setValues(newValues);

//     let newTabs = [...tabs];
//     newTabs.splice(i, 1);
//     setTabs(newTabs);
//   };

//   const addFormFieldsparty = (tabIndex) => {
//     const newFormField = { name: '' };
//     const updatedTabs = tabs.map((tab, index) => {
//       if (index === tabIndex) {
//         return {
//           ...tab,
//           tabsParty: [
//             ...tab.tabsParty,
//             {
//               title: `First party ${tab.tabsParty.length + 1}`,
//               content: newFormField,
//             },
//           ],
//         };
//       }
//       return tab;
//     });
//     setTabs(updatedTabs);
//   };

//   const removeFormFieldsparty = (tabIndex, partyIndex) => {
//     const updatedTabs = tabs.map((tab, index) => {
//       if (index === tabIndex) {
//         const newTabsParty = [...tab.tabsParty];
//         newTabsParty.splice(partyIndex, 1);
//         return { ...tab, tabsParty: newTabsParty };
//       }
//       return tab;
//     });
//     setTabs(updatedTabs);
//   };

//   return (
//     <div>
//       <div className="d-flex justify-content-end">
//         <div className="btn btn-primary mx-2" onClick={() => addFormFields()}>
//           <i className="fa fa-plus me-1"></i>
//         </div>
//         {tabs.length > 1 && (
//           <div className="btn btn-danger button remove" onClick={() => removeFormFields(tabs.length - 1)}>
//             <i className="fa fa-remove me-1"></i>
//           </div>
//         )}
//       </div>

//       {tabs.length > 0 && (
//         <Tabs>
//           <TabList>
//             {tabs.map((tab, index) => (
//               <Tab key={index}>{tab.title}</Tab>
//             ))}
//           </TabList>

//           {tabs.map((tab, tabIndex) => (
//             <TabPanel key={tabIndex}>
//               {tab.tabsParty.map((tabParty, partyIndex) => (
//                 <div className="accordion mt-2" key={partyIndex} id={`accordionFlushExample${tabIndex}`}>
//                   <div className="accordion-item">
//                     <h2 className="accordion-header" id={`flush-heading${tabIndex}${partyIndex}`}>
//                       <button
//                         className="accordion-button collapsed"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target={`#flush-collapse${tabIndex}${partyIndex}`}
//                         aria-expanded="false"
//                         aria-controls={`flush-collapse${tabIndex}${partyIndex}`}
//                       >
//                         {tabParty.title}
//                       </button>
//                     </h2>
//                     <div
//                       id={`flush-collapse${tabIndex}${partyIndex}`}
//                       className="accordion-collapse collapse"
//                       aria-labelledby={`flush-heading${tabIndex}${partyIndex}`}
//                       data-bs-parent={`#accordionFlushExample${tabIndex}`}
//                     >
//                       <div className="accordion-body">
//                         {/* Your form content here */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               <div className="d-flex justify-content-end mt-2">
//                 <div
//                   className="btn btn-primary mx-2"
//                   onClick={() => addFormFieldsparty(tabIndex)}
//                 >
//                   <i className="fa fa-plus me-1"></i>
//                 </div>
//                 {tab.tabsParty.length > 1 && (
//                   <div
//                     className="btn btn-danger button remove"
//                     onClick={() => removeFormFieldsparty(tabIndex, tab.tabsParty.length - 1)}
//                   >
//                     <i className="fa fa-remove me-1"></i>
//                   </div>
//                 )}
//               </div>
//             </TabPanel>
//           ))}
//         </Tabs>
//       )}
//     </div>
//   );
// };

// export default App;
