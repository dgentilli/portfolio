import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TopAppBar, { TopAppBarFixedAdjust } from "@material/react-top-app-bar";
import Drawer, {
  DrawerContent,
  DrawerAppContent,
  DrawerHeader,
  DrawerTitle
} from "@material/react-drawer";
import MaterialIcon from "@material/react-material-icon"; //Example for how to import from material

import Main from "./../components/Main";
import Footer from "./../components/Footer";
import SidebarMenu from "./../components/SidebarMenu";
import ProjectsOverview from "./../components/ProjectsOverview";
import About from "./../components/About";
import ContactForm from "./../components/ContactForm";
import ProjectShow from "./../components/ProjectShow";


class AppContainerMobileMenu extends Component {
  state = { open: false };

  render() {
    return (
      <Router>
        <div>
          <div className="drawer-container">
            <Drawer dismissible open={this.state.open}>
              <DrawerHeader>
                <DrawerTitle tag="h2">Menu</DrawerTitle>
              </DrawerHeader>

              <DrawerContent>
                <SidebarMenu />
              </DrawerContent>
            </Drawer>

            <DrawerAppContent className="drawer-app-content">
              <TopAppBar
                title="Dave Gentilli's Portfolio"
                navigationIcon={
                  <MaterialIcon
                    icon="menu"
                    onClick={() => this.setState({ open: !this.state.open })}
                  />
                }
                actionItems={[
                  <Link to="/contact">
                    <MaterialIcon key="item" icon="mail" />
                  </Link>
                ]}
              />
              <TopAppBarFixedAdjust>
                <Route path="/" exact component={Main} />
                <Route path="/about" exact component={About} />
                <Route path="/projects" exact component={ProjectsOverview} />
                <Route path="/contact" exact component={ContactForm} />
                <Route path="/project/:id" exact component={ProjectShow} />
              </TopAppBarFixedAdjust>
            </DrawerAppContent>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default AppContainerMobileMenu;
