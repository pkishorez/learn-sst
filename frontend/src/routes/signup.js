import { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  return (
    <div>
      <h1>Sign Up</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await Auth.signUp({
              username: email,
              password: password,
            });
            nav(`/confirm-user/${email}`);
          } catch (e) {
            alert(e.message);
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
          Signup
        </button>
      </form>
    </div>
  );
};
