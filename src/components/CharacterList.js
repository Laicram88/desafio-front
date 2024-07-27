import React from 'react';
import { Grid } from '@mui/material';
import CharacterCard from './CharacterCard';
import useCharacterStore from '../store/useCharacterStore';

const CharacterList = ({ searchQuery }) => {
  const { characters } = useCharacterStore();

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Grid container spacing={2}>
      {filteredCharacters.map((character) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterList;
