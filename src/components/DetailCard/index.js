import { useState } from "react";
import "./styles.css";

import { useLocation } from "wouter";

import DynamicStyleSearchInput from "../DynamicStyleSearchInput/index.js";

export default function DetailCard(props) {
  const { image, width, handleChange, handleSubmit, query } = props;
  const [showDetail, setShowDetail] = useState(true); //eslint-disable-line
  const [render, setRender] = useState(true); //eslint-disable-line
  const [location, setLocation] = useLocation(); // eslint-disable-line
  const {
    alt_description,
    collections_user,
    downloads,
    id,
    instagram_username,
    likes,
    likes_user,
    name,
    name_exif,
    name_location,
    photos_user,
    small,
    twitter_username,
    username,
    views,
  } = image;
  // console.log(props);

  const mobileRender = () => {
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
  };

  const deskRender = () => {
    return (
      <div className="card-detail-desk">
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
        <div className="card-detail--img-box-desk">
          <img src={small} alt={alt_description} />
        </div>

        <section className="card-detail--info-desk">
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
                  <i class="bi bi-cloud-arrow-down-fill"></i> downloads
                </span>
              </div>
            </div>
          </div>

          <div className="mbl-2">
            <h2 className="card-detail--info-title">{name}</h2>
            <div className="card-detail--info-box">
              {instagram_username && (
                <p>
                  <i class="bi bi-instagram pr-05"></i>
                  {instagram_username}
                </p>
              )}
              {twitter_username && (
                <p className="pt-05">
                  <i class="bi bi-twitter pr-05"></i>
                  {twitter_username}
                </p>
              )}
            </div>
            <div className="card-detail--stats">
              <div className="card-detail--stats-box">
                <p className="card-detail--stats-title">
                  {new Intl.NumberFormat().format(collections_user)}
                </p>
                <span className="card-detail--stats-subtitle">
                  <i class="bi bi-hash"></i> collections
                </span>
              </div>
              <div className="card-detail--stats-box">
                <p className="card-detail--stats-title">
                  {new Intl.NumberFormat().format(likes_user)}
                </p>
                <span className="card-detail--stats-subtitle">
                  <i class="bi bi-hash"></i> likes
                </span>
              </div>
              <div className="card-detail--stats-box">
                <p className="card-detail--stats-title">
                  {new Intl.NumberFormat().format(photos_user)}
                </p>
                <span className="card-detail--stats-subtitle">
                  <i class="bi bi-hash"></i> photos
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  return width < 500 ? mobileRender() : deskRender();
}

/* <main className="main">
        <section className="card-detail--stats-container">
          <div className="card-detail--info-desk">
            <h2 className="card-detail--info-title">image</h2>
            <div className="card-detail--stats-box">
              <p className="card-detail--stats-subtitle">
                <i className="bi bi-eye-fill"></i>
                views
              </p>
              <p className="card-detail--stats-title">{views}</p>
            </div>
            <div className="card-detail--stats-box">
              <i className="bi bi-heart-fill"></i>
              <span className="card-detail--stats-subtitle">likes</span>
              <p className="card-detail--stats-title">{likes}</p>
            </div>
            <p>dow</p>
            <p>{name_exif}</p>
            <p>{name_location}</p>
          </div>
        </section>
        <section className="card-detail--stats-container">
          <div className="card-detail--info-desk">
            <h2 className="card-detail--info-title">user</h2>
            <div className="card-detail--stats-box">
              <p className="card-detail--stats-subtitle">
                <i className="bi bi-eye-fill"></i>
                views
              </p>
              <p className="card-detail--stats-title">{views}</p>
            </div>
            <div className="card-detail--stats-box">
              <i className="bi bi-heart-fill"></i>
              <span className="card-detail--stats-subtitle">likes</span>
              <p className="card-detail--stats-title">{likes}</p>
            </div>
            <p>dow</p>
            <p>{name_exif}</p>
            <p>{name_location}</p>
          </div>
        </section>
      </main> */
