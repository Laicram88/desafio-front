import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

const WinnerModal = ({ open, onClose, winner }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Vencedor</DialogTitle>
      <DialogContent>
        <DialogContentText>
          O vencedor da batalha é {winner.name}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Fechar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default WinnerModal;
