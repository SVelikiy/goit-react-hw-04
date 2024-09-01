import css from './ImageCard.module.css'

export default function ImageCard({ img, onImgClick }) {
  return (
    <div
      className={css.imageContainer}
      onClick={() =>
        onImgClick(
          img.urls.regular,
          img.alt_description,
          img.likes,
          img.user.name,
          img.links.html
        )
      }
    >
      <img
        className={css.image}
        src={img.urls.small}
        alt={img.alt_description}
      />
    </div>
  );
}