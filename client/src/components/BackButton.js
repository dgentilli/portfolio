import React, { Component } from "react";
import Button from "@material/react-button";
import { checkPropTypes } from "prop-types";
import { withRouter } from "react-router-dom";

class BackButton extends Component {
  static contextTypes = {
    router: () => checkPropTypes.object //true // replace with PropTypes.object if you use them
  };

  render() {
    return (
      <Button
        className="mdc-button-custom"
        onClick={this.context.router.history.goBack}
      >
        Back
      </Button>
    );
  }
}

export default BackButton;
