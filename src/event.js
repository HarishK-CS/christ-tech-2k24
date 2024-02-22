import { Link } from "react-router-dom";
import clg_title from "./images/header.png";
import ChristTech2K24 from "./images/ChristTech2K24.png";
import pp from "./images/paper.png";
import quiz from "./images/quiz.jpg";
import techpuzzle from "./images/techpuzzle.png";
import innovata from "./images/photo.png";
import codedebugging from "./images/code.png";
import justimagine from "./images/justimagine.png";
import sightonsight from "./images/sight.png";
import Image from "react-bootstrap/Image";
import { CCard, CCardImage, CCardBody } from "@coreui/react";
import "./event.css";

const Event = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div>
            <img className="clg-title" src={clg_title} alt="Nil" />
          </div>
          <div>
            <img className="clg-title" src={ChristTech2K24} alt="Nil" />
          </div>
        </div>

        <div className="img-wrapper">
          <div className="img-panel">
            <CCard style={{ width: "18rem", height: "16rem" }}>
              <Link to={"/paperpresentation"} className="img-link">
                <CCardImage src={pp} className="event-img shadow " />
              </Link>
              <CCardBody>
                <div
                  className="text"
                  style={{ marginTop: "0", textAlign: "center" }}
                >
                  <h5 style={{ textDecoration: "None" }}>Paper Presentation</h5>
                </div>
              </CCardBody>
            </CCard>
          </div>

          <div className="img-panel">
            <CCard style={{ width: "18rem", height: "16rem" }}>
              <Link to={"/debugapalooza"} className="img-link">
                <Image
                  src={codedebugging}
                  style={{ objectFit: "fill" }}
                  className="event-img shadow"
                />
                {/* <CCardImage src={codedebugging} className="event-img shadow" /> */}
              </Link>
              <CCardBody>
                <div className="text" style={{ marginTop: "0" }}>
                  <h5 style={{ textDecoration: "None" }}>Debug-a-Palooza</h5>
                </div>
              </CCardBody>
            </CCard>
          </div>

          <div className="img-panel">
            <CCard style={{ width: "18rem", height: "16rem" }}>
              <Link to={"/techpuzzle"} className="img-link">
                <img
                  src={techpuzzle}
                  height="80%"
                  className="event-img shadow"
                />
              </Link>
              <CCardBody>
                <div className="text" style={{ marginTop: "0" }}>
                  <h5 style={{ textDecoration: "None" }}>Tech Puzzle</h5>
                </div>
              </CCardBody>
            </CCard>
          </div>

          <div className="img-panel">
            <CCard style={{ width: "18rem", height: "16rem" }}>
              <Link to={"/innovata"} className="img-link">
                <img
                  src={innovata}
                  height="80%"
                  style={{ objectFit: "fit", marginTop: "5%" }}
                  className="event-img shadow"
                />
              </Link>
              <CCardBody>
                <div className="text" style={{ marginTop: "0" }}>
                  <h5 style={{ textDecoration: "None" }}>Innovata</h5>
                </div>
              </CCardBody>
            </CCard>
          </div>

          <div className="img-panel">
            <CCard style={{ width: "18rem", height: "16rem" }}>
              <Link to={"/quizmaster"} className="img-link">
                <Image
                  src={quiz}
                  style={{ objectFit: "fill" }}
                  className="event-img shadow"
                />
                {/* <CCardImage
                  orientation="top"
                  src={quiz}
                  className="event-img shadow"
                /> */}
              </Link>
              <CCardBody>
                <div className="text" style={{ marginTop: "0" }}>
                  <h5 style={{ textDecoration: "None" }}>Quiz Master</h5>
                </div>
              </CCardBody>
            </CCard>
          </div>

          <div className="img-panel">
            <CCard style={{ width: "18rem", height: "16rem" }}>
              <Link to={"/sightonsite"} className="img-link">
                <img
                  src={sightonsight}
                  height="75%"
                  style={{ marginTop: "1%" }}
                  className="event-img shadow"
                />
              </Link>
              <CCardBody>
                <div className="text" style={{ marginTop: "0" }}>
                  <h5 style={{ textDecoration: "None" }}>Sight-On-Site</h5>
                </div>
              </CCardBody>
            </CCard>
          </div>

          <div className="img-panel">
            <CCard style={{ width: "18rem", height: "16rem" }}>
              <Link to={"/justimagine"} className="img-link">
                <img
                  src={justimagine}
                  height="80%"
                  style={{ marginTop: "5%" }}
                  className="event-img shadow"
                />
              </Link>
              <CCardBody>
                <div className="text" style={{ marginTop: "0" }}>
                  <h5 style={{ textDecoration: "None" }}>Just Imagine</h5>
                </div>
              </CCardBody>
            </CCard>
          </div>
        </div>
      </div>
      {/* <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} ChristTech2K24{" "}
        <a className="text-dark" href="https://mdbootstrap.com/">
          Powered By TechCos Inc
        </a>
      </div> */}
    </>
  );
};

export default Event;
