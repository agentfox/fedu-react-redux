import React, { Component } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import UrlNavigator from '../routers/UrlNavigator';
import { BrowserRouter as Router } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Nav />
            <UrlNavigator />
            <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
