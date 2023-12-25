import React from "react";
const Base_Url = import.meta.env.VITE_REACT_APP_FRONTEND_BASE_URL;

const Mail_read_api = async (id) => {
  try {
    console.log("test", id);
    const response = await fetch(Base_Url + "/makeemailread", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
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

export default Mail_read_api;
