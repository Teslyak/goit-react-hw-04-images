import { Component } from 'react'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchPixabay } from 'api';



export class App extends Component {
  state = {
  search : ''
}

  async componentDidMount() {
  
  } 
  
  async componentDidUpdate() {
 try {
     const images = await fetchPixabay(this.state.search)
     console.log(images);
   } catch (error) {
    
   }
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
