import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let siteData = this.props.siteData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="youtube-link">
            {
              siteData.youtubeLink && siteData.youtubeLink.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}