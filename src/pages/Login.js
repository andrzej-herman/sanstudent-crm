import React from "react";
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import Loader from "../components/Loader";
import logoSm from "../assets/images/logo-sm.png";
import { useStateValue } from "../redux/StateProvider";

const Login = () => {
  const [{ isLoading, response, user }, dispatch] = useStateValue();
  const handleValidSubmit = (event, values) => {
    alert(`EMail => ${values.email}, Hasło => ${values.password}`);
    // ! this.props.loginUser(values, this.props.history);
  };

  return (
    <div className="account-pages my-5 pt-5">
      <div className="container">
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <div className="position-relative">
              {isLoading ? <Loader /> : null}

              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">SanStudent CRM</h5>
                    <p className="text-white-50">
                      System zarządzania nauczaniem dla wykładowców
                    </p>
                    <Link to="/" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </Link>
                  </div>
                </div>

                <CardBody className="p-4">
                  <div className="p-3">
                    <AvForm
                      className="form-horizontal mt-4"
                      onValidSubmit={handleValidSubmit}
                    >
                      {response ? (
                        <Alert color="danger">{response}</Alert>
                      ) : null}

                      <div className="form-group mt-5">
                        <AvField
                          name="email"
                          className="form-control"
                          type="email"
                          placeholder="Adres email"
                          validate={{
                            required: {
                              value: true,
                              errorMessage: "Proszę podać adres email",
                            },
                            email: {
                              errorMessage: "Nieprawidłowy adres email",
                            },
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <AvField
                          className="mt-4"
                          name="password"
                          placeholder="Hasło"
                          type="password"
                          validate={{
                            required: {
                              value: true,
                              errorMessage: "Proszę podać hasło",
                            },
                          }}
                        />
                      </div>

                      <Row className="form-group">
                        <Col sm={6}>&nbsp;</Col>
                        <Col sm={6} className="text-right">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light mt-2"
                            type="submit"
                          >
                            Zaloguj się
                          </button>
                        </Col>
                      </Row>
                      <Row className="form-group mt-2 mb-0">
                        <div className="col-12 mt-4">
                          <Link to="/register">
                            <i className="mdi mdi-account-plus"></i> Rejestracja
                            nowego wykładowcy{" "}
                          </Link>
                        </div>
                        <div className="col-12 mt-2">
                          <Link to="/forgot">
                            <i className="mdi mdi-lock"></i> Odzyskiwanie hasła{" "}
                          </Link>
                        </div>
                      </Row>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="mt-5 text-center">
              <p className="mb-0">
                {new Date().getFullYear()} © Projekt i realizacja: mgr inż
                Andrzej Herman
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
