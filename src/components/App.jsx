import { useEffect, useState } from 'react'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchPixabay } from 'api';
import { Audio } from 'react-loader-spinner'
import toast, { Toaster } from 'react-hot-toast';
import { StyledLoaderConteiner } from './App.styled';
import { RootStyle } from './RootStyled/RootStyled.styled';


export const App = () => {
  const [search, setSearch] = useState('')
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [loadMoreVisibility, setLoadMoreVisibility] = useState(false)
  const [spiner, setSpiner] = useState(false)
  const [max_page, setMax_page] = useState(null)
  const [per_page, setPer_page] = useState(0)
  const [error, setError] = useState(false)
  
 
  setPer_page(12)

  
  useEffect(() => {
    if (!search) {
      return
    }
   
      const getQuerySearch = async () => {
        try {
          setSpiner(true)
          const NewImages = await fetchPixabay(search, page, per_page)
          const { hits, totalHits } = NewImages
          setImages([...images, ...hits])
          setMax_page(Math.ceil(totalHits / per_page))
     
   
          if (page > 1) {
            return
          } else {
            toast.success(`Hooray! We found ${totalHits} images.`);
          }
        
        } catch (err) {
          setError(true);
          toast.error(`${error}Something went wrong. Try again.`)
        } finally {
          setSpiner(false)
        }
      }
    
      
        getQuerySearch()
      
  }
    
   
     
   
 
, [page,search, images, per_page])

  

  
  
  const loadMoreClick = (e) => {
    if (page >= max_page) {
      toast.error("There are no more images for this request")
      setLoadMoreVisibility(true)
      return
    } 
    setPage(prevState => (prevState + 1)) 
  } 
  
  const getSearch = (word) => {
    if (search !== word && word) {
      setSearch(word)
      setImages([])
      setPage(1)
      setError(false)
      setLoadMoreVisibility(false)
    }
     else if (!word){
      toast.error("Please fill in the search field")
    }
   
  }
  
  
   
    return (
      <>
        <Searchbar onSubmit={getSearch} />
      {spiner && ( <StyledLoaderConteiner >
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
          <ImageGallery images={images} />
           
          {images.length > 0 && !loadMoreVisibility && (<Button loadMore={loadMoreClick} />)}
       
        <Toaster position="top-right" />
        <RootStyle></RootStyle>
        </>
    );
  }

