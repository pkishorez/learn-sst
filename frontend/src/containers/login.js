import { useState } from "react";
import { Auth } from "aws-amplify";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ maxWidth: 300 }}>
      <h1>Login</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await Auth.signIn(email, password);
            alert("LoggedIN");
          } catch (e) {
            alert(e.message);
          }
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          rowGap: 15,
        }}
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
        <button
          type="submit"
          style={{ width: "100%", padding: 8, marginTop: 4 }}
        >
          Login
        </button>
      </form>
    </div>
  );
};
