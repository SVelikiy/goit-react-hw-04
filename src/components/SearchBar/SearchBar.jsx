import { Toaster } from "react-hot-toast";

export default function SearchBar({onSubmit}) { 
  return (
    <header>
      <Toaster />
      <form onSubmit={onSubmit}>
        <input
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
