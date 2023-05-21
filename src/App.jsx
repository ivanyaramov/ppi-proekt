import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PetDetails from "./PetDetials";
import PetList from "./PetList";

function App() {
  let component;
  console.log(window.location.pathname);
  let pathname = window.location.pathname;
  console.log(pathname);
  component = <PetDetails id={2} />;
  // if (pathname.startsWith("/pet/")) {
  //   component = <PetDetails id={2} />;
  // } else {
  //   component = <PetList />;
  // }

  return component;
}

export default App;
