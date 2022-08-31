import { Link, Routes, Route } from "react-router-dom";
import { Login } from "./login";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: 20 }}>
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
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        columnGap: 15,
        padding: "0px 20px",
        backgroundColor: "gray",
        color: "white",
      }}
    >
      <h1>
        <Link style={{ color: "white" }} to="/">
          Scratch
        </Link>
      </h1>
      <div style={{ flexGrow: 1 }} />
      <Link style={{ color: "white" }} to="/signup">
        Signup
      </Link>
      <Link style={{ color: "white" }} to="/login">
        Login
      </Link>
    </div>
  );
};
