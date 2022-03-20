// import IncorrectIcon from "../../assets/incorrecticon.svg";
// import AlmostIcon from "../../assets/almosticon.svg";
// import CorrectIcon from "../../assets/correcticon.svg";
// import { useState } from "react";
import './style.css';

const Footer = ({ answeredFlashcards,sizeDeck,footerImages,finalFooter }) => {
  if(finalFooter === "incorrect"){
    return <h1>Footer Incorreto</h1>
  }

   else if(finalFooter === "notincorrect"){
    return <h1>Footer Correto</h1>
  }

  else{
  return (
    <div className="footer-container">
        <span>{answeredFlashcards}/{sizeDeck} CONCLUÍDOS</span>
        <div className="icons">
          <img src={footerImages} alt="Footer Images" /> 
        </div>
    </div>
  );
  }
}

export default Footer;