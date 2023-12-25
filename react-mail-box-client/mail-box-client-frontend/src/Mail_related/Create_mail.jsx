import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Home_header } from "./Home";
import {
  Form,
  Button,
  Toast,
  Dropdown,
  Navbar,
  Nav,
  InputGroup,
  Container,
} from "react-bootstrap";
import Add_mail_api from "../api/Add_mail_api";
import Context from "../Context/Context";

function Add_mail() {
  const ContextData = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!ContextData.logIn()) {
      console.log(ContextData.logIn());
      alert("please login first");
      navigate("/login");
    }
  }, []);
  const [mailData, setmailData] = useState({
    To: "",
    Subject: "",
    Content: "",
  });

  const addMailData = () => {
    const addMailToDatabase = async () => {
      const response = await Add_mail_api(
        mailData,
        ContextData.loggedInUserMail
      );
      if (response == "true") {
        alert("Email added");
      } else {
        alert("Network error please try again later");
      }
    };
    addMailToDatabase();
  };

  return (
    <>
      <Home_header />
      <Container>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">To</InputGroup.Text>
          <Form.Control
            placeholder="Give Email of User To which you want to send Email"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={mailData.To}
            onChange={(e) => setmailData({ ...mailData, To: e.target.value })}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Subject</InputGroup.Text>
          <Form.Control
            placeholder="Subject of your email"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={mailData.Subject}
            onChange={(e) =>
              setmailData({ ...mailData, Subject: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Content</InputGroup.Text>
          <Form.Control
            as="textarea"
            placeholder="Write your email content here"
            aria-label="With textarea"
            value={mailData.Content}
            onChange={(e) =>
              setmailData({ ...mailData, Content: e.target.value })
            }
          />
        </InputGroup>
        <Button variant="success" className="bg-blue-500" onClick={addMailData}>
          Send Email
        </Button>
      </Container>
    </>
  );
}

export default Add_mail;
