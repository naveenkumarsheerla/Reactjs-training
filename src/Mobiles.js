import { useEffect, useState } from "react";

function Mobile() {
  const [post, setPost] = useState([]);

  let urlLink = "http://localhost:4000/mobile";

  const fetchData = async (getUrl) => {
    try {
      const response = await fetch(getUrl);
      const Data = await response.json();
      console.log(Data.mobiles);
      setPost(Data.mobiles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(urlLink);
  }, []);

  //   useEffect(() => {
  //     fetch("http://localhost:4000/mobile")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data.mobiles);
  //         setPost(data.mobiles);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }, []);

  return (
    <div className="App">
      <table cellPadding="2" cellSpacing="2" border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>MobileName</th>
            <th>Price</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {post.map((each, index) => {
            return (
              <tr key={index}>
                <td>{each.id}</td>
                <td>{each.name}</td>
                <td>{each.price}</td>
                <td>{each.rank}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Mobile;
