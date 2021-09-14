import axios from "axios";

export default axios.create({
  baseURL: `https://private-9d65b3-tinnova.apiary-mock.com/`,
  headers: {
    "Content-Type": "application/json",
  },
});
