import FlashCard from "../Flashcard";

const Deck = ({setPage}) => {
  return (
    <>
      <button onClick={()=> setPage("finalPage")}>Meu botao do deck</button>
      <FlashCard />
    </>
  );
}

export default Deck;