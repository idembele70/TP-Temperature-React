import React from "react";
import { render } from "react-dom";

function App() {
  return <h1>Hello World</h1>;
}

render(
    <App/>, document.body.children[0]
);
