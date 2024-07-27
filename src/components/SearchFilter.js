import React from 'react';
import { TextField } from '@mui/material';
import useCharacterStore from '../store/useCharacterStore';

const SearchFilter = () => {
  const { characters, setCharacters } = useCharacterStore();

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setCharacters(characters.filter(character => character.name.toLowerCase().includes(query)));
  };

  return (
    <TextField label="Search" variant="outlined" onChange={handleSearch} />
  );
};

export default SearchFilter;
