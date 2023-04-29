import React from "react";
import axios from "axios";

function App() {
  const [elements, setElements] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("data/data.json");
      const data = response.data;
      setElements(data.elements);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Periodic Table of Elements</h1>
      <ul>
        {elements.map((element) => (
          // @ts-ignore
          <li key={element.number}>{element.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
