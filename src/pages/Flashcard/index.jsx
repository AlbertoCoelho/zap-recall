import { useState } from "react";
import RevealQuestionIcon from "../../assets/trianglebutton.png";
import FlipIcon from "../../assets/flip.svg";
import IncorrectIcon from "../../assets/incorrecticon.svg";
import CorrectIcon from "../../assets/correcticon.svg";
import AlmostIcon from "../../assets/almosticon.svg";
import './style.css';

const FlashCard = ({ question, position, answer }) => {
  const [isFlipped,setIsFlipped] = useState(false);
  const [isClicked,setIsClicked] = useState(false);
  const [questionStatus,setQuestionStatus] = useState("");
  const [imagem,setImagem] = useState(() => RevealQuestionIcon);

  if(isFlipped){
    return (
      <div className="container-flashcard-clicked">
        <div className="question">
          <span>Resposta {answer}</span>
        </div>
        <div className="button-container">
          <button onClick={() => {setQuestionStatus("incorrect");setIsFlipped(false);setIsClicked(false);setImagem(() => IncorrectIcon)} }>Não lembrei</button>
          <button onClick={() => {setQuestionStatus("almost");setIsFlipped(false);setIsClicked(false);setImagem(() => AlmostIcon)}  }>Quase não lembrei</button>
          <button onClick={() => {setQuestionStatus("correct");setIsFlipped(false);setIsClicked(false);setImagem(() => CorrectIcon)} }>Zap!</button>
        </div>
      </div>
    );
  }

  else {
    if(isClicked === true){
      return (
        <div className="container-flashcard-clicked">
          <div className="question">
            <span>Pergunta {question}</span>
          </div>
          <div className="flip">
            <img onClick={() => setIsFlipped(true)} src={FlipIcon} alt="Turn flashcard" />
          </div>
        </div>
      );
    }
      return (
        <div className="container-flashcard-not-clicked">
          <span className={`${questionStatus}`}>Pergunta index {position}</span>
          <img onClick={() => setIsClicked(true)} src={imagem} alt="Reveal question" />
        </div>
      );
  }
}

export default FlashCard;