import HomePage from "./pages/HomePage";
import Deck from "./pages/Deck";
import Footer from "./pages/Footer";
import RemainingPages from "./pages/RemainingPages";
import { useState } from "react";

const App = () => {
  const [page,setPage] = useState("HomePage");
  const [answeredFlashcards,setAnsweredFlashcard] = useState(0);
  const [sizeDeck,setSizeDeck] = useState(0);

  return (
    <>
      {page === 'HomePage' ? <HomePage setPage={setPage}/> : ''}
      {page !== 'HomePage' ? (
        <RemainingPages answeredFlashcards={answeredFlashcards} sizeDeck={sizeDeck}>
          {page === 'Deck' ? <Deck setPage={setPage} answeredFlashcards={answeredFlashcards} setAnsweredFlashcard={setAnsweredFlashcard}setSizeDeck={setSizeDeck}/> : ''}
          {page === 'Footer' ? <Footer /> : ''}
        </RemainingPages>
      ) : ''}
    </>
  );
}

export default App;