import Nav from "./nav";
import Head from "next/head";
import "bootstrap-scss/bootstrap.scss";
import "../styles/sass/app.scss";

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Next app</title>
        <meta
          name="description"
          content="Description of the next application..."
        />
      </Head>
      <Nav></Nav>
      <div className="page-content">{props.children}</div>
    </div>
  );
};

export default Layout;
