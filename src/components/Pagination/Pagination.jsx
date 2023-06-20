import './Pagination.css';

function Pagination({ onClick }) {
  return (
    <div className="pagination">
      <button className="pagination__btn link-btn" type="button" onClick={onClick}>
        Ещё
      </button>
    </div>
  );
}

export default Pagination;
