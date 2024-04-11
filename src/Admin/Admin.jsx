import axios from "axios";
import React, { useEffect, useState } from "react";
import fetch from "./fetch";
import { Button } from "@mui/material";
import Blog from "./Demo";
import About from "./Adm";
import Service from "./Services";
import Couple from "./Couple";
import Owner from "./Owner";
import Why from "./Why";
import ServicePage from "./ServicePage";
import Gallery from "./Gallery";


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
      // setAbout1(reader.result);
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
      // setAbout2(reader.result);
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
      // setAbout3(reader.result);
      console.log(reader.result);
    };
    reader.onerror = () => {
      console.log(reader.error);
    };
  };
  // const [img,handleImage]=fetch()
  const [loading,setLoading] =useState(false)
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data7, setData7] = useState([]);
  const [data8, setData8] = useState([]);

  const [data6, setData6] = useState([]);

  const handleGetData = async () => {
    const res = await axios.get(
      "https://server-442v.onrender.com/api/blog"
    );
    if (res) {
      setData1(res.data.data);
      console.log(res.data.data);
    } else {
      console.log("no data");

      return false;
    }
  };

  async function handleImage() {
    try {
      setLoading(true)
      const res = await axios.get(`https://server-442v.onrender.com/api/about/`);
      const result = res;
      setData3(result.data?.data);
      setLoading(false)
    } catch (err) {
      console.log(err);
    } finally {
    }
  }
  async function handleServiceImage() {
    try {
      setLoading(true)
      const res = await axios.get(`https://server-442v.onrender.com/api/service/`);
      const result = res;
      setData2(result.data?.data);
      setLoading(false)
    } catch (err) {
      console.log(err);
    } finally {
    }
  }
  async function handleCoupleImage() {
    try {
      setLoading(true)
      const res = await axios.get(`https://server-442v.onrender.com/api/couple/`);
      const result = res;
      setData4(result.data?.data);
      setLoading(false)
    } catch (err) {
      console.log(err);
    } finally {
    }
  }
  async function handleMembersImage() {
    try {
      setLoading(true)
      const res = await axios.get(`https://server-442v.onrender.com/api/owner/`);
      const result = res;
      setData5(result.data?.data);
      setLoading(false)
    } catch (err) {
      console.log(err);
    } finally {
    }
  }
  async function handleServicesImage() {
    try {
      setLoading(true)
      const res = await axios.get(`https://server-442v.onrender.com/api/services/`);
      const result = res;
      setData6(result.data?.data);
      setLoading(false)
    } catch (err) {
      console.log(err);
    } finally {
    }
  }
  async function handleWhyImage() {
    try {
      setLoading(true)
      const res = await axios.get(`https://server-442v.onrender.com/api/why/`);
      const result = res;
      setData7(result.data?.data);
      setLoading(false)
    } catch (err) {
      console.log(err);
    } finally {
    }
  }
  async function handleGalleryImage() {
    try {
      setLoading(true)
      const res = await axios.get(`https://server-442v.onrender.com/api/gallery/`);
      const result = res;
      setData8(result.data?.data);
      setLoading(false)
    } catch (err) {
      console.log(err);
    } finally {
    }
  }
  useEffect(() => {
    
    handleGetData();
    handleImage();
    handleServiceImage()
    handleCoupleImage() 
    handleMembersImage() 
    handleServicesImage()
    handleWhyImage()
    handleGalleryImage()
  }, []);
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
<h1 className="text-center text-2xl font-bold py-3 uppercase">Admin panel</h1>
<div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10">

      <About/>
      <Service/>
      <Couple/>
      <Owner/>
      <Why/>
      <ServicePage/>
      <Gallery/>
   <Blog data1={data1} data2={data2}  data3={data3} data4={data4} data5={data5} data6={data6} data7={data7} data8={data8} loadings={loading}/>
</div>
    </div>
  );
}
