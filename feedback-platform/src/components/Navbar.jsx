import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status when component mounts
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:8800/auth/check', {
          withCredentials: true
        });
        setIsAuthenticated(response.data.authenticated);
      } catch (error) {
        console.error('Auth check failed:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const handleSignOut = async () => {
    try {
      await axios.get('http://localhost:8800/auth/logout', {
        withCredentials: true
      });
      setIsAuthenticated(false);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/feedback" className="text-gray-600 hover:text-primary transition-colors">
              Give Feedback
            </Link>
            <Link to="/display" className="text-gray-600 hover:text-primary transition-colors">
              View Feedback
            </Link>
          </div>

          {isAuthenticated ? (
            <button 
              onClick={handleSignOut}
              className="btn-primary"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/login" className="btn-primary">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
