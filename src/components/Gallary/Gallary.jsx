import React from 'react'
import Home from '../Home'
import Footer from '../Footer'
import { itemData } from './data'
import { ImageList, ImageListItem } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
export default function Gallarys() {
  return (
    <div className=' justify-center items-center text-center'>
   <h1 className='text-center p-3 text-2xl font-semibold text-[#64321b] uppercase'>Gallary</h1>
      <ImageList
      sx={{ width: '100%', height: '100%',padding:4,justifyContent:'center',alignItems:'center'}}
      variant="quilted"
      cols={4}
      gap={20}
      rowHeight={200}
      
    >
      

      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
      
    </ImageList>

    </div>
  )
}
