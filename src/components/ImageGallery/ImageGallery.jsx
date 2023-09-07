import { GallaryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import React from 'react'
import { ImageGalleryy } from './ImageGallery.styled'
import PropTypes from 'prop-types'

export const ImageGallery = (props) => {
        return (
            <>
                <ImageGalleryy>
                    <GallaryItem images={props.images} />            
            </ImageGalleryy>
         
            </>
        )
    
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            largeImageURL: PropTypes.string,
            tags: PropTypes.string,
            webformatURL: PropTypes.string

        }
        )
    )
}
         
