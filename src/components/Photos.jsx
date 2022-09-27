import React, { useState, useEffect } from 'react';
import { fetchPhotos } from "../services/requests";
const Photos = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
     async function getPhotos() {
         const results = await fetchPhotos();
         if(results.name !== 'AxiosError')
         setPhotos(results)
        };
          getPhotos();
     }, []);
    return (
        <div>
            {photos.map(photo => {
                return (
                <div key={photo.id}>
              <img
                src={photo.urls.raw}
                alt={photo.id}/>
                    </div>
                     );
      })}
        </div> )
}

export default Photos