import React from "react";

export default function IndividualUserSelectLoyer() {
  return (
    <div>
      <div className="container">
        <div className="registration-main">
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
                />
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
                />
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
             <img src='assets/img/Boy.png'/>
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
             <img src='assets/img/Boy.png'/>
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
             <img src='assets/img/Boy.png'/>
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
             <img src='assets/img/Boy.png'/>
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
        </div>
      </div>
    </div>
  );
}
