import { GallaryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import React from 'react'
import { ImageGalleryy } from './ImageGallery.styled'

export const ImageGallery = (props) => {
        return (
            <>
                <ImageGalleryy>
                    <GallaryItem images={props.images} />            
            </ImageGalleryy>
         
            </>
        )
    
}
