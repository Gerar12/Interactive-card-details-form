import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" flex flex-col lg:flex-row justify-center items-center mt-5 lg:m-0 lg:justify-between">
      {children}
    </div>
  );
};

export default Layout;
