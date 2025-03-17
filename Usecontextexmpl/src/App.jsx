import AuthProvider from './components/AuthProvider';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
const App = () => {
  return (
    <div>
      <AuthProvider>
        <Navbar/>
        <Dashboard/>
      </AuthProvider>
    </div>
  )
}

export default App;
