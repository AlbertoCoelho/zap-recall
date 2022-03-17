import HomePage from "./pages/HomePage";
import Deck from "./pages/Deck";
import FinalPage from "./pages/FinalPage";
import RemainingPages from "./pages/RemainingPages";
import { useState } from "react";

const App = () => {
  const [page,setPage] = useState("HomePage");

  return (
    <>
      {page === 'HomePage' ? <HomePage setPage={setPage}/> : ''}
      {page !== 'HomePage' ? (
        <RemainingPages>
          {page === 'deck' ? <Deck setPage={setPage} /> : ''}
          {page === 'finalPage' ? <FinalPage setPage={setPage} /> : ''}
        </RemainingPages>
      ) : ''}
    </>
  );
}

export default App;