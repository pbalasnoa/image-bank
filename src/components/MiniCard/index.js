import "./styles.css";

import { useLocation } from "wouter";

export default function MiniCard({ collection }) {
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();

  return collection.map((col) => (
    <div
      key={col.id}
      onClick={() => col.id && pushLocation(`/search/collection/${col.id}`)}
      className="miniCard-img-box"
    >
      <div className="miniCard-slider">
        {col.preview_photos.map((img) => (
          <img
            key={img.id}
            className="miniCard-img"
            src={img.urls.small}
            alt={`collection ${col.title}`}
          />
        ))}
      </div>
      <div className="miniCard-info-box">
        <p className="miniCard-info-totalPhotos">
          #{new Intl.NumberFormat().format(col.total_photos)}
        </p>
        <p>{col.title}</p>
      </div>
    </div>
  ));
}
