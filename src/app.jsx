import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function App() {

  return ( 
    <div className='app'>
    <header>
        <div className="header-content">
            <h1>PetPet</h1>
            <nav >
                <ul className="nav-menu">
                    <li className="nav-item"><a href="index.html">Login</a></li>
                    <li className="nav-item"><a href="html-pages/play-page.html">Play</a></li>
                    <li className="nav-item"><a href="html-pages/leader-page.html">Leaderboard</a></li>
                    <li className="nav-item"><a href="html-pages/about-page.html">About</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
       App components go here
    </main>

    <footer>
       
        <div className="footer-content">
        <p className="footerp">PetPet has a <a href="https://github.com/StargazerSwing955/260startup?tab=readme-ov-file">GitHub Repository</a></p>
        <p className="footerp">Sarah Kennedy</p>
        </div>
       
    </footer>
    </div>
  );

}