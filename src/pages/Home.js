import React, { useState } from 'react';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import CharacterList from '../components/CharacterList';
import WinnerModal from '../components/WinnerModal';

const Home = () => {
  const [winner, setWinner] = useState(null);
  const [open, setOpen] = useState(false);

  const handleWinner = (character) => {
    setWinner(character);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setWinner(null);
  };

  return (
    <>
      <Header />
      <SearchFilter />
      <CharacterList onWinnerSelect={handleWinner} />
      {winner && <WinnerModal open={open} onClose={handleClose} winner={winner} />}
    </>
  );
};

export default Home;
