// src/Header.js
import React from "react";
import logo from "../image/logoUGM.png"; // Update with your actual logo path

const Header = () => {
  return (
    <header style={styles.header}>
      <img src={logo} alt="Logo" style={styles.logo} />
      <h1 style={styles.title}>
        Sistem Informasi Alamat Kemantren Mantrijeron
      </h1>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#282c34", // Modify as desired
    padding: "10px",
    color: "white",
  },
  logo: {
    height: "45px", // Adjust size as needed
    marginRight: "20px",
  },
  title: {
    fontSize: "1.5rem", // Adjust title size
  },
};

export default Header;
