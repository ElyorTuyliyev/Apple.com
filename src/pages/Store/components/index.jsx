import Person from "../images/photography-7527978_1280.webp";
import "./style.css";
function Question(props) {
  return (
    <>
      <div className="question__wrapper">
        <img className="question__img" src={props.img} alt="person" />
        <p className="question__text">
          Need shopping help? <br /> <a href="#">Ask a Specialist ?</a>
        </p>
      </div>
    </>
  );
}
export default Question;
