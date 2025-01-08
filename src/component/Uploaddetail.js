import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Uploaddetail() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setImage(null);
  };

  return (
    <div className="main-personal">
      <div className="container">
        <div className="registration-main">
          <div className="upload-section">
            <div className="upload-image">
              {image ? (
                <img src={image} alt="Uploaded" />
              ) : (
                <span>Upload Photo</span>
              )}
            </div>
            <div className="upload-actions">
              <input
                type="file"
                id="upload-photo"
                accept="image/*"
                onChange={handleImageChange}
              />
              <label htmlFor="upload-photo">Upload Photo</label>
              {image && (
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className="cancel-icon"
                  onClick={handleImageRemove}
                />
              )}
            </div>
            <div className="upload-text">
              Upload a photo up to 1MB
            </div>
          </div>

          <div className="row personal-name">

            <div className="col-md-4">
              <label>First Name </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="User"
                required
              /></div>
            <div className="col-md-4">
              <label>Middle Name</label> <input
                type="text"
                name="name"
                className="form-control"
                placeholder="User"
                required
              /></div>
            <div className="col-md-4">
              <label>Last Name</label> <input
                type="text"
                name="name"
                className="form-control"
                placeholder="User"
                required
              /></div>
          </div>

          <div className="row personal-name">

            <div className="col-md-4">
              <label>Date Of Birth</label>
              <input
                type="date"
                name="joining_date"
                className="form-control"

                required
              /></div>
            <div className="col-md-4">
              <label className="radio-inline">
                Gender
              </label>
              <div className="radio-group-yes">

                <select
                  name="state"
                  id="state"
                  className="form-select"
                  required
                >
                  <option selected >Female</option>
                  <option value={'Male'}>Male</option>
                  <option value={'Other'}>Other</option>

                </select>

              </div>
            </div>
            <div className="col-md-4">
              <label className="radio-inline">
                Whether a citizen of India
              </label>
              <div className="radio-group-yes">

                <select
                  name="state"
                  id="state"
                  className="form-select"
                  required
                >
                  <option selected >Yes</option>
                  <option value={'No'}>No</option>
                </select>

              </div>
            </div>
          </div>

          <div className="row personal-name">

            <div className="col-md-4">
              <label className="radio-inline">
                Nationality
              </label>
              <div className="radio-group-yes">

                <select
                  name="state"
                  id="state"
                  className="form-select"
                  required
                >
                  <option selected >Select Nationality</option>
                  <option value={'Gujarat'}>India</option>
                  <option value={'Rajasthan'}>USA</option>
                  <option value={'Delhi'}>UK</option>

                </select>

              </div>
            </div>
            <div className="col-md-4">
              <label className="radio-inline">
                Whether resident in India
              </label>
              <div className="radio-group-yes">

                <select
                  name="state"
                  id="state"
                  className="form-select"
                  required
                >
                  <option selected >Yes</option>
                  <option value={'No'}>No</option>
                </select>

              </div>
            </div>
            <div className="col-md-4">
              <label className="radio-inline">
                Country
              </label>
              <div className="radio-group-yes">

                <select
                  name="state"
                  id="state"
                  className="form-select"
                  required
                >
                  <option selected >Select Country</option>
                  <option value={'Gujarat'}>India</option>
                  <option value={'Rajasthan'}>USA</option>
                  <option value={'Delhi'}>UK</option>
                </select>

              </div>
            </div>
          </div>

          <div className="row personal-name">

            <div className="col-md-12">
              <label className="radio-inline">
                Educational  qualification
              </label>
              <div className="radio-group-yes">

                <select
                  name="state"
                  id="state"
                  className="form-select"
                  required
                >
                  <option selected >Bachelor’s degree </option>
                  <option value={'Gujarat'}>B.Com</option>
                  <option value={'Rajasthan'}>M.Com</option>
                </select>

              </div>
            </div>

          </div>

          <div className="row personal-name">

            <div className="col-md-12">
              <label className="radio-inline">
                Occupation Type
              </label>
              <div className="radio-group-yes">

                <select
                  name="state"
                  id="state"
                  className="form-select"
                  required
                >
                  <option selected >Serviceman </option>
                  <option value={'Gujarat'}>Bussinessman</option>
                  <option value={'Rajasthan'}>Marketing</option>
                </select>

              </div>
            </div>

          </div>

          <div className="row personal-name">

            <div className="col-md-12">
              <label className="radio-inline">
                Area of occupation
              </label>
              <div className="radio-group-yes">

                <select
                  name="state"
                  id="state"
                  className="form-select"
                  required
                >
                  <option selected >IT Company </option>
                  <option value={'Gujarat'}>Bussinessman</option>
                  <option value={'Rajasthan'}>Marketing</option>
                </select>

              </div>
            </div>

          </div>
          <div className="row personal-name">
            <div className="btn-path">
              <Link to={'/customer'} className="btn btn-cancel me-3 white-or">Generate Link</Link>
              <Link to={'/customer'} className="btn btn-cancel me-3">Back</Link>
              <button type="submit" className="btn btn-submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uploaddetail;
