import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { post } from '../services/ApiEndpoint.jsx';
import 'react-toastify/dist/ReactToastify.css';
import facebook from '../assets/facebook.png';
import google from '../assets/google.webp';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleForgetPassword = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);

    try {
      const response = await post('/api/auth/forget-password', formData);

      if (response.data.success) {
        toast.success('Password reset email sent!');
        navigate('/login');
      } else {
        setError(response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      toast.error('Failed to send password reset email. Please try again.');
    }
  };

  return (
    <div>
      <Header />

      <div className="flex min-h-screen">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 h-full hidden md:flex items-center justify-center p-4">
          <img
            src="https://img.freepik.com/free-photo/high-angle-doctor-holding-pills-hand_23-2148533485.jpg?uid=R134683763&ga=GA1.1.934354926.1706193621&semt=ais_hybrid"
            alt="Forget Password Illustration"
            className="object-cover"
          />
        </div>

        {/* Right Side: Forget Password Form */}
        <div className="w-full md:w-5/12 flex flex-col justify-center px-6 md:px-12 py-4">
          
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">Forget Password</h2>
          <p className="text-gray-600 mb-6">
            Remembered your password?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>

          <form onSubmit={handleForgetPassword}>
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

            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 bg-[#0EBBC6] text-white rounded-lg shadow-md hover:bg-[#0cb0b8] transition-colors"
            >
              Send Reset Link
            </button>

            <div className="mt-4 text-left text-sm text-gray-500">Or reset with</div>
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
      <Footer/>
    </div>
  );
};

export default ForgetPassword;
