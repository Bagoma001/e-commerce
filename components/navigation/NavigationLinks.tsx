"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface navigationProp {
  href: string;
  children: ReactNode;
}

const NavigationLinks = ({ href, children }: navigationProp) => {
  const path = usePathname();

  return (
    <ul className="list list-type">
      <li className="nav-list">
        <Link href={href} className={path.endsWith(href) ? "active" : ""}>
          {children}
        </Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
