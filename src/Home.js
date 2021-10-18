import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // useFetch is a custom hook and can be used as normal hook
  const {
    data: blogs,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
