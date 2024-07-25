import axios from "axios";

// парсим данные м ансплэша шаг 1

export const fetchImages = async (query, perPage = 9, page = 1) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      per_page: perPage,
      page,
    },
    headers: {
      Authorization: "Client-ID OY7E_vy_zvJ3W0dB39G5FF10cnIMiqwZ6msbbNgPcuk",
    },
  });
  return response.data;
};
