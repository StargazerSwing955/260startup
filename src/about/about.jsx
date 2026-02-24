import React from 'react';
import { getQuote } from '../service';

export function About() {
  const [quote,setQuote] = React.useState(getQuote())

  const changeQuote = () => {
    setQuote(getQuote())
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
        <button onClick={changeQuote}>quote</button>

        
    </main>
  );
}