import { API_KEY, API_URL } from "./settings";

const responseToTopics = (results = []) => {
  if (Array.isArray(results)) {
    const result = results.map((result) => {
      const { slug, title, total_photos } = result;
      return {
        id: slug,
        title,
        total_photos,
      };
    });

    return result;
  }
  return [];
};

export default function getTopics() {
  const apiURL = `${API_URL}/topics?order_by="featured"&client_id=${API_KEY}`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then(responseToTopics);
}
