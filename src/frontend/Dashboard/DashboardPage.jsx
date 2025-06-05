// frontend/Dashboard/DashboardPage.jsx
import React from 'react';
import Navbar from './DashboardNavbar';  // relative import from same folder
import HomePage from './Homepage';

const DashboardPage = () => {
  return (
    <div>
      <Navbar />
      <HomePage/>
    </div>
  );
};

export default DashboardPage;
