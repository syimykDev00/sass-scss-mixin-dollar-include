import React from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {Route, Routes} from "react-router-dom";
import About from "./page/about/about";
import Reviews from "./page/reviews/reviews";
import Contact from "./page/contact/contact";
import Home from "./page/home/home";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/reviews'} element={<Reviews/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;