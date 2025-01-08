import React, { useRef, useState, useEffect } from 'react';

const Capture = ({ onValidate }) => {
    const canvasRef = useRef(null);
    const [captchaCode, setCaptchaCode] = useState('');

    useEffect(() => {
        generateCaptcha();
    }, []);

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

        for (let i = 0; i < 18; i++) {
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

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleValidate = () => {
        if (userInput === captchaCode) {
            onValidate(true);
        } else {
            onValidate(false);
            generateCaptcha();
        }
    };

    return (
        <>
            <div className='d-flex form-group gap-2'>
                <canvas ref={canvasRef} width={140} height={50} />
                <input
                    type="text"
                    className='form-control'
                    style={{ border: '1px solid #b1b1b1', width: '50%' }}
                    placeholder="Enter the code"
                    value={userInput}
                    onChange={handleChange}
                    required
                />
                <button type="button" className="ref-but" onClick={generateCaptcha} style={{ width: '20%' }}>
                    <i className="fa-solid fa-arrows-rotate"></i>
                </button>
                <button className="btn btn-cancel small-long" onClick={handleValidate} style={{ width: '30%' }}>Verify</button>
            </div>
        </>
    );
};

export default Capture;
