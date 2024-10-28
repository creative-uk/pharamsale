import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { post } from '../services/ApiEndpoint.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { SetUser } from '../redux/AuthSlice.jsx';
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import google from '../assets/google.webp';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Header from './Header.jsx';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.Auth.user); // Get the user state from Redux

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Check if the user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/'); // Redirect to home page if user is logged in
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await post('/api/auth/login', { email, password });

      if (response.data.success) {
        dispatch(SetUser(response.data.user));
        navigate(response.data.user.role === 'admin' ? '/admin' : '/'); // Redirect based on role
        toast.success('Login successful!');
      } else {
        setError(response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div>
       <Header />
      <div className="flex min-h-screen">
        <div className="w-full md:w-1/2 h-full hidden md:flex items-center justify-center p-4">
          <img
            src="https://img.freepik.com/free-photo/pharmacist-day-celebration-with-male-pharmacist_23-2151734676.jpg?uid=R134683763&ga=GA1.1.934354926.1706193621&semt=ais_hybrid"
            alt="Login Illustration"
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-5/12 flex flex-col justify-center px-6 md:px-12 py-4">
          <h2 className="text-4xl font-bold text-center text-[#0EBBC6] mb-4">
            <span className="block text-gray-600">Welcome Back!</span>
            <span className="block mt-1 text-sm text-gray-500 animate-bounce">
              We're glad to see you again!
            </span>
          </h2>

          <h2 className="text-3xl font-semibold text-gray-800 mb-3">Log in</h2>
          <p className="text-gray-600 mb-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="mb-3 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <div
                className="absolute right-3 top-9 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="text-gray-500" />
                ) : (
                  <AiFillEye className="text-gray-500" />
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm text-gray-600">Keep me logged in</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
                Forget Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0EBBC6] text-white rounded-lg shadow-md hover:bg-[#0cb0b8] transition-colors"
            >
              Sign in
            </button>

            <div className="mt-4 text-left text-sm text-gray-500">Or sign in with</div>
            <div className="mt-3 flex justify-center space-x-3">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg"
              >
                <img src={google} alt="Google" className="w-6 h-6 mr-2" />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg"
              >
                <img src={facebook} alt="Facebook" className="w-6 h-6 mr-2" />
                Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
