import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <h2>Контакты</h2>
        <div className="section-address">
          <i class="fa-solid fa-location-dot"></i>
          <a href="https://www.google.com/maps/place/Chilonzor-10,+Tashkent,+O%60zbekiston/@41.2828272,69.1934583,16z/data=!3m1!4b1!4m6!3m5!1s0x38ae8a2f4da56069:0xe463bd88790d0f97!8m2!3d41.2829494!4d69.1968618!16s%2Fg%2F1tvq2h9l?entry=ttu">
            г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
          </a>
        </div>
        <div className="section-phone">
          <i class="fa-sharp fa-solid fa-phone-volume"></i>
          <div className="section-phone-numbers">
            <a href="#">+998 71 276-62-53</a>
            <a href="#">+998 71 276-62-54</a>
          </div>
        </div>
        <div className="section-email">
          <i class="fa-solid fa-envelope"></i>
          <a href="#">info@medol.uz </a>
        </div>
        <div className="section-btn">
          <button>Оставить заявку</button>
        </div>
        <div className="section-logo">
          <img src="./Images/logo 1.png" alt="" />
          <p>
            Наша цель – построить прозрачный, долгосрочный бизнес, приносить
            огромную пользу населению, путем решения глобальных вопросов.
            Внедряя инновационные технологии на рынок Узбекистана.
          </p>
        </div>
      </div>
      <div className="company">
        <h2>О компании</h2>
        <div className="company-links">
          <a href="#">История</a>
          <a href="#">Партнеры</a>
          <a href="#">Вакансии</a>
        </div>
      </div>
      <div className="product">
        <h2>Продукция</h2>
        <div className="product-links">
          <a href="#">Эндоваскулярная хирургия</a>
          <a href="#">Аритмология</a>
          <a href="#">Кардиохирургия</a>
          <a href="#">Аритмология</a>
          <a href="#">Лабораторная диагностика</a>
          <a href="#">Хирургия</a>
          <a href="#">Эндоурология</a>
          <a href="#">Нейрохирургия</a>
          <a href="#">Анестезиология и реанимация</a>
          <a href="#">Диабет</a>
        </div>
      </div>
      <div className="services">
        <h2>Услуги</h2>
        <div className="services-links">
          <a href="#">Сервис</a>
          <a href="#">Регистрации</a>
          <a href="#">Услуги логистики</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
