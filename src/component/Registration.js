


import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";

// import './UserCategory.css'; // Ensure this CSS file exists

export default function Registration() {
  const [selectedCategory, setSelectedCategory] = useState("Registered User");

  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const renderLink = () => {
    switch (selectedRole) {

      case "Notary":
        return <Link to="/Notary" className="btn btn-cancel me-3">Next</Link>;
      case "Person":
        return <Link to="/Personalreg" className="btn btn-cancel me-3">Next</Link>;
      case "Company / LLP":
        return <Link to="/CompanyForm" className="btn btn-cancel me-3">Next</Link>;
      case "Director / Designated partner":
        return <Link to="/DirectorForm" className="btn btn-cancel me-3">Next</Link>;
      case "Proprietorship Firm":
        return <Link to="/ProprietorshipForm" className="btn btn-cancel me-3">Next</Link>;
      case "Partnership Firm":
        return <Link to="/PartnershipForm" className="btn btn-cancel me-3">Next</Link>;
      case "Employee or Other Users":
        return <Link to="/EmployeeForm" className="btn btn-cancel me-3">Next</Link>;
      case "Professional":
        return <Link to="/ProfessionalForm" className="btn btn-cancel me-3">Next</Link>;
      case "Professional Staff Member":
        return <Link to="/StaffMemberForm" className="btn btn-cancel me-3">Next</Link>;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <Tabs selectedIndex={selectedCategory === "Registered User" ? 0 : selectedCategory === "Business User" ? 1 : 2} onSelect={index => {
        setSelectedCategory(index === 0 ? "Registered User" : index === 1 ? "Business User" : "Notary Public");
      }}>
        <div className="registration-main">
          <div className="registration-form">
            <div className="login-details">
              {/* <div className="registration-text">
            <h5>User Registration</h5>
          </div> */}
              <div class="per-det"><span class="text-personal"><h3>User Registration</h3></span><span class="line-personal"></span></div>
              <div className="user-details">
                <div className="user-details-text">
                  <h6>User Details</h6>
                  <h6>Note: All fields are to be mandatorily filled.</h6>
                </div>
                <div className="user-category">
                  <h6>
                    <b>User Category</b>
                  </h6>
                </div>
                <div className="user-radio-button">
                  <div className="radio-group">
                    <TabList>
                      <Tab>
                        <div className="radio-option">
                          <input
                            type="radio"
                            id="registeredUser"
                            name="userCategory"
                            value="Registered User"
                            checked={selectedCategory === "Registered User"}
                            onChange={() => setSelectedCategory("Registered User")}
                          />
                          <label htmlFor="registeredUser">Individual User</label>
                        </div>
                      </Tab>
                      <Tab>
                        <div className="radio-option">
                          <input
                            type="radio"
                            id="businessUser"
                            name="userCategory"
                            value="Business User"
                            checked={selectedCategory === "Business User"}
                            onChange={() => setSelectedCategory("Business User")}
                          />
                          <label htmlFor="businessUser">Business User</label>
                        </div>
                      </Tab>
                      <Tab>
                        <div className="radio-option">
                          <input
                            type="radio"
                            id="notaryPublic"
                            name="userCategory"
                            value="Notary Public"
                            checked={selectedCategory === "Notary Public"}
                            onChange={() => setSelectedCategory("Notary Public")}
                          />
                          <label htmlFor="notaryPublic">Notary Public</label>
                        </div>
                      </Tab>
                    </TabList>
                  </div>
                </div>
              </div>
              <div className="user-role">
                <div className="row my-4">
                  <TabPanel>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <div>
                          <select
                            name="state"
                            id="state"
                            className="form-select"
                            value={selectedRole}
                            onChange={handleRoleChange}
                            required
                          >
                            <option value="" disabled selected>Select User Role</option>
                            <option value="Person">Person</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="btn-path">
                      {renderLink()}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <div>
                          <select
                            name="state"
                            id="state"
                            className="form-select"
                            value={selectedRole}
                            onChange={handleRoleChange}
                            required
                          >
                            <option value="" disabled selected>Select User Role</option>
                            <option value="Company / LLP">Company / LLP</option>
                            <option value="Director / Designated partner">Director / Designated partner</option>
                            <option value="Proprietorship Firm">Proprietorship Firm</option>
                            <option value="Partnership Firm">Partnership Firm</option>
                            <option value="Employee or Other Users">Employee or Other Users</option>
                            <option value="Professional">Professional</option>
                            <option value="Professional Staff Member">Professional Staff Member</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="btn-path">
                      {renderLink()}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <div>
                          <select
                       
                          name="state"
                          id="state"
                          className="form-select"
                          value={selectedRole}
                          onChange={handleRoleChange}
                          required
                        >
                            <option selected>Select User Role</option>
                            <option value={"Notary"}>Notary</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="btn-path">
                    {renderLink()}
                    </div>
                  </TabPanel>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Tabs>

    </div>
  );
}

