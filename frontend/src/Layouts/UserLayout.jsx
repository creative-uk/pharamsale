import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserLayout = () => {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "user") {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default UserLayout;
