import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";

import ClassComponentExample from "./components/ClassComponentExample";
import Layout from "./components/Layout";
import './App.css';
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  return (
      <div className="App">
        <ClassComponentExample/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index path="functional-component" element={<FunctionalComponent/>} />
                <Route path="class-component" element={<ClassComponentExample/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;
