import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext'; 

// --- Import all pages ---
import LandingPage from './pages/LandingPage';
import RiskCheck from './pages/RiskCheck';
import ClinicLocator from './pages/ClinicLocator';
import Progress from './pages/Progress';
import Login from './pages/Login';
import Register from './pages/Register';
import SessionDetails from './pages/SessionDetails';
import SavingsGoal from './pages/SavingsGoal';

import './app.css';

// --- Navbar Component ---
const Navbar = () => {
  const { authState, logout } = useAuth();

  const handleLogout = () => {
    logout();
    alert('You have been logged out.');
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
      <Link to="/" className="text-2xl font-bold text-teal-600">Smart Health</Link>

      <div className="flex space-x-6 items-center">
        <Link to="/risk-check" className="text-gray-700 hover:text-teal-600 font-medium">Risk Check</Link>
        <Link to="/clinic-locator" className="text-gray-700 hover:text-teal-600 font-medium">Find Clinics</Link>
        <Link to="/savings-goal" className="text-gray-900 hover:text-teal-600 font-medium">Savings Goal</Link>

        {authState.isAuthenticated ? (
          <>
            <Link to="/progress" className="text-gray-700 hover:text-teal-600 font-medium">Progress</Link>
            <button 
              onClick={handleLogout} 
              className="text-red-600 hover:text-red-800 font-medium transition duration-150 p-2"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-700 hover:text-teal-600 font-medium border-r pr-6">Login</Link>
            <Link to="/register" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 font-medium">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

// --- App Component ---
function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App font-sans bg-gray-50 min-h-screen">
          <Navbar />

          <main className="p-4 sm:p-8">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/risk-check" element={<RiskCheck />} />
              <Route path="/clinic-locator" element={<ClinicLocator />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/session/:id" element={<SessionDetails />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/savings-goal" element={<SavingsGoal />} />
              <Route path="*" element={<div className="p-16 text-center text-2xl text-gray-700">404 - Page Not Found</div>} />
            </Routes>
          </main>

          <footer className="w-full bg-gray-200 p-4 text-center text-sm text-gray-600 mt-8">
            <p>&copy; 2025 Smart Health Initiative. All rights reserved.</p>
          </footer>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
