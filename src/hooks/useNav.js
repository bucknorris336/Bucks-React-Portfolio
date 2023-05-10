import React, { useState } from "react";

export const Nav = (props) => {
  const [currentPage, setCurrentPage] = useState("About");

  return {
    currentPage,
    setCurrentPage,
  };
};
