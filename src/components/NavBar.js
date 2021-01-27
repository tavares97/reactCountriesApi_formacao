import React from "react";

//IMPORT STYLING
import "../styles/NavBar.css";

//REACT UI COMPONENTS
import { PageHeader } from "antd";

const NavBar = () => {
  return (
    <PageHeader
      className="navbar"
      title="TRAVEL PLANER"
      subTitle="The best place to plan your travels"
    />
  );
};

export default NavBar;
