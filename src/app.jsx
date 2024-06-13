import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Router from "preact-router";
import Countries from "./pages/Countries";
import Continent from "./pages/Continent";

export function App() {

  return (
    <>
      <Router>
        <Countries path="/" />
        <Continent path="/:continent" />
      </Router>
    </>
  );
}
