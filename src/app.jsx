import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Leader } from './leaderboard/leader';
import { About } from './about/about';

export default function App() {

  return ( 
    <BrowserRouter>
    <div className='app'>
    <header>
        <div className="header-content">
            <h1>PetPet</h1>
            <nav >
                <ul className="nav-menu">
                    <li className="nav-item"><NavLink href="index.html">Login</NavLink></li>
                    <li className="nav-item"><NavLink href="html-pages/play-page.html">Play</NavLink></li>
                    <li className="nav-item"><NavLink href="html-pages/leader-page.html">Leaderboard</NavLink></li>
                    <li className="nav-item"><NavLink href="html-pages/about-page.html">About</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>

    <Routes>
     <Route path='/' element={<Login />} exact />
     <Route path='/play' element={<Play />} />
     <Route path='/scores' element={<Scores />} />
     <Route path='/about' element={<About />} />
     <Route path='*' element={<NotFound />} />
    </Routes>

    {/* <main>
       App components go here
    </main> */}

    <footer>
       
        <div className="footer-content">
        <p className="footerp">PetPet has a <a href="https://github.com/StargazerSwing955/260startup?tab=readme-ov-file">GitHub Repository</a></p>
        <p className="footerp">Sarah Kennedy</p>
        </div>
       
    </footer>
    </div>
    </BrowserRouter>
  );

}

function NotFound(){
    return <main>404 unknown address</main>
}