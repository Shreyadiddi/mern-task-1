import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >
      <h1>Data from Backend</h1>
      <h3>Total Items: {items.length}</h3>

      {items.map((item) => (
        <div
          key={item._id}
          style={{
            margin: "10px auto",
            padding: "10px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default App;