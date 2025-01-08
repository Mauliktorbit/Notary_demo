import React from 'react'
import { Link } from 'react-router-dom'

export default function BusinessUserSelectLoyer() {
  return (
    <div>
      <div className="kyc-container">

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>Pin Code</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Select"
                required
                style={{ height: '42px' }} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Country </label>
              <div>
                <select
                  name="city"
                  id="city"
                  className="form-select"
                  required
                >
                  <option selected>Select</option>
                  <option value={"Ahmedabad"}>Ahmedabad</option>
                  <option value={"gandhinagar"}>Gandhinagar</option>
                  <option value={"Bhavnagar"}>Bhavnagar</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>State</label>
              <div>
                <select
                  name="city"
                  id="city"
                  className="form-select"
                  required
                >
                  <option selected>Lorem ipsum</option>
                  <option value={"Ahmedabad"}>Ahmedabad</option>
                  <option value={"gandhinagar"}>Gandhinagar</option>
                  <option value={"Bhavnagar"}>Bhavnagar</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>District</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Select"
                required
                style={{ height: '42px' }} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>City </label>
              <div>
                <select
                  name="city"
                  id="city"
                  className="form-select"
                  required
                >
                  <option selected>Select</option>
                  <option value={"Ahmedabad"}>Ahmedabad</option>
                  <option value={"gandhinagar"}>Gandhinagar</option>
                  <option value={"Bhavnagar"}>Bhavnagar</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Taluka  / Tehsil</label>
              <div>
                <select
                  name="city"
                  id="city"
                  className="form-select"
                  required
                >
                  <option selected>Select</option>
                  <option value={"Ahmedabad"}>Ahmedabad</option>
                  <option value={"gandhinagar"}>Gandhinagar</option>
                  <option value={"Bhavnagar"}>Bhavnagar</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="clint-main-inputs">
          <div className="clint-inputs">
            <div class="clint-input1">
              {/* <i class="fa fa-briefcase" aria-hidden="true"></i> */}
              <input type="text" placeholder="Search" />
            </div>

            <div className="clint-search-button">

              <button data-id="model" data-target="#model">
                <i class="fa-solid fa-magnifying-glass"></i>{" "}
              </button>

            </div>
          </div>
        </div>
        <div className="pending-notart-main-box">

          <div className="profile-Page">
            <div className="p-img">
              <div className="form-group">
                <div className="siderbar-toggle">
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="subscription"
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              <img src='assets/img/Boy.png' />
            </div>
            <div className="profile-T">
              <div className="flex2">
                <div className="name">
                  <h6 style={{ color: '#102048', fontWeight: 800 }}>No : 11254</h6>
                </div>
                <div className="day">1day ago</div>
              </div>
              <div className="mail">
                <p>Power of Attorney</p>
                <p> +91 90000 55559</p>
              </div>
            </div>
          </div>
          <div className="profile-Page">
            <div className="p-img">
              <div className="form-group">
                <div className="siderbar-toggle">
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="subscription"
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              <img src='assets/img/Boy.png' />
            </div>
            <div className="profile-T">
              <div className="flex2">
                <div className="name">
                  <h6 style={{ color: '#102048', fontWeight: 800 }}>No : 11254</h6>
                </div>
                <div className="day">1day ago</div>
              </div>
              <div className="mail">
                <p>Power of Attorney</p>
                <p> +91 90000 55559</p>
              </div>
            </div>
          </div>
          <div className="profile-Page">
            <div className="p-img">
              <div className="form-group">
                <div className="siderbar-toggle">
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="subscription"
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              <img src='assets/img/Boy.png' />
            </div>
            <div className="profile-T">
              <div className="flex2">
                <div className="name">
                  <h6 style={{ color: '#102048', fontWeight: 800 }}>No : 11254</h6>
                </div>
                <div className="day">1day ago</div>
              </div>
              <div className="mail">
                <p>Power of Attorney</p>
                <p> +91 90000 55559</p>
              </div>
            </div>
          </div>
          <div className="profile-Page">
            <div className="p-img">
              <div className="form-group">
                <div className="siderbar-toggle">
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="subscription"
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              <img src='assets/img/Boy.png' />
            </div>
            <div className="profile-T">
              <div className="flex2">
                <div className="name">
                  <h6 style={{ color: '#102048', fontWeight: 800 }}>No : 11254</h6>
                </div>
                <div className="day">1day ago</div>
              </div>
              <div className="mail">
                <p>Power of Attorney</p>
                <p> +91 90000 55559</p>
              </div>
            </div>
          </div>

        </div>

        <div className="btn-path mt-5" style={{ justifyContent: 'space-around' }}>
          <Link to={'/notary-writer'} className="btn btn-cancel me-3 white-or small-long">Back</Link>
          <Link to={'/notarytype'} className="btn btn-cancel me-3 small-long">Submit</Link>
        </div>

      </div>
      <style jsx>{`
 
.kyc-container {
 max-width: 1056px;
        margin: 40px auto;
    padding: 50px;
    border: 1px solid #ECECEC;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.clint-main-inputs {
    margin-top: 15px;
}
          `}</style>
    </div>
  )
}
