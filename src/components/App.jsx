import { Component } from 'react'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchPixabay } from 'api';
import { Audio } from 'react-loader-spinner'



export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    loadMoreVisibility: false,
    spiner: false
}

  
  async componentDidUpdate(prevProps, prevState) {
    
    if (prevState.search !== this.state.search || prevState.page !== this.state.page) {
      try {
        this.setState({
        spiner: true
        })
      const images = await fetchPixabay(this.state.search, this.state.page)
      const {hits} = images
   this.setState({
     images: [...this.state.images, ...hits],
     
     
   })
   } catch (error) {
    
      } finally {
        this.setState({
          spiner: false
        })
   }
   }
     
   
 
  }
  
  loadMoreClick = (e) => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }) 
    )
  } 
  
  getSearch = (word) => {
    this.setState({
      search: word,
      images: []
    })
  }
  
  render() {
   
    return (
      <>
        <Searchbar onSubmit={this.getSearch} />
        {this.state.spiner && (<Audio height="80"
          width="80"
          radius="9"
          color="grey"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass />)}
          <ImageGallery images={this.state.images} />
           
          {this.state.images.length > 0 && (<Button loadMore={this.loadMoreClick} />)}
       
        
        </>
    );
  }
};
