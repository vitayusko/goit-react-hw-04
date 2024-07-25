import React from "react";
import s from "./ImageGallery.module.css";

// ШАГ 2 формируем галлерею изображений для этого делаем функцию и мапим каждый итем в лишку
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
