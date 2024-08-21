

// // import React, { useState, useEffect, useRef } from 'react';
// // import { background, Box, Button, Text } from '@chakra-ui/react';

// // export const SleepReminder = () => {
// //   const [hours, setHours] = useState('');
// //   const [minutes, setMinutes] = useState('');
// //   const [seconds, setSeconds] = useState('');
// //   const [timeRemaining, setTimeRemaining] = useState(null);
// //   const timerRef = useRef(null);
// //   const beepRef = useRef(null);

// //   useEffect(() => {
// //     if ('Notification' in window && Notification.permission !== 'granted') {
// //       Notification.requestPermission();
// //     }
// //   }, []);

// //   const handleSetTimerClick = () => {
// //     const totalSeconds =
// //       parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
// //     if (!isNaN(totalSeconds) && totalSeconds > 0) {
// //       setTimeRemaining(totalSeconds);
// //     }
// //   };

// //   useEffect(() => {
// //     if (timeRemaining > 0) {
// //       timerRef.current = setInterval(() => {
// //         setTimeRemaining((prev) => prev - 1);
// //       }, 1000);
// //     } else if (timeRemaining === 0) {
// //       clearInterval(timerRef.current);
// //       if (beepRef.current) {
// //         beepRef.current.play();
// //       }
// //       if (window.navigator && window.navigator.vibrate) {
// //         window.navigator.vibrate([200, 100, 200]);
// //       }
// //       if (Notification.permission === 'granted') {
// //         navigator.serviceWorker.getRegistration().then((registration) => {
// //           registration.showNotification('Time to sleep!', {
// //             body: 'Your sleep timer has finished!',
// //             icon: 'https://img.icons8.com/doodle/48/000000/bed.png',
// //             actions: [
// //               { action: 'accept', title: 'Accept' },
// //               { action: 'decline', title: 'Decline' }
// //             ]
// //           });
// //         });
// //       } else {
// //         alert('Time to sleep!');
// //       }
// //     }

// //     return () => clearInterval(timerRef.current);
// //   }, [timeRemaining]);

// //   const formatTime = (time) => time.toString().padStart(2, '0');

// //   const inputStyle = {
// //     padding: '12px 24px',
// //     margin: '12px 24px',
// //     width: '80px', // Increased width
// //     outline: 'none',
// //     borderRadius: '5px',
// //     boxShadow: '5px 5px 10px #D6D6D6, -5px -5px 10px #FFF',
// //     borderColor: 'white',
// //   };

// //   const inputFocusStyle = {
// //     boxShadow: 'inset 5px 5px 10px #D6D6D6, -5px -5px 10px #FFF',
// //   };
  

// //   return (
   
// //     <Box
// //       display="flex"
// //       flexDirection="column"
// //     //   justifyContent="center"
// //     //   alignItems="center"
// // // backgroundColor="gray" 
// //       height="50vh"
// //       backgroundColor="#f0f4f8"
// //       border="1px solid #dcdcdc"
// //       borderRadius="8px"
// //       padding="60px"
// //       boxShadow="0 4px 8px rgba(0,0,0,0.1)"
// //       maxWidth="1000px"
// //       margin="0 auto"
// //     //   textAlign="center"
// //       marginTop="10%"
// //       position={"relative"}
// //       left={"20px"}
// //      // marginLeft={"200px"}
// //     >
// //       <Text
// //         fontSize="3xl"
// //         fontWeight="bold"
// //         fontFamily="'Times New Roman', serif"
// //         mb="4"
// //         position={"relative"}
// //         left={"100px"}
// //       >
// //         Sleep Reminder
// //       </Text>
// //       <Box mb="4" display="flex" gap="10px">
// //         <input
// //           placeholder="HH"
// //           value={hours}
// //           onChange={(e) => setHours(e.target.value)}
// //           style={inputStyle}
// //           onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
// //           onBlur={(e) => Object.assign(e.target.style, inputStyle)}
// //         />
// //         <input
// //           placeholder="MM"
// //           value={minutes}
// //           onChange={(e) => setMinutes(e.target.value)}
// //           style={inputStyle}
// //           onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
// //           onBlur={(e) => Object.assign(e.target.style, inputStyle)}
// //         />
// //         <input
// //           placeholder="SS"
// //           value={seconds}
// //           onChange={(e) => setSeconds(e.target.value)}
// //           style={inputStyle}
// //           onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
// //           onBlur={(e) => Object.assign(e.target.style, inputStyle)}
// //         />
// //       </Box>
// //       <Button  width={"100px"} height={"40px"} onClick={handleSetTimerClick} position={"relative"} left={"150px"} colorScheme="blue">
// //         Set Timer
// //       </Button>

// //       {timeRemaining !== null && (
// //         <Box mt="8">
// //           <Text fontSize="xl" position={"relative"} left={"130px"} >Time Remaining:</Text>
// //           <Text fontSize="3xl" fontWeight="bold" position={"relative"} left={"140px"} >
// //             {`${formatTime(Math.floor(timeRemaining / 3600))}:${formatTime(
// //               Math.floor((timeRemaining % 3600) / 60)
// //             )}:${formatTime(timeRemaining % 60)}`}
// //           </Text>
// //         </Box>
// //       )}

// //       {/* Hidden audio element for beep sound */}
// //       <audio ref={beepRef}>
// //         <source src="https://www.soundjay.com/button/beep-07.wav" type="audio/wav" />
// //       </audio>
// //     </Box>
// //   );
// // };



// // import React, { useState, useEffect, useRef } from 'react';
// // import { Box, Button, Text,Img} from '@chakra-ui/react';


// // export const SleepReminder = () => {
// //   const [hours, setHours] = useState('');
// //   const [minutes, setMinutes] = useState('');
// //   const [seconds, setSeconds] = useState('');
// //   const [timeRemaining, setTimeRemaining] = useState(null);
// //   const timerRef = useRef(null);
// //   const beepRef = useRef(null);

// //   useEffect(() => {
// //     if ('Notification' in window && Notification.permission !== 'granted') {
// //       Notification.requestPermission();
// //     }
// //   }, []);

// //   const handleSetTimerClick = () => {
// //     const totalSeconds =
// //       parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
// //     if (!isNaN(totalSeconds) && totalSeconds > 0) {
// //       setTimeRemaining(totalSeconds);
// //     }
// //   };

// //   useEffect(() => {
// //     if (timeRemaining > 0) {
// //       timerRef.current = setInterval(() => {
// //         setTimeRemaining((prev) => prev - 1);
// //       }, 1000);
// //     } else if (timeRemaining === 0) {
// //       clearInterval(timerRef.current);
// //       if (beepRef.current) {
// //         beepRef.current.play();
// //       }
// //       if (window.navigator && window.navigator.vibrate) {
// //         window.navigator.vibrate([200, 100, 200]);
// //       }
// //       if (Notification.permission === 'granted') {
// //         navigator.serviceWorker.getRegistration().then((registration) => {
// //           registration.showNotification('Time to sleep!', {
// //             body: 'Your sleep timer has finished!',
// //             icon: 'https://img.icons8.com/doodle/48/000000/bed.png',
// //             actions: [
// //               { action: 'accept', title: 'Accept' },
// //               { action: 'decline', title: 'Decline' }
// //             ]
// //           });
// //         });
// //       } else {
// //         alert('Time to sleep!');
// //       }
// //     }

// //     return () => clearInterval(timerRef.current);
// //   }, [timeRemaining]);

// //   const formatTime = (time) => time.toString().padStart(2, '0');

// //   const inputStyle = {
// //     padding: '12px 24px',
// //     margin: '12px 24px',
// //     width: '80px',
// //     outline: 'none',
// //     borderRadius: '5px',
// //     boxShadow: '5px 5px 10px #D6D6D6, -5px -5px 10px #FFF',
// //     borderColor: 'white',
// //   };

// //   const inputFocusStyle = {
// //     boxShadow: 'inset 5px 5px 10px #D6D6D6, -5px -5px 10px #FFF',
// //   };

// //   return (
// //     <Box backgroundColor="gray.200" minHeight="100vh" padding="20px">
// //         <Img src='sll.jpg' height="280px" width="320px" position={"relative"} overflow={"hidden"}left={"600px"} top={"300px"}></Img>
// //       <Box
// //         display="flex"
// //         flexDirection="column"
// //         height="50vh"
// //         backgroundColor="#f0f4f8"
// //         border="1px solid #dcdcdc"
// //         borderRadius="8px"
// //         padding="60px"
// //         boxShadow="0 4px 8px rgba(0,0,0,0.1)"
// //         maxWidth="1000px"
// //         margin="0 auto"
// //         marginTop="10%"
// //         position={"relative"}
// //         left={"20px"}
        
// //       >
// //         <Text
// //           fontSize="3xl"
// //           fontWeight="bold"
// //           fontFamily="'Times New Roman', serif"
// //           mb="4"
// //           position={"relative"}
// //           left={"100px"}
// //         >
// //           Sleep Reminder
// //         </Text>
// //         <Box mb="4" display="flex" gap="10px">
// //           <input
// //             placeholder="HH"
// //             value={hours}
// //             onChange={(e) => setHours(e.target.value)}
// //             style={inputStyle}
// //             onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
// //             onBlur={(e) => Object.assign(e.target.style, inputStyle)}
// //           />
// //           <input
// //             placeholder="MM"
// //             value={minutes}
// //             onChange={(e) => setMinutes(e.target.value)}
// //             style={inputStyle}
// //             onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
// //             onBlur={(e) => Object.assign(e.target.style, inputStyle)}
// //           />
// //           <input
// //             placeholder="SS"
// //             value={seconds}
// //             onChange={(e) => setSeconds(e.target.value)}
// //             style={inputStyle}
// //             onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
// //             onBlur={(e) => Object.assign(e.target.style, inputStyle)}
// //           />
// //         </Box>
// //         <Button
// //           width={"100px"}
// //           height={"40px"}
// //           onClick={handleSetTimerClick}
// //           position={"relative"}
// //           left={"150px"}
// //           colorScheme="blue"
// //         >
// //           Set Timer
// //         </Button>

// //         {timeRemaining !== null && (
// //           <Box mt="8">
// //             <Text fontSize="xl" position={"relative"} left={"130px"}>
// //               Time Remaining:
// //             </Text>
// //             <Text fontSize="3xl" fontWeight="bold" position={"relative"} left={"140px"}>
// //               {`${formatTime(Math.floor(timeRemaining / 3600))}:${formatTime(
// //                 Math.floor((timeRemaining % 3600) / 60)
// //               )}:${formatTime(timeRemaining % 60)}`}
// //             </Text>
// //           </Box>
// //         )}

// //         {/* Hidden audio element for beep sound */}
// //         <audio ref={beepRef}>
// //           <source src="https://www.soundjay.com/button/beep-07.wav" type="audio/wav" />
// //         </audio>
// //       </Box>
// //     </Box>
// //   );
// // };




// import React, { useState, useEffect, useRef } from 'react';
// import { Box, Button, Text, Img } from '@chakra-ui/react';

// export const SleepReminder = () => {
//   const [hours, setHours] = useState('');
//   const [minutes, setMinutes] = useState('');
//   const [seconds, setSeconds] = useState('');
//   const [timeRemaining, setTimeRemaining] = useState(null);
//   const timerRef = useRef(null);
//   const beepRef = useRef(null);

//   useEffect(() => {
//     if ('Notification' in window && Notification.permission !== 'granted') {
//       Notification.requestPermission();
//     }
//   }, []);

//   const handleSetTimerClick = () => {
//     const totalSeconds =
//       parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
//     if (!isNaN(totalSeconds) && totalSeconds > 0) {
//       setTimeRemaining(totalSeconds);
//     }
//   };

//   useEffect(() => {
//     if (timeRemaining > 0) {
//       timerRef.current = setInterval(() => {
//         setTimeRemaining((prev) => prev - 1);
//       }, 1000);
//     } else if (timeRemaining === 0) {
//       clearInterval(timerRef.current);
//       if (beepRef.current) {
//         beepRef.current.play();
//       }
//       if (window.navigator && window.navigator.vibrate) {
//         window.navigator.vibrate([200, 100, 200]);
//       }
//       if (Notification.permission === 'granted') {
//         navigator.serviceWorker.getRegistration().then((registration) => {
//           registration.showNotification('Time to sleep!', {
//             body: 'Your sleep timer has finished!',
//             icon: 'https://img.icons8.com/doodle/48/000000/bed.png',
//             actions: [
//               { action: 'accept', title: 'Accept' },
//               { action: 'decline', title: 'Decline' }
//             ]
//           });
//         });
//       } else {
//         alert('Time to sleep!');
//       }
//     }

//     return () => clearInterval(timerRef.current);
//   }, [timeRemaining]);

//   const formatTime = (time) => time.toString().padStart(2, '0');

//   const inputStyle = {
//     padding: '12px 24px',
//     margin: '12px 24px',
//     width: '80px',
//     outline: 'none',
//     borderRadius: '5px',
//     boxShadow: '5px 5px 10px #D6D6D6, -5px -5px 10px #FFF',
//     borderColor: 'white',
//   };

//   const inputFocusStyle = {
//     boxShadow: 'inset 5px 5px 10px #D6D6D6, -5px -5px 10px #FFF',
//   };

//   return (
//     <Box backgroundColor="gray.200" minHeight="100vh" padding="20px">
//       <Box
//         display="flex"
//         flexDirection="row"
//         height="50vh"
//         backgroundColor="white" // Adjusted background color to match the image tone
//         border="1px solid #dcdcdc"
//         borderRadius="8px"
//         padding="60px"
//         boxShadow="0 4px 8px rgba(0,0,0,0.1)"
//         maxWidth="1000px"
//         margin="0 auto"
//         marginTop="10%"
//         position="relative"
//       >
//         <Box flex="1" position="relative" paddingRight="20px">
//           <Text
//             fontSize="3xl"
//             fontWeight="bold"
//             fontFamily="'Times New Roman', serif"
//             mb="4"
//             position={"absolute"} left={"100px"} top={"-40px"}
//           >
//             Sleep Reminder
//           </Text>
//           <Box mb="4" display="flex" gap="10px">
//             <input
//               placeholder="HH"
//               value={hours}
//               onChange={(e) => setHours(e.target.value)}
//               style={inputStyle}
//               onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
//               onBlur={(e) => Object.assign(e.target.style, inputStyle)}
//             />
//             <input
//               placeholder="MM"
//               value={minutes}
//               onChange={(e) => setMinutes(e.target.value)}
//               style={inputStyle}
//               onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
//               onBlur={(e) => Object.assign(e.target.style, inputStyle)}
//             />
//             <input
//               placeholder="SS"
//               value={seconds}
//               onChange={(e) => setSeconds(e.target.value)}
//               style={inputStyle}
//               onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
//               onBlur={(e) => Object.assign(e.target.style, inputStyle)}
//             />
//           </Box>
//           <Button
//             width="100px"
//             height="40px"
//             onClick={handleSetTimerClick}
//             colorScheme="blue"
//             position={"absolute"} left={"150px"}
//           >
//             Set Timer
//           </Button>

//           {timeRemaining !== null && (
//             <Box mt="8">
//               <Text fontSize="xl"  position={"absolute"} left={"130px"} top={"150px"}>Time Remaining:</Text>
//               <Text fontSize="3xl" fontWeight="bold"  position={"absolute"} left={"140px"} top={"180px"}>
//                 {`${formatTime(Math.floor(timeRemaining / 3600))}:${formatTime(
//                   Math.floor((timeRemaining % 3600) / 60)
//                 )}:${formatTime(timeRemaining % 60)}`}
//               </Text>
//             </Box>
//           )}
//         </Box>
        
//         {/* Image aligned to the right inside the box */}
//         <Box flex="1" display="flex" justifyContent="center" alignItems="center">
//           <Img
//             src="sll.jpg"
//             height="280px"
//             width="320px"
//             borderRadius="8px"
//           />
//         </Box>

//         {/* Hidden audio element for beep sound */}
//         <audio ref={beepRef}>
//           <source src="https://www.soundjay.com/button/beep-07.wav" type="audio/wav" />
//         </audio>
//       </Box>
//     </Box>
//   );
// };




import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Text, Img } from '@chakra-ui/react';

// Navbar Component
const Navbar = () => (
  <Box
    as="nav"
    backgroundColor="black"
    color="white"
    padding="10px"
    position="fixed"
    top="0"
    width="100%"
    zIndex="1000"
    boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
  >
    <Box display="flex" justifyContent="space-around" maxWidth="1200px" margin="0 auto">
      <Button colorScheme="whiteAlpha" variant="link" color={"white"} onClick={()=>{window.location.href='/circularLinks'}} >Home</Button>
      <Button colorScheme="whiteAlpha" variant="link"  color={"white"} onClick={()=>{window.location.href='/students'}}  >Dashboard</Button>
      <Button colorScheme="whiteAlpha" variant="link" color={"white"} onClick={()=>{window.location.href='/VideoDropdowns'}}  >Exercises</Button>
    </Box>
  </Box>
);

export const SleepReminder = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(null);
  const timerRef = useRef(null);
  const beepRef = useRef(null);

  useEffect(() => {
    if ('Notification' in window && Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  const handleSetTimerClick = () => {
    const totalSeconds =
      parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    if (!isNaN(totalSeconds) && totalSeconds > 0) {
      setTimeRemaining(totalSeconds);
    }
  };

  useEffect(() => {
    if (timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      clearInterval(timerRef.current);
      if (beepRef.current) {
        beepRef.current.play();
      }
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate([200, 100, 200]);
      }
      if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then((registration) => {
          registration.showNotification('Time to sleep!', {
            body: 'Your sleep timer has finished!',
            icon: 'https://img.icons8.com/doodle/48/000000/bed.png',
            actions: [
              { action: 'accept', title: 'Accept' },
              { action: 'decline', title: 'Decline' }
            ]
          });
        });
      } else {
        alert('Time to sleep!');
      }
    }

    return () => clearInterval(timerRef.current);
  }, [timeRemaining]);

  const formatTime = (time) => time.toString().padStart(2, '0');

  const inputStyle = {
    padding: '12px 24px',
    margin: '12px 24px',
    width: '80px',
    outline: 'none',
    borderRadius: '5px',
    boxShadow: '5px 5px 10px #D6D6D6, -5px -5px 10px #FFF',
    borderColor: 'white',
  };

  const inputFocusStyle = {
    boxShadow: 'inset 5px 5px 10px #D6D6D6, -5px -5px 10px #FFF',
  };

  return (
    <Box>
      <Navbar />
      <Box backgroundColor="gray.200" minHeight="100vh" padding="20px" paddingTop="60px">
        <Box
          display="flex"
          flexDirection="row"
          height="50vh"
          backgroundColor="white" 
          border="1px solid #dcdcdc"
          borderRadius="8px"
          padding="60px"
          boxShadow="0 4px 8px rgba(0,0,0,0.1)"
          maxWidth="1000px"
          margin="0 auto"
          marginTop="10%"
          position="relative"
        >
          <Box flex="1" position="relative" paddingRight="20px">
            <Text
              fontSize="3xl"
              fontWeight="bold"
              fontFamily="'Times New Roman', serif"
              mb="4"
              position={"absolute"} left={"100px"} top={"-40px"}
            >
              Sleep Reminder
            </Text>
            <Box mb="4" display="flex" gap="10px">
              <input
                placeholder="HH"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              />
              <input
                placeholder="MM"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              />
              <input
                placeholder="SS"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              />
            </Box>
            <Button
              width="100px"
              height="40px"
              onClick={handleSetTimerClick}
              colorScheme="blue"
              position={"absolute"} left={"150px"}
            >
              Set Timer
            </Button>

            {timeRemaining !== null && (
              <Box mt="8">
                <Text fontSize="xl"  position={"absolute"} left={"130px"} top={"150px"}>Time Remaining:</Text>
                <Text fontSize="3xl" fontWeight="bold"  position={"absolute"} left={"140px"} top={"180px"}>
                  {`${formatTime(Math.floor(timeRemaining / 3600))}:${formatTime(
                    Math.floor((timeRemaining % 3600) / 60)
                  )}:${formatTime(timeRemaining % 60)}`}
                </Text>
              </Box>
            )}
          </Box>
          
        
          <Box flex="1" display="flex" justifyContent="center" alignItems="center">
            <Img
              src="sll.jpg"
              height="280px"
              width="320px"
              borderRadius="8px"
            />
          </Box>

        
          <audio ref={beepRef}>
            <source src="https://www.soundjay.com/button/beep-07.wav" type="audio/wav" />
          </audio>
        </Box>
      </Box>
    </Box>
  );
};
