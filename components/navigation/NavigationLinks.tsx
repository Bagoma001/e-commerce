"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface navigationProp {
  href: string;
  children: ReactNode;
}

const NavigationLinks: React.FC<navigationProp> = ({ href, children }) => {
  const path = usePathname();

  return (
    <ul className="nav-list-container">
      <li className="nav-list">
        <Link href={href} className={path.endsWith(href) ? "active" : ""}>
          {children}
        </Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
