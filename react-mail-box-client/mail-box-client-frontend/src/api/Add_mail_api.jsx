import React from "react";

const Base_Url = import.meta.env.VITE_REACT_APP_FRONTEND_BASE_URL;

const Add_mail_api = async (mailData, loggedInUserMail) => {
  const emailCreatedDateAndTime = new Date();
  //console.log("expense", expenseData);

  try {
    const response = await fetch(Base_Url + "/addmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mailData,
        loggedInUserMail,
        emailCreatedDateAndTime,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to post data");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default Add_mail_api;
