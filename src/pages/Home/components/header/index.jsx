import HeaderLogo from "../../images/Apple-logo.png";
import HomeTitle from "./components";

function Header() {
  const title = [
    {
      title: "Store",
      link: "/Store",
    },
    {
      title: "Mac",
      link: "/Mac",
    },
    {
      title: "IPad",
      link: "/IPad",
    },
    {
      title: "IPhone",
      link: "/IPhone",
    },
    {
      title: "Watch",
      link: "/Watch",
    },
    {
      title: "Vision",
      link: "/Vision",
    },
    {
      title: "AirPods",
      link: "/AirPods",
    },
    {
      title: "Entertainment",
      link: "/Entertainment",
    },
    {
      title: "Accessories",
      link: "/Accessories",
    },
    {
      title: "Support",
      link: "/Support",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="home__wrapper">
          <img
            className="home__logo"
            to={"/"}
            src={HeaderLogo}
            alt="Apple-logo"
          />
          {title.map((item) => (
            <HomeTitle key={item.title} link={item.link} {...item} />
          ))}
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-regular fa-clipboard"></i>
        </div>
      </div>
    </>
  );
}

export default Header;
