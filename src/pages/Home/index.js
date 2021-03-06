import "./style.css";
import { useState, useEffect } from "react";
import getTopics from "../../services/getTopics";

import Tag from "../../components/Tag";
import MiniCard from "../../components/MiniCard";

import useCollections from "../../hooks/useCollection";

import { Helmet } from "react-helmet";

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
          <h2>Loading...</h2>
          <Helmet>
            <title>Loading...</title>
          </Helmet>
        </div>
      ) : (
        <>
          <Helmet>
            <title>Home | IMG_bank</title>
            <meta
              name="description"
              content="Web site IMG-bank, image browser, use the unplash api"
            />
            {/* <link rel="canonical" href="" /> */}
          </Helmet>
          <div className="home-collections-box mbl-2">
            <MiniCard collection={collections} />
          </div>
          <div className="mbl-2">
            <button onClick={handleGetMoreCollection} className="btn__contened">
              see more collections
            </button>
          </div>
        </>
      )}
    </main>
  );
}
