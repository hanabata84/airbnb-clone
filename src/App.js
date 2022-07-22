import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from './data.js';

function App() {
  const cardData = data.map((item) => {
    return <Card
      key={item.id}
      item={item} />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-data">{cardData}</div>

    </div>
  );
}

export default App;
