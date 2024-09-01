import { Toaster } from "react-hot-toast";
import css from './SearchBar.module.css'

export default function SearchBar({onSubmit}) { 
  return (
    <header className={css.header}>
      <Toaster />
      <form onSubmit={onSubmit} className={css.form}>
        <input
          className={css.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
