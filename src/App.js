// App.js

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Donate from './components/Donate';
import Posts from './components/Posts';
import Admin from './components/Admin';
import Detail from './components/Detail';
import ResetPasswordPage from './components/ResetPasswordPage';
import NewPasswordPage from './components/NewPasswordPage';
import NotFoundPage from './components/NotFoundPage';
import LoadingPage from './components/LoadingPage';
import Collect from './components/Collect';
import Header from './components/Header';
import Footer from './components/Footer';
import FeedbackPage from './components/FeedbackPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import ThankYou from './components/ThankYou';

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Router>
      <ConditionalWrapper />
    </Router>
  );
}

function ConditionalWrapper() {
  const location = useLocation();

  // Check if the current path is the loading page
  const isLoadingPage = location.pathname === '/loading';

  return (
    <>
      {!isLoadingPage && <Header />}
      <div className="mt-1 App">
        <Routes>
          <Route path="/" element={<Collect />} />
          <Route path="/home" element={<Collect />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/posts/:id" element={<Detail />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/new-password" element={<NewPasswordPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      {!isLoadingPage && <Footer />}
    </>
  );
}

export default App;
