import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "../services/api";
import "../index.css";
import Loader from "./Loader/Loader";
import { ErrorMessage } from "formik";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import ImageCard from "./ImageGallery/ImageCard";

// Импорт функции fetchImages взаимодействие с бэк эндом

const App = () => {
  const [photo, setPhoto] = useState([]);
  const [query, setQuery] = useState("nature"); //для обработки запроса в серч баре
  const [isLoading, setIsLoading] = useState(false); //ШФГ5 загрузка
  const [isError, setIsError] = useState(false); //ШФГ6 ошибки
  const [page, setPage] = useState(1); // Шаг 7 добавляем подгрузку картинок
  const [isOpen, setIsOpen] = useState(false); //работа модального окна
  const [selectedImage, setSelectedImage] = useState(null); // выбранное изображение
  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  //шаг 3 взаимодействие с бэк эндом, рендер фоток в галерею
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true); //идет загрузка
        setIsError(false);
        const response = await fetchImages(query, 9, page); // Заменить "nature" на любой другой запрос
        setIsLoading(false); //отменяем загрузку после того как вывели изображение

        setPhoto((prev) => [...prev, ...response.results]); // Измените на response.results, если API Unsplash возвращает данные в таком формате
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]); //  пустой массив зависимостей, чтобы useEffect выполнялся один раз

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {isOpen && (
        <ImageModal onClose={handleCloseModal}>
          <img
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description}
          />
        </ImageModal>
      )}
      <ImageGallery items={photo} onImageClick={handleOpenModal} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
    </div>
  );
};

export default App;
