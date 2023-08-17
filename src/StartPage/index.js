import React, { useEffect } from "react";

const StartPage = () => {
  useEffect(() => {
    window.location.href = "/homepage";
  }, []);
};

export default StartPage;
