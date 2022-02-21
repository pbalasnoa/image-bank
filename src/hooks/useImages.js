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
  const [isNewImages, setIsNewImages] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    if (idTopic) {
      getTopicImages({ idTopic }).then((images) => {
        setLoading(false);
        if (images.error) {
          setError(images.error[0]);
          return;
        }

        setImages(images);
      });
    } else if (query) {
      getImages({ query }).then((images) => {
        setLoading(false);
        if (images.error) {
          setError(images.error[0]);
          return;
        }

        setImages(images);
      });
    } else {
      getCollectionImages({ idCollection }).then((images) => {
        setLoading(false);
        if (images.error) {
          setError(images.error[0]);
          return;
        }

        setImages(images);
      });
    }
  }, [query, idTopic, idCollection]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingNextPage(true);

    if (idTopic) {
      getTopicImages({ idTopic, page }).then((nextImages) => {
        setLoadingNextPage(false);
        if (nextImages.error) {
          setError(nextImages.error[0]);
          return;
        }

        if (nextImages.length <= 0) {
          setIsNewImages(false);
          return;
        }

        setImages((prevImage) => prevImage.concat(nextImages));
      });
    } else if (query) {
      getImages({ query, page }).then((nextImages) => {
        setLoadingNextPage(false);
        if (nextImages.error) {
          setError(nextImages.error[0]);
          return;
        }

        if (nextImages.length <= 0) {
          setIsNewImages(false);
          return;
        }

        setImages((prevImage) => prevImage.concat(nextImages));
      });
    } else {
      getCollectionImages({ idCollection, page }).then((nextImages) => {
        setLoadingNextPage(false);
        if (nextImages.error) {
          setError(nextImages.error[0]);
          return;
        }

        if (nextImages.length <= 0) {
          setIsNewImages(false);
          return;
        }

        setImages((prevImage) => prevImage.concat(nextImages));
      });
    }
  }, [query, idTopic, idCollection, page, setImages]);

  return {
    loading,
    loadingNextPage,
    images,
    isNewImages,
    error,
    setPage,
  };
}
