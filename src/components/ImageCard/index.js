import { useEffect, useRef } from "react";
import User from "../User";
import "./styles.css";

import { Link } from "wouter";

let noOfCharac = 80;

export default function ImageCard(props) {
  const {
    alt_description,
    description,
    id,
    name,
    likes,
    profile_image,
    small,
    tags,
    username,
  } = props;
  const descriptionRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    let description = descriptionRef.current;
    if (description) {
      let descriptionText = description.textContent;
      if (descriptionText.length < noOfCharac) {
        description.nextElementSibling.style.display = "none";
      } else {
        let displayText = descriptionText.slice(0, noOfCharac);
        let moreText = descriptionText.slice(noOfCharac);

        description.innerHTML = `
        ${displayText}
        <span class="dots">...</span>
        <span class="hide more">${moreText}</span>
        `;
      }
    }
  }, [description]);

  const readMore = () => {
    let btn = btnRef.current;
    let cardInfo = btn.parentElement;
    cardInfo.querySelector(".dots").classList.toggle("hide");
    cardInfo.querySelector(".more").classList.toggle("hide");

    btn.textContent === "read more"
      ? (btn.textContent = "read less")
      : (btn.textContent = "read more");
  };

  return (
    <section key={id} className="card">
      <User name={name} profile_image={profile_image} username={username} />

      <Link to={`/image/${id}`}>
        <img
          loading="lazy"
          src={small}
          className="card-img"
          alt={alt_description}
        />
      </Link>

      <div className="card-info">
        <div className="card-stats">
          <i className="bi bi-heart-fill"></i>
          <p className="">{new Intl.NumberFormat().format(likes)}</p>
        </div>

        {tags && (
          <div className="card-tags-box">
            {tags?.map((tag) => (
              <p key={tag.title} className="card-tags">
                {tag.title}
              </p>
            ))}
          </div>
        )}

        {description && (
          <>
            <span className="card-subtitle">description</span>
            <p ref={descriptionRef} className="card-text">
              {description}
            </p>
            <button
              ref={btnRef}
              onClick={readMore}
              className="btn-text btn__inline-text"
            >
              read more
            </button>
          </>
        )}
      </div>
    </section>
  );
}
