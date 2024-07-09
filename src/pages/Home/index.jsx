import "./style.css";
import HomeTitle from "./components";
import AppleLogo from "./images/Apple-logo.png";
import LaptopMac from "./images/laptop-mac.jpg";
import { Link } from "react-router-dom";

function Home() {
  const title = [
    {
      title: "Stores",
      link: "/",
    },
    {
      title: "Mac",
      link: "*",
    },
    {
      title: "IPad",
      link: "*",
    },
    {
      title: "IPhone",
      link: "*",
    },
    {
      title: "Watch",
      link: "*",
    },
    {
      title: "Vision",
      link: "*",
    },
    {
      title: "AirPods",
      link: "*",
    },
    {
      title: "Entertainment",
      link: "*",
    },
    {
      title: "Accessories",
      link: "*",
    },
    {
      title: "support",
      link: "*",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="home__wrapper">
          <img className="home__logo" src={AppleLogo} alt="Apple-logo" />
          {title.map((item) => (
            <HomeTitle key={(item.title, item.link)} {...item} />
          ))}
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-regular fa-clipboard"></i>
        </div>
      </div>
      <div className="home__img-wrapper">
        <div className="container">
          <img className="home__img-laptop" src={LaptopMac} alt="laptop" />
        </div>
      </div>
    </>
  );
}

export default Home;
