import { motion, useCycle } from "framer-motion";
import { useState } from "react";

const Navigation: React.FC = ({ children }) => {
  const [menu, cycleMenu] = useCycle({ x: 0 }, { x: "-100%" });
  const [menuList, cycleMenuList] = useCycle({ x: "-100%" }, { x: 0 });

  const openMenu = () => {
    cycleMenu();
    cycleMenuList();
  };

  return (
    <div className="fixed left-0 z-50 inline-flex h-screen">
      <motion.div
        animate={menu}
        onTap={openMenu}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center h-full px-2 text-3xl font-semibold bg-white border-r-8 border-black cursor-pointer w-max hover:bg-opacity-70"
        style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
      >
        MENU
      </motion.div>
      <motion.div
        animate={menuList}
        transition={{ duration: 0.5 }}
        className="absolute grid w-40 h-full gap-6 px-2 text-3xl font-semibold transform -translate-x-full bg-white border-r-8 border-black place-content-center"
      >
        <motion.div
          onTap={openMenu}
          className="absolute cursor-pointer right-4 top-4"
        >
          X
        </motion.div>

        {[...Array(5).keys()].map((i) => (
          <div key={i}>LINK {i}</div>
        ))}
      </motion.div>
    </div>
  );
};

export default Navigation;
