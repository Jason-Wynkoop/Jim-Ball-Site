import React, { Component } from 'react';
export default class Pictures extends Component {
  render() {
    let siteData = this.props.siteData;
    return (
      <section id="picture">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Memories</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    siteData.pictures && siteData.pictures.map((item)=>{
                      return(
                        <li>
                          <img src={item.imgurl} alt=""></img>
                        </li>
                      )
                    })
                  }
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
  }
}