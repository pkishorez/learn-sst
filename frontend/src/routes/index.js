import { Home } from "./components/home";
import { Route, Routes } from "react-router-dom";
import { Login } from "./login";
import { Signup } from "./signup";
import { ConfirmUser } from "./confirm-user";
import { NewNote } from "./notes/new";
import { NotesList } from "./notes/list";

export const R = () => {
  return (
    <Home>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/confirm-user/:email" element={<ConfirmUser />} />
        <Route path="/notes/list" element={<NotesList />} />
        <Route path="/notes/new" element={<NewNote />} />
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
