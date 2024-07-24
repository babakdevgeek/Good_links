import { ReactNode } from "react";
import useUiContext from "../../hooks/useUiContext";
import { IoCaretDownSharp } from "react-icons/io5";
import { motion, Variants } from "framer-motion";
type Props = {
  children: ReactNode;
};
const icon: Variants = {
  open: {
    rotate: 180,
  },
  close: {
    rotate: 0,
  },
};
export default function DropdownTrigger({ children }: Props) {
  const { open, setOpen } = useUiContext();
  return (
    <div
      onClick={setOpen}
      className="flex gap-4 items-center justify-between group cursor-pointer px-4 py-1 rounded-md"
    >
      {children}
      <motion.div variants={icon} animate={open ? "open" : "close"}>
        <IoCaretDownSharp
          size={14}
          className="group-hover:text-good-links-blue transition-colors"
        />
      </motion.div>
    </div>
  );
}
