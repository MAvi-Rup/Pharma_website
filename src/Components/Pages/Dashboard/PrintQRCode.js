//PrintQRCode

import React, { useState, useRef } from 'react';
import QrCode from 'qrcode.react';
import { useReactToPrint } from 'react-to-print';
import axios from 'axios';

const PrintQRCode = () => {
  const [userId, setUserId] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    age: '',
    salary: '',
    annualLeave: '',
    presentAddress: '',
    permanentAddress: '',
    imageSrc: '',
  });
  const qrCodeRef = useRef();
  const formRef = useRef(null);

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
        const { _id } = response.data.insertedId;
        setUserId(_id)
        formRef.current.reset();
        console.log(response.data.insertedId)
      })
      .catch(error => {
        console.log(error);
      });
  };


   // Replace with your logic to generate a unique ID for each user
  const qrValue = `https://example.com/users/${userId}`;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <form ref={formRef} onSubmit={handleRegistration}>
            <div className="form-group">
              <label>Name:</label>
              <input className="form-control" type="text" name="name"  onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input className="form-control" type="email" name="email" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input className="form-control" type="number" name="phone" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Department:</label>
              <input className="form-control" type="text" name="department" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input className="form-control" type="number" name="age" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Salary:</label>
              <input className="form-control" type="number" name="salary" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Annual Leave:</label>
              <input className="form-control" type="number" name="annualLeave" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Present Address:</label>
              <input className="form-control" type="text" name="presentAddress" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Present Address:</label>
              <input className="form-control" type="text" name="permanentAddress" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Image Src:</label>
              <input className="form-control" type="text" name="imageSrc" onChange={handleChange} />
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
                <p className="card-text">Department: {userInfo.department}</p>
                <p className="card-text">Age: {userInfo.age}</p>
                <p className="card-text">Salary: {userInfo.salary}</p>
                <p className="card-text">Annual Leave: {userInfo.annualLeave}</p>
                <p className="card-text">Present Address: {userInfo.presentAddress}</p>
                <p className="card-text">Permanent Address: {userInfo.permanentAddress}</p>
                <p className="card-text">Image: {userInfo.imageSrc}</p>

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
