import Link from "next/link";
import Navigation from "./navigation";
import Head from "next/head";

function Layout({children}) {
  return (
    <div>
    <Navigation/>
    <Head>
      <title>Rick&Morty</title>
    </Head>
    <main>
      {children}
    </main>
    </div>
  );
}

export default Layout
