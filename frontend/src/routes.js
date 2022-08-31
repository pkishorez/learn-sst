import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./containers/home";

export const Routes = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};
