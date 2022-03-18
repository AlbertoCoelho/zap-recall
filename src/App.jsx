import HomePage from "./pages/HomePage";
import Deck from "./pages/Deck";
import Footer from "./pages/Footer";
import RemainingPages from "./pages/RemainingPages";
import { useState } from "react";

const App = () => {
  const [page,setPage] = useState("HomePage");

  return (
    <>
      {page === 'HomePage' ? <HomePage setPage={setPage}/> : ''}
      {page !== 'HomePage' ? (
        <RemainingPages>
          {page === 'Deck' ? <Deck setPage={setPage} /> : ''}
          {page === 'Footer' ? <Footer setPage={setPage} /> : ''}
        </RemainingPages>
      ) : ''}
    </>
  );
}

export default App;