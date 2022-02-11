import "./styles.css";
import { useLocation } from "wouter";

export default function SearchInput({ query, setQuery }) {
  const [location, setLocation] = useLocation(); // eslint-disable-line

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(`/search/${query}`);
    setQuery("");
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="search-box">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="search-text"
          placeholder="Search photos"
        />
        <button className="search-btn-box" type="submit">
          <i className="bi bi-search search-btn"></i>
        </button>
      </div>
    </form>
  );
}
