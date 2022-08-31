import { Navbar } from "./navbar";

export const Home = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="p-5 max-w-2xl mx-auto bg-white">{children}</div>
    </div>
  );
};
