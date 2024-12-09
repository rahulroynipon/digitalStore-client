import { useEffect } from "react";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./features/category/categorySlice";
import Header from "./components/global/Header";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <section>
      <Header />
      <Home />
    </section>
  );
}

export default App;
