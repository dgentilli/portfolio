import React, { Component } from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return [
      <div className="footer-container">
        <footer>
          <Grid className="footer-media-icons">
            <Row>
              <Cell desktopColumns={4} phoneColumns={1} tabletColumns={2}>
                <a href="https://ro.linkedin.com/in/dave-gentilli-97925892">
                  <img
                    src="../../iconmonstr-linkedin-5-48.png"
                    alt=""
                    className="footer-media-icon"
                    key={1}
                  />
                </a>
              </Cell>
              <Cell desktopColumns={4} phoneColumns={1} tabletColumns={2}>
                <a href="https://twitter.com/dave_gentilli">
                  <img
                    src="../../iconmonstr-twitter-5-48.png"
                    alt=""
                    className="footer-media-icon"
                    key={2}
                  />
                </a>
              </Cell>
              <Cell desktopColumns={4} phoneColumns={1} tabletColumns={2}>
                <a href="https://github.com/dgentilli">
                  <img
                    src="../../iconmonstr-github-5-48.png"
                    alt=""
                    className="footer-media-icon"
                    key={3}
                  />
                </a>
              </Cell>
            </Row>
          </Grid>
          <Grid className="footer-menu-items">
            <Row>
              <Cell
                align="middle"
                desktopColumns={3}
                phoneColumns={1}
                tabletColumns={2}
                key={4}
              >
                <Link to="/" className="footer-menu-link">
                  Home
                </Link>
              </Cell>

              <Cell
                align="middle"
                desktopColumns={3}
                phoneColumns={1}
                tabletColumns={2}
                key={5}
              >
                <Link to="/about" className="footer-menu-link">
                  About
                </Link>
              </Cell>
              <Cell
                align="middle"
                desktopColumns={3}
                phoneColumns={1}
                tabletColumns={2}
                key={6}
              >
                <Link to="/projects" className="footer-menu-link">
                  Projects
                </Link>
              </Cell>
              <Cell
                align="middle"
                desktopColumns={3}
                phoneColumns={1}
                tabletColumns={2}
                key={7}
              >
                <Link to="/contact" className="footer-menu-link">
                  Contact
                </Link>
              </Cell>
            </Row>
          </Grid>
          Copyright &copy; {new Date().getFullYear()} Dave Gentilli
        </footer>
      </div>
    ];
  }
}

export default Footer;
