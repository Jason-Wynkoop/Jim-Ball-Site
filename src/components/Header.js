import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let siteData = this.props.siteData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#picture">Pictures</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{siteData.name}</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{siteData.role}{siteData.description}
               </h3>
               <hr/>
               <ul className="youtube-link">
                  {
                    siteData.youtubelink && siteData.youtubelink.map(item =>{
                      return(
                              <li key={item.name}>
                                {/*<a href={item.url} target="_blank"><i className={item.className}></i></a>*/}
                                <iframe title="Live Link" width="560" height="315" src="https://www.youtube.com/embed/9NUMiHDbqAU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}