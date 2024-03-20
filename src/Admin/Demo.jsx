import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Demo() {
    const [image,setImage]=useState("")
    // const [data,setData]=useState({
    //     name:'',
    //    photo:"",
    //    nameId:"About1"
    // })
    const [name,setName]=useState('')
    const [photo,setPhoto]=useState('')
    const [nameId,setNameId]=useState(1)
    const convertToBase64=(e)=>{
        let reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
        
            setImage(reader.result)
            setPhoto(reader.result)
        };
        reader.onerror=()=>{
            console.log(reader.error)
        }
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await axios.post(`http://localhost:8888/about/${nameId}`,{name:name,photo:photo,nameId:nameId})
            const data=await res;
            console.log(data.data.data)
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div>
      {/* <input type="file" accept='image/*' onChange={convertToBase64} />
      {image && <img src={image} />} */}

      <div>
        <form method='post' >
            <input type='text' name="name" onChange={(e)=>setName(e.target.value)} placeholder="enter image name"/>
            <input type="file" name='image' accept='image/*' onChange={convertToBase64} />
            {image && <img src={image} />}
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}
