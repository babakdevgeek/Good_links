import { createContext, ReactNode, useState } from "react";
export type Ui = {
  dropdownOpen: boolean;
  dropdownSetOpen: () => void;
};
export const UiContext = createContext<Ui>({
  dropdownOpen: false,
  dropdownSetOpen: () => {},
});

export default function UIProvider({ children }: { children: ReactNode }) {
  const [dropdownOpen, setOpen] = useState(false);
  function dropdownSetOpen() {
    setOpen(!dropdownOpen);
  }
  return (
    <UiContext.Provider value={{ dropdownOpen, dropdownSetOpen }}>
      {children}
    </UiContext.Provider>
  );
}
