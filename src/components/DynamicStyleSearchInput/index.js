import "./styles.css";
import { useLocation } from "wouter";

export default function DynamicStyleSearchInput({ query, setQuery }) {
  const [location, setLocation] = useLocation(); // eslint-disable-line

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(`/search/${query}`);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

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
