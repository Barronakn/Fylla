import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div className="margin">
      <Navigation />
      <section className="services1">
        <h1 className="syne text-8xl mb-64 width">
          We create your brand together.
        </h1>
        <div className="Link">
          <NavLink className="view uppercase" to="#">
            Branding
          </NavLink>
          <NavLink className="view uppercase ml-4" to="#">
            Design
          </NavLink>
          <NavLink className="view uppercase ml-4" to="#">
            Video
          </NavLink>
          <NavLink className="view uppercase ml-4" to="#">
            Content
          </NavLink>
        </div>
      </section>
      <div className="borderBottom"></div>
      <section className="services2 flex my-20 service">
        <div className="left w-4/12">
          <div>
            <img src="./icon-01.svg" alt="icon-01" />
            <h1 className="syne uppercase my-8 text-5xl">Branding</h1>
          </div>
          <div>
            <p className="uppercase">Logo</p>
            <p className="uppercase my-6">Corporate identity</p>
            <p className="uppercase mb-6">Brand guide</p>
            <NavLink id="talk" to="">
              Get in touch
            </NavLink>
          </div>
        </div>
        <span className="borderRight"></span>
        <div className="right w-8/12 ml-14">
          <h1 className="syne text-6xl">
            A strong brand is a tool to connect people with your brand all
            around the world.
          </h1>
          <div className="paragraph flex gap-5 my-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Scelerisque in dictum non consectetur a erat nam at. Pretium
              aenean pharetra magna ac placerat. Aliquam ut porttitor leo a
              diam.
            </p>
            <p>
              Ut tellus elementum sagittis vitae et leo duis ut diam. Gravida
              quis blandit turpis cursus. Faucibus purus in massa tempor nec.
              Vitae purus faucibus ornare suspendisse sed nisi lacus sed.
              Vulputate mi sit amet mauris.
            </p>
          </div>
          <video
            className="rounded-2xl"
            muted
            loop
            autoPlay
            src="/public/services-branding-transcode.mp4"
            alt="services-branding-transcode-video"
            controls
          />
        </div>
      </section>
      <div className="borderBottom"></div>
      <section className="services3 flex my-20 service">
        <div className="left w-4/12">
          <div>
            <img src="./icon-02.svg" alt="" />
            <h1 className="syne uppercase my-8 text-5xl">Design</h1>
          </div>
          <div>
            <p className="uppercase">Webdesign</p>
            <p className="uppercase my-6">Print</p>
            <p className="uppercase mb-6">Social Media</p>
            <NavLink id="talk" to="">
              Get in touch
            </NavLink>
          </div>
        </div>
        <span className="borderRight"></span>
        <div className="right w-8/12 ml-14">
          <h1 className="syne text-6xl">
            A strong brand is a tool to connect people with your brand all
            around the world.
          </h1>
          <div className="paragraph flex gap-5 my-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Scelerisque in dictum non consectetur a erat nam at. Pretium
              aenean pharetra magna ac placerat. Aliquam ut porttitor leo a
              diam.
            </p>
            <p>
              Ut tellus elementum sagittis vitae et leo duis ut diam. Gravida
              quis blandit turpis cursus. Faucibus purus in massa tempor nec.
              Vitae purus faucibus ornare suspendisse sed nisi lacus sed.
              Vulputate mi sit amet mauris.
            </p>
          </div>
          <video
            className="rounded-2xl"
            muted
            loop
            autoPlay
            src="/public/services-design-transcode.mp4"
            alt="services-design-transcode-video"
            controls
          />
        </div>
      </section>
      <div className="borderBottom"></div>
      <section className="services4 flex my-20 service">
        <div className="left w-4/12">
          <div>
            <img src="./icon-03.svg" alt="" />
            <h1 className="syne uppercase my-8 text-5xl">Video</h1>
          </div>
          <div>
            <p className="uppercase">Videos ads</p>
            <p className="uppercase my-6">Social Media Shorts</p>
            <p className="uppercase mb-6">Movie Trailers</p>
            <NavLink id="talk" to="">
              Get in touch
            </NavLink>
          </div>
        </div>
        <span className="borderRight"></span>
        <div className="right w-8/12 ml-14">
          <h1 className="syne text-6xl">
            A strong brand is a tool to connect people with your brand all
            around the world.
          </h1>
          <div className="paragraph flex gap-5 my-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Scelerisque in dictum non consectetur a erat nam at. Pretium
              aenean pharetra magna ac placerat. Aliquam ut porttitor leo a
              diam.
            </p>
            <p>
              Ut tellus elementum sagittis vitae et leo duis ut diam. Gravida
              quis blandit turpis cursus. Faucibus purus in massa tempor nec.
              Vitae purus faucibus ornare suspendisse sed nisi lacus sed.
              Vulputate mi sit amet mauris.
            </p>
          </div>
          <video
            className="rounded-2xl"
            muted
            loop
            autoPlay
            src="/public/services-video-transcode.mp4"
            alt="services-video-transcode-video"
            controls
          />
        </div>
      </section>
      <div className="borderBottom"></div>
      <section className="services5 flex my-20 service">
        <div className="left w-4/12">
          <div>
            <img src="./icon-04.svg" alt="" />
            <h1 className="syne uppercase my-8 text-5xl">Content</h1>
          </div>
          <div>
            <p className="uppercase">Social Media Ads</p>
            <p className="uppercase my-6">Lading Pages</p>
            <p className="uppercase mb-6">Websites</p>
            <NavLink id="talk" to="">
              Get in touch
            </NavLink>
          </div>
        </div>
        <span className="borderRight"></span>
        <div className="right w-8/12 ml-14">
          <h1 className="syne text-6xl">
            A strong brand is a tool to connect people with your brand all
            around the world.
          </h1>
          <div className="paragraph flex gap-5 my-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Scelerisque in dictum non consectetur a erat nam at. Pretium
              aenean pharetra magna ac placerat. Aliquam ut porttitor leo a
              diam.
            </p>
            <p>
              Ut tellus elementum sagittis vitae et leo duis ut diam. Gravida
              quis blandit turpis cursus. Faucibus purus in massa tempor nec.
              Vitae purus faucibus ornare suspendisse sed nisi lacus sed.
              Vulputate mi sit amet mauris.
            </p>
          </div>
          <video
            className="rounded-2xl"
            muted
            loop
            autoPlay
            src="/public/services-content-transcode.mp4"
            alt="services-content-transcode-video"
            controls
          />
        </div>
      </section>
      <div class="borderBottom"></div>
      <section className="flex services6">
        <div className="left w-8/12 mt-16">
          <h1 className="uppercase">Contact</h1>
          <p className="syne uppercase text-7xl">
            Let's bring your brand to the next level
          </p>
          <img className="mt-64" src="./icon-02.svg" alt="" />
        </div>
        <div className="trait ml-5 mt-9 bg-black"></div>
        <div className="right w-4/12 p-20 relative">
          <p className="leading-8 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua magna ac
            placerat erat.
          </p>
          <NavLink className="btn-bg-black uppercase" id="btn-service" to="#">
            Our services
          </NavLink>
        </div>
      </section>
      <div className="borderBottom"></div>
      <Footer />
    </div>
  );
};

export default Services;
