import React, { Component } from 'react';

import AppContainerMobileMenu from './components/AppContainerMobileMenu';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppContainerMobileMenu />
      </div>
    );
  }
}

export default App;