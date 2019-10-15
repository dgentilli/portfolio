import React, { Component } from "react";
import { Link } from "react-router-dom";

import List, {
  ListItem,
  ListItemText,
  ListItemGraphic
} from "@material/react-list";
import MaterialIcon from "@material/react-material-icon";

class SidebarMenu extends Component {
  state = { selectedIndex: 0 };

  render() {
    return (
      <List singleSelection selectedIndex={this.state.selectedIndex}>
        <Link to="/">
          <ListItem>
            <ListItemGraphic graphic={<MaterialIcon icon="folder" />} />
            <ListItemText primaryText="Home" />
          </ListItem>
        </Link>
        <Link to="/about">
          <ListItem>
            <ListItemGraphic graphic={<MaterialIcon icon="folder" />} />
            <ListItemText primaryText="About" />
          </ListItem>
        </Link>
        <Link to="/projects">
          <ListItem>
            <ListItemGraphic graphic={<MaterialIcon icon="folder" />} />
            <ListItemText primaryText="Projects" />
          </ListItem>
        </Link>
        <Link to="/contact">
          <ListItem>
            <ListItemGraphic graphic={<MaterialIcon icon="folder" />} />
            <ListItemText primaryText="Contact" />
          </ListItem>
        </Link>
      </List>
    );
  }
}
export default SidebarMenu;
