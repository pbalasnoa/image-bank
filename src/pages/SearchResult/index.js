import { useEffect, useRef, useCallback } from "react";
import ListOfImage from "../../components/ListOfImage/index.js";

import useImages from "../../hooks/useImages.js";
import useNearScreen from "../../hooks/useNearScreen.js";

import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";

export default function SearchResult({ params }) {
  const { query, idTopic, idCollection } = params;
  const { loading, images, isNewImages, error, setPage } = useImages({
    query,
    idTopic,
    idCollection,
  });
  const externalRef = useRef();

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  let title = query ? query : idTopic ? idTopic : "collection";
  title = decodeURI(title);

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
        <>
          <h2>Loading...</h2>
          <Helmet>
            <title>Loading...</title>
          </Helmet>
        </>
      ) : (
        <>
          <Helmet>
            <title>{title} | IMG_bank</title>
            <meta name="description" content={`result of images of ${title}`} />
          </Helmet>

          <ListOfImage images={images} error={error} />

          <div id="visor" ref={externalRef} className="mbl-2">
            {error ? (
              <h2>{error} :c</h2>
            ) : isNewImages ? (
              <h2>Loading...</h2>
            ) : (
              <h2>No found new images :c</h2>
            )}
          </div>
        </>
      )}
    </>
  );
}
