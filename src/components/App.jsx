import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "../services/api";
import "../index.css";

// Импорт функции fetchImages взаимодействие с бэк эндом

const App = () => {
  const [photo, setPhoto] = useState([]);
  const [query, setQuery] = useState("nature"); //для обработки запроса в серч баре

  //шаг 3 взаимодействие с бэк эндом, рендер фоток в галерею
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchImages(query); // Заменить "nature" на любой другой запрос
        setPhoto(response.results); // Измените на response.results, если API Unsplash возвращает данные в таком формате
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]); //  пустой массив зависимостей, чтобы useEffect выполнялся один раз

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ImageGallery items={photo} />
    </div>
  );
};

export default App;
