import { Auth } from "aws-amplify";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../lib/app-context";

export const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext);
  const nav = useNavigate();

  return (
    <div className="flex bg-teal-700 p-5 text-white">
      <h1>
        <Link to="/">Scratch</Link>
      </h1>
      <div style={{ flexGrow: 1 }} />
      <div className="flex items-center divide-x-2 [&>*]:px-4">
        {isAuthenticated ? (
          <>
            <Link to="/notes/new">New Note</Link>
            <Link to="/notes/list">Notes</Link>

            <button
              onClick={() => {
                Auth.signOut();
                setIsAuthenticated(false);
                nav("/login");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </div>
  );
};
