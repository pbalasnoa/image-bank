const TextInfoMobile = ({ image, color, showDetail, setContrast }) => {
  const {
    instagram_username,
    likes,
    name,
    name_exif,
    name_location,
    twitter_username,
    views,
  } = image;

  return (
    <div
      style={{
        backgroundColor: `rgba(${color[0]},${color[1]},${color[2]}, .4)`,
        color: setContrast(),
      }}
      className="footer card-detail-info"
    >
      <div className="card-more-detail-icon" onClick={() => showDetail(false)}>
        <i className="bi bi-caret-down"></i>
      </div>
      <p className="card-detail-text">{name}</p>
      <div className="card-detail-info-grid-column">
        <div className="card-detail-info-grid-row">
          {name_exif && (
            <p className="card-detail-subtext">
              <span className="card-detail-icon">
                <i className="bi bi-camera-fill"></i>
              </span>
              {name_exif}
            </p>
          )}
          {name_location && (
            <p className="card-detail-subtext">
              <span className="card-detail-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </span>
              {name_location}
            </p>
          )}
          {views && (
            <p className="card-detail-subtext">
              <span className="card-detail-icon">
                <i className="bi bi-eye-fill"></i>
              </span>
              {views}
            </p>
          )}
          {likes && (
            <p className="card-detail-subtext">
              <span className="card-detail-icon">
                <i className="bi bi-heart-fill"></i>
              </span>
              {likes}
            </p>
          )}
        </div>
        <div className="card-detail-info-grid-row bg-blur">
          {instagram_username && (
            <div
              style={{ color: setContrast() }}
              className="card-detail-icon card-detail-social-icon"
            >
              <a
                href={`https://www.instagram.com/${instagram_username}/`}
                rel="noreferrer"
                target="_blank"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          )}
          {twitter_username && (
            <div
              style={{ color: setContrast(), display: "none" }}
              className="card-detail-icon card-detail-social-icon"
            >
              <a
                href={`https://twitter.com/${twitter_username}`}
                rel="noreferrer"
                target="_blank"
              >
                <i className="bi bi-twitter "></i>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextInfoMobile;
