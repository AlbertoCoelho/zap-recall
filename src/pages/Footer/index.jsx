// import IncorrectIcon from "../../assets/incorrecticon.svg";
// import AlmostIcon from "../../assets/almosticon.svg";
// import CorrectIcon from "../../assets/correcticon.svg";
// import { useState } from "react";
import './style.css';
import Sad from "../../assets/sademoticon.svg";
import Party from "../../assets/partyemoticon.svg";

const Footer = ({ answeredFlashcards,sizeDeck,footerImages,finalFooter }) => {
  if(finalFooter === "incorrect"){
    return (
      <div className="footer-final">
        <div className="show-result">
          <div className="footer-title">
            <img src={Sad} alt="Sad emoticon" />
            <h1>Putz...</h1>
          </div>
          <div className="footer-subtitle">Ainda faltam alguns...<br></br>Mas não desanime!</div>
        </div>
        <div className="footer-container">
          <span>{answeredFlashcards}/{sizeDeck} CONCLUÍDOS</span>
          <div className="icons">
            <img src={footerImages} alt="Footer Images" /> 
          </div>
        </div>
      </div>
    );
  }

   else if(finalFooter === "notincorrect"){
    return (
      <div className="footer-final">
        <div className="show-result">
          <div className="footer-title">
            <img src={Party} alt="Party emoticon" />
            <h1>Parabéns!</h1>
          </div>
          <div className="footer-subtitle">Você não esqueceu de<br></br>nenhum flashcard!</div>
        </div>
        <div className="footer-container">
          <span>{answeredFlashcards}/{sizeDeck} CONCLUÍDOS</span>
          <div className="icons">
            <img src={footerImages} alt="Footer Images" /> 
          </div>
        </div>
      </div>
    );
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