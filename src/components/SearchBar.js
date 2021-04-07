import React from 'react';
import './VideoItem.css';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
       this.setState({term : event.target.value});     
    };

    onFormSubmit = (event)=>{
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);    
    };

    render() {
        return (
            <div className="search-bar ui segment search">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>
                        
                            <h1 className = "headline">
                            <i className="music icon"></i>
                                 Music Jam 
                            </h1>
                        </label>
                        <input type="text" placeholder="Search anything" value={this.state.term}
                            onChange={this.onInputChange} >
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;