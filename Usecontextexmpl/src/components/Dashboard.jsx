import {useContext} from 'react';
import { AuthContext } from './AuthProvider';
const Dashboard = () => {
    const {isLoggedIn}=useContext(AuthContext);
  return (
    <div>
      <h2>Dashboard</h2>
      {isLoggedIn? <p>Welcome, User!</p>: <p>Please login first</p>}
    </div>
  );
};

export default Dashboard;
