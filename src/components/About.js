import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let siteData = this.props.siteData;
    return (
      <section id="about">

        <div className = "column">
         <div className="row">

            <div className="column">

               
               <h2>His Journey</h2>
               <p>
               {
                 siteData.journey
               }
               </p>
               <hr/>

               <h2>His Family</h2>
               <p>
               {
                 siteData.family
               }
               </p>
              <hr/>
               
               <h2>His Love For Music</h2>
               <p>
               {
                 siteData.musicdes
               }
               </p>

            </div>
            </div>
            <div className ="row">
              <div className="column">
              <iframe src="https://open.spotify.com/embed/playlist/2nlXItvhEXLN5lhjKHN2RH" title="Spotify" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
            </div>
         </div>
        <div className="column">
            <img src="images/pictures/jim-looking.jpg" alt=""></img>
        </div>
      </section>
    );
  }
}