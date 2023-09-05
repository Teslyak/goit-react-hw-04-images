export const GallaryItem = ({ images }) => {
    return (
        images.map(({ id, webformatURL, largeImageURL, tags }) => {
            return <li className="gallery-item" key={id}>
                <img src={webformatURL} alt={tags} width={200} />
           
</li>
       }) )
}