import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('login') === 'success') {
      toast.success('Successfully logged in!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      navigate('/feedback');
    }
  }, [location, navigate]);

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8800/auth/google';
  };

  return (
    <div className="flex-1 w-full min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      <div className="w-full h-full flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md bg-purple-50 p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <h2 className="text-4xl font-bold text-purple-900 mb-4">
              Welcome Back
            </h2>
            <p className="text-lg text-purple-700">
              Share your valuable feedback with us
            </p>
          </div>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex justify-center items-center gap-4 py-3 px-6 rounded-lg shadow-md text-white bg-purple-700 border-2 border-purple-800 hover:bg-purple-600 transition-all transform hover:scale-105"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-6 h-6"
            />
            <span className="text-lg font-medium">
              Continue with Google
            </span>
          </button>
        </div>

        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ),
              title: 'Track Your History',
              description: 'Keep all your feedback in one place and access it anytime for easy reference.',
              color: 'bg-purple-50'
            },
            {
              icon: (
                <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              ),
              title: 'Get Notifications',
              description: 'Stay informed with updates about the latest features and improvements.',
              color: 'bg-purple-100'
            },
            {
              icon: (
                <svg className="w-8 h-8 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: 'Exclusive Access',
              description: 'Participate in surveys and enjoy early access to upcoming features.',
              color: 'bg-purple-200'
            }
          ].map((feature, index) => (
            <div key={index} className={`${feature.color} p-6 rounded-xl shadow-lg transition-all transform hover:scale-105`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white shadow">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-purple-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-purple-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Login;
