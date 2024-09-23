import { ReactNode } from "react";
import React from "react";

interface propType {
  children: ReactNode;
}

const Background: React.FC<propType> = ({ children }) => {
  return <div className="background">{children}</div>;
};

export default Background;
