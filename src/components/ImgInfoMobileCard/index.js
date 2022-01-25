import { useState } from "react";
import "./styles.css";

const ImgInfoMobileRender = ({ image, color }) => {
  const [showDetail, setShowDetail] = useState(true);
  const {
    alt_description,
    // id,
    likes,
    name,
    name_exif,
    name_location,
    small,
    // username,
    views,
  } = image;
  const inverColor = invertHex(color.substring(1));

  function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xffffff)
      .toString(16)
      .substring(1)
      .toUpperCase();
  }

  return (
    <>
      <img src={small} className="card_img" alt={alt_description} />

      {showDetail ? (
        <div
          style={{ backgroundColor: `${color}10`, color: `#${inverColor}` }}
          className="footer card-detail-info"
        >
          <div
            className="card-more-detail-icon"
            onClick={() => setShowDetail(false)}
          >
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
              <div
                style={{ color: `#${inverColor}` }}
                className="card-detail-icon card-detail-social-icon"
              >
                <i className="bi bi-instagram "></i>
              </div>
              <div
                style={{ color: `#${inverColor}` }}
                className="card-detail-icon card-detail-social-icon"
              >
                <i className="bi bi-twitter "></i>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="footer card-less-detail-icon"
          onClick={() => setShowDetail(true)}
        >
          <i className="bi bi-caret-up-fill "></i>
        </div>
      )}
    </>
  );
};

export default ImgInfoMobileRender;
