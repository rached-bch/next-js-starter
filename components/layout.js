import Nav from "./nav";
import "../styles/main.css";

const Layout = props => {
  return (
    <div>
      <Nav></Nav>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Layout;
