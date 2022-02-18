import { useState, useEffect } from "react";
import getCollections from "../services/getCollection";

const INITIAL_PAGE = 1;

export default function useCollections() {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCollections().then((collections) => {
      setCollections(collections);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);
    getCollections(page).then((collections) => {
      setCollections((prevCollections) => prevCollections.concat(collections));
      setLoadingNextPage(false);
    });
  }, [page]);

  return { loading, collections, loadingNextPage, setPage };
}
