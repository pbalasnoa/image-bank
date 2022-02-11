import { Link } from "wouter";

import SearchInput from "../SearchInput";
import "./styles.css";

export default function Header({ query, setQuery }) {
  return (
    <header className="header">
      <Link to="/" className="logo-bar">
        IMG_bank
      </Link>
      <SearchInput query={query} setQuery={setQuery} />
    </header>
  );
}
