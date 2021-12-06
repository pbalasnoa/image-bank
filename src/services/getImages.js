import { API_KEY, API_URL } from "./settings";

const responseToImages = (apiResponse) => {
  const { results = [] } = apiResponse;
  // console.log(apiResponse);
  if (Array.isArray(results)) {
    const images = results.map((img) => {
      const { alt_description, description, id, likes, tags, urls, user } = img;
      // const { name: name_exif } = exif;
      // const { name: name_location } = location;
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
  // console.log(query);
  const apiURL = `${API_URL}/search/photos?query=${query}&page=${page}&orientation=portrait&client_id=${API_KEY}`;
  // console.log(apiURL);
  return fetch(apiURL)
    .then((res) => res.json())
    .then(responseToImages);
}
