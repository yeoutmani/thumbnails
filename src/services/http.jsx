/** @format */

import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/photos/?client_id=WqGAieK_i89bRjxPgJLwTdsSb657M47-5rWxVnCvfso";

const http = {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
};

export default http;
