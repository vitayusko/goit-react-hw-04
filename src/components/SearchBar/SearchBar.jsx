import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import { IoSearchOutline } from "react-icons/io5";
import s from "./SearchBar.module.css";

// Define validation schema using Yup
const validationSchema = Yup.object({
  query: Yup.string()
    .required("Search query is required") // Required field
    .min(3, "Search query must be at least 3 characters"), // Minimum length validation
});

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
    setQuery(values.query); // Pass query to parent component
  };

  return (
    <header className={s.header}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema} // Apply validation schema
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <div className={s.inputWrapper}>
              <Field
                name="query"
                className={s.input}
                type="search"
                placeholder="Search images and photos"
              />
              {errors.query && touched.query ? (
                <div className={s.error}>{errors.query}</div> // Show validation error
              ) : null}
              <button className={s.btn} type="submit">
                <IoSearchOutline />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default SearchBar;
