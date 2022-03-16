import MainPage from "./pages/MainPage";
import Deck from "./pages/Deck";
import { useState } from "react";

const App = () => {
  const [page,setPage] = useState("mainPage");

  return (
    <>
      {page === 'mainPage' ? <MainPage setPage={setPage}/> : ''}
      {page === 'deck' ? <Deck /> : ''}
    </>
  );
}

export default App;