import { Link } from "react-router-dom";
import "./style.css";

function HomeTitle(props) {
  return (
    <>
      <Link className="home__title" to={props.link}>
        {props.title}
      </Link>
    </>
  );
}

export default HomeTitle;
