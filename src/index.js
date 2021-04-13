import React from "react";
import { render } from "react-dom";
import { MENU_DATA } from "./data/menu-data";
import { Menu } from "./components/menu";

import "./styles.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu data={MENU_DATA} dir={"HORIZONTAL"} />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
