import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-navbar">
          <div className="header-navbar-contact">
            <div className="header-navbar-contact-location">
              <i class="fa-solid fa-location-dot"></i>
              <a href="https://www.google.com/maps/place/Chilonzor-10,+Tashkent,+O%60zbekiston/@41.2828272,69.1934583,16z/data=!3m1!4b1!4m6!3m5!1s0x38ae8a2f4da56069:0xe463bd88790d0f97!8m2!3d41.2829494!4d69.1968618!16s%2Fg%2F1tvq2h9l?entry=ttu">
                <span>
                  г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
                </span>
              </a>
            </div>
            <div className="header-navbar-contact-phone">
              <div className="header-navbar-contact-phone-icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="header-navbar-contact-phone-numbers">
                <a href="+998911192019">+998 71 276-62-53</a>
                <br />
                <a href="+998911192019">+998 71 276-62-54</a>
              </div>
            </div>
          </div>
          <div className="header-navbar-logo">
            <img
              src="./Images/logo 1.png"
              alt="Bu yerda Logo rasmi joylashgan"
            />
          </div>
          <div className="header-navbar-media">
            <div className="header-navbar-media-search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="header-navbar-media-facebook">
              <i class="fa-brands fa-facebook-f"></i>
              <a href="#">Мы на Facebook</a>
            </div>
            <div className="header-navbar-media-language">
              <img src="./Images/russian.png" alt="" />
              <select>
                <option>Русский</option>
                <option>Узбек</option>
              </select>
            </div>
          </div>
        </div>
        <div className="header-navbar-slider">
          <div className="header-navbar-links">
            <div class="links-one">
              <a href="#">МАГАЗИН</a>
            </div>
            <div className="links-two">
              <a href="#">О КОМПАНИИ</a>
            </div>
            <div className="links-three">
              <a href="#">ПРОДУКЦИЯ</a>
            </div>
            <div className="links-four">
              <a href="#">УСЛУГИ</a>
            </div>
            <div className="links-five">
              <a href="#">АКЦИИ И НОВОСТИ</a>
            </div>
            <div className="links-six">
              <a href="#">ОБРАТНАЯ СВЯЗЬ</a>
            </div>
          </div>
          <div className="header-navbar-slider-content">
            <div className="header-navbar-slider-content-left">
              <h1>Анализатор ABL800 FLEX</h1>
              <p>
                Ориентированный на среднюю или высокую производительность
                тестов, анализатор ABL800 FLEX измеряет полный набор параметров,
                включая pH, газы крови, электролиты, метаболиты и показатели
                оксиметрии
              </p>
              <button>
                <a href="#">Подробнее</a>
              </button>
            </div>
            <div className="header-navbar-slider-content-right">
              <img src="./Images/slide.png" alt="Bu yerda texnika rasmi bor" />
            </div>
          </div>
          <div className="header-navbar-slider-btn">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Header };
