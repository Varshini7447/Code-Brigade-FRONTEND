import React from 'react';

const PaymentCompleteBox = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    flexDirection: 'column', 
  };

  const boxStyle = {
    width: '400px',
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '40px 20px',
    marginBottom: '20px', 
  };

  const iconStyle = {
    fontSize: '64px',
    color: '#4CAF50',
    animation: 'pop-in 0.6s ease-in-out, pulse 1.5s infinite',
  };

  const textStyle = {
    color: '#4CAF50',
    fontSize: '24px',
    margin: '20px 0',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none', 
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div style={iconStyle}>✓</div>
        <h1 style={textStyle}>Payment Completed</h1>
      </div>
      <a href="/Fullbody" style={buttonStyle}>DONE</a>
     
      
      <style>
        {`
          @keyframes pop-in {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default PaymentCompleteBox;

