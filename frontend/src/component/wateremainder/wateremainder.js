




// import React, { useState, useEffect, useRef } from 'react';
// import { Button } from '@chakra-ui/react';

// export const WaterReminder = () => {
//   const [progress, setProgress] = useState(0);
//   const [timeInput, setTimeInput] = useState(1); // Overall time limit in hours
//   const [notificationLimit, setNotificationLimit] = useState(1); // Time limit for notifications in minutes
//   const [notificationMessage, setNotificationMessage] = useState(''); // Message to display after Done is clicked
//   const intervalRef = useRef(null);
//   const totalClicksRef = useRef(0); // Track the number of times the user clicks "Accept"
//   const totalTimeRef = useRef(0); // Track the total time in milliseconds

//   // Request notification permission on component mount
//   useEffect(() => {
//     if ('Notification' in window && Notification.permission !== 'granted') {
//       Notification.requestPermission();
//     }
//     return () => clearInterval(intervalRef.current); // Cleanup on unmount
//   }, []);

//   const handleTimeLimitChange = (e) => {
//     const newTimeInput = parseFloat(e.target.value);
//     if (!isNaN(newTimeInput) && newTimeInput > 0 && newTimeInput <= 24) {
//       setTimeInput(newTimeInput);
//     }
//   };

//   const handleNotificationLimitChange = (e) => {
//     const newNotificationLimit = parseFloat(e.target.value);
//     if (!isNaN(newNotificationLimit) && newNotificationLimit > 0) {
//       setNotificationLimit(newNotificationLimit);
//     }
//   };

//   const handleDoneClick = () => {
//     if (timeInput > 0 && timeInput <= 24 && notificationLimit > 0) {
//       setProgress(0);
//       totalTimeRef.current = timeInput * 60 * 60 * 1000; // Convert time limit to milliseconds
//       totalClicksRef.current = totalTimeRef.current / (notificationLimit * 60 * 1000); // Total required clicks to fill up
//       startReminder();
//       setNotificationMessage(`You will receive notifications every ${notificationLimit} minutes for the next ${timeInput} hours.`);
//     }
//   };

//   const startReminder = () => {
//     intervalRef.current = setInterval(() => {
//       if (Notification.permission === 'granted') {
//         navigator.serviceWorker.getRegistration().then((registration) => {
//           registration.showNotification('Time to drink water!', {
//             body: 'It’s time to stay hydrated!',
//             icon: 'https://img.icons8.com/ios/50/000000/water.png',
//             actions: [
//               { action: 'accept', title: 'Accept' },
//               { action: 'decline', title: 'Decline' }
//             ]
//           });
//         });
//       } else {
//         alert('Time to drink water!');
//         handleWaterLevelIncrease();
//       }
//     }, notificationLimit * 60 * 1000); // Interval in milliseconds
//   };

//   const handleWaterLevelIncrease = () => {
//     setProgress((prevProgress) => {
//       const increment = 100 / totalClicksRef.current; // Calculate the increment for each notification
//       const newProgress = prevProgress + increment;
//       if (newProgress >= 100) {
//         clearInterval(intervalRef.current);
//         return 100; // Ensure progress doesn't exceed 100%
//       }
//       return newProgress;
//     });
//   };

//   useEffect(() => {
//     const handleMessage = (event) => {
//       if (event.data && event.data.action === 'accept') {
//         handleWaterLevelIncrease();
//       }
//     };

//     navigator.serviceWorker.addEventListener('message', handleMessage);

//     return () => {
//       navigator.serviceWorker.removeEventListener('message', handleMessage);
//     };
//   }, []);

//   const inputStyle = {
//     padding: '12px 24px',
//     margin: '12px 24px',
//     width: '50%',
//     outline: 'none',
//     borderRadius: '5px',
//     boxShadow: '5px 5px 10px #D6D6D6, -5px -5px 10px #FFF',
//     borderColor: 'white',
//     transition: 'box-shadow 0.3s ease-in-out'
//   };

//   const inputFocusStyle = {
//     ...inputStyle,
//     boxShadow: 'inset 5px 5px 10px #D6D6D6, -5px -5px 10px #FFF',
//     borderColor: '#00aaff' // Optional: Adds a border color change on focus
//   };

//   return (
//     <div style={{ 
//         display: 'flex', 
//         justifyContent: 'center',
//         alignItems: 'center', 
//         height: '100vh',
//         padding: '20px',
//         background: 'linear-gradient(135deg, #00aaff, #0077cc)', // Shining blue gradient background
//       }}>
//       <div style={{ 
//           display: 'flex', 
//           justifyContent: 'center',
//           alignItems: 'center',
//           width: '65%', 
//           height: '60%',
//           borderRadius: '30px',
//           overflow: 'hidden',
//           boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
//           backgroundColor: 'white', // Background color inside the border box
//         }}>
//         <div style={{ 
//             flex: '0 0 150px', 
//             display: 'flex', 
//             justifyContent: 'center', 
//             alignItems: 'center', 
//             padding: '60px',
//           }}>
//           <div style={{ 
//               position: 'relative', 
//               width: '180px', 
//               height: '180px', 
//               borderRadius: '50%', 
//               border: '2px solid #00aaff', 
//               overflow: 'hidden',
//               boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//             }}>
//             <div style={{ 
//                 position: 'absolute', 
//                 bottom: 0, 
//                 width: '100%', 
//                 height: `${progress}%`, 
//                 backgroundColor: '#00aaff', 
//                 transition: 'height 0.5s ease-in-out',
//               }}>
//             </div>
//           </div>
//         </div>
//         <div style={{ 
//             flex: '1', 
//             display: 'flex', 
//             flexDirection: 'column', 
//             alignItems: 'center', 
//             justifyContent: 'center',
//             padding: '20px',
//           }}>
//           <div style={{ textAlign: 'center' }}>
//             <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Set Overall Time Limit (hours): </label>
//             <input
//               type="number"
//               value={timeInput}
//               onChange={handleTimeLimitChange}
//               min="0"
//               max="24"
//               step="0.1"
//               style={inputStyle}
//               onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
//               onBlur={(e) => Object.assign(e.target.style, inputStyle)}
//             />
//             <br />
//             <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Set Notification Interval (minutes): </label>
//             <input
//               type="number"
//               value={notificationLimit}
//               onChange={handleNotificationLimitChange}
//               min="1"
//               max="60"
//               step="1"
//               style={inputStyle}
//               onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
//               onBlur={(e) => Object.assign(e.target.style, inputStyle)}
//             />
//             <br />
//             <Button 
//               onClick={handleDoneClick} 
//               colorScheme='blue' 
//               style={{ 
//                 marginLeft: '10px', 
//                 padding: '8px 16px',
//                 borderRadius: '5px',
//                 boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
//                 backgroundColor: '#00aaff',
//                 color: 'white',
//                 fontWeight: 'bold',
//                 cursor: 'pointer'
              
//               }}
//               disabled={timeInput <= 0 || timeInput > 24 || notificationLimit <= 0}
//             >
//               Done
//             </Button>
//             {notificationMessage && (
//               <p style={{ 
//                   marginTop: '20px', 
//                   fontWeight: 'bold', 
//                   color: '#0077cc', 
//                   textAlign: 'center' 
//                 }}
//               >
//                 {notificationMessage}
//               </p>
//             )}
//           </div>
//         </div>
//         <div style={{ 
//             flex: '0 0 200px', 
//             display: 'flex', 
//             justifyContent: 'center', 
//             alignItems: 'center', 
//             padding: '10px',
//           }}>
//           <img 
//             src='https://png.pngtree.com/png-vector/20220819/ourmid/pngtree-drink-more-water-quote-flat-design-vector-care-illustration-cute-vector-png-image_48180268.jpg' 
//             width="290px" 
//             height="290px" 
//             alt="Drink More Water"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };







// import React, { useState, useEffect, useRef } from 'react';
// import { Button } from '@chakra-ui/react';
// import Navbar from '../nav/nav';

// export const WaterReminder = () => {
//   const [progress, setProgress] = useState(0);
//   const [timeInput, setTimeInput] = useState(1); // Overall time limit in hours
//   const [notificationLimit, setNotificationLimit] = useState(1); // Time limit for notifications in minutes
//   const [notificationMessage, setNotificationMessage] = useState(''); // Message to display after Done is clicked
//   const [notificationsActive, setNotificationsActive] = useState(false); // Track if notifications are active
//   const intervalRef = useRef(null);
//   const totalClicksRef = useRef(0); // Track the number of times the user clicks "Accept"
//   const totalTimeRef = useRef(0); // Track the total time in milliseconds

//   // Request notification permission on component mount
//   useEffect(() => {
//     if ('Notification' in window && Notification.permission !== 'granted') {
//       Notification.requestPermission();
//     }
//     return () => clearInterval(intervalRef.current); // Cleanup on unmount
//   }, []);

//   const handleTimeLimitChange = (e) => {
//     const newTimeInput = parseFloat(e.target.value);
//     if (!isNaN(newTimeInput) && newTimeInput > 0 && newTimeInput <= 24) {
//       setTimeInput(newTimeInput);
//     }
//   };

//   const handleNotificationLimitChange = (e) => {
//     const newNotificationLimit = parseFloat(e.target.value);
//     if (!isNaN(newNotificationLimit) && newNotificationLimit > 0) {
//       setNotificationLimit(newNotificationLimit);
//     }
//   };

//   const handleDoneClick = () => {
//     if (timeInput > 0 && timeInput <= 24 && notificationLimit > 0) {
//       setProgress(0);
//       totalTimeRef.current = timeInput * 60 * 60 * 1000; // Convert time limit to milliseconds
//       totalClicksRef.current = totalTimeRef.current / (notificationLimit * 60 * 1000); // Total required clicks to fill up
//       startReminder();
//       setNotificationsActive(true);
//       setNotificationMessage(`You will receive notifications every ${notificationLimit} minutes for the next ${timeInput} hours.`);
//     }
//   };

//   const startReminder = () => {
//     intervalRef.current = setInterval(() => {
//       if (Notification.permission === 'granted') {
//         navigator.serviceWorker.getRegistration().then((registration) => {
//           registration.showNotification('Time to drink water!', {
//             body: 'It’s time to stay hydrated!',
//             icon: 'https://img.icons8.com/ios/50/000000/water.png',
//             actions: [
//               { action: 'accept', title: 'Accept' },
//               { action: 'decline', title: 'Decline' }
//             ]
//           });
//         });
//       } else {
//         alert('Time to drink water!');
//         handleWaterLevelIncrease();
//       }
//     }, notificationLimit * 60 * 1000); // Interval in milliseconds
//   };

//   const handleWaterLevelIncrease = () => {
//     setProgress((prevProgress) => {
//       const increment = 100 / totalClicksRef.current; // Calculate the increment for each notification
//       const newProgress = prevProgress + increment;
//       if (newProgress >= 100) {
//         clearInterval(intervalRef.current);
//         return 100; // Ensure progress doesn't exceed 100%
//       }
//       return newProgress;
//     });
//   };

//   const stopNotifications = () => {
//     clearInterval(intervalRef.current);
//     setNotificationsActive(false);
//     setNotificationMessage('Notifications have been stopped.');
//   };

//   useEffect(() => {
//     const handleMessage = (event) => {
//       if (event.data && event.data.action === 'accept') {
//         handleWaterLevelIncrease();
//       }
//     };

//     navigator.serviceWorker.addEventListener('message', handleMessage);

//     return () => {
       
//       navigator.serviceWorker.removeEventListener('message', handleMessage);
//     };
//   }, []);
//   <Navbar/>
//   const inputStyle = {
//     padding: '12px 24px',
//     margin: '12px 24px',
//     width: '50%',
//     outline: 'none',
//     borderRadius: '5px',
//     boxShadow: '5px 5px 10px #D6D6D6, -5px -5px 10px #FFF',
//     borderColor: 'white',
//     transition: 'box-shadow 0.3s ease-in-out'
//   };

//   const inputFocusStyle = {
//     ...inputStyle,
//     boxShadow: 'inset 5px 5px 10px #D6D6D6, -5px -5px 10px #FFF',
//     borderColor: '#00aaff' // Optional: Adds a border color change on focus
//   };

//   return (
//     <div style={{ 
//         display: 'flex', 
//         justifyContent: 'center',
//         alignItems: 'center', 
//         height: '100vh',
//         padding: '20px',
//         background: 'linear-gradient(135deg, #00aaff, #0077cc)', // Shining blue gradient background
//       }}>
//       <div style={{ 
//           display: 'flex', 
//           justifyContent: 'center',
//           alignItems: 'center',
//           width: '65%', 
//           height: '60%',
//           borderRadius: '30px',
//           overflow: 'hidden',
//           boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
//           backgroundColor: 'white', // Background color inside the border box
//         }}>
//         <div style={{ 
//             flex: '0 0 150px', 
//             display: 'flex', 
//             justifyContent: 'center', 
//             alignItems: 'center', 
//             padding: '60px',
//           }}>
//           <div style={{ 
//               position: 'relative', 
//               width: '180px', 
//               height: '180px', 
//               borderRadius: '50%', 
//               border: '2px solid #00aaff', 
//               overflow: 'hidden',
//               boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//             }}>
//             <div style={{ 
//                 position: 'absolute', 
//                 bottom: 0, 
//                 width: '100%', 
//                 height: `${progress}%`, 
//                 backgroundColor: '#00aaff', 
//                 transition: 'height 0.5s ease-in-out',
//               }}>
//             </div>
//           </div>
//         </div>
//         <div style={{ 
//             flex: '1', 
//             display: 'flex', 
//             flexDirection: 'column', 
//             alignItems: 'center', 
//             justifyContent: 'center',
//             padding: '20px',
//           }}>
//           <div style={{ textAlign: 'center' }}>
//             <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Set Overall Time Limit (hours): </label>
//             <input
//               type="number"
//               value={timeInput}
//               onChange={handleTimeLimitChange}
//               min="0"
//               max="24"
//               step="0.1"
//               style={inputStyle}
//               onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
//               onBlur={(e) => Object.assign(e.target.style, inputStyle)}
//             />
//             <br />
//             <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Set Notification Interval (minutes): </label>
//             <input
//               type="number"
//               value={notificationLimit}
//               onChange={handleNotificationLimitChange}
//               min="1"
//               max="60"
//               step="1"
//               style={inputStyle}
//               onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
//               onBlur={(e) => Object.assign(e.target.style, inputStyle)}
//             />
//             <br />
//             <Button 
//               onClick={handleDoneClick} 
//               colorScheme='blue' 
//               style={{ 
//                 marginLeft: '10px', 
//                 padding: '8px 16px',
//                 borderRadius: '5px',
//                 boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
//                 backgroundColor: '#00aaff',
//                 color: 'white',
//                 fontWeight: 'bold',
//                 cursor: 'pointer'
//               }}
//               disabled={timeInput <= 0 || timeInput > 24 || notificationLimit <= 0}
//             >
//               Done
//             </Button>
//             {notificationsActive && (
//               <Button 
//                 onClick={stopNotifications} 
//                 colorScheme='red' 
//                 style={{ 
//                   marginTop: '10px',
//                   padding: '8px 16px',
//                   borderRadius: '5px',
//                   boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
//                   backgroundColor: '#ff0000',
//                   color: 'white',
//                   fontWeight: 'bold',
//                   cursor: 'pointer',
//                   position:'relative',
//                   left:'100px'
//                 }}
//               >
//                 Stop Notifications
//               </Button>
//             )}
//             {notificationMessage && (
//               <p style={{ 
//                   marginTop: '20px', 
//                   fontWeight: 'bold', 
//                   color: '#0077cc', 
//                   textAlign: 'center' 
//                 }}
//               >
//                 {notificationMessage}
//               </p>
//             )}
//           </div>
//         </div>
//         <div style={{ 
//             flex: '0 0 200px', 
//             display: 'flex', 
//             justifyContent: 'center', 
//             alignItems: 'center', 
//             padding: '10px',
//           }}>
//           <img 
//             src='https://png.pngtree.com/png-vector/20220819/ourmid/pngtree-drink-more-water-quote-flat-design-vector-care-illustration-cute-vector-png-image_48180268.jpg' 
//             width="290px" 
//             height="290px" 
//             alt="Drink More Water"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };





import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Flex, Text, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const WaterReminder = () => {
  const [progress, setProgress] = useState(0);
  const [timeInput, setTimeInput] = useState(1); // Overall time limit in hours
  const [notificationLimit, setNotificationLimit] = useState(1); // Time limit for notifications in minutes
  const [notificationMessage, setNotificationMessage] = useState(''); // Message to display after Done is clicked
  const [notificationsActive, setNotificationsActive] = useState(false); // Track if notifications are active
  const intervalRef = useRef(null);
  const totalClicksRef = useRef(0); // Track the number of times the user clicks "Accept"
  const totalTimeRef = useRef(0); // Track the total time in milliseconds

  // Request notification permission on component mount
  useEffect(() => {
    if ('Notification' in window && Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  const handleTimeLimitChange = (e) => {
    const newTimeInput = parseFloat(e.target.value);
    if (!isNaN(newTimeInput) && newTimeInput > 0 && newTimeInput <= 24) {
      setTimeInput(newTimeInput);
    }
  };

  const handleNotificationLimitChange = (e) => {
    const newNotificationLimit = parseFloat(e.target.value);
    if (!isNaN(newNotificationLimit) && newNotificationLimit > 0) {
      setNotificationLimit(newNotificationLimit);
    }
  };

  const handleDoneClick = () => {
    if (timeInput > 0 && timeInput <= 24 && notificationLimit > 0) {
      setProgress(0);
      totalTimeRef.current = timeInput * 60 * 60 * 1000; // Convert time limit to milliseconds
      totalClicksRef.current = totalTimeRef.current / (notificationLimit * 60 * 1000); // Total required clicks to fill up
      startReminder();
      setNotificationsActive(true);
      setNotificationMessage(`You will receive notifications every ${notificationLimit} minutes for the next ${timeInput} hours.`);
    }
  };

  const startReminder = () => {
    intervalRef.current = setInterval(() => {
      if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then((registration) => {
          registration.showNotification('Time to drink water!', {
            body: 'It’s time to stay hydrated!',
            icon: 'https://img.icons8.com/ios/50/000000/water.png',
            actions: [
              { action: 'accept', title: 'Accept' },
              { action: 'decline', title: 'Decline' }
            ]
          });
        });
      } else {
        alert('Time to drink water!');
        handleWaterLevelIncrease();
      }
    }, notificationLimit * 60 * 1000); // Interval in milliseconds
  };

  const handleWaterLevelIncrease = () => {
    setProgress((prevProgress) => {
      const increment = 100 / totalClicksRef.current; // Calculate the increment for each notification
      const newProgress = prevProgress + increment;
      if (newProgress >= 100) {
        clearInterval(intervalRef.current);
        return 100; // Ensure progress doesn't exceed 100%
      }
      return newProgress;
    });
  };

  const stopNotifications = () => {
    clearInterval(intervalRef.current);
    setNotificationsActive(false);
    setNotificationMessage('Notifications have been stopped.');
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.action === 'accept') {
        handleWaterLevelIncrease();
      }
    };

    navigator.serviceWorker.addEventListener('message', handleMessage);

    return () => {
      navigator.serviceWorker.removeEventListener('message', handleMessage);
    };
  }, []);

  const inputStyle = {
    padding: '12px 24px',
    margin: '12px 24px',
    width: '50%',
    outline: 'none',
    borderRadius: '5px',
    boxShadow: '5px 5px 10px #D6D6D6, -5px -5px 10px #FFF',
    borderColor: 'white',
    transition: 'box-shadow 0.3s ease-in-out'
  };

  const inputFocusStyle = {
    ...inputStyle,
    boxShadow: 'inset 5px 5px 10px #D6D6D6, -5px -5px 10px #FFF',
    borderColor: '#00aaff' // Optional: Adds a border color change on focus
  };

  return (
    <>
      <Flex 
        as="nav" 
        bg="blue.500" 
        color="white" 
        padding="1rem" 
        justifyContent="space-around" 
        alignItems="center"
      >
        <Link as={NavLink} to="/" _hover={{ textDecoration: 'none' }} fontWeight="bold" onClick={()=>{window.location.href='/circularLinks'}}>Home</Link>
        <Link as={NavLink} to="/dashboard" _hover={{ textDecoration: 'none' }} fontWeight="bold"  onClick={()=>{window.location.href='/students'}} >Dashboard</Link>
        <Link as={NavLink} to="/exercise" _hover={{ textDecoration: 'none' }} fontWeight="bold" onClick={()=>{window.location.href='/VideoDropdowns'}}>Exercise</Link>
      </Flex>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center', 
        height: '100vh',
        padding: '20px',
        background: 'linear-gradient(135deg, #00aaff, #0077cc)', // Shining blue gradient background
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          width: '65%', 
          height: '60%',
          borderRadius: '30px',
          overflow: 'hidden',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          backgroundColor: 'white', // Background color inside the border box
        }}>
          <div style={{ 
            flex: '0 0 150px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: '60px',
          }}>
            <div style={{ 
              position: 'relative', 
              width: '180px', 
              height: '180px', 
              borderRadius: '50%', 
              border: '2px solid #00aaff', 
              overflow: 'hidden',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}>
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                width: '100%', 
                height: `${progress}%`, 
                backgroundColor: '#00aaff', 
                transition: 'height 0.5s ease-in-out',
              }}>
              </div>
            </div>
          </div>
          <div style={{ 
            flex: '1', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '20px',
          }}>
            <div style={{ textAlign: 'center' }}>
              <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Set Overall Time Limit (hours): </label>
              <input
                type="number"
                value={timeInput}
                onChange={handleTimeLimitChange}
                min="0"
                max="24"
                step="0.1"
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              />
              <br />
              <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Set Notification Interval (minutes): </label>
              <input
                type="number"
                value={notificationLimit}
                onChange={handleNotificationLimitChange}
                min="1"
                max="60"
                step="1"
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              />
              <br />
              <Button 
                onClick={handleDoneClick} 
                colorScheme='blue' 
                style={{ 
                  marginLeft: '10px', 
                  padding: '8px 16px',
                  borderRadius: '5px',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#00aaff',
                  color: 'white',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                disabled={timeInput <= 0 || timeInput > 24 || notificationLimit <= 0}
              >
                Set Timer
              </Button>
              <Button
                onClick={stopNotifications}
                colorScheme='red'
                style={{
                  marginLeft: '10px',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                  backgroundColor: 'red',
                  color: 'white',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                disabled={!notificationsActive}
              >
                Stop Notifications
              </Button>
              <br />
              <Text>{notificationMessage}</Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
