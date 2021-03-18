import { useLoaded } from "../../helpers";
import { useAppContext, randomColor } from "../../context/state";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Svg_1 from "./Svg_1";
import Svg_2 from "./Svg_2";

interface drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

interface Props {
  details: {
    idIngredient: string;
    strDescription: string;
    strIngredient: string;
    strType: string;
  };
  list: drink[];
}

const Drink_Page: React.FC<Props> = ({ details, list }) => {
  const { idIngredient, strDescription, strIngredient, strType } = details;
  const { wave, setWave } = useAppContext();
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(randomColor());
    setWave({ ...wave, fill: false });
  }, []);

  console.log(list);

  async function fetchDrink() {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`
    );
    const data = await response.json();
    return data;
  }

  // const {
  //   data: { idDrink, strImageSource, strDrink },
  //   isLoading,
  //   error,
  // } = useQuery("drink", fetchDrink, {
  //   select: (drink) => drink.drinks[0],
  // });

  const { data: drink, isLoading, error, status } = useQuery(
    "drink",
    fetchDrink,
    {
      select: (drink) => drink.drinks[0],
    }
  );

  console.log(status);
  // var key = "Geeksforgeeks";
  // var object = {};
  // object[key] = "something";
  // console.log(object);

  let strDrink = "strDrink";

  return (
    <div className="max-h-screen overflow-x-hidden border-8 border-black max-w-screen">
      <div
        style={{
          backgroundColor: `${wave.color ? wave.color : color}`,
          display: "flow-root",
        }}
      >
        <div className="flex flex-col px-4 pt-4 text-center transform sm:px-0 sm:translate-x-1/10 sm:block">
          <img
            src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient.replace(
              " ",
              "%20"
            )}.png`}
            alt={strIngredient}
            className="relative float-right object-contain max-h-screen pointer-events-none select-none"
            style={{
              shapeOutside: `url(https://www.thecocktaildb.com/images/ingredients/${strIngredient.replace(
                " ",
                "%20"
              )}.png)`,
              shapeMargin: "0.2rem",
            }}
          />
          <p className="mb-8 text-5xl">{strIngredient}</p>
          <p className="sm:max-w-80%">{strDescription}</p>
        </div>
      </div>
      <Svg_1 color={wave.color ? wave.color : color} title="MIXES" />
      <div className="flex flex-wrap justify-around sm:pl-14">
        {list?.map((l) => (
          <div
            key={l.idDrink}
            className="relative max-w-max"
            style={{
              minWidth: "120px",
              flex: "1 1 120px",
            }}
          >
            <img
              src={`${l.strDrinkThumb}/preview`}
              alt={l.strDrink}
              className="w-full border border-yellow-500"
            />
            <div className="absolute inset-0 pl-1 bg-gradient-to-t from-gray-900 via-transparent">
              <p className="absolute bottom-0 text-sm text-yellow-300">
                {l.strDrink}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Svg_2 color={wave.color ? wave.color : color} />
      <div
        className="grid w-full min-h-screen grid-cols-2 sm:px-15"
        style={{ backgroundColor: `${wave.color ? wave.color : color}` }}
      >
        {status === "loading" ? (
          <div>loading</div>
        ) : status === "error" ? (
          <div>error</div>
        ) : (
          <>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <div className="grid text-center">
              <p className="text-2xl">{drink.strDrink}</p>
              <div>
                <p>INGREDIENTS</p>
                {/* {[...Array(15).keys()].map((i) => (
                  <div>{drink[strDrink]}</div>
                ))} */}
                {drink[strDrink]}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Drink_Page;
