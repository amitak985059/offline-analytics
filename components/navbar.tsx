"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className=" px-6 py-4 shadow-md flex gap-6 border-b-2">
      {navItems.map(({ name, path }) => (
        <Link
          key={name}
          href={path}
          className={pathname === path ? "text-blue-600 font-semibold" : ""}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
