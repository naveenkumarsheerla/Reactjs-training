import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.items);
        setPost(data.items);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <table cellPadding="2" cellSpacing="2" border="2">
        <thead>
          <tr>
            <th>Name</th>
            <th>relasedate</th>
            <th>Hit</th>
          </tr>
        </thead>
        <tbody>
          {post.map((each, index) => {
            return (
              <tr key={index}>
                <td>{each.name}</td>
                <td>{each.relase}</td>
                <td>{each.hit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
