import "./styles.css";

import { useLocation } from "wouter";

export default function Tag({ path, tags }) {
  // eslint-disable-next-line
  const [, pushLocation] = useLocation();

  return tags?.map((tag) => (
    <p
      key={tag.id || tag.title}
      onClick={() =>
        (tag.id || tag.title) && pushLocation(`${path}${tag.id || tag.title}`)
      }
      className="card-tags"
    >
      {tag.title}
    </p>
  ));
}
