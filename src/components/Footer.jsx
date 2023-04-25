import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer py-20">
      <div className="flex footer-top">
        <div className="left w-1/3">
          <NavLink to="/Fylla">
            <img src="./logo.svg" alt="" />
          </NavLink>
          <p className="mb-48 mt-5 leading-8 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
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
        <div className="trait mx-10 bg-black"></div>
        <div className="right w-2/3 flex justify-around gap-20">
          <div className="leading-10 links">
            <h1 className="syne text-2xl">Pages</h1>
            <ul className="uppercase">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/studio">Studio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink id="talk" to="#">
                  More templates
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="leading-10 links">
            <h1 className="syne text-2xl">CMS</h1>
            <ul className="uppercase">
              <li>
                <NavLink to="/work">Work</NavLink>
              </li>
              <li>
                <NavLink to="#">Work single</NavLink>
              </li>
              <li>
                <NavLink to="#">Blog</NavLink>
              </li>
              <li>
                <NavLink to="#">Blog post</NavLink>
              </li>
              <li>
                <NavLink to="#">Shop</NavLink>
              </li>
              <li>
                <NavLink to="#">Shop single</NavLink>
              </li>
            </ul>
          </div>
          <div className="leading-10 links">
            <h1 className="syne text-2xl">Utility Pages</h1>
            <ul className="uppercase">
              <li>
                <NavLink to="#">404 Error pages</NavLink>
              </li>
              <li>
                <NavLink to="#">Password protected</NavLink>
              </li>
              <li>
                <NavLink to="#">Styleguide</NavLink>
              </li>
              <li>
                <NavLink to="#">Licensing</NavLink>
              </li>
              <li>
                <NavLink to="#">Changelog</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="borderBottom"></div>

      <div className="uppercase footer-bottom flex justify-between mt-20">
        <p>
          © Made by <NavLink to="#">pawel gola</NavLink> - Powered by{" "}
          <NavLink to="#">webflow</NavLink>
        </p>
        <div className="flex link gap-4">
          <div>
            <NavLink to="#">Privacy</NavLink>
          </div>
          <div>
            <NavLink to="#">Imprint</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
