import React from "react";

class AboutPage extends React.Component {
  state = {
    images:[
      "https://via.placeholder.com/640x480",
      "https://via.placeholder.com/1280x960"
    ]
  }
  render() {
    return (
        <div className="nag-card">
          <div className="nag-card-image">
            <img
              src={this.state.images[parseInt(Math.random()*this.state.images.length)]}
              alt="Placeholder image"
            />
          </div>
          <div className="nag-card-content">
            Lorem ipsum dolor sit amet
            <br/>
            <time datetime="2016-2-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
    );
  }
}

export default AboutPage;
