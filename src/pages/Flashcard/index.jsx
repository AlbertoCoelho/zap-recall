import { useState } from "react";
import RevealQuestionIcon from "../../assets/trianglebutton.png";
import FlipIcon from "../../assets/flip.svg";
import './style.css';

const FlashCard = ({ question, position }) => {
  const [isFlipped,setIsFlipped] = useState(false);
  const [isClicked,setIsClicked] = useState(false);

  if(isFlipped){
    return (
      <h1>Algo</h1>
    );
  }

  else {
    if(isClicked){
      return (
        <div className="container-flashcard-clicked">
          <div className="question">
            <span>Algo por enquanto {question}</span>
          </div>
          <div className="flip">
            <img onClick={() => setIsFlipped(true)} src={FlipIcon} alt="Turn flashcard" />
          </div>
        </div>
      );
    }
      return (
        <div className="container-flashcard-not-clicked">
          <span>Pergunta {position}</span>
          <img onClick={() => setIsClicked(true)} src={RevealQuestionIcon} alt="Reveal question" />
        </div>
      );
  }
}

export default FlashCard;