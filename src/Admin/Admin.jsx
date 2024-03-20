import axios from "axios";
import React, { useState } from "react";
import fetch from "./fetch";

export default function Admin() {
  const [form, setForm] = useState({
    about1: false,
    about2: false,
    about3: false,
    about4: false,
  });
  const [about1, setAbout1] = useState("");
  const [about2, setAbout2] = useState("");
  const [about3, setAbout3] = useState("");
  const [about4, setAbout4] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [nameId, setNameId] = useState(0);
  const convertAbout1 = (img) => {
    let reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      setPhoto(reader.result);
      setAbout1(reader.result);
      console.log(reader.result);
    };
    reader.onerror = () => {
      console.log(reader.error);
    };
  };

  const convertAbout2 = (img) => {
    let reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      setPhoto(reader.result);
      setAbout2(reader.result);
      console.log(reader.result);
    };
    reader.onerror = () => {
      console.log(reader.error);
    };
  };

  const convertAbout3 = (img) => {
    let reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      setPhoto(reader.result);
      setAbout3(reader.result);
      console.log(reader.result);
    };
    reader.onerror = () => {
      console.log(reader.error);
    };
  };
  const [img,handleImage]=fetch()
  const [loading,setLoading]=useState(false)
  const convertAbout4 = (img) => {
    let reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      setPhoto(reader.result);
      setAbout4(reader.result);
      console.log(reader.result);
    };
    reader.onerror = () => {
      console.log(reader.error);
    };
  };

  const handleSubmit=async()=>{
   
    try{
        setLoading(true)
        const res=await axios.post(`http://localhost:8888/about/${nameId}`,{name:name,photo:photo,nameId:nameId})
        const data=await res.json();
        console.log(data.data.data)
        setName('')
        setPhoto('')
        setNameId(0)
        setLoading(false)
        alert("strored suceessfully")
    }catch(error){
        console.log(error)
    }
}
const HandleDelete=async(id)=>{
    try{
        setLoading(true)
        const res=await axios.delete(`http://localhost:8888/about/delete/${id}`)
        const data=await res.json();
        console.log(data.data.data)
        setName('')
        setPhoto('')
        setNameId(0)
        setLoading(false)
        setForm({ about1: true })
        alert("deleted suceessfully")
    }catch(error){
        console.log(error)
    }
}
  return (
    <div className="flex flex-wrap gap-10 justify-around items-center">
      <div className="flex flex-col ">
        <h1>About Page Images</h1>
        <div className="flex  gap-20 p-5">
          {!form.about1 ? (
            <div className="border-[1px] border-blue-600 p-5 gap-20 rounded-md flex ">
              <img className="w-[10rem]" src={img} alt="" />
              <button
                // onClick={() => HandleDelete(1)}
                className="text-3xl p-3 font-bold text-red-900"
              >
                X
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-5 border-[1px] border-blue-600 p-5 rounded-md">
              <h1>About page first image</h1>
              <input
                type="text"
                placeholder="Enter Image Name"
                onChange={(e)=>{ return( setName(e.target.value), setNameId(1))}}
                className="border-[1px] p-2 border-gray-200 h-[2rem] bg-gray-100"
              />
              <input
                type="file"
                accept="image/*"
                placeholder="Enter Image"
                onChange={(e) => convertAbout1(e.target.files[0])}
              />
              <button
                onClick={() =>{return ( setForm({ about1: false }), handleSubmit(),handleImage(1))}}
                className=" border-[1px] border-gray-200 w-[5rem] bg-blue-500 h-[2rem] text-white "
              >
                Submit
              </button>
            </form>
          )}
        </div>
        <div className="flex gap-20 p-5">
          {!form.about2 ? (
            <div className="border-[1px] border-blue-600 p-5 gap-20 rounded-md flex ">
              <img
                className="w-[10rem]"
                src={about2}
                alt=""
              />
              <button
                onClick={() => setForm({ about2: true })}
                className="text-3xl p-3 font-bold text-red-900"
              >
                X
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-5 border-[1px] border-blue-600 p-5 rounded-md">
              <h1>About page second image</h1>
              <input
                type="text"
                placeholder="Enter Image Name"
                onChange={(e)=>{return(setName(e.target.value),setNameId(2))}}
                className="border-[1px] p-2 border-gray-200 h-[2rem] bg-gray-100"
              />
              <input type="file" accept="images/*" placeholder="Enter Image" onChange={(e) => convertAbout2(e.target.files[0])}/>
              <button
                 onClick={() =>{return ( setForm({ about2: false }), handleSubmit())}}

                className=" border-[1px] border-gray-200 w-[5rem] bg-blue-500 h-[2rem] text-white "
              >
                Submit
              </button>
            </form>
          )}
        </div>
        <div className="flex gap-20 p-5">
          {!form.about3 ? (
            <div className="border-[1px] border-blue-600 p-5 gap-20 rounded-md flex ">
              <img
                className="w-[10rem]"
                src={about3}
                alt=""
              />
              <button
                onClick={() => setForm({ about3: true })}
                className="text-3xl p-3 font-bold text-red-900"
              >
                {" "}
                X
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-5 border-[1px] border-blue-600 p-5 rounded-md">
              <h1>About page Third image</h1>
              <input
                type="text"
                placeholder="Enter Image Name"
                className="border-[1px] p-2 border-gray-200 h-[2rem] bg-gray-100"
                onChange={(e)=>{return(setName(e.target.value),setNameId(3))}}
              />
              <input type="file" accept="images/*" placeholder="Enter Image" onChange={(e) => convertAbout3(e.target.files[0])}/>
              <button
              onClick={() =>{return ( setForm({ about3: false }), handleSubmit())}}
                className=" border-[1px] border-gray-200 w-[5rem] bg-blue-500 h-[2rem] text-white "
              >
                Submit
              </button>
            </form>
          )}
        </div>
        <div className="flex gap-20 p-5">
          {!form.about4 ? (
            <div className="border-[1px] border-blue-600 p-5 gap-20 rounded-md flex ">
              <img
                className="w-[10rem]"
                src={about4}
                alt=""
              />
              <button
                onClick={() => setForm({ about4: true })}
                className="text-3xl p-3 font-bold text-red-900"
              >
                X
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-5 border-[1px] border-blue-600 p-5 rounded-md">
              <h1>About page fourth image</h1>
              <input
                type="text"
                placeholder="Enter Image Name"
                className="border-[1px] p-2 border-gray-200 h-[2rem] bg-gray-100"
                onChange={(e)=>{return(setName(e.target.value),setNameId(4))}}
              />
              <input type="file" accept="images/*" placeholder="Enter Image" onChange={(e) => convertAbout4(e.target.files[0])}/>
              <button
                onClick={() =>{return ( setForm({ about4: false }), handleSubmit())}}
                className=" border-[1px] border-gray-200 w-[5rem] bg-blue-500 h-[2rem] text-white "
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="flex flex-col ">
        <h1>Service Page Images</h1>
        <div className="flex gap-20 p-5">
          <img
            className="w-[10rem]"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
          <button>X</button>
        </div>
        <div className="flex gap-20 p-5">
          <img
            className="w-[10rem]"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
          <button>X</button>
        </div>
        <div className="flex gap-20 p-5">
          <img
            className="w-[10rem]"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
          <button>X</button>
        </div>
        <div className="flex gap-20 p-5">
          <img
            className="w-[10rem]"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
          <button>X</button>
        </div>
      </div>
    </div>
  );
}
