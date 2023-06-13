import Title from "../title/Title";
import "./News.css";

function News({ title }) {
  return (
    <div className="news">
      <div className="news-title">
        <Title title={"НОВОСТИ"} />
      </div>
      <div className="news-sliders">
        <i class="fa-solid fa-chevron-left left"></i>
        <div className="news-slider-one">
          <img src="./Images/doctor.png" alt="" />
          <h2>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h2>
          <span>26.07.2021</span>
          <p>
            С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
            Научно-Практический Медицинский Центр Урологии) при поддержке
            компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical
            Online Services» был проведен мастер-класс в исполнении...
          </p>
          <button>Подробнее</button>
        </div>
        <div className="news-slider-two">
          <img src="./Images/doctor.png" alt="" />
          <h2>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h2>
          <span>26.07.2021</span>
          <p>
            С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
            Научно-Практический Медицинский Центр Урологии) при поддержке
            компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical
            Online Services» был проведен мастер-класс в исполнении...
          </p>
          <button>Подробнее</button>
        </div>
        <div className="news-slider-three">
          <img src="./Images/doctor.png" alt="" />
          <h2>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h2>
          <span>26.07.2021</span>
          <p>
            С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
            Научно-Практический Медицинский Центр Урологии) при поддержке
            компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical
            Online Services» был проведен мастер-класс в исполнении...
          </p>
          <button>Подробнее</button>
        </div>
        <i class="fa-solid fa-chevron-right right"></i>
      </div>
      <div className="news-footer">
        <div className="section-one">
          <a href="#">Посмотреть все новости</a>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div className="section-two">
          <a href="#">Подписаться на новости</a>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}

export default News;
