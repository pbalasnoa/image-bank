import { useContext } from "react";
import ImagesContext from "../context/ImageContext";

export default function useGlobalImages() {
  const { images } = useContext(ImagesContext);
  return images;
}
