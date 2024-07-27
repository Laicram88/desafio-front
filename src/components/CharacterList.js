import React from 'react';
import { Grid } from '@mui/material';
import CharacterCard from './CharacterCard';
import useCharacterStore from '../store/useCharacterStore';

const CharacterList = () => {
  const { characters } = useCharacterStore();

  return (
    <Grid container spacing={3}>
      {characters.map((character) => (
        <Grid item key={character.id} xs={12} sm={6} md={4}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterList;
