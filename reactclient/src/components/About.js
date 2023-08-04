import React from "react";
import "/Users/jameslian/Documents/aspnetserver/reactclient/src/about.css"
const About = () =>{
    return(
        <div className="App"><HeroSection /></div>
    );
}
export default About;



function HeroSection() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-card">
          <h1>Our Goals</h1>
          <p>Our team is committed to building a better community for ballers. We want to create a website where we can united footballers who want to play a game socially or competitvely.</p>
          <a href="#" className="btn4">Learn More</a>
        </div>
      </section>
    </main>
  );
}


