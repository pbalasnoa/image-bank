import { useState } from "react";

import { useLocation } from "wouter";

import useImages from "../hooks/useImages";

import ListOfImage from "../components/ListOfImage";
import Header from "../components/Header";

export default function Home() {
  const [query, setQuery] = useState("");

  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();
  const { loading, images } = useImages(); // eslint-disable-line

  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${query}`);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Header
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={query}
      />
      <h3 className="mb">Última búsqueda</h3>
      {/* <section className="container">
        <ListOfImage images={images} />
      </section> */}

      <ListOfImage images={images} />
    </>
  );
}
