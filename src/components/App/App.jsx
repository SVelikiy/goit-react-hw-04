import SearchBar from '../SearchBar/SearchBar'
import toast from 'react-hot-toast';
import { searchImg } from '../../unsplash-api'
import { useEffect, useState } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

export default function App() {

  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [searchImage, setSearchImage] = useState('')
  const [loader, setLoader] = useState(false);
  const [loadBtn, setLoadBtn] = useState(0)

  useEffect(() => {
    if (searchImage === '') {
      return;
    }
    async function getImages() {
      try {
        setLoader(true);
        const fetchedImage = await searchImg(searchImage, page);
        setLoadBtn(fetchedImage.total_pages);
        setImage((prevImage) => [...prevImage, ...fetchedImage.results]);
        setLoader(false);
      } catch (error) {
        
      }
    }
    getImages()
  },[page,searchImage])

    const notify = () => {
      toast("Please enter text to search images");
    };

    const handleSubmit = (evt) => {
      evt.preventDefault();
      const form = evt.target;
      const search = form.elements.search.value;
      setSearchImage(search);
      setPage(1);
      setImage([]);
      if (!search) {
        notify();
      }
      form.reset();
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  }
  

    return (
      <div>
        <SearchBar onSubmit={handleSubmit} />
        {image.length !== 0 && <ImageGallery image={image} />}
        {loader && <Loader />}
        {loadBtn > 0 && loadBtn !== page && (
          <LoadMoreBtn loadmore={handleLoadMore} />
        )}
      </div>
    );
}