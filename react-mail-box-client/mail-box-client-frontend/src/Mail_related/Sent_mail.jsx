import React, { useEffect, useState, useContext } from "react";
import { ListGroup, Container, Toast } from "react-bootstrap";
import { Home_header } from "./Home";
import Show_sent_mail_api from "../api/Show_sent_mail_api";
import Context from "../Context/Context";
import Show_sent_mail from "./Show_sent_mail";
import { useNavigate } from "react-router-dom";

export default function Sent_mail() {
  const [allSendedMail, setAllSendedMail] = useState([]);

  const ContextData = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!ContextData.logIn()) {
      console.log(ContextData.logIn());
      alert("please login first");
      navigate("/login");
    }
    const allMails = async () => {
      let response = await Show_sent_mail_api(ContextData.loggedInUserMail);
      //console.log("a", response);
      setAllSendedMail(response);
    };
    allMails();
  }, []);

  const showMailButton = (item) => {
    ContextData.saveMailDetail(item);
    navigate("/showsentmail");
  };

  return (
    <>
      <Home_header />
      <Container>
        <h1 className="display-3">All Sent Mails</h1>
        <br />
        <ListGroup>
          {allSendedMail.map((item, index) => (
            <ListGroup.Item
              key={index}
              onClick={() => {
                showMailButton(item);
              }}
            >
              <span className="text-2xl">{item.subject}</span>==To:==
              {item.receiverEmail}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  );
}
