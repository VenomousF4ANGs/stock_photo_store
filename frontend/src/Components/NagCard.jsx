import React from "react";

class NagCard extends React.Component {
  render() {
    return (
        <div className="nag-card">
          <div className="nag-card-image">
            <img
              src="https://s.gravatar.com/avatar/3ba65041a919a8123d12cc55884b6b7e?s=640"
              alt="Placeholder image"
            />
          </div>
          <div className="nag-card-content">
            <h1>Abhisekh Nag</h1>
            <a target="blank" href="https://www.linkedin.com/in/abhisekh-nag">LinkedIn</a>
          </div>
        </div>
    );
  }
}

export default NagCard;