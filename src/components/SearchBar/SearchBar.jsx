import React from "react";
import s from "./SearchBar.module.css";
import { Form, Field, Formik } from "formik";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
    setQuery(values.query);
  };
  return (
    <header className={s.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <div className={s.inputWrapper}>
            <Field
              className={s.input}
              type="text"
              autocomplete="off"
              autofocus
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
