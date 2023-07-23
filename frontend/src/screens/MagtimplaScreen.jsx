import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img2.png";
import TimplaLists from "../components/TimplaLists";

const MagtimplaScreen = () => {
  return (
    <>
      <section className="contact my-5" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <img src={headerImg} alt="Header Img" />
            </Col>
            <Col size={12} md={6}>
              <h2>Create your Amazing Timpla!</h2>
              <form>
                <Row>
                  <Col size={12} sm={12} className="px-1">
                    <input
                      type="text"
                      placeholder="Mix Title"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>

                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      placeholder="Ingredients"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                  </Col>
                  <Col size={12} sm={12} className="px-1">
                    <input
                      type="file"
                      placeholder="Mix Title"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                    <button type="submit">
                      <span>Create</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
      <TimplaLists />
    </>
  );
};

export default MagtimplaScreen;
