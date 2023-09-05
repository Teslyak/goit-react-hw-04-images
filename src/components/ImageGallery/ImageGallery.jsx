import { GallaryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import React from 'react'

export const ImageGallery = (props) => {
        return (
            <>
             <ul className="gallery">
                    <GallaryItem images={props.images} />
            </ul>   
            </>
        )
    
}
