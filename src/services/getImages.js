import { API_KEY, API_URL } from "./settings";

const responseToImages = ({ results } = []) => {
  if (results.hasOwnProperty("errors")) {
    return { error: results.errors };
  }

  if (Array.isArray(results)) {
    const images = results.map((img) => {
      const { alt_description, description, id, likes, tags, urls, user } = img;
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
        tags,
        username,
      };
    });
    return images;
  }
  return [];
};

export default function getImages({ query = "random", page = 1 } = {}) {
  const apiURL = `${API_URL}/search/photos?query=${query}&page=${page}&orientation=portrait&client_id=${API_KEY}`;

  return fetch(apiURL)
    .then((res) => {
      if (!res.ok && res.status === 403)
        return { errors: ["Rate Limit Exceeded, you try later"] };

      return res.json();
    })
    .then(responseToImages)
    .catch((err) => console.error(err));
}
