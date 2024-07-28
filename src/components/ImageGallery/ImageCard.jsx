import React from "react";

const ImageCard = ({ url, alt, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={url} alt={alt} />
    </div>
  );
};

export default ImageCard;
