import HomePage from "./pages/HomePage";
import Deck from "./pages/Deck";
import RemainingPages from "./pages/RemainingPages";
import { useState } from "react";

const App = () => {
  const [page,setPage] = useState("HomePage");
  const [answeredFlashcards,setAnsweredFlashcard] = useState(0);
  const [sizeDeck,setSizeDeck] = useState(0);
  const [footerImages,setFooterImages] = useState("");
  const [finalFooter,setFinalFooter] = useState("");

  return (
    <>
      {page === 'HomePage' ? <HomePage setPage={setPage}/> : ''}
      {page !== 'HomePage' ? (
        <RemainingPages answeredFlashcards={answeredFlashcards} sizeDeck={sizeDeck} footerImages={footerImages} page={page} finalFooter={finalFooter}>
          {page === 'Deck' ? <Deck setPage={setPage} answeredFlashcards={answeredFlashcards} setAnsweredFlashcard={setAnsweredFlashcard} setSizeDeck={setSizeDeck} setFooterImages={setFooterImages} footerImages={footerImages} setFinalFooter={setFinalFooter}/> : ''}
        </RemainingPages>
      ) : ''}
    </>
  );
}

export default App;