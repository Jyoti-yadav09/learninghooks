import {useContext} from 'react';
import  { AuthContext } from './AuthProvider';
const Navbar = () => {
    const {isLoggedIn, login, logout}= useContext(AuthContext);
  return (
    <nav>
      <h1>My App</h1>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ):(
        <button onClick={login}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;
