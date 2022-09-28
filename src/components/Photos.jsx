/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { fetchPhotos } from "../services/requests";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    async function getPhotos() {
      const results = await fetchPhotos();
      if (results.name !== "AxiosError") setPhotos(results);
    }
    getPhotos();
  }, []);
  return (
    <div className='max-w[1200px] mx-auto py-16 px-4 text-center'>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        {photos.map((photo, index) => (
          <img
            className='w-full h-full object-cover'
            src={photo.urls.thumb}
            width='300'
            key={index}
            style={{ margin: "2px" }}
            alt={photo.alt_description}
          />
        ))}
      </div>
    </div>
  );
};

export default Photos;
