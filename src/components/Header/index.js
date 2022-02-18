import "./styles.css";

import SearchInput from "../SearchInput";
import LogoImgBank from "../LogoIMG_bank";

export default function Header({ query, setQuery }) {
  return (
    <header className="header">
      <div className="bar">
        <LogoImgBank />
        <SearchInput query={query} setQuery={setQuery} />
      </div>
    </header>
  );
}
