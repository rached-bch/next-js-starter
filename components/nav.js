import Link from "next/link";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a className="nav-item">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className="nav-item">About</a>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
