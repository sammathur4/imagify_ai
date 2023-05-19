import React, { useState } from "react";

const ImageGrid = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [imagePool, setImagePool] = useState(images);

  const selectImage = (img) => {
    let newImagePool = [...imagePool];
    newImagePool.splice(imagePool.indexOf(currentImage), 1);
    newImagePool.push(img);

    setImagePool(newImagePool);
    setCurrentImage(img);
  };

  return (
    <div className="image-grid-container h-fit flex justify-center gap-10 flex-col-reverse md:flex-row">
      <div className="image-grid grid grid-cols-2 gap-5">
        {images.map((img) => (
          <div className="h-32 w-36 p-5 bg-gray-50" key={img}>
            <img
              className="h-full w-auto"
              src={require(`../assets/${img}.jpg`)}
              onClick={() => selectImage(img)}
            />
          </div>
        ))}
      </div>
      <img
        className="h-md"
        src={require(`../assets/${currentImage}.jpg`)}
      ></img>
    </div>
  );
};

export default ImageGrid;
