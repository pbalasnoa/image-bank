import { API_KEY, API_URL } from "./settings";

const responseToCollectionImages = (results = []) => {
  if (results.hasOwnProperty("errors")) {
    return { error: results.errors };
  }

  if (Array.isArray(results)) {
    const images = results.map((img) => {
      const { alt_description, description, id, likes, urls, user } = img;
      const { small } = urls;
      const { name, profile_image, username } = user;

      return {
        alt_description,
        description,
        id,
        likes,
        name,
        profile_image,
        small,
        username,
      };
    });
    return images;
  }
  return [];
};

export default function getCollectionImages({ idCollection, page = 1 } = {}) {
  const apiURL = `${API_URL}/collections/${idCollection}/photos?&page=${page}&orientation=portrait&client_id=${API_KEY}`;

  return fetch(apiURL)
    .then((res) => {
      if (!res.ok && res.status === 403)
        return { errors: ["Rate Limit Exceeded, you try later"] };

      return res.json();
    })
    .then(responseToCollectionImages)
    .catch((err) => console.error(err));
}
