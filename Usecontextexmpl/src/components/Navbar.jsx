import {useContext} from 'react';
import  { AuthContext } from './AuthProvider';


const Navbar = () => {
    const {isLoggedIn, login, logout}= useContext(AuthContext);
  return (
    <nav className="bg-red-400 border-amber-300 border-dotted flex content-center">
      <h1 className='text-2xl pr-10 text-white'>My App</h1>
      {isLoggedIn ? (
        <button onClick={logout} className='text-xl text-white hover:text-purple-950'>Logout</button>
      ):(
        <button onClick={login} className='text-xl text-white hover:text-purple-950'>Login</button>
      )}
    </nav>
  );
};

export default Navbar;
