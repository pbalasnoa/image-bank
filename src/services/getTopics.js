import { API_KEY, API_URL } from "./settings";

const responseToImages = (apiResponse) => {
  const results = apiResponse;

  if (Array.isArray(results)) {
    const result = results.map((result) => {
      const { title, total_photos } = result;
      return {
        title,
        total_photos,
      };
    });
    console.log(result);
    return result;
  }
  return [];
};

export default function getTopics() {
  const apiURL = `${API_URL}/topics?order_by="featured"&client_id=${API_KEY}`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then(responseToImages);
}
