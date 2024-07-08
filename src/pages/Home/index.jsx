import "./style.css";
import HomeTitle from "./components";
import AppleLogo from "./images/Apple-logo.png";
function Home() {
  const title = [
    {
      title: "stores",
    },
    {
      title: "Mac",
    },
    {
      title: "IPad",
    },
    {
      title: "IPhone",
    },
    {
      title: "Watch",
    },
    {
      title: "Vision",
    },
    {
      title: "AirPods",
    },
    {
      title: "Entertainment",
    },
    {
      title: "Accessories",
    },
    {
      title: "support",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="home__wrapper">
          <img className="home__logo" src={AppleLogo} alt="Apple-logo" />
          {title.map((item) => (
            <HomeTitle key={item.title} {...item} />
          ))}
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-regular fa-clipboard"></i>
        </div>
      </div>
      <div className="home__img-wrapper">
        <div className="container"></div>
      </div>
    </>
  );
}

export default Home;
