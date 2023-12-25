import React from "react";
import Login from "./signup_login/Login";
import Signup from "./signup_login/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add_mail from "./Mail_related/Create_mail";
import Show_sent_mail from "./Mail_related/Show_sent_mail";
import { Home } from "./Mail_related/Home";
import Sent_mail from "./Mail_related/Sent_mail";
import Inbox_mail from "./Mail_related/Inbox_mail";
import Show_inbox_mail from "./Mail_related/Show_inbox_mail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/showsentmail" element={<Show_sent_mail />} />
        <Route path="/addmail" element={<Add_mail />} />
        <Route path="/sentmail" element={<Sent_mail />} />
        <Route path="/inboxmail" element={<Inbox_mail />} />
        <Route path="/showinboxmail" element={<Show_inbox_mail />} />

        <Route path="/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
