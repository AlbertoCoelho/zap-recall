import './style.css';

const Footer = ({ answeredFlashcards,deckSize }) => {
  return (
    <div className="footer-container">
        <span>{answeredFlashcards}/{deckSize} CONCLUÍDOS</span>
        <div class="icons">
        </div>
    </div>
  );
}

export default Footer;