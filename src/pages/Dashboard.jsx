import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>Logged in as: {user.displayName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Dashboard;
