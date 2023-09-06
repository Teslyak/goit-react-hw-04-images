import React, { Component } from 'react'
import { SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput, Searchbarr } from './Searchbar.styled';

export class Searchbar extends Component{
    state = {
        search: ''
        
    }
    
  handleChange = (e) => {
      
        this.setState({
        [e.currentTarget.name]: e.target.value 
        });
         
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.search.trim())

  }
    render() {



        return (
          <>
      <Searchbarr> <SearchForm onSubmit={this.onSubmit}>
              <SearchFormButton type="submit">
                <SearchFormButtonLabel>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8" />
  <line x1="21" y1="21" x2="16.65" y2="16.65" />
</svg>
                </SearchFormButtonLabel>
      
        </SearchFormButton>
             
        <SearchFormInput onChange={this.handleChange}
      className="input"
      type="text"
      name="search"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.search}/>
    
              </SearchForm>        </Searchbarr>
  

            </>
        )
    }
}

