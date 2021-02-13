import React from "react";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <TopBar />
      <div className="container-fluid" style={{ padding: 70 }}>
        <Row className="align-items-center">
          <Col sm={6}>
            <div className="page-title-box">
              <h4 className="font-size-18">Basic Tables</h4>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/#">Veltrix</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/#">Tables</Link>
                </li>
                <li className="breadcrumb-item active">Basic Tables</li>
              </ol>
            </div>
          </Col>

          <Col sm="6">
            <div className="float-right d-none d-md-block">
              {/* <SettingMenu /> */}
            </div>
          </Col>
        </Row>

        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
