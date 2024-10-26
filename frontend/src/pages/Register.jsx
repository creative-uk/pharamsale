import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { post } from '../services/ApiEndpoint.jsx';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [userType, setUserType] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      toast.error("Passwords don't match.");
      return;
    }

    const formData = {
      name,
      email,
      password,
      userType,
    };

    try {
      const response = await post('/api/auth/register', formData);
      if (response.data.success) {
        toast.success('Registration successful!');
        navigate('/');
      } else {
        setError(response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <Header />

      <div className="flex min-h-screen">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 h-full hidden md:flex items-center justify-center p-4">
          <img
            src="https://img.freepik.com/free-photo/man-working-as-pharmacist_23-2151734589.jpg?uid=R134683763&ga=GA1.1.934354926.1706193621&semt=ais_hybrid"
            alt="Register Illustration"
            className="object-cover"
          />
        </div>

        {/* Right Side: Register Form */}
        <div className="w-full md:w-5/12 flex flex-col justify-center px-6 md:px-12 py-4">
          <h2 className="text-4xl font-bold text-center text-[#0EBBC6] mb-4">
            <span className="block text-gray-600">Welcome to PHARMSALE!</span>
            <span className="block mt-1 text-sm text-gray-500 animate-bounce">
              Register your Account!
            </span>
          </h2>

          <h2 className="text-3xl font-semibold text-gray-800 mb-3">Sign Up</h2>
          <p className="text-gray-600 mb-6">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>

          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <p className="block text-sm font-medium text-gray-700">Are you?</p>
              <div className="flex space-x-4 mb-4">
                <button
                  type="button"
                  onClick={() => setUserType('Buyer')}
                  className={`flex-1 py-2 border border-gray-300 rounded-lg ${userType === 'Buyer' ? 'bg-[#0EBBC6] text-white' : 'text-gray-700'}`}
                >
                  Buyer
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('Seller')}
                  className={`flex-1 py-2 border border-gray-300 rounded-lg ${userType === 'Seller' ? 'bg-[#0EBBC6] text-white' : 'text-gray-700'}`}
                >
                  Seller
                </button>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
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
                {showPassword ? <AiFillEyeInvisible className="text-gray-500" /> : <AiFillEye className="text-gray-500" />}
              </div>
            </div>

            <div className="mb-3 relative">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <div
                className="absolute right-3 top-9 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <AiFillEyeInvisible className="text-gray-500" /> : <AiFillEye className="text-gray-500" />}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0EBBC6] text-white rounded-lg shadow-md hover:bg-[#0cb0b8] transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
