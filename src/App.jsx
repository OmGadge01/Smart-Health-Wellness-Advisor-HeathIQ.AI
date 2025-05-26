import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Userform from "./frontend/Landing page/Userform"
import Hero_section from './frontend/Landing page/hero_section';
import Navbar from './frontend/Landing page/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<Userform />} />
      </Routes>
    </div>
  );
}

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/form');
  };

  return <Hero_section onGetStarted={handleGetStarted} />;
}

export default App;
