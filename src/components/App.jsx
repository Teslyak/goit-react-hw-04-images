import { Component } from 'react'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';


export class App extends Component {
  state = {
  search : ''
}

  getSearch = (word) => {
    this.setState({
      search: word
    })
  }
  
  render() {
    return (
      <>
        <Searchbar onSubmit={this.getSearch} />
        <ImageGallery  /> 
        <Button/>
        </>
    );
  }
};
