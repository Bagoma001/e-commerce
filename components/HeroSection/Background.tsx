import { ReactNode } from "react";
import React from "react";

interface propType {
  children: ReactNode;
}

const Background = ({ children }: propType) => {
  return <div className="background-alice">{children}</div>;
};

export default Background;
