import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const CharacterCard = ({ character }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={character.name}
        height="140"
        image={`/imagens/${character.image}`}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
