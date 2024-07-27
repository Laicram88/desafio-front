import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import WinnerModal from './components/WinnerModal';

const App = () => {
  const [winner, setWinner] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
          Selecione o personagem desejado
        </Typography>
        <CharacterList />
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
