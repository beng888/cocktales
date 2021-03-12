import Head from "next/head";
import styles from "../styles/Home.module.css";
import Home_Page from "../src/pages/home";

export async function getStaticProps(context) {
  let urls = [];
  for (let i = 0; i < 10; i++) {
    urls.push("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=");
  }
  const response = await Promise.all(
    urls.map(async (url, i) => {
      const res = await fetch(url + i).then((resp) => resp.json());
      return res;
    })
  );

  return {
    props: {
      response: response
        .filter((j) => j.ingredients !== null)
        .map((m) => m.ingredients[0]),
      bottles: response
        .filter((j) => j.ingredients !== null)
        .map((m) => m.ingredients[0])
        .filter((j) => j.strAlcohol === "Yes"),
    },
  };
}

export default function Home({ response, bottles }) {
  console.log(response);
  return <Home_Page data={bottles} />;
}

// export default function Home() {
//   return <div>HOME</div>;
// }
