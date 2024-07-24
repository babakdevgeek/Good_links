import { useContext } from "react";
import { UiContext } from "../providers/UIProvider";

export default function useUiContext() {
  const context = useContext(UiContext);
  if (!context) {
    throw new Error("uicontext must be used inside it's provider");
  }
  const { dropdownOpen: open, dropdownSetOpen: setOpen } = context;
  return { open, setOpen };
}
