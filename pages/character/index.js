import Layout from "../../components/Layout";
import unfetch from "isomorphic-unfetch";
import Link from 'next/link'

function Character({ characters }) {
  return (
    <Layout>
      <h1>Characters</h1>
      <ul>
        {characters.results.map(character => (
          <li key={character.id}>
            <Link href={{
              pathname: "/character/[slug]",
              query: { slug: character.id }
            }}>
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>

    </Layout>
  );
}

export async function getStaticProps() {
  const data = await unfetch("https://rickandmortyapi.com/api/character/");
  const characters = await data.json();
  // console.log(character.results);
  return {
    props: {
      characters
    }
  };
}

export default Character;
