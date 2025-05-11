import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { toggleTheme } = useTheme();
  const { user } = useAuth();

  return (
    <header>
      <h1>Context Demo</h1>
      {user && <p>Welcome, {user.name}</p>}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
