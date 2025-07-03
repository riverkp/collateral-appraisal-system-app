import { Link } from 'react-router-dom';
import { useAuthStore } from '@features/auth/store';

function Header() {
  const { user, logout } = useAuthStore();

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Collateral Appraisal System
        </Link>

        <nav className="flex items-center gap-4">
          {user ? (
            <>
              <span className="hidden md:inline">Welcome, {user.name}</span>
              <button onClick={logout} className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
