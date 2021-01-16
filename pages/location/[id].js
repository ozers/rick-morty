import Layout from "../../components/Layout";
import unfetch from "isomorphic-unfetch";

function Location({ location }) {
  return (
    <Layout>
      <h1>Locations</h1>
      <a>{location.name}</a>
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await unfetch("https://rickandmortyapi.com/api/location/");
  const locations = await data.json();

  const paths = locations.results.map(location => ({
      params: { id: location.id.toString() }
    }
  ));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const data = await unfetch(`https://rickandmortyapi.com/api/location/${params.id}`);
  const location = await data.json();

  return {
    props: {
      location
    }
  };
}

export default Location;
