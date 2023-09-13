import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navigation, HomePage, FoodEntry, Contact} from "./components";

export default function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="food_entry" element={<FoodEntry/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
}
