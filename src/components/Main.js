import React from "react";
import { Link } from "react-router-dom";

//STYLING
import "../styles/Main.css";
import NavBar from "./NavBar";

//REACT UI COMPONENTS
import { Row, Col } from "antd";
import { Layout } from "antd";

const { Footer } = Layout;

const Main = () => {
  return (
    <div>
      <NavBar />

      <Row>
        <Col span={24} className="content">
          <h1>START PLANING YOUR TRIP</h1>
          <img
            src="https://www.citymb.info/Home/ShowPublishedImage/32542/637272112976170000"
            alt="img"
          ></img>
          <Link to="/plan" className="link">
            <button>Take me there</button>
          </Link>
        </Col>
      </Row>

      <Footer className="footer" style={{ backgroundColor: "#878787" }}>
        Footer
      </Footer>
    </div>
  );
};

export default Main;
