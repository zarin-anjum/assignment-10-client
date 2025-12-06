import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="navbar bg-green-900/80 backdrop-blur-md text-white px-6 py-6 sticky top-0 z-50 shadow-lg">
      {/* Left Side - LOGO + Name */}
      <div className="flex-1 flex items-center gap-3">
        <img
          src="/assets/logo.png"
          alt="KrishiLink"
          className="w-10 h-10 rounded-full object-cover"
        />
        <Link to="/" className="text-xl font-semibold tracking-wide">
          KrishiLink
        </Link>
      </div>

      {/* Right Side - NAV LINKS */}
      <div className="flex-none hidden md:flex gap-6 items-center">
        {/* If NOT logged in */}
        {!user && (
          <>
            <Link to="/" className="hover:text-green-200">
              Home
            </Link>
            <Link to="/all-crops" className="hover:text-green-200">
              All Crops
            </Link>
            <Link to="/login" className="hover:text-green-200">
              Login
            </Link>
            <Link
              to="/register"
              className="px-3 py-1 rounded-lg bg-green-500 hover:bg-green-600 text-white"
            >
              Register
            </Link>
          </>
        )}

        {/* If LOGGED IN */}
        {user && (
          <>
            <Link to="/" className="hover:text-green-200">
              Home
            </Link>
            <Link to="/all-crops" className="hover:text-green-200">
              All Crops
            </Link>
            <Link to="/profile" className="hover:text-green-200">
              Profile
            </Link>
            <Link to="/add-crop" className="hover:text-green-200">
              Add Crops
            </Link>
            <Link to="/my-posts" className="hover:text-green-200">
              My Posts
            </Link>
            <Link to="/my-interests" className="hover:text-green-200">
              My Interests
            </Link>

            <button
              onClick={handleLogout}
              className="px-3 py-1 rounded-lg bg-green-500 hover:bg-green-600"
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div className="dropdown dropdown-end md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost text-white">
          ☰
        </div>

        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3 p-2 shadow bg-green-900/95 rounded-box w-52 backdrop-blur-xl"
        >
          {!user && (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/all-crops">All Crops</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}

          {user && (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/all-crops">All Crops</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/add-crop">Add Crops</Link>
              </li>
              <li>
                <Link to="/my-posts">My Posts</Link>
              </li>
              <li>
                <Link to="/my-interests">My Interests</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
