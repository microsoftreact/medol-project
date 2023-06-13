import Title from "../title/Title";
import "./Partners.css";

function Partners({ title }) {
  return (
    <div className="partners">
      <div className="partners-title">
        <Title title={"ПАРТНЕРЫ"} />
      </div>
      <div className="partners-slider">
        <i class="fa-solid fa-chevron-left left"></i>
        <div className="slider-one">
          <img src="./Images/aesculap-b-braun1 1.png" alt="" />
        </div>
        <div className="slider-two">
          <img src="./Images/asp1 1.png" alt="" />
        </div>
        <div className="slider-three">
          <img src="./Images/bd1 1.png" alt="" />
        </div>
        <div className="slider-four">
          <img src="./Images/biosense1 1.png" alt="" />
        </div>
        <div className="slider-five">
          <img src="./Images/cordis1 1.png" alt="" />
        </div>
        <div className="slider-six">
          <img src="./Images/depuy-synthes-spine-jandj(1) 1.png" alt="" />
        </div>
        <div className="slider-seven">
          <img src="./Images/eth 1.png" alt="" />
        </div>
        <div className="slider-eight">
          <img src="./Images/ethicon-endo-surgery1 1.png" alt="" />
        </div>
        <i class="fa-solid fa-chevron-right right"></i>
      </div>
    </div>
  );
}

export default Partners;
