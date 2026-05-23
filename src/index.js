import React from "react";

import ReactDOM from "react-dom/client";
import {QuizProvider} from "./QuizContext";
import "./Quize-index.css"
import App from "./Quiz.js";
// import ReactDOM from 'react-dom';

// REACT 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QuizProvider>
        <App/>
    </QuizProvider>
);
