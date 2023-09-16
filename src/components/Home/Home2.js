import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Home2() {
  const { t, i18n } = useTranslation();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            {i18n.language === "en" ? (
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
            ) : (
              <h1 style={{ fontSize: "2.6em" }}>
                저에 대해 <span className="purple">소개</span>해 드릴게요
              </h1>
            )}

            {i18n.language === "en" ? (
              <p className="home-about-body">
                I love programming and enjoy learning new things.
                <br />
                There's still a lot to learn, but I'm constantly growing with
                this mindset.
                <br />
                If I were to describe myself in one line,{" "}
                <b className="purple">
                  {" "}
                  I'm a developer who knows how to catch fish.
                </b>
                <br />
                <br />I am proficient in these languages:
                <i>
                  <b className="purple">Java, Javascript/Typescript, Python</b>
                </i>
                <br />
                <br />I have an interest in the following areas:
                <i>
                  <b className="purple">Server, Cloud Service, Automation</b>
                </i>
                <br />
                <br />
                I primarily develop using the following technologies:
                <br />·{" "}
                <b className="purple">Spring, Spring Boot, Spring Framework</b>
                <br />· <b className="purple">Node.js</b>, and
                <i>
                  <b className="purple"> Express.js, Nest.js</b>
                </i>
                &nbsp;like
                <i>
                  <b className="purple"> Modern Javascript Frameworks</b>
                </i>
              </p>
            ) : (
              <p className="home-about-body">
                저는 프로그래밍을 사랑하고 새로운 것을 배우는 것을 좋아해요.{" "}
                <br />
                아직 배울 것이 많지만, 이런 마음가짐으로 끊임없이 성장하고
                있어요. <br />
                저에 대해 한 줄로 표현하자면,{" "}
                <b className="purple"> 물고기 잡는 방법을 아는 개발자 </b>
                입니다.
                <br />
                <br />
                저는 이 언어들을 잘 다룹니다.
                <i>
                  <b className="purple">
                    {" "}
                    Java, Javascript/Typescript, Python{" "}
                  </b>
                </i>
                <br />
                <br />
                저는 다음과 같은 분야에 관심이 있어요.
                <i>
                  <b className="purple"> Server, Cloud Service, Automation </b>
                </i>
                <br />
                <br />
                저는 주로 다음과 같은 기술들을 이용하여 개발해요.
                <br />·{" "}
                <b className="purple"> Spring, Spring Boot, Spring Framework</b>
                <br />· <b className="purple"> NodeJS</b> 그리고
                <i>
                  <b className="purple"> ExpressJS, NestJS</b>
                </i>
                &nbsp;같은
                <i>
                  <b className="purple"> Modern Javascript Frameworks</b>
                </i>
              </p>
            )}
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            {i18n.language === "en" ? (
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
            ) : (
              <p>
                저에 대해 궁금한 점이 있으시면 언제든지{" "}
                <span className="purple">연락</span>주세요
              </p>
            )}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sichoi42"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/최시원/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/csiweon"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
