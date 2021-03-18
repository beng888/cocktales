import { motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "../../styles/Navigation.module.css";
import { useQuery } from "react-query";

const Navigation: React.FC = ({ children }) => {
  // const [menu, cycleMenu] = useCycle({ x: 0 }, { x: "-100%" });
  // const [menuList, cycleMenuList] = useCycle({ x: "-100%" }, { x: 0 });

  // const openMenu = () => {
  //   cycleMenu();
  //   cycleMenuList();
  // };

  const { isLoading, error, data, isFetching } = useQuery("articles", () =>
    fetch("https://dev.to/api/articles").then((res) => res.json())
  );

  console.log(data);

  const [open, setOpen] = useState(false);

  const menu =
    "w-screen duration-1000 ease-out transform bg-white border-8 border-black pointer-events-auto";

  return (
    <div
      onBlur={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      tabIndex={0}
      className="fixed inset-0 z-50 inline-flex transform translate-y-full outline-none pointer-events-none sm:translate-y-0 group w-max"
    >
      <div
        className={`${styles.title} ${menu} flex items-center justify-center cursor-pointer px-2 text-3xl font-semibold h-fit sm:h-full sm:w-max hover:bg-opacity-70 -translate-y-full sm:translate-y-0 group-focus:translate-y-0 sm:group-focus:-translate-x-full sm:group-focus:-translate-y-0`}
      >
        MENU
      </div>
      <div
        className={`absolute grid h-screen gap-6 px-2 text-3xl font-semibold outline-none ${menu} sm:-translate-x-full sm:translate-y-0 sm:w-40 place-content-center group-focus:translate-x-0 group-focus:-translate-y-full sm:group-focus:translate-y-0`}
      >
        <div
          tabIndex={0}
          className="absolute outline-none cursor-pointer right-4 top-4"
        >
          X
        </div>

        {[...Array(5).keys()].map((i) => (
          <div
            tabIndex={0}
            className="duration-700 outline-none cursor-pointer"
            style={{
              transform: `${open ? "translateX(0)" : "translateX(-100vw)"}`,
              transitionDelay: `0.${i}s`,
            }}
            key={i}
          >
            LINK {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
