import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Video from "/sectionVid.mp4";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home margin">
      <Navigation />
      <div className="section1 flex mt-24 justify-around">
        <div className="section1Text">
          <h1 className="text-7xl syne">
            We are a digital agency from Lisbon.
          </h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <div className="iconS1 mt-32">
            <img src="./iconS1.svg" />
          </div>
        </div>
        <div className="section1Vid">
          <video className="rounded-2xl" muted loop autoPlay src={Video} />
        </div>
      </div>

      <div className="borderBottom"></div>

      <div className="section2 flex justify-between mt-10">
        <p className="self-center">Our clients</p>
        <span className="borderRight"></span>
        <div className="images flex gap-5">
          <img src="./client-01.svg" alt="" />
          <img src="./client-02.svg" alt="" />
          <img src="./client-03.svg" alt="" />
          <img src="./client-04.svg" alt="" />
          <img src="./client-05.svg" alt="" />
          <img src="./client-06.svg" alt="" />
        </div>
      </div>

      <div className="borderBottom"></div>

      <div className="section3 flex">
        <h1 className="title w-1/3 tracking-widest mt-6 uppercase">
          What we do
        </h1>
        <span className="borderRight mt-7"></span>
        <div className="image w-2/3 relative">
          <div className="borderBottom bottom absolute"></div>
          <div className="flex what service p-10">
            <img className="w-24 h-24" src="./icon-01.svg" alt="" />
            <div className="card ml-10">
              <h1 className="text-4xl uppercase mb-5">Branding</h1>
              <p className=" leading-8 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <span className="borderRight"></span>
          </div>
          <div className="flex what service p-10">
            <img src="./icon-02.svg" alt="" />
            <div className="card ml-10">
              <h1 className="text-4xl uppercase mb-5 ">Design</h1>
              <p className=" leading-8 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="flex what service relative p-10">
            <img className="w-24 h-24" src="./icon-03.svg" alt="" />
            <div className="card ml-10">
              <h1 className="text-4xl uppercase mb-5 ">Video</h1>
              <p className=" leading-8 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>

            <span className="borderRight"></span>
          </div>
          <div className="flex what p-10">
            <img src="./icon-04.svg" alt="" />
            <div className="card ml-10">
              <h1 className="text-4xl uppercase mb-5 ">Content</h1>
              <p className=" leading-8 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="borderBottom"></div>

      <div className="section4 relative flex">
        <div className="mr-28 parag">
          <h1 className="mt-6 text-6xl uppercase">Featured work</h1>
          <p className="leading-8 my-10 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <NavLink className="btn-bg-black" to="#">
            See all work
          </NavLink>
        </div>
        <span className="borderRight mt-7"></span>
        <div className="flex flex-col">
          <div className="p-10 bloc project-01">
            <img src="./project-01-p-1600.webp" alt="" />
            <div className="flex project justify-between">
              <NavLink className="syne underline-none text-2xl" to="#">
                Dancing Starts
              </NavLink>
              <span>2022</span>
            </div>
          </div>

          <div className="borderBottom"></div>

          <div className="image grid grid-cols-2 w-1/2 relative">
            <div className="flex flexBloc">
              <div className="bloc_1">
                <div className="flex">
                  <div className="p-10 bloc">
                    <img src="./project-02-p-800.webp" alt="" />
                    <div className="flex project justify-between">
                      <NavLink className="syne underline-none text-2xl" to="#">
                        Enjoy Silence
                      </NavLink>
                      <span>2022</span>
                    </div>
                  </div>
                  <div className="trait ml-5 mt-9 bg-black h-3/4"></div>
                </div>

                <div className="p-10 bloc">
                  <img src="./project-03-p-800.webp" alt="" />
                  <div className="flex project justify-between">
                    <NavLink className="syne underline-none text-2xl" to="#">
                      Pure Vision
                    </NavLink>
                    <span>2022</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bloc_2">
              <div className="flex">
                <div className="p-10 bloc ml-48">
                  <img src="./project-04-p-800.webp" alt="" />
                  <div className="flex project justify-between">
                    <NavLink className="syne underline-none text-2xl" to="#">
                      Boring Brand
                    </NavLink>
                    <span>2022</span>
                  </div>
                </div>
                <div className="trait ml-5 mt-9 bg-black h-3/4"></div>
              </div>
              <div className="p-10 bloc ml-48">
                <img src="./project-05-p-800.webp" alt="" />
                <div className="flex culture project w-full">
                  <NavLink className="syne text-2xl" to="#">
                    New Culture
                  </NavLink>
                  <span className="ml-44">2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="borderBottom"></div>

      <div className="flex section5">
        <div className="left w-8/12 mt-16">
          <h1 className="uppercase">How we work</h1>
          <p className="syne text-7xl">
            We help our clients succeed with innovative strategies.
          </p>
          <img className="mt-64" src="./icon-04.svg" alt="" />
        </div>
        <div className="trait ml-5 mt-9 bg-black"></div>
        <div className="right w-4/12 p-20 relative">
          <p className="leading-8 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua magna ac
            placerat erat.
          </p>
          <NavLink className="btn-bg-black" id="btn-service" to="#">
            Our services
          </NavLink>
        </div>
      </div>

      <div className="borderBottom"></div>
      <div className="section6">
        <h1 className="value uppercase text-6xl syne text-center mt-6">
          Our values
        </h1>
        <div className="borderBottom"></div>
        <div className="values flex gap-20 justify-between">
          <div className="left p-10">
            <img
              className="h-full w-full object-none rounded-xl"
              src="home-values-p-1080.webp"
              alt=""
            />
          </div>
          <div className="trait mt-9 bg-black"></div>
          <div className="right w-5/6">
            <div className="row1 my-10">
              <div className="flex">
                <span className="rond">01</span>
                <div>
                  <h1 className="mb-5 text-4xl uppercase">Vision</h1>
                  <p className="text-lg leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Scelerisque in dictum non consectetur a erat nam at.
                    Pretium aenean pharetra magna ac placerat.
                  </p>
                </div>
              </div>
            </div>
            <div className="borderBottom"></div>
            <div className="row2 my-10">
              <div className="flex">
                <span className="rond">02</span>
                <div>
                  <h1 className="mb-5 text-4xl uppercase">Innovation</h1>
                  <p className="text-lg leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Scelerisque in dictum non consectetur a erat nam at.
                    Pretium aenean pharetra magna ac placerat.
                  </p>
                </div>
              </div>
            </div>
            <div className="borderBottom"></div>
            <div className="row3 my-10">
              <div className="flex justify-between">
                <span className="rond">03</span>
                <div>
                  <h1 className="mb-5 text-4xl uppercase">Connection</h1>
                  <p className="text-lg leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Scelerisque in dictum non consectetur a erat nam at.
                    Pretium aenean pharetra magna ac placerat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="borderBottom"></div>
      <div className="flex section7">
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
      </div>
      <div className="borderBottom"></div>
      <div className="section8 mt-10 flex justify-between">
        <h1 className="uppercase text-7xl syne">Latest news</h1>
        <div className="mt-5 all">
          <NavLink className="btn-bg-none uppercase" to="#">
            See all
          </NavLink>
        </div>
      </div>
      <div className="borderBottom"></div>
      <div className="section9 py-14 flex justify-between">
        <div>
          <img
            className="rounded-md"
            src="./blog-01-preview-p-800.webp"
            alt=""
          />
          <h1 className="syne py-1">Branding</h1>
          <NavLink className="syne text-xl" to="#">
            Things to Look for When Comparing Branding Alternatives
          </NavLink>
        </div>
        <div className="trait mx-10 bg-black"></div>
        <div>
          <img
            className="rounded-md"
            src="./blog-02-preview-p-800.webp"
            alt=""
          />
          <h1 className="syne py-1">Branding</h1>
          <NavLink className="syne text-xl" to="#">
            5 Stand-out Features of Branding You Should Know
          </NavLink>
        </div>
        <div className="trait mx-10 bg-black"></div>
        <div>
          <img
            className="rounded-md"
            src="./blog-03-preview-p-800.webp"
            alt=""
          />
          <h1 className="syne py-1">Branding</h1>
          <NavLink className="syne text-xl" to="#">
            Branding: What Real Customers Have to Say
          </NavLink>
        </div>
      </div>
      <div className="borderBottom"></div>
      <Footer />
    </div>
  );
};

export default Home;
