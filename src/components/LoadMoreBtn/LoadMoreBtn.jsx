import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ loadmore }) {
  return (
    <div className={css.loadMoreBtn}>
      <button type="button" onClick={loadmore}>
        Load more
      </button>
    </div>
  );
}
