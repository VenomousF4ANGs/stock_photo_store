import React from 'react';

class More extends React.Component{
    render(){
        return (
            <div className="field">
            <div className="control">
                <button className="button is-primary is-fullwidth" onClick={this.props.onClick}>More</button>
            </div>
            </div>
        )
    }
}

export default More