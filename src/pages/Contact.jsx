import Navigation from "./components/Navigation";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact margin">
      <Navigation />
      <div className="flex contact1 py-3 gap-8">
        <div className="left mt-16">
          <h1 className="uppercase">Contact</h1>
          <p className="syne uppercase text-7xl">
            Creating true brands together.
          </p>
          <div>
            <p className="uppercase mt-32">Find us on</p>
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
        <div className="right mt-24">
          <form>
            <input
              className="champ"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <br />
            <br />
            <input
              className="champ"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <br />
            <br />
            <textarea
              className="champ h-32 resize-none"
              cols="30"
              placeholder="Your Message"
              rows="10"
            ></textarea>
            <br />
            <br />
            <input
              id="btn"
              className="uppercase cursor-pointer"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
      <div class="borderBottom"></div>
      <div className="contact2 flex">
        <h1 className="title w-1/3 tracking-widest mt-6 uppercase">
          Our offices
        </h1>
        <span className="borderRight mt-7"></span>
        <div className="image w-2/3 grid relative">
          <div className="borderBottom bottom absolute"></div>
          <div className="flex p-7">
            <img
              className="w-full h-28 rounded-xl"
              src="/dist/office-01-p-500.webp"
              alt=""
            />
            <div className="card ml-10 mr-10 mr-16">
              <h1 className="text-2xl uppercase mb-5">Hamburg</h1>
              <p className="leading-8 text-lg">
                Main Street 16 Berlin, Germany
              </p>
            </div>

            <span className="borderRight"></span>
          </div>
          <div className="flex p-7 w-full ml-6">
            <img
              className="h-28 rounded-xl"
              src="/dist/office-02-p-500.webp"
              alt=""
            />
            <div className="card ml-10 mr-10">
              <h1 className="text-2xl uppercase mb-5 ">Lisbon</h1>
              <p className="leading-8 text-lg">
                Main Street 22 Lisbon, Portugal
              </p>
            </div>
          </div>
          <div className="flex p-7">
            <img
              className="w-full h-28 rounded-xl"
              src="/dist/office-03-p-500.webp"
              alt=""
            />
            <div className="card ml-10 mr-10  mr-16">
              <h1 className="text-2xl uppercase mb-5 ">Budapest</h1>
              <p className="leading-8 text-lg">
                Main Street 20 Budapest, Hungary
              </p>
            </div>
            <span className="borderRight"></span>
          </div>
          <div className="flex p-7 w-full ml-6">
            <img
              className="h-28 rounded-xl"
              src="/dist/office-04-p-500.webp"
              alt=""
            />
            <div className="card ml-10 mr-10">
              <h1 className="text-2xl uppercase mb-5 ">Krakow</h1>
              <p className="leading-8 text-lg">Rynek 16 Krakow, Poland</p>
            </div>
          </div>
        </div>
      </div>
      <div class="borderBottom"></div>
      <div className="contact3 py-14 flex">
        <div className="left w-1/2">
          <h1 className="title w-1/3 tracking-widest mt-6 uppercase">
            Our offices
          </h1>
          <p className="text-6xl w-1/2">Common Questions</p>
        </div>
        <span className="borderRight"></span>
        <div className="right contactLink w-1/2">
          <div className="flex w-full justify-between">
            <NavLink className="text-2xl w-full ml-16" to="#">
              Integer vitae justo eget magna?
            </NavLink>
            <img className="bg-black" src="/dist/plus.svg" alt="" id="image" />
          </div>
          <div class="borderBottom mb-8 ml-16"></div>
          <div className="flex w-full justify-between">
            <NavLink className="text-2xl w-full ml-16" to="#">
              Dolor magna eget est lorem ipsum?
            </NavLink>
            <img className="bg-black" src="/dist/plus.svg" alt="" id="image" />
          </div>
          <div class="borderBottom mb-8 ml-16"></div>
          <div className="flex w-full justify-between">
            <NavLink className="text-2xl w-full ml-16" to="#">
              Ac tincidunt vitae semper quis lectus?
            </NavLink>
            <img className="bg-black" src="/dist/plus.svg" alt="" id="image" />
          </div>
          <div class="borderBottom mb-8 ml-16"></div>
          <div className="flex w-full justify-between">
            <NavLink className="text-2xl w-full ml-16" to="#">
              Sagittis orci a scelerisque?
            </NavLink>
            <img className="bg-black" src="/dist/plus.svg" alt="" id="image" />
          </div>
          <div class="borderBottom ml-16"></div>
        </div>
      </div>
      <div class="borderBottom"></div>
      <Footer />
    </div>
  );
};

export default Contact;
