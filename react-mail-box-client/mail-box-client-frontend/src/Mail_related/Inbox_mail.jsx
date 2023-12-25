import React, { useEffect, useState, useContext } from "react";
import { ListGroup, Container, Toast, Form, Button } from "react-bootstrap";
import { Home_header } from "./Home";
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";
import Show_inbox_mail_api from "../api/Show_inbox_mail_api";
import Delete_mail_api from "../api/Delete_mail_api";
import Mail_read_api from "../api/Mail_read_api";

function Inbox_show_mail() {
  const [allInboxMail, setAllInboxMail] = useState([]);

  const ContextData = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!ContextData.logIn()) {
      console.log(ContextData.logIn());
      alert("please login first");
      navigate("/login");
    }
    const allMails = async () => {
      let response = await Show_inbox_mail_api(ContextData.loggedInUserMail);
      setAllInboxMail(response);
    };
    allMails();
  }, []);

  const showMailButton = (item) => {
    ContextData.saveMailDetail(item);
    Mail_read_api(item._id);
    navigate("/showinboxmail");
  };

  const deleteEmail = (id) => {
    const deletemail = async () => {
      const response = await Delete_mail_api(id);
      if (response == true) {
        alert("mail deleted");
        setAllInboxMail((prevMails) =>
          prevMails.filter((mail) => mail._id !== id)
        );
      } else {
        alert("Network issue please try again later");
      }
    };
    deletemail();
  };

  return (
    <>
      <Home_header />
      <Container>
        <h1 className="display-3">All Inbox Mails</h1>
        <br />
        {allInboxMail.length > 0 ? (
          <ListGroup>
            {allInboxMail.map((item, index) => (
              <div key={index}>
                <ListGroup.Item
                  onClick={() => {
                    showMailButton(item);
                  }}
                >
                  <input
                    type="radio"
                    checked={item.emailRead == false}
                    // onChange={() => handleRadioChange(item._id)}
                  />
                  <span className="text-2xl">{item.subject}</span>==From:==
                  {item.senderEmail}
                </ListGroup.Item>
                <Button
                  variant="danger"
                  className="bg-red-600 ml-5 text-2xl text-sky-400"
                  onClick={() => deleteEmail(item._id)} // Fix the function call here
                >
                  Delete Email
                </Button>
              </div>
            ))}
          </ListGroup>
        ) : (
          <p>No mails</p>
        )}
      </Container>
    </>
  );
}

export default Inbox_show_mail;
