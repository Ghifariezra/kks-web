import axios from "axios";

const ENPOINT = import.meta.env.VITE_ENDPOINT_API;
const instanceUsers = axios.create({
  baseURL: ENPOINT,
});
const fetchApi = async () => {
  return await instanceUsers
    .get("/api/users")
    .then((res) => {
      return res.data.users;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

export { fetchApi };
