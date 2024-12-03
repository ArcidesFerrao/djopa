"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function Nav({ children }: { children: ReactNode }) {
  return <nav className="nav-bar">{children}</nav>;
}

export function NavLink({ ...props }) {
  const currentPath = usePathname();

  return (
    <Link
      href={props.href}
      className={`nav-link ${currentPath === props.href ? "active" : " "} `}
    >
      {props.children}
    </Link>
  );
}

export const NavButton = () => {
  return (
    <div className="nav-menu">
      <button>
        <span className="line-md--close-to-menu-transition"></span>
      </button>
    </div>
  );
};
