import { useState, useEffect, useContext } from "react";
import ImageContext from "../context/ImageContext";
import getImages from "../services/getImages";
import getTopicImages from "../services/getTopicImages";
import getCollectionImages from "../services/getCollectionImages";

const INITIAL_PAGE = 1;

export default function useImages(
  { query, id, idCollection } = { query: null, id: null, idCollection: null }
) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { images, setImages } = useContext(ImageContext);

  const queryToUse =
    query || localStorage.getItem("lastQuery") !== "null"
      ? localStorage.getItem("lastQuery")
      : false || "random";

  useEffect(() => {
    setLoading(true);

    if (id) {
      getTopicImages({ id }).then((images) => {
        setImages(images);
        setLoading(false);
      });
    } else if (query) {
      getImages({ query: queryToUse }).then((images) => {
        setImages(images);
        setLoading(false);
        localStorage.setItem("lastQuery", query);
      });
    } else {
      getCollectionImages({ idCollection }).then((images) => {
        setImages(images);
        setLoading(false);
      });
    }
  }, [query, id, idCollection, queryToUse, setImages]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    if (id) {
      setLoadingNextPage(true);
      getTopicImages({ id, page }).then((nextImages) => {
        setImages((prevImage) => prevImage.concat(nextImages));
        setLoadingNextPage(false);
      });
    } else if (query) {
      setLoadingNextPage(true);
      getImages({ query: queryToUse, page }).then((nextImages) => {
        setImages((prevImage) => prevImage.concat(nextImages));
        setLoadingNextPage(false);
      });
    } else {
      setLoadingNextPage(true);
      getCollectionImages({ idCollection, page }).then((nextImages) => {
        setImages((prevImage) => prevImage.concat(nextImages));
        setLoadingNextPage(false);
      });
    }
  }, [query, queryToUse, id, idCollection, page, setImages]);

  return { loading, loadingNextPage, images, setPage };
}
