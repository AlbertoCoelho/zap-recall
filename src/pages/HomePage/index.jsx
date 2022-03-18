import Logo from '../../assets/logo.png';
import './style.css';

const HomePage = ({setPage}) => {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="LogoMainPage" />
        <span>ZapRecall</span>
      </div>
      <button onClick={() => setPage("Deck")}>Iniciar Recall!</button>
    </div>
  );
}

export default HomePage;