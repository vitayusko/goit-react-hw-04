import React from "react";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items }) => {
  return (
    <div className={s.galleryWrapper}>
      <ul className={s.ulImage}>
        {items.map((item) => (
          <li key={item.id} className={s.imageItem}>
            <img src={item.urls.small} alt={item.alt_description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
