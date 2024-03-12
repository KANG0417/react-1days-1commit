import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksPage from "./pages/BooksPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<BooksPage />} />
        <Route path="/books" element={<BooksPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
