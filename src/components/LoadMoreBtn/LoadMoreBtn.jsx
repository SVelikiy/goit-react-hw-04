export default function LoadMoreBtn({ loadmore }) {
    return (
      <div>
        <button type="button" onClick={loadmore}>
          Load more
        </button>
      </div>
    );
}