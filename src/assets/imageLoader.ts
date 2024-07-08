import { useState, useEffect } from 'react';

type ImagesMap = {
  [key: string]: string | null;
};

interface ImageItem {
  image: string;
}

const defaultPath = 'src/assets';

export const useImages = (path: string, imageList: ImageItem[]) => {
  const [images, setImages] = useState<ImagesMap>({});

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: ImagesMap = {};
      await Promise.all(imageList.map(async (item) => {
        try {
          const imageUrl = new URL(`${defaultPath}/${path}/${item.image}`, window.location.href).href;
          const response = await fetch(imageUrl);
          if (response.ok) {
            loadedImages[item.image] = imageUrl;
          } else {
            throw new Error(`Failed to load image: ${imageUrl}`);
          }
        } catch (error) {
          console.error("Error loading images:", error);
          loadedImages[item.image] = null;
        }
      }));
      setImages(loadedImages);
    };

    loadImages();
  }, [imageList]);

  return images;
};