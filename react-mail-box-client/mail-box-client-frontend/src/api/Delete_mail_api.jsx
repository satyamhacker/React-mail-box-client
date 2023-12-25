import React from "react";

const Base_Url = import.meta.env.VITE_REACT_APP_FRONTEND_BASE_URL;

const Delete_mail_api = async (id) => {
  try {
    const response = await fetch(`${Base_Url}/deletemail/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete mail");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export default Delete_mail_api;
