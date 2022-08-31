import { useEffect, useState } from "react";
import { AppContext } from "./lib/app-context";
import { R } from "./routes/index";
import { BrowserRouter } from "react-router-dom";
import { Auth } from "aws-amplify";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      setIsAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  return (
    <div>
      {isAuthenticating ? (
        "Loading..."
      ) : (
        <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          <BrowserRouter>
            <R />
          </BrowserRouter>
        </AppContext.Provider>
      )}
    </div>
  );
}

export default App;
