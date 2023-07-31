import React from "react";
import NavBar from "./topNavBar/NavBar";
import MenuProvider from "./topNavBar/menu/provider/MenuProvider";

export default function Header() {
  return (
    <>
      <MenuProvider>
        <NavBar />
      </MenuProvider>
    </>
  );
}
