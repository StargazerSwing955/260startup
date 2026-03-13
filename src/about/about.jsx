import React from 'react';
// import { getQuote } from '../service';

export function About() {
  
  //quote function call and definition
  const [quote,setQuote] = React.useState({text: "Push button for a quote", author: "Unknown"})

  function getQuote() {
    fetch('https://quote.cs260.click')
    .then((response) => response.json())
    .then((data) => {
    setQuote({text: data.quote, author: data.author});
    
    })
    .catch();
  }

  return (
      <main>
       

        {/* <!-- I'm going to add an actual banner, I just haven't drawn it yet. --> */}
        <div className="about-banner">
          <img className='about-banner' src="../about_banner.png" alt="PetPet banner" />
        </div>

        <p>PetPet is a simple pet simulator based on Shimegjis and classic idle games like Cookie Clicker.</p>

        <p className="quote">{quote.text}</p>
         <p className="quote">- {quote.author}</p>
        <button onClick={getQuote}>quote</button>

        
    </main>
  );
}