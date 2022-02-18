import { API_KEY, API_URL } from "./settings";

const responseToImages = (results = []) => {
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

export default function getTopicImages({ idTopic, page = 1 } = {}) {
  const apiURL = `${API_URL}/topics/${idTopic}/photos?&page=${page}&orientation=portrait&client_id=${API_KEY}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(responseToImages)
    .catch((err) => console.log(err));
}
