import Layout from "../../components/Layout";
import unfetch from "isomorphic-unfetch";
import Link from 'next/link'

function Episode({ episodes }) {
  return (
    <Layout>
      <h1>Episodes</h1>
      <ul>
        {episodes.results.map(episode => (
          <li key={episode.id}>
            <Link href={{
              pathname: "/episode/[slug]",
              query: { slug: episode.id }
            }}>
              <a>{episode.name}</a>
            </Link>
          </li>
        ))}
      </ul>

    </Layout>
  );
}

export async function getStaticProps() {
  const data = await unfetch("https://rickandmortyapi.com/api/episode/");
  const episodes = await data.json();

  return {
    props: {
      episodes
    }
  };
}

export default Episode;
