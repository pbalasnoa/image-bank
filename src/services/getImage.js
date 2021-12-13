import { API_KEY, API_URL } from "./settings";

const responseToImage = (img = {}) => {
  const {
    alt_description,
    downloads,
    exif,
    id,
    likes,
    location,
    urls,
    user,
    views,
  } = img;
  const { name: name_exif } = exif;
  const { name: name_location } = location;
  const {
    name,
    social,
    total_collections: collections_user,
    total_likes: likes_user,
    total_photos: photos_user,
    username,
  } = user;
  const { small } = urls;
  const { instagram_username, twitter_username } = social;

  return {
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
  };
};

export default function getImage({ id } = {}) {
  const apiURL = `${API_URL}/photos/${id}?client_id=${API_KEY}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(responseToImage);
}
