import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className="container">
      <div className="block mt-5 mb-3 p-4">
        <div className="row">
          <div className="col-md-5">
            <img
              src="/assets/about.jpg"
              className="img-fluid"
              style={{ clipPath: "none" }}
              alt=""
            />
          </div>
          <div className="col-md-7 animate__animated animate__bounce p-3">
            <h2 className="myh ms-4 p-2">
              Very calm, serious and fun at the same time
            </h2>
            <h5 className="myh ms-4 mt-4 p-3">
              I am studying a Bachelor's degree in Computer Engineering
            </h5>
            <h4 className="myh ms-4 mt-4 p-3">
              GPA 88% && High School (Tawjihi)93%
            </h4>
            <h5 className="myh ms-4 mt-4 p-3">
              I am a web developer and in my last university year I like to
              share my experience with others and I like to learn modern
              technologies
            </h5>
            <p className="ms-4 mt-5 myp p-4">
              <span className="text-info fw-bold">-- </span>I always strive to
              learn modern technologies and expand my knowledge in the field of
              programming.
              <br /> <br />
              <span className="text-info fw-bold">-- </span>I also previously
              provided a free C Plus Plus course and uploaded it to the YouTube
              platform.
              <br /> <br />
              <span className="text-info fw-bold">-- </span>Acquire the skill of
              communicating with different individuals all the time I am good at
              teamwork and can handle work pressure.
              <br /> <br />
              <span className="text-info fw-bold">-- </span>I am not good at
              nervousness at all, meet me and then judge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About