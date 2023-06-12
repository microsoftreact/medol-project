import Title from "../title/Title";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <Title title="ПРОДУКЦИЯ" />
      <div className="product-cards">
        <div className="product-cards-one">
          <img
            src="./Images/endeavor-large 1.png"
            alt="Bu yerda card rasmi joylashgan"
          />
          <p>
            Эндоваскулярная <br /> хирургия
          </p>
          <button>Посмотреть все</button>
        </div>
        <div className="product-cards-two">
          <img src="./Images/img6 1.png" alt="Bu yerda card rasmi joylashgan" />
          <p>
            Лабораторная <br /> диагностика
          </p>
          <button>Посмотреть все</button>
        </div>
        <div className="product-cards-three">
          <img
            src="./Images/gallery_cs300_1 1.png"
            alt="Bu yerda card rasmi joylashgan"
          />
          <p>Кардиохирургия</p>
          <button>Посмотреть все</button>
        </div>
        <div className="product-cards-four">
          <img
            src="./Images/754-1 1.png"
            alt="Bu yerda card rasmi joylashgan"
          />
          <p>ДИАБЕТ</p>
          <button>Посмотреть все</button>
        </div>
        <div className="product-cards-five">
          <img src="./Images/img5 1.png" alt="Bu yerda card rasmi joylashgan" />
          <p>ЭНДОУРОЛОГИЯ</p>
          <button>Посмотреть все</button>
        </div>
        <div className="product-cards-six">
          <img
            src="./Images/pacemaker-advisa-mrishtsh222 1.png"
            alt="Bu yerda card rasmi joylashgan"
          />
          <p>АРИТМОЛОГИЯ</p>
          <button>Посмотреть все</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
