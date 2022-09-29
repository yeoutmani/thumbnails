/** @format */

import React, { useState, useEffect } from "react";
import { Lightbox } from "react-modal-image";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = (photo) => {
    setCurrentImageUrl(photo);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);
  return (
    <div className='max-w[1200px] mx-auto py-16 px-4 text-center'>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        {photos.map((photo, index) => (
          <img
            className='w-full h-full object-cover'
            onClick={() => openImageViewer(photo.urls)}
            src={photo.urls.thumb}
            width='300'
            key={index}
            style={{ margin: "2px" }}
            alt={photo.alt_description}
          />
        ))}
      </div>
      {isViewerOpen && (
        <Lightbox
          medium={currentImageUrl.raw}
          large={currentImageUrl.full}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default Photos;
