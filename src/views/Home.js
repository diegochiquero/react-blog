import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const url = "http://localhost:8000/blogs";
  const {
    datas: blogs,
    isPending,
    error,
  } = useFetch(url);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {/* "props" sent from parent to child (blogs, title) */}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {/* above code is javascript syntax that the reason why is between curly brackets*/}
    </div>
  );
};

export default Home;
