import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaAws, FaDocker, FaJava, FaNode } from "react-icons/fa";
import {
  SiRedis,
  SiFirebase,
  SiExpress,
  SiNestjs,
  SiMariadb,
  SiMysql,
  SiJavascript,
  SiGit,
  SiPython,
  SiTypescript,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiGithubactions,
  SiAwslambda,
  SiSwagger,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";

function renderTooltip(text) {
  return <Tooltip id="tooltip">{text}</Tooltip>;
}

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger placement="bottom" overlay={renderTooltip("Java")}>
        <Col xs={4} md={2} className="tech-icons">
          <FaJava />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Spring")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiSpring />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Spring Boot")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiSpringboot />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={renderTooltip("Spring Security")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiSpringsecurity />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Typescript")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Javascript")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiJavascript />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("NodeJS")}>
        <Col xs={4} md={2} className="tech-icons">
          <FaNode />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("ExpressJS")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("NestJS")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiNestjs />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Python")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPython />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("MySQL")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("MariaDB")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiMariadb />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Redis")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedis />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Firebase")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Docker")}>
        <Col xs={4} md={2} className="tech-icons">
          <FaDocker />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Git")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiGit />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={renderTooltip("Github Actions")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiGithubactions />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("AWS")}>
        <Col xs={4} md={2} className="tech-icons">
          <FaAws />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("AWS Lambda")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiAwslambda />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Swagger")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiSwagger />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Prometheus")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPrometheus />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Grafana")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiGrafana />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Techstack;
