import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentProcessingBox = () => {
  const navigate = useNavigate(); 

  const handleProceed = () => {
    navigate('/PaymentCompleteBox');  
  };

  const handleCancel = () => {
    navigate('/BasicUsage');  
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',  
  };

  
  const boxStyle = {
    width: '550px',
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    overflow: 'hidden',  
  };

  const headerStyle = {
    backgroundColor: '#007bff',  
    padding: '20px',
    color: '#fff',
    fontWeight: 'bold',
  };

  const contentStyle = {
    padding: '40px 20px',
  };

  const h1Style = {
    color: '#007bff', 
    fontSize: '24px',
    margin: '20px 0',
  };

  const buttonStyle = {
    width: '80%',
    padding: '15px 0',
    fontSize: '18px',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
    margin: '10px auto',
    display: 'block',
  };

  const proceedButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',  
    color: '#fff',
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ccc',  
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>

        <div style={contentStyle}>
          <h1 style={h1Style}>Payment Processing .....</h1>
          <button style={proceedButtonStyle} onClick={handleProceed}>PROCEED</button>
          <button style={cancelButtonStyle} onClick={handleCancel}>CANCEL</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcessingBox;