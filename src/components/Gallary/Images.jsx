import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ImageListItem } from '@mui/material';
export default function Images({srcset,image,rows,cols,title}) {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
        
        {/* <ImageListItem  cols={cols||1} rows={rows||1}> */}
       <img
            {...srcset(image, 121, rows, cols)}
            alt={title}
            loading="lazy"
            onClick={handleClickOpen}
          />
          {/* </ImageListItem> */}
           <Dialog
           sx={{width:'100vw'}}
         open={open}
         onClose={handleClose}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
       >
          <img
           src={image}
            alt={title}
            loading="lazy"
          />
       </Dialog>
    </div>
  )
}
