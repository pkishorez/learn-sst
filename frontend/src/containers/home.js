import { Auth } from "aws-amplify";
import { useContext } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { AppContext } from "../lib/app-context";
import { Login } from "./login";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-5 max-w-2xl mx-auto bg-white">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            element={
              <>
                <h1>Scratch</h1>
                <p>A simple note taking app.</p>
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext);
  const nav = useNavigate();

  return (
    <div className="flex bg-teal-700 p-5 text-white">
      <h1>
        <Link to="/">Scratch</Link>
      </h1>
      <div style={{ flexGrow: 1 }} />
      {isAuthenticated ? (
        <button
          onClick={() => {
            Auth.signOut();
            setIsAuthenticated(false);
            nav("/login");
          }}
        >
          Logout
        </button>
      ) : (
        <div className="flex gap-x-2">
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};
