import { useState, useEffect } from 'react';

type ImagesMap = {
  [key: string]: string | null;
};

interface ImageItem {
  image: string;
}

export const useImages = (path: string, imageList: ImageItem[]) => {
  const [images, setImages] = useState<ImagesMap>({});

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: ImagesMap = {};
      await Promise.all(imageList.map(async (item) => {
        try {
          const image = await import(/* @vite-ignore */ `${path}/${item.image}`);
          loadedImages[item.image] = image.default;
        } catch (error) {
          console.error("Error loading images:", error);
          loadedImages[item.image] = null;
        }
      }));
      setImages(loadedImages);
    };

    loadImages();
  }, [path, imageList]);

  return images;
};
