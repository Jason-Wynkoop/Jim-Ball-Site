import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let siteData = this.props.siteData;
    return (
      <section id="picture">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>He brought love to everyone around him.</h1>
          <div id="picture-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            siteData.picture && siteData.picture.map((item)=>{
              return(
                <div className="columns picture-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img" alt="description of image"/>
                      <div className="overlay">
                        <div className="picture-item-meta">
                          <p>{item.description}</p>
                        </div>
                      </div>
                      
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}