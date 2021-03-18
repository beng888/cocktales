import Drink_Page from "../../src/pages/drink";
import { useRouter } from "next/router";

export async function getStaticProps(context) {
  const slug = context.params.slug.replace(" ", "%20");
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${slug}`
  );
  const data = await res.json();

  const listRes = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${slug}`
  );
  const list = await listRes.json();

  return {
    props: {
      data,
      list,
    },
  };
}

export async function getStaticPaths() {
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
    paths: response
      .filter((j) => j.ingredients !== null)
      .map((m) => {
        return {
          params: { slug: m.ingredients[0].strIngredient.toString() },
        };
      }),
    fallback: false,
  };
  [0];
}

export default function Drink({ data, list }) {
  return <Drink_Page details={data.ingredients[0]} list={list.drinks} />;
}
