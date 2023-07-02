import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">Mix it Pinoy Style</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Feature</Nav.Link>
            <Nav.Link href="#link">Mixture</Nav.Link>
          </Nav>
          <Button variant="outline-success">Magtimpla</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
