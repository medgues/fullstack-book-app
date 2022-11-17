import { Route, BrowserRouter, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import FormSection from "./components/FormSection";
import CardSection from "./components/Card Section";
import BookEditForm from "./components/BookEditForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-newbook" element={<FormSection />} />
        <Route path="/listofbooks" element={<CardSection />} />
        <Route path="/edit/:id" element={<BookEditForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
