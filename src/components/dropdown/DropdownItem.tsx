import { ReactNode } from "react";

export default function DropdownItem({ children }: { children: ReactNode }) {
  return (
    <li
      className="w-full py-1  transition-colors hover:bg-good-links-blue 
    hover:text-white px-4 rounded-sm
    "
    >
      {children}
    </li>
  );
}
