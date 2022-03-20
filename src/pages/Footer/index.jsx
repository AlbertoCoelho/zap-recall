import './style.css';

const Footer = ({ answeredFlashcards,sizeDeck }) => {
  return (
    <div className="footer-container">
        <span>{answeredFlashcards}/{sizeDeck} CONCLUÍDOS</span>
        <div class="icons">
        </div>
    </div>
  );
}

export default Footer;