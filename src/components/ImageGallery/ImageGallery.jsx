import ImageCard from '../ImageCard/ImageCard'

export default function ImageGallery({ image }) {
    return (
        <div>
            <ul>
                {image.map((img) => {
                    return (
                      <li key={img.id}>
                        <ImageCard src={img.urls.small} alt={img.description} />
                      </li>
                    );
                })}
            </ul>
        </div>
    )
}
