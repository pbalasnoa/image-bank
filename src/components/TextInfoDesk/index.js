import LogoImgBank from "../LogoIMG_bank";

const TextInfoDesk = ({ image }) => {
  const {
    collections_user,
    downloads,
    instagram_username,
    likes,
    likes_user,
    name,
    name_exif,
    name_location,
    photos_user,
    twitter_username,
    views,
  } = image;
  return (
    <>
      <div>
        <h2 className="card-detail--info-title">image</h2>
        <div className="card-detail--info-box">
          {name_exif && (
            <p>
              <i className="bi bi-camera-fill pr-05"></i>
              {name_exif}
            </p>
          )}
          {name_location && (
            <p className="pt-05">
              <i className="bi bi-geo-alt-fill pr-05"></i>
              {name_location}
            </p>
          )}
        </div>
        <div className="card-detail--stats">
          <div className="card-detail--stats-box">
            <p className="card-detail--stats-title">
              {new Intl.NumberFormat().format(views)}
            </p>
            <span className="card-detail--stats-subtitle">
              <i className="bi bi-eye-fill"></i> views
            </span>
          </div>
          <div className="card-detail--stats-box">
            <p className="card-detail--stats-title">
              {new Intl.NumberFormat().format(likes)}
            </p>
            <span className="card-detail--stats-subtitle">
              <i className="bi bi-heart-fill"></i> likes
            </span>
          </div>
          <div className="card-detail--stats-box">
            <p className="card-detail--stats-title">
              {new Intl.NumberFormat().format(downloads)}
            </p>
            <span className="card-detail--stats-subtitle">
              <i className="bi bi-cloud-arrow-down-fill"></i> downloads
            </span>
          </div>
        </div>
      </div>
      <div className="mbl-2">
        <h2 className="card-detail--info-title">{name}</h2>
        <div className="card-detail--info-box">
          {instagram_username && (
            <a
              href={`https://www.instagram.com/${instagram_username}/`}
              rel="noreferrer"
              target="_blank"
            >
              <i className="bi bi-instagram pr-05"></i>
              {instagram_username}
            </a>
          )}
          {twitter_username && (
            <a
              href={`https://twitter.com/${twitter_username}`}
              rel="noreferrer"
              target="_blank"
              className="pt-05"
            >
              <i className="bi bi-twitter pr-05"></i>
              {twitter_username}
            </a>
          )}
        </div>
        <div className="card-detail--stats">
          <div className="card-detail--stats-box">
            <p className="card-detail--stats-title">
              {new Intl.NumberFormat().format(collections_user)}
            </p>
            <span className="card-detail--stats-subtitle">
              <i className="bi bi-hash"></i> collections
            </span>
          </div>
          <div className="card-detail--stats-box">
            <p className="card-detail--stats-title">
              {new Intl.NumberFormat().format(likes_user)}
            </p>
            <span className="card-detail--stats-subtitle">
              <i className="bi bi-hash"></i> likes
            </span>
          </div>
          <div className="card-detail--stats-box">
            <p className="card-detail--stats-title">
              {new Intl.NumberFormat().format(photos_user)}
            </p>
            <span className="card-detail--stats-subtitle">
              <i className="bi bi-hash"></i> photos
            </span>
          </div>
        </div>
        <div className="logo-box">
          <LogoImgBank />
        </div>
      </div>
    </>
  );
};

export default TextInfoDesk;
