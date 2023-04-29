import React from "react";
import axios from "axios";
import Element from "./components/Element";
import ElementsGrid from "./components/ElementsGrid";

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
      <ElementsGrid>
        {elements.map((element, index) => (
          <Element key={index} element={element} />
        ))}
      </ElementsGrid>
    </>
  );
}

export default App;
