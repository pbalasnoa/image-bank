import { useEffect, useRef, useCallback } from "react";
import ListOfImage from "../../components/ListOfImage/index.js";

import useImages from "../../hooks/useImages.js";
import useNearScreen from "../../hooks/useNearScreen.js";

import debounce from "just-debounce-it";

export default function SearchResult({ params }) {
  const { query, idTopic, idCollection } = params;
  const { loading, images, setPage } = useImages({
    query,
    idTopic,
    idCollection,
  });
  const externalRef = useRef();

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  /* just-debounce-it
  controla la cantidad de llamadas a la API, 
  la función debounce se ejecuta una sola vez aunque se hagan varios render.
  con el useCallBack guardamos una referencia a esa función 
  para no crear una nueva función en cada llamado, si no que sepa 
  que es la misma función
  */
  //eslint-disable-next-line
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 500),
    []
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <ListOfImage images={images} />

          <div id="visor" ref={externalRef} className="mbl-2">
            <h1>Loading...</h1>
          </div>
        </>
      )}
    </>
  );
}
