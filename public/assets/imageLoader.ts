import { useState, useEffect, useRef } from "react";

type ImagesMap = {
  [key: string]: string | null;
};

interface ImageItem {
  image: string;
}

const defaultPath = "/assets";

export const useImages = (path: string, imageList: ImageItem[]) => {
  const [images, setImages] = useState<ImagesMap>({});
  const prevImageListRef = useRef<ImageItem[]>([]);

  useEffect(() => {
    const isSameImageList =
      JSON.stringify(prevImageListRef.current) === JSON.stringify(imageList);
    if (isSameImageList) {
      return;
    }
    prevImageListRef.current = imageList;

    const loadImages = async () => {
      const loadedImages: ImagesMap = {};
      await Promise.all(
        imageList.map(async (item) => {
          try {
            const imageUrl = new URL(
              `${defaultPath}/${path}/${item.image}`,
              window.location.href
            ).href;
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
        })
      );
      setImages(loadedImages);
    };

    loadImages();
  }, [path, imageList]);

  return images;
};
