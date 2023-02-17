import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import "./work.scss";

const Work = () => {
  const content = [
    {
      link1: "https://jovial-semifreddo-39e198.netlify.app",
      img: "/assets/auth3.png",
      title: "full stack authentication",
      desc: "Simple authentication I use nodejs,reactjs,firebase,expressjs",
      link: "https://github.com/osama-maree/firebase.git",
      id: 1,
    },
    {
      link1: "https://github.com/osama-maree/Auth.git",
      img: "/assets/auth2.png",
      title: "full stack authentication",
      desc: "Simple authentication I use nodejs,reactjs,sequlizeORM,expressjs,verify real your email,and send code and reset password and etc...",
      link: "https://github.com/osama-maree/Auth.git",
      id: 2,
    },

    {
      link1: "https://github.com/osama-maree/Saraha-App.git",
      img: "/assets/saraha.png",
      title: "Saraha App",
      desc: "Api for saraha website ,Most of the backend principles have been applied in it,as bearerToken, confirmEmail, refreshToken",
      link: "https://github.com/osama-maree/Saraha-App.git",
      id: 3,
    },
    {
      link1: "https://github.com/osama-maree/FullStackPHP.git",
      img: "/assets/full.png",
      title: "A simple project based on the PHP",
      desc: "It represents a simple site with a simple idea,An electronic library. Users can add and delete books, Admins can see,users and books, modify their data, add new users, and these are some illustrations",
      link: "https://github.com/osama-maree/FullStackPHP.git",
      id: 4,
    },
    {
      link1:
        "https://github.com/osama-maree/Prototype_Pattern_My_Implementation.git",
      img: "/assets/proto.png",
      title: "Prototype Pattern My Implementation",
      desc: "my Implementation of the prototype pattern in both types Shallow Clone and Deep Clone",
      link: "https://github.com/osama-maree/Prototype_Pattern_My_Implementation.git",
      id: 5,
    },
    {
      link1: "https://dulcet-rolypoly-01eb73.netlify.app",
      img: "/assets/todo.png",
      title: "Tasks",
      desc: "simple application to add task and delete etc..",
      link: "https://github.com/osama-maree/Todos.git",
      id: 6,
    },
    {
      link1: "https://github.com/osama-maree/Data-Structure.git",
      img: "/assets/data.png",
      title: "DataStructure",
      desc: "Execution of some data structures and I could not load all the code because I lost it when switching device and I was able to restore this part of the implementation This application was implemented in the fall semester 2020-2021",
      link: "https://github.com/osama-maree/Data-Structure.git",
      id: 7,
    },
    {
      link1: "https://harmonious-concha-3904c6.netlify.app",
      img: "/assets/auth.png",
      title: "Simple authentication",
      desc: "Simple authentication using local storage",
      link: "https://github.com/osama-maree/authnocation.git",
      id: 8,
    },
    {
      link1: "https://timely-flan-0942e4.netlify.app/",
      img: "/assets/router.png",
      title: "React Router Dom",
      desc: "A simple React Router Dom application with a simple validation,I usually use a library like joi for validation",
      link: "https://github.com/osama-maree/React-app-router.git",
      id: 9,
    },

    {
      link1: "https://github.com/osama-maree/Social-Media-App.git",
      img: "/assets/apiso.png",
      title: "Simple Api for social media project",
      desc: "I have used-mysql with sequelize orm - NodeJs - express",
      link: "https://github.com/osama-maree/Social-Media-App.git",
      id: 10,
    },
  ];

  const TextRef = useRef();
  useEffect(() => {
    init(TextRef.current, {
      showCursor: false,
      strings: [
        "Api to saraha Website on nodeJs",
        "Api to website as instgram",
        "auth in three ways",
        "1-fireBase,2-Api node,3-localstorage",
        "implementation for dataStructure",
        "simple clone for some game",
        "simple application react-router-dom",
      ],
    });
  }, []);

  return (
    <div className="container">
      <h3 className="mt-5 mb-5 mydes p-3 me-5">
        Some of my work <span ref={TextRef}></span>
      </h3>
      <br />

      <div className="row mt-5 mb-5 d-flex justify-content-center">
        <div className="col-md-8 mt-5">
          <MDBCarousel
            showIndicators
            showControls
            dealy={1000}
            className="mt-5"
          >
            {content.map((item, index) => {
              return (
               
                  <a href={item.link1} key={index}>
                    <MDBCarouselItem
                      className="w-100 d-block myimgg"
                      itemId={item.id}
                      src={item.img}
                      alt="..."
                    >
                      <div className="boxx py-2 pt-3">
                        <h5> {item.title}</h5>
                        <p>{item.desc}</p>
                        <a href={item.link} className="btn btn-success">
                          See source Code
                        </a>
                      </div>
                    </MDBCarouselItem>
                  </a>
               
              );
            })}
          </MDBCarousel>
        </div>
      </div>
    </div>
  );
};

export default Work;
