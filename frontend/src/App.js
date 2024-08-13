// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { Personal } from './component/personal/personal';
// import { Hobbies } from './component/hobbies/hobbies';
// import { Skills } from './component/skills/skills';
// import { Events } from './component/events/events';
// import { Prop } from './component/props/props';
import { SignupPage } from './component/signin/signin';
import { SignInPage } from './component/signin/signup';
import ForgotPasswordPage from './component/signin/forgot';
import { UsersData } from './component/students/students';
import Dashboard from './component/dashboard/dashboard';


function App() {

  const test = sessionStorage?.auth && JSON.parse(sessionStorage?.auth).Email

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
          <Route path="/students" element={test ? <Dashboard/> : <SignInPage />} />

        </Routes>
      </BrowserRouter>
      {/* <SignupPage/> */}
      {/* <ForgotPasswordPage/> */}
    </>

  );
}

export default App;
