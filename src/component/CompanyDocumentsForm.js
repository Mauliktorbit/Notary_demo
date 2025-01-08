import React, { useState } from 'react';
import { Link } from "react-router-dom";

const CompanyDocumentsForm = () => {
  const [formDetails, setFormDetails] = useState({
    incorporationNumber: '',
    panNumber: '',
    gstNumber: '',
    iecNumber: '',
    enteredCaptcha1: '',
    enteredCaptcha2: '',
    enteredCaptcha3: '',
  });

  const generateCaptcha = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const [captchas, setCaptchas] = useState({
    captcha1: generateCaptcha(),
    captcha2: generateCaptcha(),
    captcha3: generateCaptcha(),
  });

  const handleChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleVerifyCaptcha = (captcha, enteredCaptcha) => {
    if (captchas[captcha] === formDetails[enteredCaptcha]) {
      alert('Captcha Verified!');
    } else {
      alert('Incorrect Captcha!');
    }
  };

  const handleCaptchaRefresh = (captchaKey) => {
    setCaptchas((prevCaptchas) => ({
      ...prevCaptchas,
      [captchaKey]: generateCaptcha(),
    }));
  };

  return (
    <div className="main-personal">
      <div className="container">
        <div className="registration-main">
          <div className="registration-form">
            <div className="login-details">
              <div className="per-det">
                <span className="text-personal">
                  <h3>Company Documents</h3>
                </span>
                <span className="line-personal"></span>
              </div>

              {/* Certificate of Incorporation */}


              <div className='row'>
                <div className='col-md-4'>
                  <div className="form-group">
                    <label>Certificate of Incorporation</label>
                    <input
                      type="text"
                      name="incorporationNumber"
                      value={formDetails.incorporationNumber}
                      onChange={handleChange}
                      placeholder="Enter Certificate Of Incorporation Number"
                    />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className="form-group" style={{ marginTop: '18px' }}>
                    <input type="file" name="incorporationFile" />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className="form-group" style={{ marginTop: '13px' }}>
                    <div className="btn-pathhh" style={{ display: 'flex' }}>
                      <button className="btn btn-cancel">Remove</button>
                    </div>
                  </div>
                </div>
              </div>


              {/* Company PAN */}

              <div className='row'>
                <div className='col-md-2'>
                  <div className="form-group">
                    <label>Company PAN</label>
                    <input
                      type="text"
                      name="panNumber"
                      value={formDetails.panNumber}
                      onChange={handleChange}
                      placeholder="Enter PAN Number"
                    />
                  </div>
                </div>
                <div className='col-md-2'>
                  <div className="form-group" style={{ marginTop: '23px' }}>
                    <input type="file" name="gstFile" />
                  </div>
                </div>
                <div className='col-md-2'>
                  <div className="form-group" style={{ marginTop: '27px' }}>

                    <input
                      type="text"
                      name="enteredCaptcha1"
                      value={formDetails.enteredCaptcha1}
                      onChange={handleChange}
                      placeholder="Enter Captcha"
                    />
                  </div>
                </div>
                <div className='col-md-2'>
                  <div className="form-group" style={{ marginTop: '27px' }}>

                    <div className="input-row captcha-container">
                      <span className="captcha-box">{captchas.captcha1}</span>

                    </div>

                  </div>

                </div>
                <div className='col-md-2'>
                  <div className="form-group" style={{ marginTop: '13px' }}>
                    <div className="btn-pathhh" style={{ display: 'flex' }}>
                      <button
                        onClick={() => handleCaptchaRefresh('captcha1')}
                        className="btn btn-cancel me-3"
                      >
                        🔄
                      </button>
                      <button
                        onClick={() => handleVerifyCaptcha('captcha1', 'enteredCaptcha1')}
                        className="btn btn-cancel me-3"
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Memorandum of Association */}
              <div className='row'>
                <div className='col-md-3'>
                  <div className="form-group">
                    <label>Memorandum of Association</label>
                    <input type="file" name="moaFile" />
                  </div>
                </div>
                <div className='col-md-2'>
                  <div className="form-group" style={{ marginTop: '27px' }}>

                    <button className="btn btn-cancel">Remove</button>
                  </div>

                </div>
                <div className='col-md-3'>
                  <div className="form-group">
                    <label>Articles of Association</label>
                    <input type="file" name="aoaFile" />
                  </div>
                </div>
                <div className='col-md-2'>
                  <div className="form-group" style={{ marginTop: '27px' }}>

                    <button className="btn btn-cancel">Remove</button>
                  </div>

                </div>
              </div>

              {/* Articles of Association */}
              {/* <div className="form-group">
                <label>Articles of Association</label>
                <div className="input-row">
                  <input type="file" name="aoaFile" />
                  <button className="btn btn-cancel me-3">Remove</button>
                </div>
              </div> */}

              {/* GST Certificate */}
              <div className='row'>
                <div className='col-md-2'>
                  <div className="form-group">
                    <label>GST Certificate</label>
                    <input
                      type="text"
                      name="gstNumber"
                      value={formDetails.gstNumber}
                      onChange={handleChange}
                      placeholder="Enter GST Number"
                    />
                  </div>
                </div>
                <div className='col-md-2'>
                  <div className="form-group" style={{ marginTop: '23px' }}>
                    <input type="file" name="gstFile" />
                  </div>
                </div>
                <div className='col-md-2'>
                  <div className="form-group" style={{ marginTop: '27px' }}>
                    <input
                      type="text"
                      name="enteredCaptcha2"
                      value={formDetails.enteredCaptcha2}
                      onChange={handleChange}
                      placeholder="Enter Captcha"
                    />
                  </div>
                </div>
                <div className='col-md-2'>
                  <div className="form-group" style={{ marginTop: '27px' }}>

                    <div className="input-row captcha-container">
                      <span className="captcha-box">{captchas.captcha2}</span>

                    </div>

                  </div>

                </div>
                <div className='col-md-2'>
                  <div className="form-group" style={{ marginTop: '13px' }}>
                    <div className="btn-pathhh" style={{ display: 'flex' }}>
                      <button
                        onClick={() => handleCaptchaRefresh('captcha2')}
                        className="btn btn-cancel me-3"
                      >
                        🔄
                      </button>
                      <button
                        onClick={() => handleVerifyCaptcha('captcha2', 'enteredCaptcha2')}
                        className="btn btn-cancel me-3"
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              {/* Import Export Certificate */}
              <div className='row'>
                <div className='col-md-2'>
                  <div className="form-group">
                    <label>Import Export Certificate</label>
                    <input
                      type="text"
                      name="iecNumber"
                      value={formDetails.iecNumber}
                      onChange={handleChange}
                      placeholder="Enter IEC Number"
                    />
                  </div>
                </div>
                <div className='col-md-2'>
                  <div className="form-group" style={{ marginTop: '23px' }}>
                    <input type="file" name="iecFile" />
                  </div>
                </div>
                <div className='col-md-2'>
                  <div className="form-group" style={{ marginTop: '27px' }}>
                    <input
                      type="text"
                      name="enteredCaptcha3"
                      value={formDetails.enteredCaptcha3}
                      onChange={handleChange}
                      placeholder="Enter Captcha"
                    />
                  </div>
                </div>
                <div className='col-md-2'>
                  <div className="form-group" style={{ marginTop: '27px' }}>

                    <div className="input-row captcha-container">
                      <span className="captcha-box">{captchas.captcha3}</span>

                    </div>

                  </div>

                </div>
                <div className='col-md-2'>
                  <div className="form-group" style={{ marginTop: '13px' }}>
                    <div className="btn-pathhh" style={{ display: 'flex' }}>
                      <button
                        onClick={() => handleCaptchaRefresh('captcha3')}
                        className="btn btn-cancel me-3"
                      >
                        🔄
                      </button>
                      <button
                        onClick={() => handleVerifyCaptcha('captcha3', 'enteredCaptcha3')}
                        className="btn btn-cancel me-3"
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-path">
              <Link to={'/CompanyForm'} className="btn btn-cancel me-3">Back</Link>
              <Link to={'/CompanyContact'} className="btn btn-cancel me-3">Next</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDocumentsForm;
