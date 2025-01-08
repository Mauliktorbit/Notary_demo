import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Uploadkyc() {
  const [selectedFiles, setSelectedFiles] = useState({
    aadhar: null,
    pan: null,
    voter: null,
    passport: null,
    driving: null,
  });

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    setSelectedFiles({ ...selectedFiles, [type]: file });
  };

  const handleFileRemove = (type) => {
    setSelectedFiles({ ...selectedFiles, [type]: null });
  };

  const renderInputRow = (type, label) => (
    <div className="input-row">
      <FontAwesomeIcon icon={faFilePdf} className="file-icon" />
      <span className="file-name">{label}</span>
      {selectedFiles[type] ? (
        <>
          <FontAwesomeIcon
            icon={faTimesCircle}
            className="action-icon cancel"
            onClick={() => handleFileRemove(type)}
          />
          <FontAwesomeIcon icon={faCheckCircle} className="action-icon verify" />
          <span>Verify</span>
        </>
      ) : (
        <input
          type="file"
          accept="application/pdf"
          onChange={(event) => handleFileChange(event, type)}
        />
      )}
    </div>
  );

  return (
    <>
      <div className="main-personal">
        <div className="container">
          <div className="registration-main">
            <div className="per-det">
              <span className="text-personal">
                <h5>Upload Your KYC Documents</h5>
              </span>
              <span className="line-personal"></span>
            </div>
            <div className="photo-pre">
              <p>(Any 2 doc mandatory)</p>
            </div>
            <div className="row personal-name">
              <div className="col-md-7">
                {renderInputRow('aadhar', 'PDF Aadhar Card')}
                {renderInputRow('pan', 'PDF Pan Card')}
                {renderInputRow('voter', 'Voter ID')}
                {renderInputRow('passport', 'Passport')}
                {renderInputRow('driving', 'Driving License')}
                <div className="btn-path">
              <Link to={'/customer'} className="btn btn-cancel me-3 white-or">Back</Link>
              <Link to={'/customer'} className="btn btn-cancel me-3">Next</Link>
              <button type="submit" className="btn btn-submit">Save</button>
            </div>
              </div>
              <div className="col-md-5">
                <div className="file-upload">
                  <input type="file" id="choose-file" accept="image/*" />
                  <label htmlFor="choose-file">Choose file</label>
                  <span style={{textDecoration:'underline'}}>Choose file</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Uploadkyc;
