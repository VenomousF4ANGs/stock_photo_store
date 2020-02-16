import React from 'react';

class Loading extends React.Component{
    render(){
        return (
            <progress class="progress is-small is-primary" max="100">15%</progress>
        );
    }
}

export default Loading;