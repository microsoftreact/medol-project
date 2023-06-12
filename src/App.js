import "./App.css";
import { Header } from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import Services from "./Components/services/Services";
import "./Normalize/Normalize.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Product />
      <Services />
    </div>
  );
}

export default App;
