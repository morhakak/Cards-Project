import React from "react";
import Main from "./Main";
import { node } from "prop-types";
import Header from "../header/Header";
import Footer from "../footer/Footer";
export default function LayOut({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
LayOut.propsTypes = {
  Children: node,
};
