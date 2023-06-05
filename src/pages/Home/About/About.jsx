import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero bg-base-200 py-36">
        <div className="hero-content flex-col lg:flex-row justify-center">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2 absolute rounded-lg  shadow-2xl right-12 top-3/4 border-4 border-white"
            />
          </div>
          <div className="w-1/2 p-3">
            <h3 className="text-3xl text-orange-500 font-bold pb-5">
              About Us
            </h3>
            <h1 className="text-5xl w-3/2 font-bold">
              We Are Qualified & of Experience in this Field
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit
            </p>
            <p>
              Quis nulla ipsum saepe quae nihil ratione veritatis laborum
              quibusdam dolores laboriosam culpa adipisci dolorem necessitatibus
              iusto fuga cumque laudantium, exercitationem aspernatur!
            </p>
            <button className="btn btn-primary mt-5">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
