import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xy-hM7ss07I4_w9HE1veun4AAGvdbjcW_qRC1yVuyDE",
  },
});
