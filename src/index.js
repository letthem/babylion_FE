import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import axios from "axios";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

axios.defaults.withCredentials = true;
