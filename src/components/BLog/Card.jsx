import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
export default function Cards({img,name,description,title,date,main}) {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    return (
    <div>
       <Card sx={{ maxWidth: 345 }} >
     
     <CardMedia
       component="img"
       height="194"
       image={img}
       alt="Paella dish"
     />
     <CardContent>
        <h1 className='text-2xl font-bold py-3'>{main}</h1>
       <Typography variant="body2" color="text.secondary">
         {description  ? description.slice(0, 100)+".....": description}
       </Typography>
       <Button variant="outlined" onClick={handleClickOpen}>
       Know more
      </Button>
     </CardContent>
    
     <CardHeader
       avatar={
         <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           {name}
         </Avatar>
       }
    //    action={
    //       <IconButton aria-label="share">
    //      <ShareIcon />
    //    </IconButton>
    //    }
       title={title}
       subheader={date}
     />
   
    
   </Card>
   <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {main}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
        {description}
          </Typography>
        </DialogContent>
       
      </BootstrapDialog>
    </div>
  )
}
