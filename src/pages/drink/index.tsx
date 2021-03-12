import { useLoaded } from "../../helpers";

interface Props {
  data: {
    idIngredient: string;
    strDescription: string;
    strIngredient: string;
    strType: string;
  };
}

const Drink_Page: React.FC<Props> = ({ data }) => {
  const { idIngredient, strDescription, strIngredient, strType } = data;
  return (
    <div className="flex px-16">
      <div className="grid justify-around">
        <p className="text-5xl">{strIngredient}</p>
        <p>{strDescription}</p>
      </div>
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient.replace(
          " ",
          "%20"
        )}.png`}
        alt={strIngredient}
        className="float-right max-h-screen"
      />
    </div>
  );
};

export default Drink_Page;
