import axios from "axios";
import Card from "./Card";
import { data } from "./Data";

import * as React from "react";

import { useLocation } from "react-router-dom";
import { Skeleton } from "@mui/material";


export default function Blog() {
 const [loading,setLoading]= React.useState(false)
    const location = useLocation();
const [data1,setData1]=React.useState([])
    React.useEffect(() => {
      const element = document.getElementById('blog');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, [location]);
    React.useEffect(()=>{
      setLoading(true)
      const handleGetData=async()=>{
        const res = await axios.get('https://server-1-vx69.onrender.com/api/blog/')
      if(res){
          setData1(res.data.data)
          console.log(res.data.data)
        setLoading(false)

      }else{
        console.log("no data")
        setLoading(false)
        return false;
      }
      }
      handleGetData();
    },[data])
    return (
     
    <div id="blog">
      <h1 className="mt-[3rem] text-center font-bold text-3xl" style={{ fontFamily: `"Tinos", serif` }}>BLOGS</h1>
      <div className="flex flex-wrap justify-center items-center gap-20 my-[2rem]" style={{ fontFamily: `'Segoe UI', sans-serif` }}>
    {
       !loading ? 
       <>
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
        ))}</> :  <Skeleton variant="rectangular" width={410} height={498} />}
        </div> 
    </div>
  );
}
