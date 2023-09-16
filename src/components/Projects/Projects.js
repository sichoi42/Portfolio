import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cabi from "../../Assets/Projects/cabi.svg";
import voice from "../../Assets/Projects/voice.svg";
import diary from "../../Assets/Projects/diary.svg";
import bossle from "../../Assets/Projects/bossle.svg";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t, i18n } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>{t("project.subTitle")}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cabi}
              isBlog={false}
              title={t("project.cabi.title")}
              description={t("project.cabi.description")}
              ghLink={t("project.cabi.ghLink")}
              demoLink={t("project.cabi.demoLink")}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voice}
              isBlog={false}
              title={t("project.voice-with-me.title")}
              description={t("project.voice-with-me.description")}
              ghLink={t("project.voice-with-me.ghLink")}
              demoLink={t("project.voice-with-me.demoLink")}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diary}
              isBlog={false}
              title={t("project.diary.title")}
              description={t("project.diary.description")}
              ghLink={t("project.diary.ghLink")}
              demoLink={t("project.diary.demoLink")}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bossle}
              isBlog={false}
              title={t("project.bossle.title")}
              description={t("project.bossle.description")}
              ghLink={t("project.bossle.ghLink")}
              demoLink={t("project.bossle.demoLink")}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
