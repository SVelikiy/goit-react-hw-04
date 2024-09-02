import SearchBar from "../SearchBar/SearchBar";
import toast from "react-hot-toast";
import { searchImg } from "../../unsplash-api";
import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [searchImage, setSearchImage] = useState("");
  const [loader, setLoader] = useState(false);
  const [loadBtn, setLoadBtn] = useState(0);
  const [error, SetError] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const [imageUrl, setImageUrl] = useState({
    src: "",
    alt: "",
    likes: "",
    username: "",
    link: "",
  });

  useEffect(() => {
    if (searchImage === "") {
      return;
    }
    async function getImages() {
      try {
        SetError(false);
        setLoader(true);
        const fetchedImage = await searchImg(searchImage, page);
        setLoadBtn(fetchedImage.total_pages);
        setImage((prevImage) => [...prevImage, ...fetchedImage.results]);
      } catch (error) {
        SetError(true);
      } finally {
        setLoader(false);
      }
    }
    getImages();
  }, [page, searchImage]);

  const notify = () => {
    toast("Please enter text to search images");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const search = form.elements.search.value;
    if (search.trim() === '') {
      return notify();
    }
    setSearchImage(search);
    setPage(1);
    setImage([]);
    form.reset();
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (src, alt, likes, username, link) => {
    setIsopen(true);
    setImageUrl({ src, alt, likes, username, link });
  };

  const closeModal = () => {
    setIsopen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {image.length !== 0 && (
        <ImageGallery image={image} onImgClick={openModal} />
      )}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {loadBtn > 0 && loadBtn !== page && (
        <LoadMoreBtn loadmore={handleLoadMore} />
      )}
      {isOpen && (
        <ImageModal
          image={imageUrl}
          openModal={isOpen}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
