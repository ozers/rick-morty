import Link from "next/link";

function Navigation() {
  return (
    <div>
      <Link href="/">
        <a>Home Page</a>
      </Link>
      <Link href={"/character"}>
        <a>Character</a>
      </Link>
      <Link href={"/location"}>
        <a>Location</a>
      </Link>
      <Link href={"/episode"}>
        <a>Episode</a>
      </Link>
      <Link href={"/about"}>
        <a>About</a>
      </Link>

    </div>
  );
}

export default Navigation
