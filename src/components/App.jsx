import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "../services/api";
import "../index.css";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";

// Импорт функции fetchImages взаимодействие с бэк эндом

const App = () => {
  const [photo, setPhoto] = useState([]);
  const [query, setQuery] = useState("nature"); // Для обработки запроса в серч баре
  const [isLoading, setIsLoading] = useState(false); // Загрузка
  const [isError, setIsError] = useState(false); // Ошибки
  const [page, setPage] = useState(1); // Подгрузка картинок
  const [isOpen, setIsOpen] = useState(false); // Работа модального окна
  const [selectedImage, setSelectedImage] = useState(null); // Выбранное изображение

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  // Взаимодействие с бэк эндом, рендер фоток в галерею
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true); // Идет загрузка
        setIsError(false);
        const response = await fetchImages(query, 9, page); // Заменить "nature" на любой другой запрос
        setIsLoading(false); // Отменяем загрузку после того как вывели изображение

        setPhoto((prev) => [...prev, ...response.results]); // Измените на response.results, если API Unsplash возвращает данные в таком формате
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]); // Запускается при изменении query или page

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {isOpen && selectedImage && (
        <ImageModal
          isOpen={isOpen}
          onClose={handleCloseModal}
          imageUrl={selectedImage.urls.regular}
          altText={selectedImage.alt_description}
        />
      )}
      <ImageGallery items={photo} onImageClick={handleOpenModal} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
    </div>
  );
};

export default App;
