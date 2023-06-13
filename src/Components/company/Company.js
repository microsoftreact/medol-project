import Title from "../title/Title";
import "./Company.css";

function Company({ title }) {
  return (
    <div className="company">
      <div className="company-title">
        <Title title={"О КОМПАНИИ"} />
      </div>
      <div className="company-section">
        <div className="company-logo">
          <div className="one">
            <div className="two">
              <div className="three">
                <img src="./Images/logo 1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="company-content">
          <p>
            Группа компаний MEDOL создавалась высококвалифицированными
            специалистами в сфере медицины, инженерии и экономики, за плечами
            которых значительный опыт на рынке высоких медицинских технологий,
            которая имеет свои представительства в разных уголках Земли. В 2011
            году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online
            Services". Цель компании построить прозрачный долгосрочный бизнес,
            принести пользу обществу путем развития и внедрения передовых
            технологий в систему здравоохранения Республики Узбекистан.{" "}
          </p>
          <button>Узнать больше</button>
        </div>
      </div>
    </div>
  );
}

export default Company;
