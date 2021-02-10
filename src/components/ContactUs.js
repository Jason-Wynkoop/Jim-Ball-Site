import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let siteData = this.props.siteData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Please send a message to the family 
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Email: 
                   {siteData.email}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}