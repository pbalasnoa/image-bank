import { useState, useEffect } from "react";

import getImages from "../services/getImages";
import getTopicImages from "../services/getTopicImages";
import getCollectionImages from "../services/getCollectionImages";

const INITIAL_PAGE = 1;

export default function useImages({
  query = null,
  idTopic = null,
  idCollection = null,
}) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [images, setImages] = useState([]);
  const [isImages, setIsImages] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (idTopic) {
      getTopicImages({ idTopic }).then((images) => {
        setImages(images);
        setLoading(false);
      });
    } else if (query) {
      getImages({ query }).then((images) => {
        setImages(images);
        setLoading(false);
      });
    } else {
      getCollectionImages({ idCollection }).then((images) => {
        setImages(images);
        setLoading(false);
      });
    }
  }, [query, idTopic, idCollection]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingNextPage(true);

    if (idTopic) {
      getTopicImages({ idTopic, page }).then((nextImages) => {
        console.log("use", nextImages);
        if (nextImages.length <= 0) setIsImages(false);
        setImages((prevImage) => prevImage.concat(nextImages));
        setLoadingNextPage(false);
      });
    } else if (query) {
      getImages({ query, page }).then((nextImages) => {
        if (nextImages.length <= 0) setIsImages(false);
        setImages((prevImage) => prevImage.concat(nextImages));
        setLoadingNextPage(false);
      });
    } else {
      getCollectionImages({ idCollection, page }).then((nextImages) => {
        if (nextImages.length <= 0) setIsImages(false);
        setImages((prevImage) => prevImage.concat(nextImages));
        setLoadingNextPage(false);
      });
    }
  }, [query, idTopic, idCollection, page, setImages]);

  return { loading, loadingNextPage, images, isImages, setPage };
}
