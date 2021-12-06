import "./styles.css";

export default function SearchInput({ handleChange, handleSubmit, query }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="search-box">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="search-text"
          placeholder="Search"
        />
        <div className="search-btn-box" onClick={handleSubmit}>
          <i className="bi bi-search search-btn"></i>
        </div>
      </div>
    </form>
  );
}
