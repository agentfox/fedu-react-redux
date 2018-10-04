import React, { Component } from 'react';
import Footer from './Footer';
//import Home from './Home';
import Nav from './Nav';
//import News from './News';
import Contact from './Contact';
//import NewsDetail from './NewsDetail';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
