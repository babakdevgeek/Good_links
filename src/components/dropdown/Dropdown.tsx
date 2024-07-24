import { ReactNode } from "react";
import UIProvider from "../../providers/UIProvider";

type Props = {
  children: ReactNode;
};

export default function Dropdown({ children }: Props) {
  return (
    <UIProvider>
      <div className="relative w-full">{children}</div>
    </UIProvider>
  );
}
