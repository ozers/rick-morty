import Layout from "../../components/Layout";
import unfetch from "isomorphic-unfetch";

function Character({ character }) {
  return (
    <Layout>
      <h1>Hello Nextjs</h1>
      <div>
        {character.name}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await unfetch("https://rickandmortyapi.com/api/character/");
  const characters = await data.json();

  const paths = characters.results.map(character => ({
    params: { id: character.id.toString()}
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const data = await unfetch(`https://rickandmortyapi.com/api/character/${params.id}`);
  const character = await data.json();

  return {
    props: {
      character
    }
  };
}

export default Character;
