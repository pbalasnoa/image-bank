import "./styles.css";

import { useLocation } from "wouter";

export default function Tag({ tags }) {
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();

  return tags?.map((tag) => (
    <p
      key={tag.id || tag.title}
      onClick={() => tag.id && pushLocation(`/search/topic/${tag.id}`)}
      className="card-tags"
    >
      {tag.title}
    </p>
  ));
}
