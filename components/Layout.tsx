import React from "react";
import Navbar from "@components/Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <footer>This is the layout</footer>
    </div>
  );
};

export default Layout;
