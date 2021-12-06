import { useState } from "react";
import { useLocation } from "wouter";
import DetailCard from "../components/DetailCard";
import useGlobalImages from "../hooks/useGlobalImages";

export default function Detail({ params }) {
  const [query, setQuery] = useState("");
  const location = useLocation();
  const images = useGlobalImages();

  const handleSubmit = (event) => {
    event.preventDefault();
    location[1](`/search/${query}`);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const image = images.find((image) => image.id === params.id);

  return (
    <DetailCard
      image={image}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      query={query}
    />
  );
}
