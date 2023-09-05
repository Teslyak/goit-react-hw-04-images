import ModalImage from 'react-modal-image';
export const GallaryItem = ({ images }) => {
    return (
        images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return < ModalImage key={id}
        small={webformatURL}
        large={largeImageURL}
        alt={tags} />
       }) )
}