import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    let siteData = this.props.siteData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    siteData.testimonials && siteData.testimonials.map((item)=>{
                      return(
                        <li>
                          <blockquote>
                            <p>
                            {item.description}
                            </p>
                            <cite>{item.name}</cite>
                          </blockquote>
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