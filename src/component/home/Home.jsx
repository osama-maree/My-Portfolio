import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="container animate__animated animate__bounce mb-0">
      <div className="row">
        <div className="col-md-5">
          <img src="/assets/osama.jpg" className="img-fluid" alt="ddd" />
        </div>
        <div className="col-md-7 mt-5">
          <h2 className="mb-5 ms-4 mt-5 fw-bold text-center py-3">
            My Name<span className="text-secondary"> : </span>OSAMA M
            <span className="text-success">REI</span>
          </h2>
          <p className="mypar card-text ms-4 mt-5 mb-5 p-4">
            <span className="text-info fw-bold">1- </span>I like to spend my
            time in programming and learning new technologies
            <br />
            <br />
            <span className="text-info fw-bold ">2- </span>I seek to help others
            as much as possible
            <br />
            <br />
            <span className="text-info fw-bold">3- </span>Participate in
            volunteer activities as explaining materials to students, the most
            important of which are C++, Java and Data Structure for free
            <br />
            <br />
            <span className="text-info fw-bold">4- </span>I attended several
            seminars, the most important of them the annual{" "}
            <span className="keys">Expotech</span> symposium, which is located
            in Ramallah, the Millennium Hotel, and the Palestine Technical
            Symposium, in the presence of His Excellency the Prime Minister Dr.
            Muhammad Shtayyeh
          </p>
          <p className=" mycard-update card-text ms-4 mt-5 py-1 px-4">
            Who am I,and what do I do?
          </p>
          <Link to="/about" className="ms-4 px-4 mb-4 btn btn-success">
            learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
