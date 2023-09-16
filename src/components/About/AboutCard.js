import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t, i18n } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {i18n.language === "en" ? (
            <p style={{ textAlign: "justify" }}>
              Hello, I am <span className="purple">Sichoi</span>.
              <br />I am majoring in Computer Science at{" "}
              <a className="purple" href="https://www.dongguk.edu/">
                Dongguk Univ.
              </a>
              <br />
              I am currently in my Junior year.
              <br />
              Additionally, I am studying software engineering and working on
              various projects at{" "}
              <a className="purple" href="https://42seoul.kr">
                42 Seoul
              </a>
              .
              <br />
              <br />
            </p>
          ) : (
            <p style={{ textAlign: "justify" }}>
              안녕하세요, 저는 <span className="purple">최시원</span>입니다.
              <br />
              현재{" "}
              <a className="purple" href="https://www.dongguk.edu/">
                동국대학교
              </a>
              에서 컴퓨터공학과를 전공하고 있어요. 지금은 3학년입니다.
              <br />
              또한{" "}
              <a className="purple" href="https://42seoul.kr">
                42 Seoul
              </a>
              에서 소프트웨어 공부와 다양한 프로젝트를 진행하고 있어요.
              <br />
              <br />
              <br />
            </p>
          )}

          {i18n.language === "en" ? (
            <div>
              <p style={{ color: "rgb(155 126 172)" }}>
                "The most important thing for a developer is to know how to
                catch fish"
              </p>
              <footer className="blockquote-footer">Sichoi</footer>
            </div>
          ) : (
            <div>
              <p style={{ color: "rgb(155 126 172)" }}>
                "개발자에게 가장 중요한 것은 물고기 잡는 방법을 아는 것이다"{" "}
              </p>
              <footer className="blockquote-footer">최시원</footer>
            </div>
          )}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
