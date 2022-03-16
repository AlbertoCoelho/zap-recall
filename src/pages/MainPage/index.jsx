import Logo from '../../assets/logo.png';
import './style.css';

const MainPage = ({setPage}) => {
  return (
    <div class="container">
      <img src={Logo} alt="LogoMainPage" />
        <h1>ZapRecall</h1>
      <button onClick={() => setPage('deck')}>Iniciar Recall!</button>
    </div>
  );
}

export default MainPage;