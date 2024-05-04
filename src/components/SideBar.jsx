import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import home from "./Ui/home.png";
import about from "./Ui/about.png";
import service from "./Ui/customer.png";
import portfolio from "./Ui/portfolio.png";
import question from "./Ui/question.png";
import contact from "./Ui/customer-service.png";


export default function TemporaryDrawer({ state, toggleDrawer }) {
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      color={"black"}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          
         
          fontWeight: 600,
          paddingTop: 2,
        }}
      >
        <h1 style={{  fontFamily:'"Truculenta", sans-serif',fontStyle:'normal'}} className="uppercase text-2xl font-bold text-[#572e1b]">
        Saaj Weddings

        </h1>
      </Typography>

      <Divider />
      <List sx={{textAlign}}>
        {[
          { text: "home", icon: home },
          { text: "about", icon: about },
          { text: "services", icon: service },
          { text: "our portfolio", icon: portfolio },
          { text: "why Saaj", icon:question},
          { text: "contact", icon: contact },
        ].map((text, index) => (
          <ListItem key={text.text} disablePadding>
            <Link 
              to={`${
                text.text === "why Saaj"
                  ? "/why"
                  : text.text === "home"
                  ? "/ "
                  : text.text === "our portfolio"
                  ? "/gallary"
                  : "/" + text.text
              }`}
              className="flex p-3 gap-[1rem] "
            >
              <ListItemIcon>
                {text.icon && (
                  <img src={text.icon} alt="icon" className="w-[2rem]" />
                )}
              </ListItemIcon>
              <div className=' whitespace-nowrap text-lg font-bold text-[#5f331e] capitalize'>
                {text.text}
              </div>
              {/* <ListItemText
                primary={text.text}
                sx={{ textTransform: "capitalize" ,fontWeight:"700"}}
                className="font-bold text-xl"
              /> */}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
