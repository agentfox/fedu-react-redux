import React, { Component } from 'react';
import {Route } from "react-router-dom";
import News from '../components/News';
import About from '../components/About';
import Home from '../components/Home';
import Contact from '../components/Contact';
import NewsDetail from '../components/NewsDetail';
import Registration from '../components/Registration';
export default class UrlNavigator extends Component {
  render() {
    return (
        
            <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/news-detail/:slug.:id.html" component={NewsDetail} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/registration" component={Registration} />
            </div>
      
    )
  }
}
