import "./style.css";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import getTopics from "../../services/getTopics";

import Tag from "../../components/Tag";
import MiniCard from "../../components/MiniCard";

import useCollections from "../../hooks/useCollection";

export default function Home() {
  const [topics, setTopics] = useState([]);
  const { loading, collections, setPage } = useCollections();

  useEffect(() => {
    getTopics().then((topic) => setTopics(topic));
  }, []);

  const handleGetMoreCollection = () => setPage((prevPage) => prevPage + 1);

  return (
    <main className="home-container">
      <div className="home-tags-box">
        <Tag tags={topics} path={"/search/topic/"} />
      </div>
      {loading ? (
        <div className="mbl-2">
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <div className="home-collections-box mbl-2">
            <MiniCard collection={collections} />
          </div>
          <div className="mbl-2">
            <button onClick={handleGetMoreCollection} className="btn__contened">
              view more collections
            </button>
          </div>
        </>
      )}
    </main>
  );
}
