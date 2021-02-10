import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Picture from './components/Picture';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import siteData from './siteData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header siteData={siteData}/>
        <About siteData={siteData}/>
        <Picture siteData={siteData}/>
        <Testimonials siteData={siteData}/>
        <ContactUs siteData={siteData}/>
        <Footer siteData={siteData}/>
      </div>
    );
  }
}

export default App;