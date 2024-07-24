import clsx from "clsx";
import { ReactNode } from "react";
import useUiContext from "../../hooks/useUiContext";
import { motion } from "framer-motion";
type Props = {
  position?: "top" | "left" | "right" | "bottom";
  children: ReactNode;
};

export default function DropdownMenu({ children }: Props) {
  const { open } = useUiContext();
  return (
    <>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={clsx(
            "absolute  bg-[#333] top-[130%] md:mt-4  border-t-good-links-blue -left-[10%] right-auto backdrop-blur-3xl z-10 md:static   text-right   md:right-0 mx-auto"
          )}
        >
          <ul className="px-4 py-2  flex flex-col gap-2">{children}</ul>
        </motion.div>
      )}
    </>
  );
}
