import React from 'react';

class UploadPage extends React.Component{
    uploadImage = ()=>{

    }
    
    render(){
        return (
            <form className="columns">
                <div className="column is-one-fifth">
                    <div className="field">
                        <div className="file is-large is-boxed has-name is-centered">
                            <label className="file-label">
                                <input className="file-input" type="file" name="resume"/>
                                <span className="file-cta">
                                    <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                    Browse...
                                    </span>
                                </span>
                                <span className="file-name">
                                    No File Selected...
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="column is-four-fifths">
                    
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="Name" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <textarea class="textarea" placeholder="Description" rows="2"></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-primary is-fullwidth" onClick={this.uploadImage}>Upload</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default UploadPage