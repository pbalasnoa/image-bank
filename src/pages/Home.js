import useImages from "../hooks/useImages";

import ListOfImage from "../components/ListOfImage";

export default function Home() {
  const { loading, images } = useImages(); // eslint-disable-line

  return (
    <>
      {/* <Header
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={query}
      /> */}
      <h3 className="mb">Última búsqueda</h3>
      {/* <section className="container">
        <ListOfImage images={images} />
      </section> */}

      <ListOfImage images={images} />
    </>
  );
}
