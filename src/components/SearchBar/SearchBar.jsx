import { Toaster, toast } from "react-hot-toast";
import css from './SearchBar.module.css'

export default function SearchBar({ onSubmit }) {
   const notify = () => {
     toast("Please enter text to search images");
   };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const search = form.elements.search.value;
    if (search.trim() === "") {
      return notify();
    }
    else {
      onSubmit(search)
    }
    form.reset();
  }

  return (
    <header className={css.header}>
      <Toaster />
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" >Search</button>
      </form>
    </header>
  );
}
