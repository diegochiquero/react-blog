import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>React Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          // style={{
          //   color: "white",
          //   backgroundColor: "#1E88E5",
          //   borderRadius: "4px",
          //   fontWeight: "bold",
          // }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
