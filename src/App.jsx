import { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./features/category/categorySlice";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/global/Layout";

function App() {
  const dispatch = useDispatch();

  const loadCategories = useCallback(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
