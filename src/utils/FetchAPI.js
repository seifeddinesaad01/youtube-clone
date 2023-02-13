import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: BASE_URL,
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": "009ec1d549mshbd8bf05c5a3cd83p18ff4fjsndd0cf7f39262",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
// const options = {
//   url: "https://youtube-v31.p.rapidapi.com/captions",
//   params: { part: "snippet", videoId: "M7FIvfx5J10" },
//   headers: {
//     "X-RapidAPI-Key": "",
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };
