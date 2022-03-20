import { useState } from "react";
import RevealQuestionIcon from "../../assets/trianglebutton.png";
import FlipIcon from "../../assets/flip.svg";
import IncorrectIcon from "../../assets/incorrecticon.svg";
import CorrectIcon from "../../assets/correcticon.svg";
import AlmostIcon from "../../assets/almosticon.svg";
import './style.css';

const FlashCard = ({ question,answer,index,answeredFlashcards,setAnsweredFlashcard,footerImages,setFooterImages,finalFooter,actionDeck }) => {
  const [isFlipped,setIsFlipped] = useState(false);
  const [isClicked,setIsClicked] = useState(false);
  const [questionStatus,setQuestionStatus] = useState("");
  const [images,setImages] = useState(() => RevealQuestionIcon);

  function actionFlashCard(questionStatus,image){
    setQuestionStatus(questionStatus);
    setIsFlipped(false);
    setIsClicked(false);
    setImages(image);
    setAnsweredFlashcard(answeredFlashcards + 1);
    setFooterImages(image);
    actionDeck(index -1,questionStatus);
    finalFooter();
  }

  if(isFlipped){
    return (
      <div className="container-flashcard-clicked">
        <div className="question">
          <span>{answer}</span>
        </div>
        <div className="button-container">
          <button onClick={() => {actionFlashCard("incorrect", () => IncorrectIcon)} }>Não lembrei</button>
          <button onClick={() => {actionFlashCard("almost", () => AlmostIcon)}  }>Quase não lembrei</button>
          <button onClick={() => {actionFlashCard("correct", () => CorrectIcon)} }>Zap!</button>
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
          <img onClick={() => setIsClicked(true)} src={images} alt="Reveal question" />
        </div>
      );
  }
}

export default FlashCard;