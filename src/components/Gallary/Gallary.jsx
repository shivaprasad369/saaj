import React, { useEffect } from 'react'
import Home from '../Home'
import Footer from '../Footer'
import { itemData } from './data'
import { ImageList, ImageListItem } from '@mui/material';
import { useLocation } from 'react-router-dom';

import Images from './Images';
function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
export default function Gallarys() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById('gallary');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  return (
    <div id='gallary' className=' justify-center items-center text-center'>
   <h1 className='text-center p-3 text-2xl font-semibold text-[#64321b] uppercase'>Gallery</h1>
      <ImageList
      sx={{ width: '100%', height: '100%',padding:4,justifyContent:'center',alignItems:'center'}}
      variant="quilted"
      cols={4}
      gap={15}
      rowHeight={200}
      
    >
      

      {itemData.map((item) => (
        <>
        <ImageListItem  key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
          {/* <Images srcset={srcset} image={item.img} rows={item.rows} cols={item.cols} title={item.title}/> */}
     </ImageListItem>
        
       </>
      ))}
      
    </ImageList>

    </div>
  )
}
