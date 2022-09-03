import { useContext, useState } from "react";
import { Auth } from "aws-amplify";
import { AppContext } from "../lib/app-context";
import { useNavigate, useLocation } from "react-router-dom";
import { onError } from "../lib/error";

export const Login = () => {
  const { state } = useLocation();

  const [email, setEmail] = useState(state?.email ?? "");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const { setIsAuthenticated } = useContext(AppContext);

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await Auth.signIn(email, password);
            setIsAuthenticated(true);
            nav("/");
          } catch (e) {
            onError(e);
          }
        }}
        className="flex flex-col items-stretch gap-y-3 mt-4"
      >
        <label>
          <div>Email</div>
          <input
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            style={{
              width: "100%",
              padding: 8,
              marginTop: 4,
              boxSizing: "border-box",
            }}
          />
        </label>
        <label>
          <div>Password</div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            style={{
              width: "100%",
              padding: 8,
              marginTop: 4,
              boxSizing: "border-box",
            }}
          />
        </label>
        <button className="border-2 w-full p-2 mt-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
