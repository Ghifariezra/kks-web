import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import backgroundFooter from "../../assets/footer/bg-footer.png";

function FooterComponent() {
  return (
    <Container className="bg-footer" style={{ backgroundImage: `url(${backgroundFooter})`, backgroundSize: "cover", padding: "20px 0" }} fluid>
      {/* 2nd Row */}
      <Row>
        {/* 1st Row */}
        <Row>
          <h5 className="fw-bold" style={{ color: "white" }}>
            PT KAPITA KONSUL SINERGI
          </h5>
        </Row>
        <Row>
          <Col>
            <Row>
              <h5 className="fw-bold" style={{ color: "white" }}>
                Siap Berkolaborasi Untuk <br />
                Solusi Terbaik Bersama Kami?
              </h5>
            </Row>
            <Row>
              <Button variant="warning fw-semibold">Hubungi Kami dan Atur Jadwal Konsultasi</Button>
            </Row>
          </Col>
          <Col>
            <Row>
              <h5 className="fw-bold" style={{ color: "white" }}>
                Kontak Kami
              </h5>
            </Row>
            <Row>
              <h5 className="fw-bold" style={{ color: "white" }}>
                Kontak Kami
              </h5>
            </Row>
            <Row>
              <h5 className="fw-bold" style={{ color: "white" }}>
                Kontak Kami
              </h5>
            </Row>
            <Row>
              <h5 className="fw-bold" style={{ color: "white" }}>
                Kontak Kami
              </h5>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default FooterComponent;
