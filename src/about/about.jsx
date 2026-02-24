import React from 'react';

export function About() {
  const [quote,setQuote] = React.useState("I am learning.")



  return (
      <main>
       

        {/* <!-- I'm going to add an actual banner, I just haven't drawn it yet. --> */}
        <div className="about-banner">
          <img src="../about_banner.png" alt="PetPet banner" />
        </div>

        <p>PetPet is a simple pet simulator based on Shimegjis and classic idle games like Cookie Clicker.</p>

        <p className="quote">{quote}</p>
        <button>quote</button>

        
    </main>
  );
}