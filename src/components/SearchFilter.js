import React from 'react';
import { TextField } from '@mui/material';

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
      label="Buscar Personagem"
      variant="outlined"
      fullWidth
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      margin="normal"
    />
  );
};

export default SearchFilter;
