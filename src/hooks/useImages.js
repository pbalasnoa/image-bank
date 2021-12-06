import { useState, useEffect, useContext } from "react";
import ImageContext from "../context/ImageContext";
import getImages from "../services/getImages";

const INITIAL_PAGE = 1;

export default function useImages({ query } = { query: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  // const [images, setImages] = useState([]);
  const { images, setImages } = useContext(ImageContext);

  const queryToUse =
    query || localStorage.getItem("lastQuery") !== "null"
      ? localStorage.getItem("lastQuery")
      : false || "random";
  // console.log("useImage", queryToUse);

  useEffect(() => {
    setLoading(true);

    getImages({ query: queryToUse }).then((images) => {
      setImages(images);
      setLoading(false);
      localStorage.setItem("lastQuery", query);
    });
  }, [query, queryToUse, setImages]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);
    getImages({ query: queryToUse, page }).then((nextImages) => {
      setImages((prevImage) => prevImage.concat(nextImages));
      setLoadingNextPage(false);
    });
  }, [queryToUse, page, setImages]);

  return { loading, loadingNextPage, images, setPage };
}
