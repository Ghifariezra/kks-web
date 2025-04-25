import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import customizeFooterComponent from "../../css/footer.module.css";

function FooterComponent() {
  return (
    <Container className="bg-footer position-relative p-0" style={{ overflow: "hidden" }} fluid>
      <img
        src="/assets/footer/bg-footer.webp"
        alt="Footer Background"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", zIndex: -1 }}
        fetchpriority="high"
      />
      {/* 2nd Row */}
      <Row className="py-5 px-5">
        {/* 1st Row */}
        <Row style={{ paddingBottom: "45px" }}>
          <h5 role="heading" aria-level="2" className="fw-bold" style={{ color: "white" }}>
            PT KAPITA KONSUL SINERGI
          </h5>
        </Row>
        <Row className="gap-5">
          <Col>
            <Row style={{ paddingBottom: "21px" }}>
              <h4 role="heading" aria-level="3" className="fw-bold" style={{ color: "white" }}>
                Siap Berkolaborasi Untuk <br />
                Solusi Terbaik Bersama Kami?
              </h4>
            </Row>
            <Row>
              <Button className={customizeFooterComponent.btnFooter} variant="warning fw-semibold">Hubungi Kami dan Atur Jadwal Konsultasi</Button>
            </Row>
          </Col>
          <Col>
            {/* <Row>
              <h5 className="fw-semibold" style={{ color: "white" }}>
                Kontak Kami
              </h5>
            </Row>
            <Row>
              <h5 className="fw-semibold" style={{ color: "white" }}>
                <i class="bi bi-instagram"></i>
                @kapitakonsulsinergi
              </h5>
            </Row>
            <Row>
              <h5 className="fw-semibold" style={{ color: "white" }}>
                <i class="bi bi-whatsapp"></i>
                0893 9389 9839
              </h5>
            </Row>
            <Row>
              <h5 className="fw-semibold" style={{ color: "white" }}>
                <i class="bi bi-envelope"></i>
                kapitakonsulsinergi@gmail.com
              </h5>
            </Row> */}
            <Stack gap={3}>
              <h5 role="heading" aria-level="4" className="fw-semibold" style={{ color: "white" }}>
                Kontak Kami
              </h5>
              <a href="#" className="text-decoration-none">
                <h5 className="fw-semibold" style={{ color: "white" }}>
                  <i className="bi bi-instagram"
                    style={{ paddingRight: "16px" }}></i>
                  @kapitakonsulsinergi
                </h5>
              </a>
              <a href="#" className="text-decoration-none">
                <h5 className="fw-semibold" style={{ color: "white" }}>
                  <i className="bi bi-whatsapp"
                    style={{ paddingRight: "16px" }}></i>
                  0893 9389 9839
                </h5>
              </a>
              <a href="#" className="text-decoration-none">
                <h5 className="fw-semibold" style={{ color: "white" }}>
                  <i className="bi bi-envelope"
                    style={{ paddingRight: "16px" }}></i>
                  kapitakonsulsinergi@gmail.com
                </h5>
              </a>
            </Stack>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default FooterComponent;
