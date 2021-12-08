import { useEffect, useRef, useCallback } from "react";
import ListOfImage from "../components/ListOfImage/index.js";

import useImages from "../hooks/useImages.js";
import useNearScreen from "../hooks/useNearScreen.js";

import debounce from "just-debounce-it";

export default function SearchResult({ params }) {
  // console.log("result", params);
  const { query, id } = params;
  const { loading, images, setPage } = useImages({ query, id });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  // const [match, Useparams] = useRoute("/search/:query");

  // console.log("useparams", Useparams);
  // console.log("match", match);

  //eslint-disable-next-line
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 1000),
    []
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <ListOfImage images={images} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </>
  );
}
