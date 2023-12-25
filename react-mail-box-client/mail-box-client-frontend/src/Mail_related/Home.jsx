import React, { useState, navigate, useContext, useEffect } from "react";
import {
  Form,
  Button,
  Toast,
  Dropdown,
  Navbar,
  Nav,
  Card,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Context from "../Context/Context";

export function Home() {
  const ContextData = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!ContextData.logIn()) {
      console.log(ContextData.logIn());
      alert("please login first");
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Home_header />
      <Home_contents />
    </>
  );
}

export function Home_header() {
  const ContextData = useContext(Context);
  const navigate = useNavigate();
  //console.log("testing", ContextData.Mail());
  const logout_button = () => {
    ContextData.makeLoggedOut();
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary m-8">
      <Container className="bg-blue-100 p-3">
        <Navbar.Brand>Mailer App</Navbar.Brand>
        <Nav.Link>
          <Link to="/inboxmail">Inbox</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/sentmail">Sent Mail</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/addmail">Create Mail</Link>
        </Nav.Link>
        <Navbar.Brand className="underline text-blue-600">
          {ContextData.loggedInUserMail}
        </Navbar.Brand>
        <Button
          variant="danger"
          onClick={logout_button}
          className="bg-white-900"
        >
          <Navbar.Brand>Logout</Navbar.Brand>
        </Button>
      </Container>
    </Navbar>
  );
}

function Home_contents() {
  return (
    <>
      <Container>
        <h1 className="display-3">Welcome to Mailbox App</h1>
        <br />

        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Compose Email</Card.Title>
                <Card.Text>
                  Create and send new emails to your contacts.
                </Card.Text>
                <Button variant="success" className="bg-blue-500">
                  <Link to="/addmail">Compose mail</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Inbox</Card.Title>
                <Card.Text>
                  Create and send new emails to your contacts.
                </Card.Text>
                <Button variant="success" className="bg-blue-700">
                  <Link to="/inboxmail">Go to Inbox</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
