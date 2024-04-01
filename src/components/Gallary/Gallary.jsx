import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { images } from "./gallaries";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
export default function Gallarys() {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = useState("");
  const handleClose = () => {
    setOpen(false);
    setImage("");
  };
  const handleClickOpen = (img) => {
    setOpen(true);
    setImage(img);
  };
  const location = useLocation();
  useEffect(() => {
    const element = document.getElementById("gallary");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div
      id="gallary"
      className=" justify-center items-center text-center h-[100%]"
    >
      <h1
        className="text-center p-5 text-4xl font-bold  text-[#64321b] uppercase"
        style={{ fontFamily: `   "Tinos", serif` }}
      >
        {" "}
        Our Portfolio
      </h1>
      <div className="justify-center items-center grid md:grid-cols-4 max-md:grid-cols-3 pb-[3rem] lg:mx-[8rem] max-md:p-2 md:gap-4 max-md:gap-2 max-sm:grid-cols-2">
        {images.map((data, index) => (
          <div className=" border-0 text-center shadow-lg shadow-gray-400">
            <img
              src={data.img}
              alt={"gallary"}
              onClick={() => handleClickOpen(data.img)}
              className=" md:w-[20rem] md:h-[15rem] max-md:w-[10rem] max-md:h-[10rem]"
            />
          </div>
        ))}
        <React.Fragment>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
              Portfolio
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <img
                  src={image}
                  alt="gallery"
                  className="h-[100%] cursor-pointer shadow-xl shadow-gray-400"
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </div>
      <div className="max-sm:hidden my-[10%] border-b-[1px] border-gray-200"></div>
    </div>
  );
}
