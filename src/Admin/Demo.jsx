import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import axios from "axios";
import { useState } from "react";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import Create from "./add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, Title, content, Published_At, Actions) {
  return { name, Title, content, Published_At, Actions };
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Blog({data1,data2,data3,data4,data5,data6,data7, data8,loadings}) {
   const [loading,setLoading] =useState(false)
  // const [data1, setData1] = useState([]);
  // const [data2, setData2] = useState([]);
  const handleAboutDelete= async(id) => {
    try {
      setLoading(true)
      const res = await axios.delete(
        `https://server-442v.onrender.com/api/about/delete/${id}`
      );
      if (!res) {
        console.log(res.message);
        throw new Error(res.message) 
        return false;
      }
      alert("deleted suceessfully");
      setLoading(false)
      const data =  res;
      console.log(data.data.data);
   
    } catch (error) {
      console.log(error);
    }
  };
  const handleCoupleDelete= async(id) => {
    try {
      setLoading(true)
      const res = await axios.delete(
        `https://server-442v.onrender.com/api/couple/delete/${id}`
      );
      if (!res) {
        console.log(res.message);
        throw new Error(res.message) 
        return false;
      }
      alert("deleted suceessfully");
      setLoading(false)
      const data =  res;
      console.log(data.data.data);
   
    } catch (error) {
      console.log(error);
    }
  };
  const handleServiceDelete= async(id) => {
    try {
      setLoading(true)
      const res = await axios.delete(
        `https://server-442v.onrender.com/api/service/delete/${id}`
      );
      if (!res) {
        console.log(res.message);
        throw new Error(res.message) 
        return false;
      }
      alert("deleted suceessfully");
      setLoading(false)
      const data =  res;
      console.log(data.data.data);
   
    } catch (error) {
      console.log(error);
    }
  };
  const handleMemberDelete= async(id) => {
    try {
      setLoading(true)
      const res = await axios.delete(
        `https://server-442v.onrender.com/api/owner/delete/${id}`
      );
      if (!res) {
        console.log(res.message);
        throw new Error(res.message) 
        return false;
      }
      alert("deleted suceessfully");
      setLoading(false)
      const data =  res;
      console.log(data.data.data);
   
    } catch (error) {
      console.log(error);
    }
  };
  const handleServicePageDelete= async(id) => {
    try {
      setLoading(true)
      const res = await axios.delete(
        `https://server-442v.onrender.com/api/services/delete/${id}`
      );
      if (!res) {
        console.log(res.message);
        throw new Error(res.message) 
        return false;
      }
      alert("deleted suceessfully");
      setLoading(false)
      const data =  res;
      console.log(data.data.data);
   
    } catch (error) {
      console.log(error);
    }
  };
  const handleWhyDelete= async(id) => {
    try {
      setLoading(true)
      const res = await axios.delete(
        `https://server-442v.onrender.com/api/why/delete/${id}`
      );
      if (!res) {
        console.log(res.message);
        throw new Error(res.message) 
        return false;
      }
      alert("deleted suceessfully");
      setLoading(false)
      const data =  res;
      console.log(data.data.data);
   
    } catch (error) {
      console.log(error);
    }
  };
  const handleGalleryDelete= async(id) => {
    try {
      setLoading(true)
      const res = await axios.delete(
        `https://server-442v.onrender.com/api/gallery/delete/${id}`
      );
      if (!res) {
        console.log(res.message);
        throw new Error(res.message) 
        return false;
      }
      alert("deleted suceessfully");
      setLoading(false)
      const data =  res;
      console.log(data.data.data);
   
    } catch (error) {
      console.log(error);
    }
  };
  // React.useEffect(() => {
  //   // setLoading(true)
  //   const handleGetData = async () => {
  //     const res = await axios.get(
  //       "https://server-442v.onrender.com/api/blog"
  //     );
  //     if (res) {
  //       setData1(res.data.data);
  //       console.log(res.data.data);
  //     } else {
  //       console.log("no data");

  //       return false;
  //     }
  //   };

  //   async function handleImage(i) {
  //     try {
  //       const res = await axios.get(`https://server-442v.onrender.com/api/about/`);
  //       const result = res;
  //       setData2(result.data?.data);
  //     } catch (err) {
  //       alert(err);
  //     } finally {
  //     }
  //   }
  //   handleGetData();
  //   handleImage();
  // }, [data1,data2]);
  const rows = [
    data1.map((data) => {
      createData(data.name, data.header, 6.0, 24, 4.0);
    }),
  ];
  const handleDelete = async (id) => {
    const res = await axios.delete(`https://server-442v.onrender.com/api/blog/${id}`);
    if (res) {
      console.log("Deleted successfully");
      alert("deleted suceessfully");
    } else {
      console.log("not deleted");

      return false;
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  

  return (
    <>
      
      <div className="justify-center items-center flex gap-10 mb-[3rem]">
        <div>
          <Create />
        </div>
        <React.Fragment>
          <Button variant="outlined" onClick={handleClickOpen}>
            View all data
          </Button>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: "relative" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6"
                  component="div"
                >
                  All Blogs and images
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  close
                </Button>
              </Toolbar>
            </AppBar>
            <List>
              
            <div className="text-center text-3xl py-[2rem] font-semibold">
              <h1>Blogs</h1>
            </div>
              <TableContainer component={Paper}>
                <Table
                  sx={{ maxWidth: '100%' }}
                  size="small"
                  aria-label="a dense table"
                >
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
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.header}</TableCell>
                        <TableCell align="right">
                          <img
                            src={row.photo}
                            className="w-[10rem] h-[5rem]"
                            alt=""
                          />
                        </TableCell>
                        <TableCell align="justify">{row.content}</TableCell>
                        <TableCell align="right">{row.published_At}</TableCell>
                        <TableCell align="right">
                          <Button
                            variant="outlined"
                            onClick={() => handleDelete(row._id)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </List>

            <div className="text-center text-2xl py-[2rem] font-semibold">
              <h1>About page images</h1>
            </div>
           {data3 ? <List className="relative">
              <TableContainer component={Paper}>
                <Table
                  sx={{alignItems:'center',textAlign:'center', width: "60%",marginLeft:'20%' }}
                  size="small"
                  aria-label="a dense table"
                  className="border-[1px]"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">Id</TableCell>
                      <TableCell align="center">photo</TableCell>
                      <TableCell align="right">action</TableCell>
                    </TableRow>
                  </TableHead>
                  
                  <TableBody>
                    {/* {loading && <div className="absolute top-0 right-0 w-full h-full left-[40%] font-bold text-white text-xl bg-[#201a1aa8]">Loading</div>} */}
                    {data3.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                       
                        <TableCell align="right">{row.nameId}</TableCell>
                        <TableCell align="center" className="">
                          <img
                            src={row.photo}
                            className="w-[10rem] ml-[30%] justify-center h-[8rem] text-center"
                            alt=""
                          />
                        </TableCell>
                        <TableCell align="right">
                          <button
                            // variant="outlined"
                            // disabled={loading}
                            onClick={() => handleAboutDelete(row.nameId)}
                          >
                            Delete
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </List>:<h1 className="text-center font-xl">Loading</h1>}
            <div className="text-center text-2xl py-[2rem] font-semibold">
              <h1>Services images</h1>
            </div>
           {data2 ? <List className="relative">
              <TableContainer component={Paper}>
                <Table
                  sx={{alignItems:'center',textAlign:'center', width: "60%",marginLeft:'20%' }}
                  size="small"
                  aria-label="a dense table"
                  className="border-[1px]"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">Id</TableCell>
                      <TableCell align="center">photo</TableCell>
                      <TableCell align="right">action</TableCell>
                    </TableRow>
                  </TableHead>
                  
                  <TableBody>
                    {/* {loading && <div className="absolute top-0 right-0 w-full h-full left-[40%] font-bold text-white text-xl bg-[#201a1aa8]">Loading</div>} */}
                    {data2.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                       
                        <TableCell align="right">{row.nameId}</TableCell>
                        <TableCell align="center" className="">
                          <img
                            src={row.photo}
                            className="w-[10rem] ml-[30%] justify-center h-[8rem] text-center"
                            alt=""
                          />
                        </TableCell>
                        <TableCell align="right">
                          <button
                            // variant="outlined"
                            // disabled={loading}
                            onClick={() => handleServiceDelete(row.nameId)}
                          >
                            Delete
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </List>:<h1 className="text-center font-xl">Loading</h1>}

       

            <div className="text-center text-2xl py-[2rem] font-semibold">
              <h1>Portfolio images</h1>
            </div>
           {data4 ? <List className="relative">
              <TableContainer component={Paper}>
                <Table
                  sx={{alignItems:'center',textAlign:'center', width: "60%",marginLeft:'20%' }}
                  size="small"
                  aria-label="a dense table"
                  className="border-[1px]"
                >
                  <TableHead>
                    <TableRow>
                    <TableCell align="right">Id</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Description</TableCell>                      
                      <TableCell align="center">Photo</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  
                  <TableBody>
                    {/* {loading && <div className="absolute top-0 right-0 w-full h-full left-[40%] font-bold text-white text-xl bg-[#201a1aa8]">Loading</div>} */}
                    {data4.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                       
                        <TableCell align="right">{row.nameId}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.desc}</TableCell>
                        <TableCell align="center" className="">
                          <img
                            src={row.photo}
                            className="w-[10rem] ml-[30%] justify-center h-[8rem] text-center"
                            alt=""
                          />
                        </TableCell>
                        <TableCell align="right">
                          <button
                            // variant="outlined"
                            // disabled={loading}
                            onClick={() => handleCoupleDelete(row.nameId)}
                          >
                            Delete
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </List>:<h1 className="text-center font-xl">Loading</h1>}

            <div className="text-center text-2xl py-[2rem] font-semibold">
              <h1>Members images</h1>
            </div>
           {data5 ? <List className="relative">
              <TableContainer component={Paper}>
                <Table
                  sx={{alignItems:'center',textAlign:'center', width: "60%",marginLeft:'20%' }}
                  size="small"
                  aria-label="a dense table"
                  className="border-[1px]"
                >
                  <TableHead>
                    <TableRow>
                    <TableCell align="right">Id</TableCell>
                    <TableCell align="right">Name</TableCell>                
                      <TableCell align="center">Photo</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  
                  <TableBody>
                    {/* {loading && <div className="absolute top-0 right-0 w-full h-full left-[40%] font-bold text-white text-xl bg-[#201a1aa8]">Loading</div>} */}
                    {data5.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                       
                        <TableCell align="right">{row.nameId}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.desc}</TableCell>
                        <TableCell align="center" className="">
                          <img
                            src={row.photo}
                            className="w-[10rem] ml-[30%] justify-center h-[8rem] text-center"
                            alt=""
                          />
                        </TableCell>
                        <TableCell align="right">
                          <button
                            // variant="outlined"
                            // disabled={loading}
                            onClick={() => handleMemberDelete(row.nameId)}
                          >
                            Delete
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </List>:<h1 className="text-center font-xl">Loading</h1>}

            <div className="text-center text-2xl py-[2rem] font-semibold">
              <h1>Services Page images</h1>
            </div>
           {data6 ? <List className="relative">
              <TableContainer component={Paper}>
                <Table
                  sx={{alignItems:'center',textAlign:'center', width: "60%",marginLeft:'20%' }}
                  size="small"
                  aria-label="a dense table"
                  className="border-[1px]"
                >
                  <TableHead>
                    <TableRow>
                    <TableCell align="right">Id</TableCell>
                    <TableCell align="right">Name</TableCell>                
                      <TableCell align="center">Photo</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  
                  <TableBody>
                    {/* {loading && <div className="absolute top-0 right-0 w-full h-full left-[40%] font-bold text-white text-xl bg-[#201a1aa8]">Loading</div>} */}
                    {data6.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                       
                        <TableCell align="right">{row.nameId}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        
                        <TableCell align="center" className="">
                          <img
                            src={row.photo}
                            className="w-[10rem] ml-[30%] justify-center h-[8rem] text-center"
                            alt=""
                          />
                        </TableCell>
                        <TableCell align="right">
                          <button
                            // variant="outlined"
                            // disabled={loading}
                            onClick={() => handleServicePageDelete(row.nameId)}
                          >
                            Delete
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </List>:<h1 className="text-center font-xl">Loading</h1>}

            <div className="text-center text-2xl py-[2rem] font-semibold">
              <h1>Why saaj images</h1>
            </div>
           {data7 ? <List className="relative">
              <TableContainer component={Paper}>
                <Table
                  sx={{alignItems:'center',textAlign:'center', width: "60%",marginLeft:'20%' }}
                  size="small"
                  aria-label="a dense table"
                  className="border-[1px]"
                >
                  <TableHead>
                    <TableRow>
                    <TableCell align="right">Id</TableCell>
                    <TableCell align="right">Name</TableCell>                     
                      <TableCell align="center">Photo</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  
                  <TableBody>
                    {/* {loading && <div className="absolute top-0 right-0 w-full h-full left-[40%] font-bold text-white text-xl bg-[#201a1aa8]">Loading</div>} */}
                    {data7.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                       
                        <TableCell align="right">{row.nameId}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                       
                        <TableCell align="center" className="">
                          <img
                            src={row.photo}
                            className="w-[10rem] ml-[30%] justify-center h-[8rem] text-center"
                            alt=""
                          />
                        </TableCell>
                        <TableCell align="right">
                          <button
                            // variant="outlined"
                            // disabled={loading}
                            onClick={() => handleWhyDelete(row.nameId)}
                          >
                            Delete
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </List>:<h1 className="text-center font-xl">Loading</h1>}

            <div className="text-center text-2xl py-[2rem] font-semibold">
              <h1>Gallery images</h1>
            </div>
           {data8 ? <List className="relative">
              <TableContainer component={Paper}>
                <Table
                  sx={{alignItems:'center',textAlign:'center', width: "60%",marginLeft:'20%' }}
                  size="small"
                  aria-label="a dense table"
                  className="border-[1px]"
                >
                  <TableHead>
                    <TableRow>
                    <TableCell align="right">Id</TableCell>
                                        
                      <TableCell align="center">Photo</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  
                  <TableBody>
                    {/* {loading && <div className="absolute top-0 right-0 w-full h-full left-[40%] font-bold text-white text-xl bg-[#201a1aa8]">Loading</div>} */}
                    {data8.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                       
                        <TableCell align="right">{row.nameId}</TableCell>
                    
                        <TableCell align="center" className="">
                          <img
                            src={row.photo}
                            className="w-[10rem] ml-[30%] justify-center h-[8rem] text-center"
                            alt=""
                          />
                        </TableCell>
                        <TableCell align="right">
                          <button
                            // variant="outlined"
                            // disabled={loading}
                            onClick={() => handleGalleryDelete(row.nameId)}
                          >
                            Delete
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </List>:<h1 className="text-center font-xl">Loading</h1>}

         
          </Dialog>
        </React.Fragment>
      </div>
    </>
  );
}
