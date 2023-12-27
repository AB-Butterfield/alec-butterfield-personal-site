import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Header-Footer
import Header from "./components/Header";
import Footer from "./components/Footer";
//Pages
import Contact from "./pages/Contact";
import Gizmos from "./pages/Gizmos";
import Goals from "./pages/Goals";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ToontownPage from "./pages/ToontownPage";


export default function App() {

    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/gizmos" element={<Gizmos />}></Route>
                    <Route path="/goals" element={<Goals />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/toontown" element={<ToontownPage />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}