import React from 'react';
import ImageCard from './ImageCard';

class AboutPage extends React.Component{
    render(){
        return (
            <div className="nag-grid-container">
                {this.props.images.map(img => <ImageCard img={img}/> )}
                <div className="nag-end"></div>
            </div>
        );
    }
}

export default AboutPage