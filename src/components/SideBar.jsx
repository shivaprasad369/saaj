import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CollectionsIcon from '@mui/icons-material/Collections';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
export default function TemporaryDrawer({state,toggleDrawer}) {
  
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      color={"black"}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Typography variant='h5' sx={{textAlign:'center',paddingBottom:'16px',textTransform:'uppercase',fontWeight:600,paddingTop:2 }}>Saaj Wedding</Typography>

      <Divider />
      <List>
        {[{text:'home',icon:<InboxIcon/>},{text:'about',icon:<MailIcon/>}, {text:'services',icon:<MiscellaneousServicesIcon/>}, {text:'our portfolio',icon:<CollectionsIcon/>},{text:"why Saaj",icon:<AnnouncementIcon/>},{text:'contact',icon:<ContactPhoneIcon/>}].map((text, index) => (
          <ListItem key={text.text} disablePadding>
            <Link to={`${text.text==='why Saaj' ? '/why': text.text==='home' ? '/ ' :text.text==='our portfolio' ? '/gallary' :"/"+text.text }` } className='flex p-3'>
              <ListItemIcon>
              {text.icon && text.icon}
              </ListItemIcon>
              {/* <div className='ml-[30%] whitespace-nowrap'>
                {text}
              </div> */}
              <ListItemText primary={text.text} sx={{textTransform:'capitalize'}} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
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