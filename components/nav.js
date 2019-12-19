import Link from "next/link";

const Nav = () => {
  return (
    <div>
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
      <style jsx>{`
        ul {
          list-style: none;
        }
        li {
          display: inline-block;
        }
        .nav-item {
          background-color: black;
          color: white;
          padding: 10px;
          margin: 5px;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Nav;
