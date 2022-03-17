import Logo from '../../assets/logo.png';
import './style.css';

const HomePage = ({setPage}) => {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="LogoMainPage" />
        <p className="texto">ZapRecall</p>
      </div>
      <button onClick={() => setPage("deck")}>Iniciar Recall!</button>
    </div>
  );
}

export default HomePage;