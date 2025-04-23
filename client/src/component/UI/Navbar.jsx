import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import customizeNavbarComponent from "../../css/navbar.module.css";
import useSubmitSchedule, { sendMessage } from "../../hooks/useSubmitSchedule.jsx";

function NavbarComponent() {
  const { submitSchedule } = useSubmitSchedule();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  const toggleMenu = () => setOpen(!open);
  const handleShowModal = () => {
    // console.log("Open Modal");
    setShowModal(true);
  };
  const handleCloseModal = () => {
    // console.log("Close Modal");
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const phoneRegex = /^[0-9]+$/;

      if (!phoneRegex.test(formData.phone)) {
        // alert("Nomor WhatsApp hanya boleh angka!");
        return;
      }

      try {
        // alert("Data berhasil dikirim!");
        await sendMessage(formData);

        setFormData({ name: "", phone: "", date: "", message: "" });
        handleCloseModal();
        
        await submitSchedule(formData);
      } catch (err) {
        console.error("Error submitting form:", err);
        // alert("Gagal mengirim data, silakan coba lagi.");
      }
    }

    setValidated(true);
  };

  return (
    <Container className="py-3">
      <Row className={`align-items-center ${customizeNavbarComponent.rowNavbarCustomize}`}>
        <Col xs={6} md={3}>
          <Image src="/assets/logo/hero-logo.png" alt="Logo" fluid />
        </Col>

        <Col xs={6} md={9} className="d-flex justify-content-end">
          {isMobile && (
            <Button variant="outline-dark" onClick={toggleMenu} aria-controls="navbar-collapse" aria-expanded={open} className={customizeNavbarComponent.customOutlineDark}>
              <i className="bi bi-list"></i>
            </Button>
          )}

          {!isMobile && (
            <Stack direction="horizontal" gap={4} className="align-items-center">
              <a className="nav-link" href="/">
                <h5>Home</h5>
              </a>
              <a className="nav-link" href="/about">
                <h5>Tentang Kami</h5>
              </a>
              <a className="nav-link" href="/service">
                <h5>Layanan</h5>
              </a>
              <a className="nav-link" href="#">
                <h5>Keunggulan</h5>
              </a>
              <a className="nav-link" href="/contact">
                <h5>Kontak</h5>
              </a>
              <Button variant="primary" className={`fw-semibold ${customizeNavbarComponent.btnPaddingCustom}`} onClick={handleShowModal}>
                Buat Jadwal
              </Button>
            </Stack>
          )}
        </Col>
      </Row>

      {isMobile && (
        <Collapse in={open}>
          <div id="navbar-collapse" className="mt-3">
            <Stack gap={2}>
              <a className="nav-link text-center w-100 fs-6 py-2" href="/">
                <h5>Home</h5>
              </a>
              <a className="nav-link text-center w-100 fs-6 py-2" href="/about">
                <h5>Tentang Kami</h5>
              </a>
              <a className="nav-link text-center w-100 fs-6 py-2" href="/service">
                <h5>Layanan</h5>
              </a>
              <a className="nav-link text-center w-100 fs-6 py-2" href="#">
                <h5>Keunggulan</h5>
              </a>
              <a className="nav-link text-center w-100 fs-6 py-2" href="/contact">
                <h5>Kontak</h5>
              </a>
              <Button variant="primary" className="mt-2 fw-semibold" onClick={handleShowModal}>
                Buat Jadwal
              </Button>
            </Stack>
          </div>
        </Collapse>
      )}

      {/* Modal Pop-up */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Buat Jadwal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nama</Form.Label>
              <Form.Control required type="text" placeholder="Masukkan nama Anda" name="name" value={formData.name} onChange={handleChange} />
              <Form.Control.Feedback type="invalid">Nama wajib diisi.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Nomor WhatsApp</Form.Label>
              <Form.Control required type="tel" pattern="[0-9]*" inputMode="numeric" placeholder="628xxxxxxxxxx" name="phone" value={formData.phone} onChange={handleChange} />
              <Form.Control.Feedback type="invalid">Nomor WhatsApp wajib diisi.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Tanggal Jadwal</Form.Label>
              <Form.Control required type="date" name="date" value={formData.date} min={new Date().toISOString().split("T")[0]} onChange={handleChange} />
              <Form.Control.Feedback type="invalid">Tanggal wajib diisi.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Context Message</Form.Label>
              <Form.Control required as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} />
              <Form.Control.Feedback type="invalid">Pesan wajib diisi.</Form.Control.Feedback>
            </Form.Group>
            {/* Ini pengganti Modal.Footer */}
            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button variant="secondary fw-semibold" onClick={handleCloseModal}>
                Tutup
              </Button>
              <Button type="submit" variant="primary fw-semibold">
                Kirim
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default NavbarComponent;
