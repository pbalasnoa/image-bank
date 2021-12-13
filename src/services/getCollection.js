import { API_KEY, API_URL } from "./settings";

const responseToCollection = (results = []) => {
  if (Array.isArray(results)) {
    const result = results.map((result) => {
      const { id, title, total_photos, preview_photos } = result;

      return {
        id,
        title,
        total_photos,
        preview_photos,
      };
    });
    return result;
  }
  return [];
};

export default function getCollection({ page = 1 } = {}) {
  const apiURL = `${API_URL}/collections?page=${page}&client_id=${API_KEY}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(responseToCollection);
}
