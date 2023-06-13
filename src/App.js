import "./App.css";
import { Header } from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import Company from "./Components/company/Company";
import News from "./Components/news/News";
import Partners from "./Components/partners/Partners";
import Services from "./Components/services/Services";
import "./Normalize/Normalize.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Product />
      <Services />
      <Company />
      <News />
      <Partners />
    </div>
  );
}

export default App;
