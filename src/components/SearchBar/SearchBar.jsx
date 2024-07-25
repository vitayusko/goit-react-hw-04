import React from "react";
import s from "./SearchBar.module.css";
import { Form, Field, Formik } from "formik";
import { IoSearchOutline } from "react-icons/io5";

// Шаг 4 - делаем серч бар, в который нужно ввести запрос { setQuery } и этот запрос нужно обработать и перенести в компонент APP FetchImage в App добавляем новое состояние [query setQuery]
const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
    setQuery(values.query); // отображаем запрос с серчбара
  };
  return (
    <header className={s.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <div className={s.inputWrapper}>
            <Field
              name="query"
              className={s.input}
              type="search"
              placeholder="Search images and photos"
            />
            <button className={s.btn} type="submit">
              <IoSearchOutline />
            </button>
          </div>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
