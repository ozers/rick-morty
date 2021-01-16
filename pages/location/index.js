import Layout from "../../components/Layout";
import unfetch from "isomorphic-unfetch";
import Link from "next/link";

function Location({ locations }) {
  return (
    <Layout>
      <h1>Locations</h1>
      <ul>
        {locations.results.map(location => (
          <li key={location.id}>
            <Link href={{
              pathname: "/location/[slug]",
              query: { slug: location.id }
            }}>
              <a>{location.name}</a>
            </Link>
          </li>
        ))}
      </ul>

    </Layout>
  );
}

export async function getStaticProps() {
  const data = await unfetch("https://rickandmortyapi.com/api/location/");
  const locations = await data.json();

  return {
    props: {
      locations
    }
  };
}

export default Location;
