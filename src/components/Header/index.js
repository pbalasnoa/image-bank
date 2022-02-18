import { Link } from "wouter";

import SearchInput from "../SearchInput";
import "./styles.css";

export default function Header({ query, setQuery }) {
  return (
    <header className="header">
      <div className="bar">
        <Link to="/">IMG_bank</Link>
        <SearchInput query={query} setQuery={setQuery} />
      </div>
    </header>
  );
}
