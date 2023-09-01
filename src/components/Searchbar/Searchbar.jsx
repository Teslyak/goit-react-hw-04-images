import React, { Component } from 'react'

export class Searchbar extends Component{
    state = {
        search: ''
        
    }
    
    handleChange = (e) => {
        this.setState({
        [e.currentTarget.name]: e.target.value 
        });
        this.props.getSearch(e.target.value)  
    }
    render() {



        return (
            <div>
                <input type="text" name="search"  onChange={this.handleChange} value={this.state.search} />

            </div>
        )
    }
}

