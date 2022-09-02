import { Home } from "./components/home";
import { Route, Routes } from "react-router-dom";
import { Login } from "./login";
import { Signup } from "./signup";
import { ConfirmUser } from "./confirm-user";
import { NewNote } from "./notes/new";
import { NotesList } from "./notes/list";
import { ProtectedRoute } from "./components/protected-route";
import { PublicRoute } from "./components/public-route";

export const R = () => {
  return (
    <Home>
      <Routes>
        <Route
          path="/notes/list"
          element={
            <ProtectedRoute>
              <NotesList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notes/new"
          element={
            <ProtectedRoute>
              <NewNote />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/confirm-user/:email"
          element={
            <PublicRoute>
              <ConfirmUser />
            </PublicRoute>
          }
        />

        <Route
          path="*"
          element={
            <>
              <h1>Scratch</h1>
              <p>A simple note taking app.</p>
            </>
          }
        />
      </Routes>
    </Home>
  );
};
