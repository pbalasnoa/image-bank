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
      <div className="home-collections-box mbl-2">
        <MiniCard collection={collection} />
      </div>
    </main>
  );
}
