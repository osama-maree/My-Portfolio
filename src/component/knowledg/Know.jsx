import React from "react";
import "./know.css";
import { IoLogoNodejs } from "react-icons/io";
import {
  SiMongodb,
  SiCplusplus,
  SiSequelize,
  SiMysql,
  SiLeetcode,
} from "react-icons/si";
import { FaReact, FaPhp } from "react-icons/fa";
import {
  DiNodejs,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiSass,
  DiJava,
  DiPython,
} from "react-icons/di";
const Know = () => {
  return (
    <div className="container">
      <div class="row ms-5 mt-5">
        <div className="mystyle  col-md-5 mb-5  me-4">
          <p className="text-light p-4">
            <span className="text-info">-- </span>I have the knowledge in
            different programming techniques, at present I am a MernStack
            developer.
            <br /> <br />
            <span className="text-info">-- </span>I recently started studying
            the dot net backend course.
            <br /> <br />
            <span className="text-info">-- </span>And I have knowledge in the
            field of problem solving My account is the light code below.
            <br /> <br />
            <span className="text-info">-- </span>Have knowledge of design
            patterns.
            <br /> <br />
            <span className="text-info">-- </span>I have knowledge of sql and
            nosql DataBase as MongoDb an MySQL.
            <br /> <br />
            <span className="text-info">-- </span>I know very well about the
            subject of JWT, Token and Refresh Token.
            <br /> <br />
            <span className="text-info">-- </span>Have knowledge in React Router
            Dom, Context Api, Hoks and React Life Cycle.
            <br /> <br />
            <span className="text-info">-- </span>I Have knowledge in building a
            responsive website.
            <br /> <br />
            <span className="text-info">-- </span>I had studied React JS
            recently and then completed an assistant course with Knowledge
            Academy.
            <br /> <br />
            <span className="text-info">-- </span>Here are the different
            languages and frameworks that I have studied and have knowledge of
          </p>
        </div>

        <div className="mystyle col-md-5  mb-5">
          <div className="itemss p-4 animate__animated animate__fadeInLeft">
            <div className="item pb-2">
              <h5 className="py-2 myh">MongoDB Expressjs nodejs Reactjs</h5>

              <div className="cont d-flex justify-content-around">
                <a href="https://www.mongodb.com/try/download/compass">
                  <SiMongodb className="icons mb-1" />
                </a>
                <a href="https://expressjs.com/">
                  <IoLogoNodejs className="icons" />
                </a>
                <a href="https://reactjs.org/">
                  <FaReact className="icons" />
                </a>
                <a href="https://nodejs.org/en/">
                  <DiNodejs className="icons" />
                </a>
              </div>
            </div>

            <div className="item pb-2">
              <h5 className="py-2 myh">Database sql and nosql as MongoDB</h5>

              <div className="cont d-flex justify-content-center gap-5">
                <a href="https://www.mongodb.com/try/download/compass">
                  <SiMongodb className="icons mb-1" />
                </a>
                <a href="https://www.mysql.com/">
                  <SiMysql className="icons" />
                </a>
              </div>
            </div>

            <div className="item pb-2">
              <h5 className="py-2 myh">ORM as sequelize</h5>

              <div className="cont d-flex justify-content-around">
                <a href="https://sequelize.org/">
                  <SiSequelize className="icons" />
                </a>
              </div>
            </div>

            <div className="item pb-2">
              <h5 className="py-2 myh">HTML CSS SASS Javascript</h5>

              <div className="cont d-flex justify-content-around">
                <a href="https://html.com/">
                  <DiHtml5 className="icons mb-1" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                  <DiCss3 className="icons" />
                </a>
                <a href="https://sass-lang.com/documentation/">
                  <DiSass className="icons" />
                </a>
                <a href="https://www.javascript.com/">
                  <DiJavascript1 className="icons" />
                </a>
              </div>
            </div>

            <div className="item pb-2">
              <h5 className="py-2 myh">Problem solving and data structure</h5>

              <div className="cont d-flex justify-content-around">
                <a href="https://leetcode.com/Osama-Maree/">
                  <SiLeetcode className="icons" />
                </a>
              </div>
            </div>

            <div className="item pb-2">
              <h5 className="py-2 myh">languages as: Java C++ PHP Python</h5>

              <div className="cont d-flex justify-content-around">
                <a href="https://www.java.com/en/">
                  <DiJava className="icons mb-1" />
                </a>
                <a href="https://devdocs.io/cpp/">
                  <SiCplusplus className="icons" />
                </a>
                <a href="https://www.php.net/docs.php">
                  <FaPhp className="icons" />
                </a>
                <a href="https://docs.python.org/3/">
                  <DiPython className="icons" />
                </a>
              </div>
            </div>
            <h5 className="py-2 myann myh w-100 text-center mt-4">
              I hope you like it and work on learning more things.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Know;
