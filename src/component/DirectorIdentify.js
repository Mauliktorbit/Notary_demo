import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export default function DirectorIdentity() {
     const canvasRef = useRef(null);
    const [captchaCode, setCaptchaCode] = useState('');
    const generateCaptcha = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const code = Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
        setCaptchaCode(code);
        drawCaptcha(code);
    };

    const drawCaptcha = (code) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.font = '30px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(code, 10, 30);

        // Add some random lines and dots for added security
        for (let i = 0; i < 20; i++) {
            ctx.beginPath();
            ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.stroke();
        }

        for (let i = 0; i < 30; i++) {
            ctx.beginPath();
            ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1, 0, 2 * Math.PI);
            ctx.fill();
        }
    };

    useEffect(() => {
        generateCaptcha();
    }, []);
  return (
    <div>
      <div className="container">
      <div className="registration-main">
      <div className="registration-form">
        <div className="login-details">
        <div className="per-det">
              <span className="text-personal">
              <h3>Identity Proofs</h3>
              </span>
              <span className="line-personal"></span>
            </div>
        <div className="registration-text">
        
          <p>At Least Two Documents Required.</p>
        </div>
        <div className='row my-3'>
            <div className='col-md-2 mt-5'>
                <h6>Aadhaar Card Number</h6>
            </div>
            <div className='col-md-3'>
                <div className="form-group">
                 <label>Enter Aadhaar Number</label>
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Name"
                     required
                    />
                    </div>
            </div>
             <div className='col-md-2'>
                <div className="form-group">
                 <label>Enter Captcha</label>
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Captcha"
                     required
                    />
                    </div>
            </div>
            <div className='col-md-3 mt-4'>
                <div className='d-flex form-group gap-4'>
                <canvas ref={canvasRef} width={150} height={50} />
                <div className='d-flex gap-2'>
                {/* <input type="text" className='form-control' style={{border: '1px solid #b1b1b1'}} placeholder="Enter the code" /> */}
                 <button className="ref-but" onClick={generateCaptcha}><i class="fa-solid fa-arrows-rotate"></i></button>
                </div>
                 </div>
            </div>
            <div className='col-md-2 mt-4'>
                 <button type="submit" className="btn btn-cancel me-3">SEND OTP</button>
            </div>
        </div>

        <div className='row my-3'>
        <div className='col-md-2'></div>
        <div className='col-md-2'>
            <div className="form-group">
                 {/* <label>Name</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Name"
                     required
                    />
                    </div>
        </div>
       <div className='col-md-2'>
                 <button type="submit" className="btn btn-cancel me-3">Verify</button>
            </div>
            <div className='col-md-2'>
            <div className="form-group">
                 {/* <label>Name</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Name"
                     required
                    />
                    </div>
        </div>
        <div className='col-md-2 mt-2'>
                 <input type='file'></input>
            </div>
            <div className='col-md-2'>
              <div className='remove-btn'>
             <button to={'/customer'} className="btn btn-cancel me-3">Remove</button>
             </div>
            </div>
        </div>

        <div className='row my-3'>
             <div className='col-md-2 mt-3'>
                <h6>Income Tax Pan</h6>
            </div>
            <div className='col-md-3'>
                <div className="form-group">
                 {/* <label>Enter Aadhaar Number</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Name"
                     required
                    />
                    </div>
            </div>
             <div className='col-md-2'>
                <div className="form-group">
                 {/* <label>Enter Captcha</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Captcha"
                     required
                    />
                    </div>
            </div>
            <div className='col-md-3'>
                <div className='d-flex form-group gap-4'>
                <canvas ref={canvasRef} width={150} height={50} />
                <div className='d-flex gap-2'>
                {/* <input type="text" className='form-control' style={{border: '1px solid #b1b1b1'}} placeholder="Enter the code" /> */}
                 <button className="ref-but" onClick={generateCaptcha}><i class="fa-solid fa-arrows-rotate"></i></button>
                </div>
                 </div>
            </div>
            <div className='col-md-2'>
                 <button type="submit" className="btn btn-cancel me-3">Verify</button>
            </div>
        </div>

        <div className='row my-3'>
            <div className='col-md-2'></div>
            <div className='col-md-3'>
                <div className="form-group">
                 {/* <label>Enter Aadhaar Number</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Name"
                     required
                    />
                    </div>
            </div>
             <div className='col-md-2 mt-2'>
                 <input type='file'></input>
            </div>
            <div className='col-md-2'>
            <div className='remove-btn'>
             <button to={'/customer'} className="btn btn-cancel me-3">Remove</button>
             </div>
            </div>
        </div>


        <div className='row my-3'>
             <div className='col-md-2 mt-3'>
                <h6>Voter's Identity Card Number</h6>
            </div>
            <div className='col-md-3'>
                <div className="form-group">
                 {/* <label>Enter Aadhaar Number</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Name"
                     required
                    />
                    </div>
            </div>
             <div className='col-md-2'>
                <div className="form-group">
                 {/* <label>Enter Captcha</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Captcha"
                     required
                    />
                    </div>
            </div>
            <div className='col-md-3'>
                <div className='d-flex form-group gap-4'>
                <canvas ref={canvasRef} width={150} height={50} />
                <div className='d-flex gap-2'>
                {/* <input type="text" className='form-control' style={{border: '1px solid #b1b1b1'}} placeholder="Enter the code" /> */}
                 <button className="ref-but" onClick={generateCaptcha}><i class="fa-solid fa-arrows-rotate"></i></button>
                </div>
                 </div>
            </div>
            <div className='col-md-2'>
                 <button type="submit" className="btn btn-cancel me-3">Verify</button>
            </div>
        </div>

        <div className='row my-3'>
            <div className='col-md-2'></div>
            <div className='col-md-3'>
                <div className="form-group">
                 {/* <label>Enter Aadhaar Number</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Name"
                     required
                    />
                    </div>
            </div>
             <div className='col-md-2 mt-2'>
                 <input type='file'></input>
            </div>
            <div className='col-md-2'>
            <div className='remove-btn'>
             <button to={'/customer'} className="btn btn-cancel me-3">Remove</button>
             </div>
            </div>
        </div>
    
 <div className='row my-3'>
             <div className='col-md-2 mt-3'>
                <h6>Driving License Number</h6>
            </div>
            <div className='col-md-3'>
                <div className="form-group">
                 {/* <label>Enter Aadhaar Number</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Name"
                     required
                    />
                    </div>
            </div>
             <div className='col-md-2'>
                <div className="form-group">
                 {/* <label>Enter Captcha</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Captcha"
                     required
                    />
                    </div>
            </div>
            <div className='col-md-3'>
                <div className='d-flex form-group gap-4'>
                <canvas ref={canvasRef} width={150} height={50} />
                <div className='d-flex gap-2'>
                {/* <input type="text" className='form-control' style={{border: '1px solid #b1b1b1'}} placeholder="Enter the code" /> */}
                 <button className="ref-but" onClick={generateCaptcha}><i class="fa-solid fa-arrows-rotate"></i></button>
                </div>
                 </div>
            </div>
            <div className='col-md-2'>
                 <button type="submit" className="btn btn-cancel me-3">Verify</button>
            </div>
        </div>

        <div className='row my-3'>
            <div className='col-md-2'></div>
            <div className='col-md-3'>
                <div className="form-group">
                 {/* <label>Enter Aadhaar Number</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Name"
                     required
                    />
                    </div>
            </div>
             <div className='col-md-2 mt-2'>
                 <input type='file'></input>
            </div>
            <div className='col-md-2'>
            <div className='remove-btn'>
             <button to={'/customer'} className="btn btn-cancel me-3">Remove</button>
             </div>
            </div>
        </div>

 <div className='row my-3'>
             <div className='col-md-2 mt-3'>
                <h6>Ration Card Number</h6>
            </div>
            <div className='col-md-3'>
                <div className="form-group">
                 {/* <label>Enter Aadhaar Number</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Name"
                     required
                    />
                    </div>
            </div>
             <div className='col-md-2'>
                <div className="form-group">
                 {/* <label>Enter Captcha</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Captcha"
                     required
                    />
                    </div>
            </div>
            <div className='col-md-3'>
                <div className='d-flex form-group gap-4'>
                <canvas ref={canvasRef} width={150} height={50} />
                <div className='d-flex gap-2'>
                {/* <input type="text" className='form-control' style={{border: '1px solid #b1b1b1'}} placeholder="Enter the code" /> */}
                 <button className="ref-but" onClick={generateCaptcha}><i class="fa-solid fa-arrows-rotate"></i></button>
                </div>
                 </div>
            </div>
            <div className='col-md-2'>
                 <button type="submit" className="btn btn-cancel me-3">Verify</button>
            </div>
        </div>

        <div className='row my-3'>
            <div className='col-md-2'></div>
            <div className='col-md-3'>
                <div className="form-group">
                 {/* <label>Enter Aadhaar Number</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Name"
                     required
                    />
                    </div>
            </div>
             <div className='col-md-2 mt-2'>
                 <input type='file'></input>
            </div>
            <div className='col-md-2'>
            <div className='remove-btn'>
             <button to={'/customer'} className="btn btn-cancel me-3">Remove</button>
             </div>
            </div>
        </div>



 <div className='row my-3'>
             <div className='col-md-2 mt-3'>
                <h6>Passport Number</h6>
            </div>
            <div className='col-md-3'>
                <div className="form-group">
                 {/* <label>Enter Aadhaar Number</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Name"
                     required
                    />
                    </div>
            </div>
             <div className='col-md-2'>
                <div className="form-group">
                 {/* <label>Enter Captcha</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Captcha"
                     required
                    />
                    </div>
            </div>
            <div className='col-md-3'>
                <div className='d-flex form-group gap-4'>
                <canvas ref={canvasRef} width={150} height={50} />
                <div className='d-flex gap-2'>
                {/* <input type="text" className='form-control' style={{border: '1px solid #b1b1b1'}} placeholder="Enter the code" /> */}
                 <button className="ref-but" onClick={generateCaptcha}><i class="fa-solid fa-arrows-rotate"></i></button>
                </div>
                 </div>
            </div>
            <div className='col-md-2'>
                 <button type="submit" className="btn btn-cancel me-3">Verify</button>
            </div>
        </div>

        <div className='row my-3'>
            <div className='col-md-2'></div>
            <div className='col-md-3'>
                <div className="form-group">
                 {/* <label>Enter Aadhaar Number</label> */}
                    <input
                    type="text"
                    name="name"
                     className="form-control"
                      placeholder="Enter Name"
                     required
                    />
                    </div>
            </div>
             <div className='col-md-2 mt-2'>
                 <input type='file'></input>
            </div>
            <div className='col-md-2'>
            <div className='remove-btn'>
             <button to={'/customer'} className="btn btn-cancel me-3">Remove</button>
             </div>
            </div>
        </div>
        </div>
        <div className="btn-path">
                            <Link to={'/DirectorPerdet'} className="btn btn-cancel me-3">Back</Link>

                            <Link to={'/DirectorContact'} className="btn btn-cancel me-3">Next</Link>
                        </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}




