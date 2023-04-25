import { NavLink } from "react-router-dom";

const Pages = () => {
  return (
    <div className="pages fixed right-16 left-16 top-36 none">
      <div className="pagesHover flex gap-20">
        <div className="left w-1/3">
          <img className="rounded-lg w-84" src="./dropdown.webp" alt="" />
        </div>
        <div className="flex flex-col">
          <div className="right flex justify-around gap-32">
            <div className="leading-10 links w-full">
              <h1 className="syne text-2xl">Pages</h1>
              <div className="borderBottom"></div>
              <ul className="uppercase w-full">
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
                  <NavLink id="talk text-xl" to="#">
                    More templates
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="leading-10 links w-full">
              <h1 className="syne text-2xl">CMS</h1>
              <div className="borderBottom"></div>
              <ul className="uppercase w-full">
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
            <div className="leading-10 links w-full">
              <h1 className="syne w-full text-2xl">Utility Pages</h1>
              <div className="borderBottom"></div>
              <ul className="uppercase w-full">
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
          <div className="uppercase flex justify-between mt-10">
            <p className="text-sm">
              © Made by <NavLink to="#">pawel gola</NavLink> - Powered by{" "}
              <NavLink to="#">webflow</NavLink>
            </p>
            <div className="flex gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default Pages;
