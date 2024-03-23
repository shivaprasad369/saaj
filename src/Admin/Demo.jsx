import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import axios from 'axios'
import { useState } from 'react';
import { DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import Create from './add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, Title, content, Published_At, Actions) {
  return { name, Title, content, Published_At, Actions};
}


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Blog() {
 const [data1,setData1]= useState([])
  React.useEffect(()=>{
    // setLoading(true)
    const handleGetData=async()=>{
      const res = await axios.get('https://server-1-vx69.onrender.com/api/blog')
    if(res){
        setData1(res.data.data)
        console.log(res.data.data)
    

    }else{
      console.log("no data")
     
      return false;
    }
    }
    handleGetData();
  },[data1])
  const rows = [
    data1.map((data)=>{

      createData(data.name, data.header, 6.0, 24, 4.0)
    })
   
  ];
  const handleDelete=async(id)=>{
    const res = await axios.delete(`http://localhost:8888/api/blog/${id}`)
  if(res){
  console.log("Deleted successfully")
  }else{
    console.log("not deleted")
   
    return false;
  }
  }
    // const [image,setImage]=useState("")
    // const [data,setData]=useState({
    //     name:'',
    //    photo:"",
    //    nameId:"About1"
    // })
    // const [name,setName]=React.useState('')
    // const [nameId,setNameId]=useState(1)
    // const [photo,setPhoto]=useState('')
    // const convertToBase64=(e)=>{
    //     let reader=new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload=()=>{
        
    //         setImage(reader.result)
    //         setPhoto(reader.result)
    //     };
    //     reader.onerror=()=>{
    //         console.log(reader.error)
    //     }
    // }



    const [open, setOpen] = React.useState(false);

          const handleClickOpen = () => {
            setOpen(true);
          };

          const handleClose = () => {
            setOpen(false);
          };



    // const handleSubmit=async()=>{
    //     e.preventDefault();
    //     try{
    //         const res=await axios.post(`https://server-1-vx69.onrender.com/api/blog`,data)
    //         const data1= res;
    //         console.log(data1.data.data)
    //     }catch(error){
    //         console.log(error)
    //     }
    // }
  return (
    <>
      <h1 className='text-center text-2xl font-bold py-[2rem]'>Create Blogs</h1>
    <div className='justify-center items-center flex gap-10 mb-[3rem]'>
      <div>
      <Create/>
      </div>
      <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
       View all blogs
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            All Blogs
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>

              close
             
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {/* <ListItemButton>
            <ListItemText primary=" Working on this" secondary=" Working on this" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary=" Working on this"
              secondary=" Working on this"
            />
          </ListItemButton> */}
         
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">photo</TableCell>
            <TableCell align="center">Content</TableCell>
            <TableCell align="right">Published_At</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data1.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.header}</TableCell>
              <TableCell align="right"><img src={row.photo} className='w-[10rem] h-[5rem]' alt="" /></TableCell>
              <TableCell align="justify">{row.content}</TableCell>
              <TableCell align="right">{row.published_At}</TableCell>
              <TableCell align="right"><Button variant='outlined' onClick={()=>handleDelete(row._id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </List>
      </Dialog>
    </React.Fragment>
    </div>
    </>
  )
}
