import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'

export default function ImageGallery({ image, onImgClick }) {
  return (
    <div>
      <ul className={css.imageList}>
        {image.map((img) => {
          return (
            <li key={img.id} className={css.imageItem}>
              <ImageCard img={img} onImgClick={onImgClick} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
