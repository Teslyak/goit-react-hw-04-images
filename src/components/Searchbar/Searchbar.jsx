import React, { useState } from 'react'
import { SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput, Searchbarr } from './Searchbar.styled';
import PropTypes from 'prop-types'

export const Searchbar = (props) => {

  const [search, setSearch] = useState('')    
    
 const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(search.trim())

  }

        return (
          <>
      <Searchbarr> <SearchForm onSubmit={onSubmit}>
              <SearchFormButton type="submit">
                <SearchFormButtonLabel>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="11" cy="11" r="8" />
  <line x1="21" y1="21" x2="16.65" y2="16.65" />
</svg>
                </SearchFormButtonLabel>
      
        </SearchFormButton>
             
        <SearchFormInput onChange={handleChange}
      className="input"
      type="text"
      name="search"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={search}/>
    
              </SearchForm>        </Searchbarr>
  

            </>
        )
    }



Searchbar.propTypes = {
onSubmit: PropTypes.func
}


