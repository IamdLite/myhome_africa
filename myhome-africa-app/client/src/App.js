import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("/members")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  // Display the names of the countries
  return (
    <div>
      <h1>MyHome Africa</h1>

      {typeof data.members === "undefined" ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{member[0]["altSpellings"][2]}</p>
        ))
      )}
    </div>
  );
}

export default App;
