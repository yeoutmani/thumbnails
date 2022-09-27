import http from "./http";

export function fetchPhotos() {
  let photos = http
    .get()
    .then((response) => response.data)
    .catch((error) => error);
  return photos;
}
