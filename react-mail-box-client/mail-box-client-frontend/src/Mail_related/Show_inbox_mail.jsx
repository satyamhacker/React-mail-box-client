import React, { useEffect, useState, useContext } from "react";
import { Toast, Container } from "react-bootstrap";
import Context from "../Context/Context";
import { Home_header } from "./Home";
import { useNavigate, Link } from "react-router-dom";

const Show_inbox_mail = () => {
  const [emailData, setEmailData] = useState([]);

  const ContextData = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!ContextData.logIn()) {
      console.log(ContextData.logIn());
      alert("please login first");
      navigate("/login");
    } else {
      setEmailData(ContextData.MailDetail[0]);
    }
  }, []);

  return (
    <div>
      <Home_header />
      <Container>
        <Toast>
          <Toast.Header>
            <img src="valid-image-source" className="rounded me-2" alt="" />
            <strong className="me-auto text-4xl">Email Details</strong>
          </Toast.Header>
          <Toast.Body>
            <span className="text-2xl">Subject:</span>
            {emailData.subject}
          </Toast.Body>
          <Toast.Body>
            <span className="text-2xl">senderEmail:</span>
            {emailData.senderEmail}
          </Toast.Body>
          <Toast.Body>
            <span className="text-2xl">receiverEmail:</span>
            {emailData.receiverEmail}
          </Toast.Body>
          <Toast.Body>
            <span className="text-2xl">timeStamp:</span>
            {emailData.timeStamp}
          </Toast.Body>
          <br />
          <Toast.Body>
            <span className="text-2xl">content:</span>
            {emailData.content}
          </Toast.Body>
        </Toast>
      </Container>
    </div>
  );
};

export default Show_inbox_mail;
