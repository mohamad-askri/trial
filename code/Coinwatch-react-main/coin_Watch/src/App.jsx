import './App.css'

import {Header} from './components/Header'
import {Mainpage} from './components/Mainpage.jsx'
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import {Coinpage} from "./components/Coinpage.jsx";
import {Setting} from "./components/Setting.jsx";
import {Footer} from "./components/Footer.jsx";
import React, {useEffect, useState} from "react";

import Aboutus from "./components/Aboutus.jsx";





function App() {

    const [darkMode, setDarkMode] = useState(false);


    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
        const body = document.querySelector('body');
        body.classList.toggle('body_dark');
    }

    return (
        <>
            <body className={darkMode ? 'body_dark' : ''}>

            <div className="extension-wrapper">


                <BrowserRouter>


                    <Header/>

                    <Routes>

                        <Route index  path="*" element={<Mainpage      darkMode={darkMode}       />} exact />


                        <Route path="/setting" element={<Setting toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} exact />

                        <Route  path="/coins/:id"  element={<Coinpage darkMode={darkMode} />} />

                        <Route path="/about" element={<Aboutus/>} />
                    </Routes>

                </BrowserRouter>






                <Footer darkMode={darkMode} />

            </div>
            </body>
        </>
    )
}

export default App
