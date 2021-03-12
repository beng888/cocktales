import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLoaded } from "../../helpers";
import Curtain from "./Curtain";
import { useAppContext, randomColor } from "../../context/state";
import { useRouter } from "next/router";

interface Props {
  data: Array<any>;
}

export const Home_Page: React.FC<Props> = ({ data }) => {
  const loaded = useLoaded();
  const shuffled = data.sort(() => 0.5 - Math.random());
  const [width, setWidth] = useState(null);
  const { wave, setWave } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const changeRoute = (slug) => {
    setWave({ ...wave, color: randomColor(), fill: true });
    setTimeout(() => {
      router.push("/drinks/" + slug);
      setWave({ ...wave, fill: false });
    }, 2000);
  };

  return (
    <div className="w-full h-full max-h-screen overflow-hidden max-w-screen">
      {/* <Curtain /> */}
      <motion.div
        animate={{ backgroundPositionY: "800vh" }}
        transition={{
          duration: 800,
          ease: "linear",
          repeat: Infinity,
        }}
        className="w-full h-screen bg-bottom bg-repeat-y bg-cover"
        style={{
          backgroundImage:
            "url(https://cdn.wallpapersafari.com/22/25/716IG4.jpg)",
        }}
      />

      {loaded &&
        shuffled.map((d, i) => {
          const slug = d.strIngredient.replace(" ", "%20");
          return (
            <motion.img
              onClick={() => changeRoute(slug)}
              initial={{
                left: `${Math.random() * (85 - -5) + -5}%`,
                y: width > 480 ? "-350px" : "-100",
                rotate: Math.random() * (-360 - 360) + 360,
              }}
              animate={{
                y: "100vh",
                rotate: Math.random() * (-180 - 180) + 180,
              }}
              transition={{
                duration: Math.random() * (50 - 70) + 70,
                delay: i * 3,
                ease: "circOut",
                repeatDelay: data.length,
                repeat: Infinity,
              }}
              key={i}
              src={`https://www.thecocktaildb.com/images/ingredients/${slug}-${
                width > 480 ? "Medium" : "Small"
              }.png`}
              className="absolute top-0 cursor-pointer hover:opacity-90"
            />
          );
        })}
    </div>
  );
};

export default Home_Page;
