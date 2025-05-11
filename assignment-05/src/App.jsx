import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      {user ? (
        <>
          <Dashboard />
          <Cart />
        </>
      ) : (
        <Login />
      )}
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
