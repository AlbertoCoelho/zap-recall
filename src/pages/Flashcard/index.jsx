import { useState } from "react";
import RevealQuestionIcon from "../../assets/trianglebutton.png";
import FlipIcon from "../../assets/flip.svg";
import IncorrectIcon from "../../assets/incorrecticon.svg";
import CorrectIcon from "../../assets/correcticon.svg";
import AlmostIcon from "../../assets/almosticon.svg";
import './style.css';

const FlashCard = ({ question, answer, index, answeredFlashcards, setAnsweredFlashcard }) => {
  const [isFlipped,setIsFlipped] = useState(false);
  const [isClicked,setIsClicked] = useState(false);
  const [questionStatus,setQuestionStatus] = useState("");
  const [imagem,setImagem] = useState(() => RevealQuestionIcon);

  function actionFlashCard(questionStatus,imagem){
    setQuestionStatus(questionStatus);
    setIsFlipped(false);
    setIsClicked(false);
    setImagem(imagem);
    setAnsweredFlashcard(answeredFlashcards + 1);
  }

  if(isFlipped){
    return (
      <div className="container-flashcard-clicked">
        <div className="question">
          <span>{answer}</span>
        </div>
        <div className="button-container">
          <button onClick={() => actionFlashCard("incorrect", () => IncorrectIcon) }>Não lembrei</button>
          <button onClick={() => actionFlashCard("almost", () => AlmostIcon)  }>Quase não lembrei</button>
          <button onClick={() => actionFlashCard("correct", () => CorrectIcon) }>Zap!</button>
        </div>
      </div>
    );
  }

  else {
    if(isClicked === true){
      return (
        <div className="container-flashcard-clicked">
          <div className="question">
            <span>{question}</span>
          </div>
          <div className="flip">
            <img onClick={() => setIsFlipped(true)} src={FlipIcon} alt="Turn flashcard" />
          </div>
        </div>
      );
    }
      return (
        <div className="container-flashcard-not-clicked">
          <span className={`${questionStatus}`}>Pergunta {index}</span>
          <img onClick={() => setIsClicked(true)} src={imagem} alt="Reveal question" />
        </div>
      );
  }
}

export default FlashCard;