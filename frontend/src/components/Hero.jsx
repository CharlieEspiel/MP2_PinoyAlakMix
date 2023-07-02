import React from "react";
import { Carousel } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://img.freepik.com/premium-vector/summer-design-seascape-background-vector-illustration_24908-44046.jpg?w=2000"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              maxime ullam, voluptates placeat quam minima suscipit consequatur
              ipsam optio doloremque illum vel voluptas iusto quos accusantium,
              in, sit adipisci deserunt.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
