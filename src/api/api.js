import axios from "axios";

export const Bd_Api = (setItems) => {
  return axios
    .get("https://610f44b39b698d00171752e4.mockapi.io/items")
    .then((res) => setItems(res.data));
};
export const Fav_API = (favItem) => {
  return axios.post(
    "https://610f44b39b698d00171752e4.mockapi.io/favorit",
    favItem
  );
};
