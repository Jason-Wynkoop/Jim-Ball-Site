import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let siteData = this.props.siteData;
    return (
      <section id="about">
         <div className="row">

            <div className="nine columns main-col">

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
         </div>
      </section>
    );
  }
}