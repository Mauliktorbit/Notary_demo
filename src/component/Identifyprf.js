import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Identifyprf = () => {
  const [aadhaar, setAadhaar] = useState('');
  const [otp, setOtp] = useState('');
  const [pan, setPan] = useState('');
  const [voterId, setVoterId] = useState('');
  const [drivingLicense, setDrivingLicense] = useState('');
  const [rationCard, setRationCard] = useState('');
  const [passport, setPassport] = useState('');
  
  const handleFileUpload = (e, type) => {
    console.log(`${type} file selected:`, e.target.files[0]);
  };

  return (
    <div className="identity-proofs-form">
      <div className="form-group">
        <label>Aadhaar Card Number</label>
        <input type="text" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)} placeholder="Enter Aadhaar Number" />
        <input type="text" placeholder="Enter Captcha" />
        <button>SEND OTP</button>
        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
        <button>Verify</button>
        <button>Attach Aadhaar</button>
        <input type="file" onChange={(e) => handleFileUpload(e, 'aadhaar')} />
        <button>Remove</button>
      </div>
      
      <div className="form-group">
        <label>Income Tax PAN</label>
        <input type="text" value={pan} onChange={(e) => setPan(e.target.value)} placeholder="Enter PAN Number" />
        <button>Attach PAN</button>
        <input type="file" onChange={(e) => handleFileUpload(e, 'pan')} />
        <button>Remove</button>
      </div>
      
      {/* Repeat similar blocks for other identity proofs */}

      <div className="form-group">
        <label>Voter's Identity Card Number</label>
        <input type="text" value={voterId} onChange={(e) => setVoterId(e.target.value)} placeholder="Enter Voter ID Number" />
        <button>Attach Voter's ID Card</button>
        <input type="file" onChange={(e) => handleFileUpload(e, 'voterId')} />
        <button>Remove</button>
      </div>

      <div className="form-group">
        <label>Driving License Number</label>
        <input type="text" value={drivingLicense} onChange={(e) => setDrivingLicense(e.target.value)} placeholder="Enter Driving License Number" />
        <button>Attach Driving License</button>
        <input type="file" onChange={(e) => handleFileUpload(e, 'drivingLicense')} />
        <button>Remove</button>
      </div>

      <div className="form-group">
        <label>Ration Card Number</label>
        <input type="text" value={rationCard} onChange={(e) => setRationCard(e.target.value)} placeholder="Enter Ration Card Number" />
        <button>Attach Ration Card</button>
        <input type="file" onChange={(e) => handleFileUpload(e, 'rationCard')} />
        <button>Remove</button>
      </div>

      <div className="form-group">
        <label>Passport Number</label>
        <input type="text" value={passport} onChange={(e) => setPassport(e.target.value)} placeholder="Enter Passport Number" />
        <button>Attach Passport</button>
        <input type="file" onChange={(e) => handleFileUpload(e, 'passport')} />
        <button>Remove</button>
      </div>

      <div className="form-actions">
        <button>BACK</button>
        <button>NEXT</button>
      </div>
    </div>
  );
};

export default Identifyprf;

