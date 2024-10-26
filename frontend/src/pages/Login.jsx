import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { post } from '../services/ApiEndpoint.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { SetUser } from '../redux/AuthSlice.jsx';
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import google from '../assets/google.webp';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await post('/api/auth/login', { email, password });

      if (response.data.success) {
        dispatch(SetUser(response.data.user));
        navigate(response.data.user.role === 'admin' ? '/admin' : '/');
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
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 h-full hidden md:flex items-center justify-center p-4">
          <img
            src="https://img.freepik.com/free-photo/pharmacist-day-celebration-with-male-pharmacist_23-2151734676.jpg?uid=R134683763&ga=GA1.1.934354926.1706193621&semt=ais_hybrid"
            alt="Login Illustration"
            className="object-cover"
          />
        </div>

        {/* Right Side: Login Form */}
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
      <Footer /> {/* Add the Footer here */}

    </div>
  );
};

export default Login;











// <div className="min-h-screen  w-full flex justify-center items-center">
// <div className="flex max-w-7xl w-full mx-auto ">
  
//   {/* Left Side: Image */}
//   <div className="w-1/2 h-full hidden md:block">
//     <img
//       src="https://static.wixstatic.com/media/11062b_45d355cbe6d940bd82c1a65aa99c383b~mv2.jpg/v1/fill/w_560,h_700,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Interior%20of%20Pharmacy.jpg"
//       alt="Login Illustration"
//       className="object-cover w-full h-full"
//     />
//   </div>

//   {/* Right Side: Login Form */}
//   <div className="w-full md:w-1/2  flex flex-col justify-center px-16 py-12">
//     <h2 className="text-4xl font-bold text-center text-[#0EBBC6] mb-6">
//       <span className="block text-gray-600">Welcome Back!</span>
//       <span className="block mt-2 text-sm text-gray-500 animate-bounce">
//         We're glad to see you again!
//       </span>
//     </h2>

//     <h2 className="text-3xl font-semibold text-gray-800 mb-4">Log in</h2>
//     <p className="text-gray-600 mb-8">
//       Don't have an account?{' '}
//       <Link to="/register" className="text-blue-500 hover:underline">
//         Sign Up
//       </Link>
//     </p>

//     <form onSubmit={handleLogin}>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//         />
//       </div>

//       <div className="mb-4 relative">
//         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//           Password
//         </label>
//         <input
//           type={showPassword ? 'text' : 'password'}
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//         />
//         <div
//           className="absolute right-3 top-10 cursor-pointer"
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ? (
//             <AiFillEyeInvisible className="text-gray-500" />
//           ) : (
//             <AiFillEye className="text-gray-500" />
//           )}
//         </div>
//       </div>

//       <div className="flex items-center justify-between mb-6">
//         <label className="flex items-center">
//           <input type="checkbox" className="form-checkbox" />
//           <span className="ml-2 text-sm text-gray-600">Keep me logged in</span>
//         </label>
//         <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
//           Forget Password?
//         </Link>
//       </div>

//       <button
//         type="submit"
//         className="w-full py-3 bg-[#0EBBC6] text-white rounded-lg shadow-md hover:bg-[#0cb0b8] transition-colors"
//       >
//         Sign in
//       </button>

//       <div className="mt-6 text-left text-sm text-gray-500">Or sign in with</div>
//       <div className="mt-4 flex justify-center space-x-4">
//         <button
//           type="button"
//           className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg"
//         >
//           <img src={google} alt="Google" className="w-6 h-6 mr-2" />
//           Google
//         </button>
//         <button
//           type="button"
//           className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg"
//         >
//           <img src={facebook} alt="Facebook" className="w-6 h-6 mr-2" />
//           Facebook
//         </button>
//       </div>
//     </form>
//   </div>
// </div>
// </div>