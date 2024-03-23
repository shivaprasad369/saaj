import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function Model({img,open,setOpen}) {
    
    const handleClose = () => {
        setOpen(false);
      };

      
    
  return (
    <React.Fragment>
    
      <Dialog
        open={open}
        onClose={handleClose}
        
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <img src={img} alt="gallery" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}