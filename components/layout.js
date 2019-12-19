import Nav from "./nav";

const Layout = props => {
  return (
    <div>
      <Nav></Nav>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Layout;
