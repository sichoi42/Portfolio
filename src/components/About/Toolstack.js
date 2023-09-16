import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaFigma } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiIntellijidea,
  SiNotion,
  SiDatagrip,
} from "react-icons/si";

function renderTooltip(text) {
  return <Tooltip id="tooltip">{text}</Tooltip>;
}

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger placement="bottom" overlay={renderTooltip("MacOS")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiMacos />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={renderTooltip("IntelliJ IDEA")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiIntellijidea />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={renderTooltip("Visual Studio Code")}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("DataGrip")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiDatagrip />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Postman")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Figma")}>
        <Col xs={4} md={2} className="tech-icons">
          <FaFigma />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Slack")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiSlack />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Notion")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiNotion />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" overlay={renderTooltip("Vercel")}>
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Toolstack;
