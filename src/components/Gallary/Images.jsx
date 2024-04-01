import React from "react";

import Dialog from "@mui/material/Dialog";

export default function Images({ srcset, image, rows, cols, title }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <img
        {...srcset(image, 121, rows, cols)}
        alt={title}
        loading="lazy"
        onClick={handleClickOpen}
      />
      <Dialog
        sx={{ width: "100vw" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <img src={image} alt={title} loading="lazy" />
      </Dialog>
    </div>
  );
}
