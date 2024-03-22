import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import axios from 'axios';

export default function Create() {
const [data,setData]=useState({
    name:'',
    published_At:'',
    photo:'',
   header:'',
   content:''

})
const handleSubmit=async()=>{
   
    try{
        const res=await axios.post(`https://server-1-vx69.onrender.com/api/blog/`,data)
        const data1= res;
        console.log(data1)
        alert("stored successfully")
        setData("")
    }catch(error){
        console.log(error)
    }
}
    const convertToBase64=(e)=>{
        let reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
        
       
            setData({...data,photo:reader.result})
        };
        reader.onerror=()=>{
            console.log(reader.error)
        }
    }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add blogs
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            console.log(data)
            handleSubmit();
            handleClose();
          },
        }}
      >
        <DialogTitle>Blogs</DialogTitle>
        <DialogContent>
         
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Enter name"
            type="text"
            fullWidth
            variant="standard"
            onChange={((e)=>setData({...data,name:e.target.value}))}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="datetime-local"
            fullWidth
            onChange={((e)=>setData({...data,published_At:e.target.value}))}
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="header"
            name="header"
            label="Enter title"
            type="text"
            onChange={((e)=>setData({...data,header:e.target.value}))}
            fullWidth
            variant="standard"
          />
          <div className='flex flex-col gap-6'>

         <input type='file' accept='image/*' onChange={convertToBase64} placeholder='choose image' className='py-4 border-b-[1px] border-gray-500'/>
         <textarea rows={5} placeholder='enter content '  onChange={((e)=>setData({...data,content:e.target.value}))} className='p-2 border-[1px] border-gray-500'/>
          </div>
        </DialogContent>
        <DialogActions>
          <Button type="submit">ADD</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}