const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>React Blog</h1>
      <div className="links">
        <a
          href="/"
        >
          Home
        </a>
        <a
          href="/create"
          // style={{
          //   color: "white",
          //   backgroundColor: "#1E88E5",
          //   borderRadius: "4px",
          //   fontWeight: "bold",
          // }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
