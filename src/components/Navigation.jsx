import { NavLink } from "react-router-dom";
import Cart from "../components/Cart";
import Pages from "./Pages";

const Navigation = () => {
  const handleAdd = () => {
    const cart = document.querySelector(".cart");
    cart.className = "block";
  };

  const mouseEnter = () => {
    const pages = document.querySelector(".pages");
    pages.classList.remove("none");
    pages.classList.add("block");
  };
  const mouseLeave = () => {
    const pages = document.querySelector(".pages");
    pages.classList.remove("block");
    pages.classList.add("none");
  };

  const handleClick = () => {
    const nav = document.querySelector(".navbar");
    const menu = document.querySelector(".menu");
    const reset = document.querySelector(".reset");
    const page = document.querySelector(".page");
    const lang = document.querySelector(".lang");
    nav.style.display = "flex";
    nav.style.background = "#fff9f9";
    nav.style.border = "1px solid black";
    nav.style.width = "96%";
    nav.style.position = "absolute";
    nav.style.top = "29%";
    nav.style.left = "2%";
    nav.style.flexDirection = "column";
    nav.style.justifyContent = "center";
    nav.style.alignItems = "center";
    nav.style.paddingTop = "5%";
    page.style.marginLeft = "20px";
    lang.style.marginBottom = "4%";
    menu.style.display = "none";
    reset.style.display = "block";
  };
  const handleReset = () => {
    const menu = document.querySelector(".menu");
    const reset = document.querySelector(".reset");
    const nav = document.querySelector(".navbar");
    nav.style.display = "none";
    menu.style.display = "block";
    reset.style.display = "none";
  };
  return (
    <div>
      <div className="navigation flex justify-between">
        <div className="logo">
          <NavLink to="/">
            <img src="./logo.svg" alt="" />
          </NavLink>
        </div>
        <div className="navbar mt-5 flex gap-10 uppercase">
          <NavLink
            to="/services"
            className={(nav) => (nav.isActive ? "active" : "")}
          >
            Services
          </NavLink>
          <NavLink
            to="/work"
            className={(nav) => (nav.isActive ? "active" : "")}
          >
            Work
          </NavLink>
          <NavLink
            to="/studio"
            className={(nav) => (nav.isActive ? "active" : "")}
          >
            Studio
          </NavLink>
          <NavLink
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            to=""
            className={(nav) => (nav.isActive ? "active" : "")}
          >
            <div className="page flex">
              Pages <img src="./pageSvg.svg" />
            </div>
          </NavLink>
          <Pages />
          <NavLink
            onClick={handleAdd}
            to="#"
            className={(nav) => (nav.isActive ? "active" : "")}
          >
            Cart(0)
          </NavLink>
          <Cart />
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "active" : "")}
            id="talk"
          >
            Let's talk
          </NavLink>
          <div className="lang">
            <NavLink
              id="rond"
              to="#"
              className={(nav) => (nav.isActive ? "active" : "")}
            >
              TW
            </NavLink>
            <NavLink
              id="rond"
              to="#"
              className={(nav) => (nav.isActive ? "active" : "")}
            >
              IN
            </NavLink>
            <NavLink
              id="rond"
              to="#"
              className={(nav) => (nav.isActive ? "active" : "")}
            >
              FB
            </NavLink>
          </div>
        </div>
        <div className="menu none hover:cursor-pointer">
          <img
            onClick={handleClick}
            className="w-14"
            src="/menu.svg"
            alt="Icon_Menu"
          />
        </div>
        <div className="reset none hover:cursor-pointer">
          <img
            onClick={handleReset}
            className="w-14"
            src="/reset.svg"
            alt="Icon_Reset"
          />
        </div>
      </div>
      <div className="borderBottom"></div>
    </div>
  );
};

export default Navigation;
