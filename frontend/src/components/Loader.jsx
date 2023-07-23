import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    // <Spinner
    //   animation="border"
    //   role="status"
    //   style={{
    //     width: "100px",
    //     height: "100px",
    //     margin: "auto",
    //     display: "block",
    //   }}
    // ></Spinner>

    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
  );
};

export default Loader;
