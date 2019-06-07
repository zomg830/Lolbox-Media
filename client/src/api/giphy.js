import axios from "axios";

export default axios.create({
  baseURL: "https://api.giphy.com/",
  header: {
    "cross-domain": true
  }
});
