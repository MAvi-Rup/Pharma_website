//PrintQRCode

import React, { useState, useRef } from 'react';
import QrCode from 'qrcode.react';
import { useReactToPrint } from 'react-to-print';

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
  };

  const uniqueId = '123456'; // Replace with your logic to generate a unique ID for each user
  const qrValue = `https://example.com/users/${uniqueId}`;

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <label>
          Name:
          <input type="text" name="name" value={userInfo.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={userInfo.email} onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={userInfo.phone} onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={userInfo.address} onChange={handleChange} />
        </label>
        <button type="submit">Register</button>
      </form>

      {userInfo.name && (
        <div>
          <h2>User Profile</h2>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <p>Phone: {userInfo.phone}</p>
          <p>Address: {userInfo.address}</p>

          <div ref={qrCodeRef}>
            <QrCode value={qrValue} />
            <button onClick={handlePrint}>Print QR Code</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrintQRCode;
