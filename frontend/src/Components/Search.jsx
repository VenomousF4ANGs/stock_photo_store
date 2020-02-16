import React from 'react';
import SearchForm from './SearchForm';
import ImageGrid from './ImageGrid';
import Loading from './Loading';
import More from './More';

class SearchPage extends React.Component{
    state = {
        images:[],
        loaded:false
    }
    searchImage = ()=>{

    }
    moreImages = ()=>{

    }
    componentDidMount = ()=>{
        setTimeout(()=>{
            this.setState({
                images:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
                loaded:true
            })
            
            
        },2000)
    }
    
    render(){
        return (
            <div className="columns">
                <div className="column is-one-fifth">
                    <SearchForm onSearch={this.searchImage}/>
                </div>
                <div className="column is-four-fifths">
                    {this.state.loaded||<Loading/>}
                    {this.state.loaded&&(<React.Fragment><ImageGrid images={this.state.images}/><More onClick={this.moreImages}/></React.Fragment>)
                    }
                    
                </div>
            </div>
        )
    }
}

export default SearchPage