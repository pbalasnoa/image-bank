import { Link } from "wouter";

import SearchInput from "../SearchInput";
import "./styles.css";

export default function Header({ handleChange, handleSubmit, query }) {
  return (
    <header className="header">
      <Link to="/" className="logo-bar">
        IMG_bank
      </Link>
      <SearchInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={query}
      />
    </header>
  );
}
