import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work margin">
      <Navigation />
      <div className="title h-64">
        <h1 className="work-text syne w-1/2">Our branding success stories.</h1>
      </div>
      <div class="borderBottom"></div>
      <div className="work1 gap-48 my-16 syne flex">
        <div className="link uppercase">
          <NavLink className="text-6xl first" to="">
            Dancing Stars
          </NavLink>
          <div className="flex links my-20 gap-8 flex-col">
            <NavLink to="">Content</NavLink>
            <NavLink to="">Video</NavLink>
            <NavLink to="">Design</NavLink>
          </div>
          <NavLink className="view" to="">
            View projet
          </NavLink>
        </div>
        <div className="imgs">
          <img
            className="rounded-2xl h-full w-full"
            src="./project-01-p-1600.webp"
            alt=""
          />
        </div>
      </div>
      <div class="borderBottom"></div>
      <div className="work2 gap-4 my-16 syne flex">
        <div className="link uppercase">
          <NavLink className="text-6xl first" to="">
            Enjoy Silence
          </NavLink>
          <div className="flex links my-28 gap-8 flex-col">
            <NavLink to="">Content</NavLink>
            <NavLink to="">Branding</NavLink>
          </div>
          <NavLink className="view" to="">
            View projet
          </NavLink>
        </div>
        <div className="imgs">
          <img
            className="rounded-2xl h-full w-full"
            src="./project-02-p-800.webp"
            alt=""
          />
        </div>
      </div>
      <div class="borderBottom"></div>
      <div className="work3 gap-64 my-16 syne flex">
        <div className="link uppercase">
          <NavLink className="text-6xl first" to="">
            Pure <br /> Vision
          </NavLink>
          <div className="flex links my-28 gap-8 flex-col">
            <NavLink to="">Branding</NavLink>
            <NavLink to="">Video</NavLink>
            <NavLink to="">Content</NavLink>
          </div>
          <NavLink className="view" to="">
            View projet
          </NavLink>
        </div>
        <div className="imgs">
          <img
            className="rounded-2xl h-full w-full"
            src="./project-03-p-800.webp"
            alt=""
          />
        </div>
      </div>
      <div class="borderBottom"></div>
      <div className="work4 gap-4 my-16 syne flex">
        <div className="link uppercase">
          <NavLink className="text-6xl first" to="">
            Boring Brand
          </NavLink>
          <div className="flex links my-28 gap-8 flex-col">
            <NavLink to="">Branding</NavLink>
            <NavLink to="">Content</NavLink>
          </div>
          <NavLink className="view" to="">
            View projet
          </NavLink>
        </div>
        <div className="imgs">
          <img
            className="rounded-2xl h-full w-full"
            src="./project-04-p-800.webp"
            alt=""
          />
        </div>
      </div>
      <div class="borderBottom"></div>
      <div className="work5 gap-4 my-16 syne flex">
        <div className="link uppercase">
          <NavLink className="text-6xl first" to="">
            New Culture
          </NavLink>
          <div className="flex links my-28 gap-8 flex-col">
            <NavLink to="">Design</NavLink>
            <NavLink to="">Video</NavLink>
          </div>
          <NavLink className="view" to="">
            View projet
          </NavLink>
        </div>
        <div className="imgs">
          <img
            className="rounded-2xl h-full w-full"
            src="./project-05-p-800.webp"
            alt=""
          />
        </div>
      </div>
      <div class="borderBottom"></div>
      <Footer />
    </div>
  );
};

export default Work;
