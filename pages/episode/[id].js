import Layout from "../../components/Layout";
import unfetch from "isomorphic-unfetch";

function Episode({ episode }) {
  return (
    <Layout>
      <h1>Hello Nextjs</h1>
      <div>
        {episode.name}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await unfetch("https://rickandmortyapi.com/api/episode/");
  const episodes = await data.json();

  const paths = episodes.results.map(episode => ({
    params: { id: episode.id.toString()}
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const data = await unfetch(`https://rickandmortyapi.com/api/episode/${params.id}`);
  const episode = await data.json();

  return {
    props: {
      episode
    }
  };
}

export default Episode;
