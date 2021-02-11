import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let siteData = this.props.siteData;
    return (
      <section id="about">
         <div className="row banner">

            <div>

               <h2>Who Jim Was:</h2>
               <p>
               {
                 siteData.aboutme
               }
               </p>

               <h2>His Journey</h2>
               <p>
               {
                 siteData.journey
               }
               </p>
            </div>

            <div>
                      <iframe src="https://open.spotify.com/embed/playlist/2nlXItvhEXLN5lhjKHN2RH" title="Spotify" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

            </div>
            
         </div>
      </section>
    );
  }
}