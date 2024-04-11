import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["About1", "About2", "About3", "About4"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Service() {
    const [loading, setLoading] = useState(false);
    const [photo, setPhoto] = useState("");
  const [nameId, setNameId] = useState(0);

  const convertAbout = (img) => {
    let reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      setPhoto(reader.result);
      // setAbout4(reader.result);
      console.log(reader.result);
    };
    reader.onerror = () => {
      console.log(reader.error);
    };
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  const handleSubmit = async () => {
    try {
      // const formData=new FormData();
      // formData.append('photo',photo)
      // formData.append('nameId',nameId)
      setLoading(true);
      const res = await axios.post(`https://server-442v.onrender.com/api/service/`, {
        photo: photo,
        nameId: nameId,
      });

      const data = res;
      console.log(data);
      if (!res) {
        alert(data.data.message);
        return 
      }
    
      setPhoto("");
      setNameId(0);
      setLoading(false);
      alert(data.data.message)
    } catch (error) {
      console.log(error);
    }
    // console.log(nameId)
  };
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
       Add service images
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Service images</DialogTitle>
        <DialogContent>
         
          <div>
          <form className="relative flex flex-col gap-5 border-[1px]  w-full h-[15rem] border-blue-600 p-5 rounded-md ">
              <h1>About page images</h1>
              <select name="" id="" value={nameId} onChange={(e)=>setNameId(e.target.value)} className="border-[1px] p-2 border-gray-200 h-[3rem] bg-gray-100">
                <option value={''} >Select Name</option>
               
                  <option value={1} >
                    Weeding planner
                  </option>
                  <option value={2} >
                    Decor and Design
                  </option>
                  <option value={3} >
                    Vendor and arttist management
                  </option>
                  <option value={4} >
                    Corports event
                  </option>
              </select>
              {/* <input
                type="text"
                placeholder="Enter Image Name"
                // onChange={(e) => {
                //   return setName(e.target.value), setNameId(1);
                // }}
                className="border-[1px] p-2 border-gray-200 h-[2rem] bg-gray-100"
              /> */}
              <input
                type="file"
                accept="image/*"
               
                placeholder="Enter Image"
                // onChange={(e)=>setPhoto(e.target.files[0])}
                onChange={(e) => convertAbout(e.target.files[0])}
              />
              <button
              type="button"
                onClick={ handleSubmit}
                className=" border-[1px] border-gray-200 w-[5rem] bg-blue-500 h-[2rem] text-white "
              >
                Submit
              </button>
            {loading && <div className="absolute w-full h-full top-0 right-0 pt-[30%] pl-[35%] text-white font-bold text-xl bg-[#050303b6]">Loading...</div>}
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
