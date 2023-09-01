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
            <>
             <header class="searchbar">
  <form class="form" onSubmit={this.handleChange}>
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
        type="text"
        name="search"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>   

            </>
        )
    }
}

