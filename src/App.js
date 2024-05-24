import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from "./components/Main";
import AddCategory from "./components/pages/AddCategory";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Main/>}></Route>
        <Route exact path="/pages/AddCategory" element={<AddCategory />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
