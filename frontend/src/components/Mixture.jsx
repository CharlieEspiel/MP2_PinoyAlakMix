import { Container, Row, Col, Tab, Nav, Card } from "react-bootstrap";

const Mixture = () => {
  return (
    <section className="project" id="Mixture">
      <Container>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  This is a sample card with some sample text.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  This is another sample card with some sample text.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  This is a third sample card with some sample text.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Card 4</Card.Title>
                <Card.Text>
                  This is the fourth sample card with some sample text.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Mixture;
