import React, { useState } from 'react';

function Loginformperson() {
    const [formData, setFormData] = useState({
        userCategory: 'Person',
        userId: '',
        password: '',
        captcha: '',
        captchaAnswer: '',
      });
    
      const [generatedCaptcha, setGeneratedCaptcha] = useState(generateCaptcha());
    
      function generateCaptcha() {
        // Simple arithmetic captcha generation
        const num1 = Math.floor(Math.random() * 100);
        const num2 = Math.floor(Math.random() * 100);
        return `${num1} + ${num2}`;
      }
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleCaptchaRefresh = () => {
        setGeneratedCaptcha(generateCaptcha());
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const correctAnswer = eval(generatedCaptcha);
        if (parseInt(formData.captchaAnswer) === correctAnswer) {
          console.log('Captcha validated, form data:', formData);
          // Implement form submission logic here
        } else {
          alert('Invalid captcha');
        }
      };
    
      return (
        <div className="container">
        <div className="registration-main">
            <div className="registration-form">
        
          
          <form onSubmit={handleSubmit}>
          <div className="login-details">
          <h3>Welcome to E Notary Portal</h3>
            <div className="form-group">
              <label>User Category</label>
              <select
                name="userCategory"
                value={formData.userCategory}
                onChange={handleChange}
              >
                <option value="Person">Person</option>
                <option value="Company">Company</option>
                <option value="Director">Director</option>
                <option value="Proprietorship">Proprietorship</option>
                <option value="Partnership">Partnership</option>
              </select>
            </div>
    
            <div className="form-group">
              <label>User ID</label>
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                required
              />
              <a href="#" className="forgot-link">Forgot User ID?</a>
            </div>
    
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <a href="#" className="forgot-link">Forgot Password?</a>
            </div>
    
            <div className="form-group captcha-group">
              <label>Captcha</label>
              <div className="captcha-box">  
                <span className="captcha">{generatedCaptcha}</span>
                <button type="button" onClick={handleCaptchaRefresh} className="btn btn-cancel me-3">
                  Refresh Captcha 🔄
                </button>
              </div>
              <input
                type="text"
                name="captchaAnswer"
                value={formData.captchaAnswer}
                onChange={handleChange}
                required
                placeholder="Enter the value"
              />
              <button type="button" className="tn btn-cancel me-3" style={{marginTop: '10px'}}>Validate Captcha</button>
            </div>
    </div>
            <div className="form-actions">
              <button type="submit" className="login-btn">Login</button>
              <button type="button" className="register-btn">Register</button>
            </div>
          </form>
        </div>
        </div>
        </div>
     
      );
    
    
}

export default Loginformperson;
