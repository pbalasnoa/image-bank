import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import getTopics from "../services/getTopics";

export default function Home() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topic) => setTopics(topic));
  }, []);

  return (
    <>
      <h3 className="mb">List topics</h3>
      <div className="card-tags-box">
        {topics?.map((tag) => (
          <p key={tag.title} className="card-tags">
            {tag.title}
          </p>
        ))}
      </div>
    </>
  );
}
