import MiniLogo from "../../assets/logo-pequeno.png";
import Footer from "../Footer";
import './style.css';

const RemainingPages = ({children}) => {
  return (
    <div className="container-pages">
      <header>
        <img src={MiniLogo} alt="MiniLogo" />
        <span>ZapRecall</span>
      </header>
      {children}
      <Footer />
    </div>
  );
}

export default RemainingPages;