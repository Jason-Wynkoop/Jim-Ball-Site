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
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{siteData.description}
               </h3>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>
                 {siteData.description2}<a style={{color:'powderblue'}} href="https://www.legacy.com/obituaries/thestarpress/obituary.aspx?n=james-r-ball&pid=197717863&fbclid=IwAR2JVz0qI3BlQPHOBDlE5aZ6IG2p1irEaM62B6crYieX23P_dFlbCa_RPaU">Obituary</a>
                 <p>Memorial Contributions may be made to First Tee Indiana in memory of James "Jim" Ball <a style={{color:'powderblue'}} href="https://www.firstteeindiana.org/donate-2/" >here</a>.</p>
                 <a href="https://purdue-edu.zoom.us/j/99089157164?pwd=R0VyMHh6QkZ2K3JySThRSzZnVHZ3Zz09">Zoom Invite Link</a>
                </h3>
         
               <div className="banner text">
               <div className="container">
                 {/*
                  <iframe title="Live link" class="responsive-iframe"  src="https://www.youtube.com/embed/1jWCXJfxHQM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                 */}
                 
               </div>
               </div>
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