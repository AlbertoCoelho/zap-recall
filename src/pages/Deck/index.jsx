import FlashCard from "../Flashcard";
import { useState } from "react";

const Deck = ({setPage,answeredFlashcards,setAnsweredFlashcard,setSizeDeck,footerImages,setFooterImages,setFinalFooter}) => {
  const [deck,setDeck] = useState([
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
      status: "incorrect"
    },
    {
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
      status: "incorrect"
    },
    {
      question: "Componentes devem iniciar com __ ",
      answer: "Letra maiúscula",
      status: "incorrect"
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      answer: "Expressões",
      status: "incorrect"
    },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
      status: "incorrect"
    },
    {
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências",
      status: "incorrect"
    },
    {
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes",
      status: "incorrect"
    },
    {
      question: "Usamos estado (state) para __",
      answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
      status: "incorrect"
    }  
  ]);

  setSizeDeck(deck.length);

  function finalFooter(){
    if(answeredFlashcards+1 === deck.length){
      const incorrectFlashCard = deck.find(item => item.status === "incorrect");
      incorrectFlashCard ? setFinalFooter("incorrect") : setFinalFooter("notincorrect")
    }

    return ;
  }

  function actionDeck(index,status){
    const updateDeck= [...deck];
    updateDeck[index].status = status;
    setDeck(updateDeck);
  }

  return (
    <>
      {
        deck.map( (item, index) => (
          <FlashCard key={index} question={item.question} answer={item.answer} index={index+1} answeredFlashcards={answeredFlashcards} setAnsweredFlashcard={setAnsweredFlashcard} setFooterImages={setFooterImages} footerImages={footerImages} finalFooter={finalFooter} actionDeck={actionDeck} />
        ))
      }
    </>
  );
}

export default Deck;