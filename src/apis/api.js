import axios from "axios";

export default axios.create({
  baseURL: `https://private-9d65b3-tinnova.apiary-mock.com/users`,
  headers: {
    "Content-Type": "application/json",
  },
});
