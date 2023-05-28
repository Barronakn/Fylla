import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Studio = () => {
  return (
    <div className="studio margin">
      <Navigation />
      <section className="studio1 py-3">
        <h1 className="uppercase">About us</h1>
        <h2 className="text-8xl w-3/4 syne my-8">
          Creative studio that inspires.
        </h2>
        <img
          className="w-full height rounded-2xl"
          src="./home-values-p-1080.webp"
          alt=""
        />
      </section>
      <div class="borderBottom"></div>
      <section className="studio2 flex">
        <div className="left w-7/12">
          <h1 className="title tracking-widest mt-6 uppercase">Our values</h1>
          <h2 className="syne text-7xl more">
            Our vision is to connect with the world trough innovation.
          </h2>
          <div className="uppercase">
            <NavLink id="talk" to="#">
              See All Work
            </NavLink>
          </div>
        </div>
        <span className="borderRight mt-7"></span>
        <div className="w-5/12 right relative">
          <div className="flex p-10 studio">
            <img className="w-24 h-24" src="./icon-01.svg" alt="icon-01" />
            <div className="ml-10">
              <h1 className="text-4xl uppercase mb-5">Vision</h1>
              <p className=" leading-8 text-lg">
                Dolor magna eget est lorem ipsum dolor sit amet consectetur.
                Bibendum est ultricies integer quis auctor elit sed. Odio morbi
                quis commodo odio aenean sed.
              </p>
            </div>
          </div>
          <div class="borderBottom"></div>

          <div className="flex p-10 studio">
            <img className="w-24 h-24" src="./icon-02.svg" alt="icon-02" />
            <div className="ml-10">
              <h1 className="text-4xl uppercase mb-5 ">Innovation</h1>
              <p className=" leading-8 text-lg">
                Dolor magna eget est lorem ipsum dolor sit amet consectetur.
                Bibendum est ultricies integer quis auctor elit sed. Odio morbi
                quis commodo odio aenean sed.
              </p>
            </div>
          </div>
          <div className="borderBottom"></div>

          <div className="flex p-10 studio">
            <img src="./icon-03.svg" alt="icon-03" />
            <div className="ml-10">
              <h1 className="text-4xl uppercase mb-5 ">Connection</h1>
              <p className=" leading-8 text-lg">
                Dolor magna eget est lorem ipsum dolor sit amet consectetur.
                Bibendum est ultricies integer quis auctor elit sed. Odio morbi
                quis commodo odio aenean sed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="borderBottom"></div>
      <section className="studio3 relative flex">
        <div className="left mr-28">
          <h1 className="mt-6 text-6xl uppercase">Our team</h1>
          <p className="leading-8 my-10 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <span className="borderRight mt-7"></span>
        <div className="right flex flex-col">
          <div className="p-10 project-01"></div>

          <div className="videos w-1/2 relative">
            <div className="flex video1">
              <div className="p-10">
                <video
                  className="rounded-xl max-w-none video"
                  muted
                  autoPlay
                  loop
                  src="./studio-team-01-transcode.mp4"
                  alt="studio-team-01"
                />
                <div className="">
                  <h1 className="syne underline-none text-2xl" to="#">
                    Jacob Jones
                  </h1>
                  <span>CEO</span>
                </div>
              </div>
              <div className="trait ml-5 mt-9 bg-black h-3/4"></div>
            </div>

            <div className="p-10 video2">
              <div className="video">
                <video
                  className="rounded-xl video"
                  muted
                  autoPlay
                  loop
                  src="./studio-team-02-transcode.mp4"
                  alt="studio-team-02"
                />
              </div>
              <div className="">
                <h1 className="syne underline-none text-2xl" to="#">
                  Kristin Watson
                </h1>
                <span>CEO</span>
              </div>
            </div>
            <div className="flex video3">
              <div className="p-10">
                <video
                  className="rounded-xl max-w-none video"
                  muted
                  autoPlay
                  loop
                  src="./studio-team-03-transcode.mp4"
                  alt="studio-team-03"
                />
                <div className="">
                  <h1 className="syne underline-none text-2xl" to="#">
                    Cameron Williamson
                  </h1>
                  <span>CEO</span>
                </div>
              </div>
              <div className="trait ml-5 mt-9 bg-black h-3/4"></div>
            </div>
            <div className="p-10 video4">
              <video
                className="rounded-xl video"
                muted
                autoPlay
                loop
                src="./studio-team-04-transcode.mp4"
                alt="studio-team-04"
              />
              <div className="">
                <h1 className="syne text-2xl" to="#">
                  Guy Hawkins
                </h1>
                <span>CEO</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="borderBottom"></div>
      <section className="flex studio4">
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

export default Studio;
