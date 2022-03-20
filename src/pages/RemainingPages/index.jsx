import MiniLogo from "../../assets/logo-pequeno.png";
import Footer from "../Footer";
import './style.css';

const RemainingPages = ({ children, answeredFlashcards,sizeDeck }) => {
  return (
    <div className="container-pages">
      <header>
        <img src={MiniLogo} alt="MiniLogo" />
        <span>ZapRecall</span>
      </header>
      {children}
      <Footer answeredFlashcards={answeredFlashcards} sizeDeck={sizeDeck}/>
    </div>
  );
}

export default RemainingPages;