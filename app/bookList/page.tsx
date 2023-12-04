"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import Header from "../components/header/Header";
import { useEffect, useState } from "react";
import "./bookList.scss";
import axios from "axios";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    cover: Yup.string().required("Cover is required"),
    published: Yup.string().required("Published date is required"),
    pages: Yup.string().required("Pages is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      cover: "",
      published: "",
      pages: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
      closeModal();
    },
  });

  const fetchBooks = async () => {
    try {
      let res = await axios.get("https:/0001.uz/books");
      let data = await res.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <Header />
      <div className="bookList">
        <div className="bookList-title">
          <div className="bookList-flex flex-class">
            <h1>
              You’ve got <span id="countBook"></span>
              <span>book</span>
            </h1>
            <div className="bookList-titleBtns flex-class ">
              <input type="text" placeholder="Search a book" />
              <button onClick={openModal}>+ Create a book</button>
            </div>
          </div>
          <p>Your task today</p>
        </div>
        <div className="bookList-cards grid-class"></div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Create a book</h2>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <h3>Title</h3>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter your title"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? (
                  <div className="error">{formik.errors.title}</div>
                ) : null}
              </div>
              <div>
                <h3>Author</h3>
                <input
                  type="text"
                  name="author"
                  placeholder="Enter your author"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.author}
                />
                {formik.touched.author && formik.errors.author ? (
                  <div className="error">{formik.errors.author}</div>
                ) : null}
              </div>
              <div>
                <h3>Cover</h3>
                <input
                  type="text"
                  name="cover"
                  placeholder="Enter your cover"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cover}
                />
                {formik.touched.cover && formik.errors.cover ? (
                  <div className="error">{formik.errors.cover}</div>
                ) : null}
              </div>
              <div>
                <h3>Published</h3>
                <input
                  type="text"
                  name="published"
                  placeholder="Enter your published"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.published}
                />
                {formik.touched.published && formik.errors.published ? (
                  <div className="error">{formik.errors.published}</div>
                ) : null}
              </div>
              <div>
                <h3>Pages</h3>
                <input
                  type="text"
                  name="pages"
                  placeholder="Enter your pages"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.pages}
                />
                {formik.touched.pages && formik.errors.pages ? (
                  <div className="error">{formik.errors.pages}</div>
                ) : null}
              </div>
              <div className="modal-btns flex-class">
                <button onClick={closeModal} className="closeModal">
                  Close
                </button>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
