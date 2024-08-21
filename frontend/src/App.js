// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignupPage } from './component/signin/signin';
import { SignInPage } from './component/signin/signup';
import ForgotPasswordPage from './component/signin/forgot';
import { UsersData } from './component/students/students';
import Dashboard from './component/dashboard/dashboard';
import { WaterReminder } from './component/wateremainder/wateremainder';
import CalorieTracker from './component/calorie/calorie';
// import CalorieBurner from './component/burn/burn';
import { SleepReminder } from './component/sleep/sleep';
import Navbar from './component/nav/nav';
import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


import { VideoDropdowns } from './component/videodrop/pro';
import { Fullbody } from './component/videodrop/Fullbody';
import { Upperbody } from './component/videodrop/Upperbody';
import { Lowerbody } from './component/videodrop/Lowerbody';
import { Dance } from './component/videodrop/Dance';
import { CircleLinks } from './component/videodrop/Home';
import { HomePage } from './component/videodrop/welcome';
import BasicUsage from './component/modal/modal';
import SubscriptionDetails from './component/modal/select';
import SubscriptionAnnual from './component/modal/Annual';
import PaymentPage from './component/videodrop/payment';
import PaymentProcessingBox from './component/videodrop/process';
import PaymentCompleteBox from './component/videodrop/complete';




function App() {

  const test = sessionStorage?.auth && JSON.parse(sessionStorage?.auth).Email
  // Register the service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
  }



  return (
    <>
      {/* <Events />
      <Personal/>
      <Hobbies/>
      <Skills/>
      <Prop/> */}
      {/* <SignupPage /> */}
      {/* <SignInPage/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot" element={<ForgotPasswordPage />} />
          <Route path="/students" element={<Dashboard />} />
          {/* <Route path="/students" element={<Dashboard/>}/> */}
          <Route path="/water" element={<WaterReminder />} />
          <Route path="/calorie" element={<CalorieTracker />} />
          {/* <Route path='/burn'element={< CalorieBurner/>}/> */}
          <Route path='/sleep' element={<SleepReminder />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path="/VideoDropdowns" element={< VideoDropdowns />} />
          <Route path="/Fullbody" element={< Fullbody />} />
          <Route path="/Upperbody" element={< Upperbody />} />
          <Route path='/Lowerbody' element={<Lowerbody />} />
          <Route path='/Dance' element={<Dance />} />
          <Route path='/circularLinks' element={<CircleLinks />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/BasicUsage' element={<BasicUsage />} />
          <Route path='/SubscriptionDetails' element={<SubscriptionDetails />} />
          <Route path='/SubscriptionAnnual' element={<SubscriptionAnnual />} />
          <Route path='/PaymentPage' element={<PaymentPage />} />
          <Route path='/PaymentProcessingBox' element={<PaymentProcessingBox />} />
          <Route path='/PaymentCompleteBox' element={<PaymentCompleteBox />} />
          {/* <Route path="/" element={<CalorieTracker />} />
          <Route path="/progress" element={<Progress />} /> */}
          <Route path='/data' element={<UsersData />} />
        </Routes>
      </BrowserRouter>
      {/* <SignupPage/> */}
      {/* <ForgotPasswordPage/> */}
    </>

  );
}

export default App;



