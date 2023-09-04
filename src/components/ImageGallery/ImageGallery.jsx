import { GallaryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import React, { Component } from 'react'

export class ImageGallery extends Component  {

    render() {
        return (
            <>
             <ul className="gallery">
            <GallaryItem/>
            </ul>   
            </>
        )
    }
}
