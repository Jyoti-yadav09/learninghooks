import {useContext} from 'react';
import { AuthContext } from './AuthProvider';
const Dashboard = () => {
    const {isLoggedIn}=useContext(AuthContext);
  return (
    <div>
      <h2 className='text-xl text-teal-600'>Dashboard</h2>
      {isLoggedIn? <p className='text-xl'>Welcome, User!</p>: <p className='text-xl text-red-600'>Please login first</p>}
    </div>
  );
};

export default Dashboard;
