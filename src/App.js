import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import data from "./data.js";

function App() {
  const cardArray = data.map((dataObject) => {
    return (
      <Card
        key={dataObject.id}
        img={dataObject.coverImg}
        rating={dataObject.stats.rating}
        reviewCount={dataObject.stats.reviewCount}
        location={dataObject.location}
        title={dataObject.title}
        price={dataObject.price}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-container">{cardArray}</div>
    </div>
  );
}

export default App;
