import React, { Component } from 'react'

export class Searchbar extends Component{
    state = {
        search: ''
        
    }
    
  handleChange = (e) => {
      e.preventDefault()
        this.setState({
        [e.currentTarget.name]: e.target.value 
        });
         
    }
    render() {



        return (
            <>
  <header className="searchbar">
  <form className="form" onSubmit={onSubmit(this.state.search) }>
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      onChange={this.handleChange}
      className="input"
      type="text"
      name="search"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.search}
    />
  </form>
</header>   

            </>
        )
    }
}

