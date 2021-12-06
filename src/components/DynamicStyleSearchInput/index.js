import "./styles.css";

export default function DynamicStyleSearchInput({
  handleChange,
  handleSubmit,
  query,
}) {
  return (
    <form onSubmit={handleSubmit} className="dynamic-form">
      <div className="dynamic-search-box">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="dynamic-search-txt"
          placeholder="Search"
        />
        <div className="dynamic-search-btn-box">
          <i className="bi bi-search dynamic-search-btn"></i>
        </div>
      </div>
    </form>
  );
}
