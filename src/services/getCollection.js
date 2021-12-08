import { API_KEY, API_URL } from "./settings";

const responseToCollection = (apiResponse) => {
  const results = apiResponse;

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

export default function getCollection() {
  const apiURL = `${API_URL}/collections?&client_id=${API_KEY}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(responseToCollection);
}
