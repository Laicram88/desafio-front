import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import WinnerModal from './components/WinnerModal';
import SearchFilter from './components/SearchFilter';
import './App.css';

const App = () => {
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [winner, setWinner] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelectCharacter = (character) => {
    if (selectedCharacters.length < 2) {
      setSelectedCharacters([...selectedCharacters, character]);
    }
  };

  const handleBattle = () => {
    if (selectedCharacters.length === 2) {
      // Comparar os atributos powerstatus dos dois personagens
      const [char1, char2] = selectedCharacters;
      const winner = char1.powerstatus > char2.powerstatus ? char1 : char2;
      setWinner(winner);
      setModalOpen(true);
    } else {
      alert('Selecione exatamente dois personagens para a batalha.');
    }
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Selecione dois personagens para a batalha
        </Typography>
        <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CharacterList 
          searchQuery={searchQuery} 
          onSelectCharacter={handleSelectCharacter}
          selectedCharacters={selectedCharacters}
        />
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
