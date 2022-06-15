import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import data from "./data.js";

function App() {
  const cardArray = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-container">{cardArray}</section>
    </div>
  );
}

export default App;
