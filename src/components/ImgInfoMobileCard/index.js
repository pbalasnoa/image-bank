import { useState } from "react";
import "./styles.css";

const lavender__secondary = "#ece7ff";
const rich_Black__primary = "#001219";

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

  const setContrast = () => {
    let brightness = color[0] * 299 + color[1] * 587 + color[2] * 114;
    brightness /= 255000;
    return brightness >= 0.5 ? rich_Black__primary : lavender__secondary;
  };

  return (
    <>
      <img src={small} className="card_img" alt={alt_description} />

      {showDetail ? (
        <div
          style={{
            backgroundColor: `rgba(${color[0]},${color[1]},${color[2]}, .4)`,
            color: setContrast(),
          }}
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
                style={{ color: setContrast() }}
                className="card-detail-icon card-detail-social-icon"
              >
                <i className="bi bi-instagram "></i>
              </div>
              <div
                style={{ color: setContrast() }}
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
