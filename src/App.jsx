import { useEffect } from "react";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./features/category/categorySlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <section className="width">
      <Home />
    </section>
  );
}

export default App;
