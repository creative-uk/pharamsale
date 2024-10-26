import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Logout } from '../redux/AuthSlice.jsx';
import { delet, get, post } from '../services/ApiEndpoint';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
  const [users, setUsers] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const GetUsers = async () => {
      try {
        const request = await get('/api/admin/getuser');
        const respnse = request.data;
        if (request.status === 200) {
          setUsers(respnse.users);
        }
      } catch (error) {
        console.log(error);
      }
    };
    GetUsers();
  }, []);

  const handleDelet = async (id) => {
    try {
      const request = await delet(`/api/admin/deleteuser/${id}`);
      if (request.status === 200) {
        toast.success('User deleted successfully'); // Show success toast
        setUsers(users.filter((user) => user._id !== id)); // Remove deleted user from the state
      }
    } catch (error) {
      toast.error('Failed to delete user'); // Show error toast
      console.log('Error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await post('/api/auth/logout');
      if (response.status === 200) {
        dispatch(Logout()); // Clear user data from Redux
        navigate('/login'); // Redirect to login page
        toast.info('Logged out successfully'); // Show info toast
      }
    } catch (error) {
      toast.error('Failed to logout'); // Show error toast
      console.log(error);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <ToastContainer /> {/* Toast container to display toasts */}
      <h1>Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Logout
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((elem, index) => (
              <tr key={index}>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>{elem.role}</td>
                <td>
                  <button onClick={() => handleDelet(elem._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
