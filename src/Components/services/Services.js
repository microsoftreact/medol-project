import Title from "../title/Title";
import "./Services.css";

function Services({ title }) {
  return (
    <div className="services">
      <div className="services-navbar">
        <a href="">Перейти в каталог нашей продукции</a>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <Title title={"УСЛУГИ"} />
      <div className="services-cards">
        <div className="services-card-one">
          <img src="./Images/servic 1.png" alt="" />
          <h2>СЕРВИС ОБОРУДОВАНИЯ</h2>
          <p>
            Компания предоставляет сервисное обслуживание по всем
            предоставляемым продуктам. У наших инженеров имеется опыт и
            сертификаты фирм производителей......
          </p>
          <button>Подробнее</button>
        </div>
        <div className="services-card-two">
          <img
            src="./Images/IIM-CAT-2020-application-deadline-extended-here’s-all-you-need-to-know 1.png"
            alt=""
          />
          <h2>РЕГИСТРАЦИИ</h2>
          <p>
            Обеспечение получения разрешительных документов, регистрационного
            удостоверения на изделия медицинского назначения Подготовка объектов
            к проведению ....
          </p>
          <button>Подробнее</button>
        </div>
        <div className="services-card-three">
          <img
            src="./Images/man-by-truck-guy-delivery-uniform-man-with-clipboard 1.png"
            alt=""
          />
          <h2>УСЛУГИ ЛОГИСТИКИ</h2>
          <p>
            Компания предоставляет сервисное обслуживание по всем
            предоставляемым продуктам. У наших инженеров имеется опыт и
            сертификаты фирм производителей.....
          </p>
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
