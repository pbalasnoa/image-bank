import "./styles.css";

import SearchInput from "../SearchInput";
import LogoImgBank from "../LogoIMG_bank";

export default function Header({ query, setQuery }) {
  return (
    <header className="header">
      <div className="header-info-box">
        <p className="header-info-text">
          Only images with vertical orientation are displayed
        </p>
      </div>
      <div className="header-navigation">
        <div className="pb-05">
          <LogoImgBank />
        </div>
        <SearchInput query={query} setQuery={setQuery} />
      </div>
    </header>
  );
}
