import RevealQuestionIcon from "../../assets/trianglebutton.png";
import './style.css';

const FlashCard = () => {
  return (
    <div className="container-flashcard">
      <span>Pergunta 1</span>
      <img src={RevealQuestionIcon} alt="Reveal question" />
    </div>
  );
}

export default FlashCard;