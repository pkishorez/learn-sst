import { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate, useParams } from "react-router-dom";

export const ConfirmUser = () => {
  const [code, setCode] = useState("");
  const nav = useNavigate();
  const { email } = useParams();

  return (
    <div>
      <h1>Confirm User</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            await Auth.confirmSignUp(email, code);
            nav("/login", { state: { email } });
          } catch (err) {
            alert(err.message);
          }
        }}
        className="flex flex-col items-stretch gap-y-3 mt-4"
      >
        <label>
          <div>Confirmation Code</div>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="password"
            className="w-full p-2 mt-2 box-border"
          />
        </label>
        <button className="border-2 w-full p-2 mt-2" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
};
