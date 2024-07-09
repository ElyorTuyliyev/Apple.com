import "./style.css";
import Header from "../Home/components/header";
import Question from "./components";

function Store() {
  return (
    <>
      <Header />

      <div className="store__title-wrapper">
        <h3 className="store__title">
          <span> Store. </span>The best way to buy the products you love.
        </h3>
        <div className="">
          <Question />
          <Question />
        </div>
      </div>
    </>
  );
}
export default Store;
