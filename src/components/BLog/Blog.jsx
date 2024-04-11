import axios from "axios";
import Card from "./Card";
// import { data } from "./Data";

import * as React from "react";

import { useLocation } from "react-router-dom";
import { Skeleton } from "@mui/material";


export default function Blog() {
 const [loading,setLoading]= React.useState(false)
    const location = useLocation();
const [data1,setData1]=React.useState([])
  React.useEffect(()=>{
    const element = document.getElementById('blog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  },[location])
    const handleGetData=async()=>{
      setLoading(()=>true)
        const res = await axios.get('https://server-442v.onrender.com/api/blog/')
        if(res){

            setData1(res.data.data)
            console.log(res.data.data)
            setLoading(()=>false)
            return true;
        }
        else{
          console.log(res.data.data)
          setLoading(false)
        }
        
    


    }
    React.useEffect(()=>{
      
      handleGetData();
      console.log(data1)
    },[])
   
    return (
     
    <div id="blog">
      <h1 className="mt-[3rem] text-center font-bold text-3xl" style={{ fontFamily: `"Tinos", serif` }}>BLOGS</h1>
      <div className="relative flex flex-wrap justify-center items-center gap-20 my-[2rem]" style={{ fontFamily: `'Segoe UI', sans-serif` }}>
               {data1.map((data, index) => 
        (
          <>
            <Card
              key={data._id}
             main={data.header}
              name={data.name}
              description={data.content}
              img={data.photo}
              title={data.header}
              date={data.published_At}
            />
           
          </>
        ))}
        {loading &&  <Skeleton variant="rectangular" width={410} height={498}/>}
        </div> 
    </div>
  );
}
