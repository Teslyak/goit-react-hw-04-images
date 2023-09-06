import { Component } from 'react'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchPixabay } from 'api';
import { Audio } from 'react-loader-spinner'
import toast, { Toaster } from 'react-hot-toast';
import { StyledLoaderConteiner } from './App.styled';
import { RootStyle } from './RootStyled/RootStyled.styled';




export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    loadMoreVisibility: false,
    spiner: false,
    max_page: null,
    per_page: 12,
    error: false
}

  
  async componentDidUpdate(prevProps, prevState) {
    
    if (prevState.search !== this.state.search || prevState.page !== this.state.page) {
      try {
        this.setState({
        spiner: true
        })
      const images = await fetchPixabay(this.state.search, this.state.page, this.state.per_page )
      const {hits, totalHits} = images
   this.setState({
     images: [...this.state.images, ...hits],
     totalHits: totalHits,
     max_page: Math.ceil(totalHits / this.state.per_page)
   })
        if (this.state.page > 1) {
          return
        } else {
          toast.success(`Hooray! We found ${totalHits} images.`);
        }
      } catch (error) {
        this.setState({ error: true });
        toast.error('Something went wrong. Try again.')
      } finally {
        this.setState({
          spiner: false
        })
   }
   }
     
   
 
  }

  
  
  loadMoreClick = (e) => {
    if (this.state.page >= this.state.max_page) {
      toast.error("There are no more images for this request")
      this.setState({
        loadMoreVisibility: true,
        
      })
      return
    }
    this.setState(prevState => ({
      page: prevState.page + 1,
      
    }) 
    )
  } 
  
  getSearch = (word) => {
    if (this.state.search !== word && word) {
       this.setState({
      search: word,
      images: [],
      page: 1,
      error: false
    })
    } else if (!word){
      toast.error("Please fill in the search field")
    }
   
  }
  
  render() {
   
    return (
      <>
        <Searchbar onSubmit={this.getSearch} />
      {this.state.spiner && ( <StyledLoaderConteiner >
        <Audio
          height="80"
          width="80"
          radius="9"
          color="grey"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass="true"
        />
        </StyledLoaderConteiner>)}
          <ImageGallery images={this.state.images} />
           
          {this.state.images.length > 0 && !this.state.loadMoreVisibility && (<Button loadMore={this.loadMoreClick} />)}
       
        <Toaster position="top-right" />
        <RootStyle></RootStyle>
        </>
    );
  }
};
