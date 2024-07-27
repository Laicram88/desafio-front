import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';

const CharacterCard = ({ character, onClick, isSelected }) => {
  return (
    <Card>
      <CardActionArea onClick={onClick} style={{ border: isSelected ? '2px solid blue' : 'none' }}>
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
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
