/*
import React, {Component} from 'react';

import './destination/Styles/style.css'
import './destination/Bootstrap/css/bootstrap.min.css'
import './destination/Styles/font.css'
import './destination/Styles/dark-style.css'
import './destination/Fonts/css/all.css'

import {Tickertapewidget} from "./Tickertapewidget.jsx"
import {Link, Route} from "react-router-dom";
import {Aboutus} from "./Aboutus.jsx";



function Footer ({darkMode})  {

        return (


<>
                <footer className="copy-right text-center p-2">


                    <a href=""  onClick={u}>
                        <p>Made with ❤️</p>

                    </a>

                </footer>



           <Tickertapewidget  darkMode={darkMode}   />

</>
        );
    }


export default Footer;


*/


import './destination/Styles/style.css';
import './destination/Bootstrap/css/bootstrap.min.css';
import './destination/Styles/font.css';
import './destination/Styles/dark-style.css';
import './destination/Fonts/css/all.css';
import { Tickertapewidget } from "./Tickertapewidget.jsx";
import { Link } from 'react-router-dom';


export function Footer({ darkMode }) {



    return (
        <>
            <footer className="copy-right text-center p-2">


                <Link  to="/about">    <p> Made with ❤️</p></Link>








            </footer>
            <Tickertapewidget darkMode={darkMode} />
        </>
    );
}


