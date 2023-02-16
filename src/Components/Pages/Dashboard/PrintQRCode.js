//PrintQRCode

import React, { useState, useRef } from 'react';
import QrCode from 'qrcode.react';
import { useReactToPrint } from 'react-to-print';
import axios from 'axios';

const PrintQRCode = () => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '', address: '' });
  const qrCodeRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handlePrint = useReactToPrint({
    content: () => qrCodeRef.current,
  });

  const handleRegistration = (event) => {
    event.preventDefault();
    // Your logic to save user information in a database or server
    axios.post('http://localhost:5001/employees', userInfo)
      .then(response => {
        console.log(response.data);
        event.target.reset()
        
      })
      .catch(error => {
        console.log(error);
      });
  };


  const uniqueId = '123456'; // Replace with your logic to generate a unique ID for each user
  const qrValue = `https://example.com/users/${uniqueId}`;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleRegistration}>
            <div className="form-group">
              <label>Name:</label>
              <input className="form-control" type="text" name="name" value={userInfo.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input className="form-control" type="email" name="email" value={userInfo.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input className="form-control" type="text" name="phone" value={userInfo.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input className="form-control" type="text" name="address" value={userInfo.address} onChange={handleChange} />
            </div>
            <button className="btn btn-primary mt-4" type="submit">Register</button>
          </form>
        </div>
        {userInfo.name && (
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">User Profile</h5>
                <p className="card-text">Name: {userInfo.name}</p>
                <p className="card-text">Email: {userInfo.email}</p>
                <p className="card-text">Phone: {userInfo.phone}</p>
                <p className="card-text">Address: {userInfo.address}</p>

                <div ref={qrCodeRef}>
                  <QrCode value={qrValue} />
                  
                </div>
                <button className="btn btn-secondary mt-3" onClick={handlePrint}>Print QR Code</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrintQRCode;
