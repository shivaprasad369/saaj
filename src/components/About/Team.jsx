import { useEffect, useState } from "react";
import img1 from "../assets/founder-removebg-preview.png";
import img2 from "./a2.png";
import img3 from "../assets/WhatsApp_Image_2024-03-18_at_1.37.35_PM-removebg-preview.png";
import Modal from "./Model";
import {data} from './constant/constant'
import axios from "axios";
export default function Team() {
  const [i,setImg]=useState()
  const [i2,setImg2]=useState()

  const [i3,setImg3]=useState()

  const [loading,setLoading]=useState(false)
  const [loading1,setLoading1]=useState(false)

  const [loading2,setLoading2]=useState(false)

  const [showModel,setShowModel]= useState(false)
  const [ids,setIds]=useState('')
  const handleModel=(id)=>{
    setShowModel(true)
    const datas=data.filter((data)=>data.id===id)
    setIds(datas)
    console.log(ids)
  }
  async function handleImage(id) {
    try {
      setLoading(true);
      const res = await axios.get(`https://server-442v.onrender.com/api/owner/${id}`);
      console.log(res.data.data);
      const result = res;
      setImg(res.data?.data?.photo);
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }
  async function handleImage2(id) {
    try {
      setLoading1(true);
      const res = await axios.get(`https://server-442v.onrender.com/api/owner/${id}`);
      console.log(res.data.data);
      const result = res;
      setImg2(res.data?.data?.photo);
    } catch (err) {
      console.log(err)
    } finally {
      setLoading1(false);
    }
  }
  async function handleImage3(id) {
    try {
      setLoading2(true);
      const res = await axios.get(`https://server-442v.onrender.com/api/owner/${id}`);
      console.log(res.data.data);
      const result = res;
      setImg3(res.data?.data?.photo);
    } catch (err) {
      console.log(err)
    } finally {
      setLoading2(false);
    }
  }
  useEffect(() => {
    handleImage(1);
    handleImage2(2);
    handleImage3(3);
    console.log(i,i2,i3)
  }, []);
  return (
    <div
      style={{
        fontFamily:
          " Charlie Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif",
      }}
    >
      <div>
        <h2
          className="text-3xl uppercase tracking-widest font-semibold text-center text-[#53431f]"
          style={{ fontFamily: ` "Libre Baskerville", serif` }}
        >
          Our leadership team
        </h2>
        <p
          className="text-[1rem] leading-1.5 tracking-wider text-inherit text-center text-[#634820]"
          style={{fontFamily:'"Alegreya", serif ',fontStyle:'italic'}}
        >
          {" "}
          over 10 years of combined experience, we have got a well-seasoned team
          at the helm.
        </p>
      </div>
      <div className="grid md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3 relative mt-[2rem] max-md:mx-1 md:mx-[10%]">
        <div onClick={()=>handleModel(1)} className="lg:h-[20rem] xl:h-[25rem] mb-[5rem] md:h-[22rem] sm:h-[20rem] max-sm:h-[25rem]">
          <div className="border-0 h-[100%] relative">
            {!loading ? <img
              // src={img1}
              src={i}

              alt=""
              className="w-[100%] max-md:h-[100%] md:h-[90%]  absolute bottom-0"
            /> : <> Loading..</>}
            <div className="absolute z-[-1] bg-[#eeba5a] w-[100%] h-[77%] bottom-0" />
          </div>
          <div >
            <h1
              className="pb-[0.6rem] text-[#253858] text-[1.8rem] leading-[1.3333] mt-[1rem]"
              style={{ fontWeight: 500 }}
            >
              Sanjay Gupta
            </h1>
          </div>
          <div>
            <h6 className="tracking-[1px] leading-2 uppercase font-semibold text-[#927f27]">
              {" "}
              FOUNDER & CEO
            </h6>
          </div>
        </div>
        <div className="lg:h-[20rem] xl:h-[25rem] mb-[5rem] md:h-[22rem] sm:h-[20rem] max-sm:h-[25rem]" onClick={()=>handleModel(2)} >
          <div className="border-0 h-[100%] relative">
           {!loading1 ? <img
               src={i2}
              alt=""
              className="w-[100%] max-md:h-[100%] md:h-[95%]  absolute bottom-0"
            /> :<>Loading ...</>}
            <div className="absolute z-[-1] bg-[#eeba5a] w-[100%] h-[77%] bottom-0" />
          </div>
          <div>
            <h1
              className="pb-[0.6rem] text-[#253858] text-[1.8rem] leading-[1.3333] mt-[1rem]"
              style={{ fontWeight: 500 }}
            >
              Mohit Singh
            </h1>
          </div>
          <div>
            <h6 className="tracking-[1px] leading-2 uppercase font-semibold text-[#927f27]">
              {" "}
              Hospitality & Logistics Manager
            </h6>
          </div>
        </div>
        <div onClick={()=>handleModel(3)} className="lg:h-[20rem] xl:h-[25rem] mb-[5rem] md:h-[22rem] sm:h-[20rem] max-sm:h-[25rem]">
          <div className="border-0 h-[100%] relative">
            {!loading2 ? <img src={i3} alt="" className="w-[100%] max-md:h-[100%] md:h-[95%] mb z-1 absolute bottom-0 " />:<>Loading ...</>}
            <div className="absolute z-[-1] bg-[#eeba5a] w-[100%] h-[77%] bottom-0" />
          </div>
          <div>
            <h1
              className="pb-[0.6rem] text-[#253858] text-[1.8rem] leading-[1.3333] mt-[1rem]"
              style={{ fontWeight: 500 }}
            >
              Varun Sharma
            </h1>
          </div>
          <div>
            <h6 className="tracking-[1px] leading-2 uppercase font-semibold text-[#927f27]">
              {" "}
              Production Manager
            </h6>
          </div>
        </div>

        {/* <div >
         <div className="border-0 h-[100%] relative">
         <img src={img3} alt="" className="w-[100%] bottom-0 absolute  " />
         <div className="absolute z-[-1] bg-[#a2eee1] w-[100%] h-[70%] bottom-0" />
         </div>
        </div> */}
        { showModel && <Modal ids={ids} setShowModel={setShowModel} />}
      </div>
      <div className="border-b-[1px] my-[7rem] border-gray-300 max-sm:hidden"/>
    </div>
  );
}
