"use client";
import { useReducer } from 'react'
import ImageContext from './store';
const defaultImgState = {
   image:''
  };
  const imgReducer = (state, action) => {
    console.log(action)
     state.image=action.payload;
     return state;
}
const ImageProvider=(props)=>{
    const [imgState, dispatchImgAction] = useReducer(
        imgReducer,
        defaultImgState
      );
      const setImage= (image) => {
        dispatchImgAction({ image });
      };
      const imageContext = {
        image:imgState.image,
        setImage:setImage,
      };
    
      return (
        <ImageContext.Provider value={imageContext}>
          {props.children}
        </ImageContext.Provider>
      );
    
}
export default ImageProvider;