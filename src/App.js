import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import WinnerModal from './components/WinnerModal';
import SearchFilter from './components/SearchFilter';
import './App.css';

const App = () => {
  const [winner, setWinner] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleBattle = () => {
    // Lógica para determinar o vencedor da batalha
    const randomWinner = { id: 1, name: 'Ryu', description: 'A skilled martial artist' }; // Exemplo estático
    setWinner(randomWinner);
    setModalOpen(true);
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Selecione um personagem desejavel
        </Typography>
        <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CharacterList searchQuery={searchQuery} />
        <Button variant="contained" color="primary" onClick={handleBattle}>
          Iniciar Batalha
        </Button>
      </Container>
      {winner && (
        <WinnerModal open={modalOpen} onClose={() => setModalOpen(false)} winner={winner} />
      )}
    </div>
  );
};

export default App;
