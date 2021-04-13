import React from "react";

import "./menu.css";

const DIR2CLASSNAMES = {
  HORIZONTAL: "MenuItemHorizontal",
  VERTICAL: "MenuItemVertical"
};

const DIR_FLIP = {
  HORIZONTAL: "VERTICAL",
  VERTICAL: "HORIZONTAL"
};

function toggleDir(dir) {
  return DIR_FLIP[dir];
}

export class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      submenuData: null
    };
  }
  render() {
    console.log("############## this.props  ##############");
    console.log(JSON.stringify(this.props));

    return (
      <header>
        <ul>
          {this.props.data &&
            this.props.data.map((menuItem) => (
              <li
                className={DIR2CLASSNAMES[this.props.dir]}
                onClick={() => {
                  console.log("onclick");
                  this.setState({
                    submenuData: menuItem.sub_menu
                  });
                }}
              >
                <span>{menuItem.name}</span>
              </li>
            ))}
        </ul>

        <Menu data={this.state.submenuData} dir={toggleDir(this.props.dir)} />
      </header>
    );
  }
}
