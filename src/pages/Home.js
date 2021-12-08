import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import getTopics from "../services/getTopics";
import getCollection from "../services/getCollection";

import Tag from "../components/Tag";
import MiniCard from "../components/MiniCard";

export default function Home() {
  const [topics, setTopics] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    getTopics().then((topic) => setTopics(topic));
    getCollection().then((collection) => setCollection(collection));
  }, []);

  return (
    <main className="home-container">
      <div className="home-tags-box">
        <Tag tags={topics} />
      </div>

      <h3 className="mbl-2">Collections</h3>
      <div className="home-collections-box">
        <MiniCard collection={collection} />
      </div>
    </main>
  );
}
