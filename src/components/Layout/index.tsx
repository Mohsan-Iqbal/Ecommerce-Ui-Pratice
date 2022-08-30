import React from "react";
import { childrenType } from "../../Types";
import Announcement from "../Announcement";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Newsletter from "../Newsletter";

const Layout = ({ children }: childrenType) => {
  return (
    <>
      {" "}
      <Navbar />
      <Announcement />
      {children}
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;
