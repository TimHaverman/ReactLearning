import React from 'react';
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"

import './App.css';

function App() {
  const firstName = "Tim";
  const lastName = "Haverman";
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay

  const styles = {
    fontSize: 24,
    color: "blue"
  }

  if(hours < 12){
    timeOfDay = "morning";
    styles.fontSize = 44
    styles.color = "green";
  }
  else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.fontSize = 34;
    styles.color = "red";
  }
  else{
    timeOfDay = "night";
    styles.fontSize = 24
    styles.color = "blue";
  }
  
  return (
  // <h1>Hello {firstName + " " + lastName}</h1> or 
  // the style is used with 2 sets of { to JS{ JS object }}
  <div style={{color: "#FF8C00", backgroundColor: "gray"}}>
    
    <h1 style={styles}>Good {timeOfDay}</h1>

    <h1>It is currently about {date.getHours() % 12} o'clock!</h1>

    <h1> Hello {`${firstName} ${lastName}`}!</h1>

  </div>
  );
}

export default App;
