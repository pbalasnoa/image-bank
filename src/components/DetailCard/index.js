import { useState } from "react";
import "./styles.css";

import { useLocation } from "wouter";

import DynamicStyleSearchInput from "../DynamicStyleSearchInput/index.js";

export default function DetailCard({
  image,
  handleChange,
  handleSubmit,
  query,
}) {
  const [showDetail, setShowDetail] = useState(false);
  const [location, setLocation] = useLocation(); // eslint-disable-line
  const {
    alt_description,
    likes,
    name,
    name_exif,
    name_location,
    small,
    views,
  } = image;

  return (
    <div className="card-detail">
      <div className="card-detail-header-nav">
        <i
          className="bi bi-caret-left-fill"
          onClick={() => setLocation("/")}
        ></i>
        <DynamicStyleSearchInput
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          query={query}
        />
      </div>
      <img src={small} className="card_img" alt={alt_description} />
      {showDetail ? (
        <div className="footer card-detail-info">
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
              <div className="card-detail-icon card-detail-social-icon">
                <i className="bi bi-instagram "></i>
              </div>
              <div className="card-detail-icon card-detail-social-icon">
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
    </div>
  );
}
