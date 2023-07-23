//import Carousel from "react-multi-carousel";
import { Carousel, Button } from "react-bootstrap";

import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

const Feature = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const isDayTime = () => {
    const date = new Date(); // Get current date and time
    const hour = date.getHours(); // Get the current hour (0-23)

    // Define the range of hours considered as day time
    const startDayHour = 6; // 6:00 AM
    const endDayHour = 18; // 6:00 PM

    return hour >= startDayHour && hour < endDayHour;
  };

  return (
    <section className="skill" id="Feature">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              {isDayTime ? (
                <h2 className="pb-5">Timpla for the Day!</h2>
              ) : (
                <h2 className="pb-5">Timpla for the Night!</h2>
              )}
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p> */}
              {/* <Carousel
                responsive={responsive}
                infinite={true}
                data-bs-theme="dark"
                className="owl-carousel owl-theme skill-slider"
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18943edec28%20text%20%7B%20fill%3A%23afafaf%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18943edec28%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23f5f5f5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9140625%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h2>First Timpla</h2>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18943edec28%20text%20%7B%20fill%3A%23afafaf%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18943edec28%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23f5f5f5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9140625%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h2>Second Timpla</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18943edec28%20text%20%7B%20fill%3A%23afafaf%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18943edec28%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23f5f5f5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9140625%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h2>Third Timpla</h2>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel> */}

              <Carousel>
                <Carousel.Item>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          className="d-block w-100"
                          src="https://sih.booky.ph/eyJrZXkiOiJibG9nXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDIxXC8wNlwvMDkxMDQ0NDlcL1B1bnlldGEtRmlsaXBpbm8tQ29ja3RhaWwuanBnIiwiYnVja2V0IjoiYm9va3lyZXBvcnQiLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6Ijc3MCJ9fX0="
                          alt="First slide"
                        />
                      </div>
                      <div className="col-md-6 align-baseline">
                        <h3>Details Title 2</h3>
                        <ul>
                          <li>Recipe 4</li>
                          <li>Recipe 5</li>
                          <li>Recipe 6</li>
                        </ul>
                        <div>
                          <span>Rating:</span>
                          <span>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </span>
                        </div>
                        <Button variant="primary">View More</Button>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          className="d-block w-100"
                          src="https://sih.booky.ph/eyJrZXkiOiJibG9nXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDIxXC8wNlwvMDkxMDQzNDNcL01lc3RpemEtRmlsaXBpbm8tQ29ja3RhaWwuanBnIiwiYnVja2V0IjoiYm9va3lyZXBvcnQiLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6Ijc3MCJ9fX0="
                          alt="Second slide"
                        />
                      </div>
                      <div className="col-md-6 align-baseline">
                        <h3>Details Title 2</h3>
                        <ul>
                          <li>Recipe 4</li>
                          <li>Recipe 5</li>
                          <li>Recipe 6</li>
                        </ul>
                        <div>
                          <span>Rating:</span>
                          <span>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </span>
                        </div>
                        <Button variant="primary">View More</Button>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                {/* Add more Carousel.Item components for additional items */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Feature;
