import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Model({image, open1 ,setOpen,title,content}) {
  
    const handleClose = () => {
        setOpen(false);
        title="";
        content="";
      };
 
  return (
    <React.Fragment>
    
      <Dialog
        open={open1}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" >
            <div className=' m-4 shadow-lg md:h-[25rem] w-[90%]'>
              <img src={image} alt="" className='h-[100%] w-[100%] ' />
            </div>
           { content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}