import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import emailjs from "@emailjs/browser";
import { Alert } from "react-bootstrap";
import "./contact.css";
import { SiLeetcode } from "react-icons/si";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import {BsInstagram}from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Contact = () => {
  const form = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [Pass, setPass] = useState("");
  const [email,setEmail]=useState()
  useEffect(()=>{
    const chechMail=()=>{
   if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
   setLoading(false)
    }
    chechMail()
  },[email])

  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    emailjs
      .sendForm(
        "service_resyjoj",
        "template_66dosgn",
        form.current,
        "ebTTJwVVnmoov4T3i"
      )
      .then(
        (result) => {
          setPass("success");
        },
        (error) => {
          setError("Failed");
        }
      );
    setLoading(false);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5 d-flex justify-content-center">
          <div className="content mt-5 mb-5 animate__animated animate__fadeInLeft">
            <p className="mypP pt-3 ps-2 pe-2">
              <span className="text-info">---&gt;</span>CONTAACT MET
              <span className="text-info"> &lt;--- </span>
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <Card className="animate__animated animate__fadeInLeft">
            <Card.Body>
              <Form ref={form} onSubmit={handelSubmit}>
                {error && <Alert variant="danger">{error}</Alert>}
                {Pass && <Alert variant="success">{Pass}</Alert>}
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="name">Name</Form.Label>
                  <Form.Control
                    id="name"
                    placeholder="please enter your name"
                    type="text"
                    name="to_name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    id="email"
                    placeholder="please enter your email"
                    type="email"
                    name="from_name"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledSelect">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="enter Your message"
                    id="disabledSelect"
                    name="message"
                  />
                </Form.Group>

                <Button type="submit" disabled={loading}>
                  Send
                </Button>
              </Form>
            </Card.Body>
          </Card>

          <Card className="mt-3 animate__animated animate__fadeInLeft">
            <Card.Body>
              <div className="item pb-2">
                <h5 className="py-2 myh">My Social Media Website</h5>

                <div className="cont d-flex justify-content-around">
                  <a href="https://www.facebook.com/profile.php?id=100070606794397">
                    <FaFacebook className="icons mb-1" />
                  </a>
                  <a href="https://www.instagram.com/osama._.mahmoud/">
                    <BsInstagram className="icons" />
                  </a>
                  <a href="https://wa.me/+972566066174">
                    <FaWhatsapp className="icons" />
                  </a>
                  <a href="https://www.linkedin.com/in/osama-maree-7996b3239/">
                    <AiFillLinkedin className="icons" />
                  </a>
                </div>
              </div>

              <div className="item pb-2 mt-3">
                <h5 className="py-2 myh">My Programming Website</h5>

                <div className="cont d-flex justify-content-center gap-5">
                  <a href="https://github.com/osama-maree">
                    <AiFillGithub className="icons mb-1" />
                  </a>
                  <a href="https://leetcode.com/Osama-Maree/">
                    <SiLeetcode className="icons" />
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="mb-4 animate__animated animate__fadeInLeft">
            <Card.Body>
              <img
                src="/assets/badel.jpg"
                className="h-100 w-100 myimgg"
                alt="contact me osama"
              />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
