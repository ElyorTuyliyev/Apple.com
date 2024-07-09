import { Link } from "react-router-dom";
import "./style.css";

function HomeTitle(props) {
  return (
    <>
      <div className="home__title">{props.title}</div>
      <Link to={props.link}></Link>
    </>
  );
}

export default HomeTitle;
