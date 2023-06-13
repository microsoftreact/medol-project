import "./App.css";
import { Header } from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import Company from "./Components/company/Company";
import Footer from "./Components/footer/Footer";
import News from "./Components/news/News";
import Partners from "./Components/partners/Partners";
import Services from "./Components/services/Services";
import "./Normalize/Normalize.css";

function App() {
  return (
    <div className="header-container">
      <div className="App">
        <Header />
        <Product />
        <Services />
        <Company />
        <News />
        <Partners />
        <Footer />
      </div>
    </div>
  );
}

export default App;
