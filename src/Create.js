import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [posted, setPosted] = useState(false);
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    const completeBlog = {
      title,
      body,
      author,
    };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(completeBlog),
    }).then((res) => {
      if (res.ok) {
        console.log("Blog is uploaded successfully !");
        setPosted(true);
        history.push("/");
        // here history.go(-1) means will go to previous page, .go(1) next page
      }
    });
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
      {posted && <div>Blog Posted successfully!</div>}
    </div>
  );
};

export default Create;
