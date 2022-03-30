import { useState } from "react";
import BlogList from "../components/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Breaking news", body: "lorem ipsum...", author: "Bruce", id: 1 },
    { title: "Hello there!", body: "lorem ipsum...", author: "Hill", id: 2 },
    { title: "Web fantasy", body: "lorem ipsum...", author: "Bruce", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      {/* "props" sent from parent to child (blogs, title, handleDelete) */}
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
