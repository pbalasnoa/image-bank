import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useLocation } from "wouter";
import DetailCard from "../components/DetailCard";
import getImage from "../services/getImage";
import useResponsive from "../hooks/useResponsive";

export default function Detail({ params }) {
  const [query, setQuery] = useState("");
  const location = useLocation();
  // const images = useGlobalImages();
  const [image, setImage] = useState({});
  const { width } = useResponsive();

  console.log("desde details", width);

  useEffect(() => {
    getImage(params).then((img) => setImage(img));
  }, [params]);

  const handleSubmit = (event) => {
    event.preventDefault();
    location[1](`/search/${query}`);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  // const image = images.find((image) => image.id === params.id);

  return (
    <DetailCard
      image={image}
      width={width}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      query={query}
    />
  );
}
