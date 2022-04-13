import { Link } from "react-router-dom";

const NotFund = () => {
  return (
    <div className="not-fund">
      <h2>Sorry</h2>
      <p>Page not found</p>
      <Link to="/">Back to home page</Link>
    </div>
  );
};

export default NotFund;
