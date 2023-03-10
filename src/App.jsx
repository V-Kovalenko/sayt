import React from "react";
import './assets/scss/App.scss';
import Header from "./components/Header/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
function App() {

  return (
    <div className="app">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
