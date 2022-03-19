import { useState } from "react";
import RevealQuestionIcon from "../../assets/trianglebutton.png";
import FlipIcon from "../../assets/flip.svg";
import './style.css';

const FlashCard = ({ question, position, answer }) => {
  const [isFlipped,setIsFlipped] = useState(false);
  const [isClicked,setIsClicked] = useState(false);
  const [questionStatus,setQuestionStatus] = useState("correct");

  if(isFlipped){
    return (
      <div className="container-flashcard-clicked">
        <div className="question">
          <span>Outra coisa {answer}</span>
        </div>
        <div className="button-container">
          <button onClick={() => {setQuestionStatus("incorrect");setIsFlipped(false);setIsClicked(false)} }>Não lembrei</button>
          <button onClick={() => setQuestionStatus("almost")}>Quase não lembrei</button>
          <button onClick={() => setQuestionStatus("correct")}>Zap!</button>
        </div>
      </div>
    );
  }

  else {
    if(isClicked === true){
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
          <span className={{questionStatus}} >Pergunta {position}</span>
          <img onClick={() => setIsClicked(true)} src={RevealQuestionIcon} alt="Reveal question" />
        </div>
      );
  }
}

export default FlashCard;