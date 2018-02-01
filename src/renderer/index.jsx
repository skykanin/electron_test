import React from "react";
import ReactDOM from "react-dom";

import { Welcome } from "./components/Welcome/Welcome"
import { Header } from "./components/Header/Header"

const App = () => (
    <div>
        <Header />
        <Welcome compiler="Javascript" framework="React" />
    </div>
);

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);