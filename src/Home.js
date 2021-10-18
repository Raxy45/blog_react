import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState();
  let [counter, setCounter] = useState(0);
  function deleteBlog(id) {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }
  // useEffect(() => {
  //   // The part in here gets executed each and
  //   // everytime anything in the component gets updated
  // Also gets called for the very first time page is loaded
  //   console.log("ran useEffect");
  // });
  // useEffect(() => {
  //   console.log("ran useeffect");
  //   console.log(counter);
  // }, [counter]);
  // here, the useffect will only update whenever a parameter passed
  // in array is updated (same as watcher)

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);
  return (
    <div className="home">
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" deleteBlog={deleteBlog} />
      )}
      <button
        onClick={() => {
          setCounter(++counter);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Home;
