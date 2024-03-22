import axios from "axios";
import React, { useEffect, useState } from "react";
import fetch from "./fetch";
import { Button } from "@mui/material";
import Blog from "./Demo";


export default function Admin() {
  const [form, setForm] = useState({
    about1: false,
    about2: false,
    about3: false,
    about4: false,
  });

  const [img, setImg] = useState("");
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
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false)
  const convertAbout4 = (img) => {
    let reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      setPhoto(reader.result);
      // setAbout4(reader.result);
      console.log(reader.result);
    };
    reader.onerror = () => {
      console.log(reader.error);
    };
  };

  const handleSubmit = async () => {
    try {
      setLoading1(true);
      const res = await axios.post(`https://server-1-vx69.onrender.com/api/about/`, {
        name: name,
        photo: photo,
        nameId: nameId,
      });

      const data = res;
      console.log(data.data.data);
      if (!res) {
        alert("please provide a valid formate");
        return false;
      }
      setName("");
      setPhoto("");
      setNameId(0);
      setLoading1(false);
      alert("strored suceessfully");
    } catch (error) {
      console.log(error);
    }
  };
  const HandleDelete = async (id) => {
   
    try {
      const res = await axios.delete(
        `https://server-1-vx69.onrender.com/api/about/delete/${id}`
      );
      if (!res) {
        console.log(res.message);
        throw new Error(res.message);
        return false
      }
      alert("deleted suceessfully");
      const data =  res;
      console.log(data.data.data);
      setName("");
      setPhoto("");
      setNameId(0);

      setForm({ about1: true });
   
    } catch (error) {
      console.log(error);
    }
  };

  async function handleImage(id) {
    try {
      setLoading1(true);
      const res = await axios.get(`https://server-1-vx69.onrender.com/api/about/${id}`);

      console.log(res.data.data);
      const result = res;
      setAbout1(result.data?.data?.photo);
      setLoading1(false);
    } catch (err) {
      alert(err);
    } finally {
    }
  }
  async function handleImage2(id) {
    try {
      setLoading2(true);
      const res = await axios.get(`https://server-1-vx69.onrender.com/api/about/${id}`);
      console.log(res.data.data);
      const result = res;
      setAbout2(result.data?.data?.photo);
      setLoading2(false);
    } catch (err) {
      alert(err);
    } finally {
    }
  }
  async function handleImage3(id) {
    try {
      setLoading3(true);
      const res = await axios.get(`https://server-1-vx69.onrender.com/api/about/${id}`);
      console.log(res.data.data);
      const result = res;
      setAbout3(result.data?.data?.photo);
      setLoading3(false);
    } catch (err) {
      alert(err);
    } finally {
    }
  }
  async function handleImage4(id) {
    try {
      setLoading4(true);
      const res = await axios.get(`https://server-1-vx69.onrender.com/api/about/${id}`);
      console.log(res.data.data);
      const result = res;
      setAbout4(result.data?.data?.photo);
      setLoading4(false);
    } catch (err) {
      alert(err);
    } finally {
    }
  }
  useEffect(() => {
    handleImage(1);
    handleImage2(2);
    handleImage3(3);
    handleImage4(4);
  }, [about1, about2, about3, about4]);
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <h1>About Page Images</h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex  gap-20 p-5">
          {!form.about1 ? (
            <div className="border-[1px] w-[25rem] h-[15rem] border-blue-600 p-5 gap-20 rounded-md flex ">
              {about1 ? (
                !loading1 ? (
                  <div className="gap-20 flex ">
                    {" "}
                    <img className="w-[10rem]" src={about1} alt="" />{" "}
                    <Button
                      variant="outlined"
                      onClick={() => HandleDelete(1)}
                      className="items-center text-center h-fit "
                      sx={{ height: "fit-content", marginTop: "20%" }}
                    >
                      Delete
                    </Button>
                  </div>
                ) : (
                  <>Loading...</>
                )
              ) : (
                <p classname="justify-center items-center text-2xl font-bold ">
                  About page first image not found
                </p>
              )}
              {!about1 && (
                <button
                  onClick={() => setForm({ about1: true })}
                  className="text-3xl p-3 font-bold text-red-900"
                >
                  X
                </button>
              )}
            </div>
          ) : (
            <form className="flex flex-col gap-5 border-[1px]  w-[25rem] h-[15rem] border-blue-600 p-5 rounded-md ">
              <h1>About page first image</h1>
              <input
                type="text"
                placeholder="Enter Image Name"
                onChange={(e) => {
                  return setName(e.target.value), setNameId(1);
                }}
                className="border-[1px] p-2 border-gray-200 h-[2rem] bg-gray-100"
              />
              <input
                type="file"
                accept="image/*"
                placeholder="Enter Image"
                onChange={(e) => convertAbout1(e.target.files[0])}
              />
              <button
                onClick={() => {
                  return setForm({ about1: false }), handleSubmit();
                }}
                className=" border-[1px] border-gray-200 w-[5rem] bg-blue-500 h-[2rem] text-white "
              >
                Submit
              </button>
            </form>
          )}
        </div>
        <div className="flex gap-20 p-5">
          {!form.about2 ? (
            <div className="border-[1px] w-[25rem] h-[15rem] border-blue-600 p-5 gap-20 rounded-md flex ">
              {about2 ? (
                !loading2 ? (
                  <div className="gap-20 flex ">
                    {" "}
                    <img className="w-[10rem]" src={about2} alt="" />{" "}
                    <Button
                      variant="outlined"
                      onClick={() => HandleDelete(2)}
                      className="items-center text-center h-fit "
                      sx={{ height: "fit-content", marginTop: "20%" }}
                    >
                      Delete
                    </Button>
                  </div>
                ) : (
                  <>Loading...</>
                )
              ) : (
                <p classname="justify-center items-center text-2xl font-bold ">
                  About page second image not found
                </p>
              )}
              {!about2 && (
                <button
                  onClick={() => setForm({ about2: true })}
                  className="text-3xl p-3 font-bold text-red-900"
                >
                  X
                </button>
              )}
            </div>
          ) : (
            <form className="flex flex-col gap-5 border-[1px] w-[25rem] h-[15rem] border-blue-600 p-5 rounded-md">
              <h1>About page second image</h1>
              <input
                type="text"
                placeholder="Enter Image Name"
                onChange={(e) => {
                  return setName(e.target.value), setNameId(2);
                }}
                className="border-[1px] p-2 border-gray-200 h-[2rem] bg-gray-100"
              />
              <input
                type="file"
                accept="images/*"
                placeholder="Enter Image"
                onChange={(e) => convertAbout2(e.target.files[0])}
              />
              <button
                onClick={() => {
                  return setForm({ about2: false }), handleSubmit();
                }}
                className=" border-[1px] border-gray-200 w-[5rem] bg-blue-500 h-[2rem] text-white "
              >
                Submit
              </button>
            </form>
          )}
        </div>
        <div className="flex gap-20 p-5">
          {!form.about3 ? (
            <div className="border-[1px] w-[25rem] h-[15rem] border-blue-600 p-5 gap-20 rounded-md flex ">
              {about3 ? (
                !loading3 ? (
                  <div className="gap-20 flex ">
                    {" "}
                    <img className="w-[10rem]" src={about3} alt="" />{" "}
                    <Button
                      variant="outlined"
                      onClick={() => HandleDelete(3)}
                      className="items-center text-center h-fit "
                      sx={{ height: "fit-content", marginTop: "20%" }}
                    >
                      Delete
                    </Button>
                  </div>
                ) : (
                  <>Loading...</>
                )
              ) : (
                <p classname="justify-center items-center text-2xl font-bold ">
                  About page Thired image not found
                </p>
              )}
               {!about3 && (
                <button
                  onClick={() => setForm({ about3: true })}
                  className="text-3xl p-3 font-bold text-red-900"
                >
                  X
                </button>
              )}
            </div>
          ) : (
            <form className="flex flex-col gap-5 border-[1px] w-[25rem] h-[15rem] border-blue-600 p-5 rounded-md">
              <h1>About page Third image</h1>
              <input
                type="text"
                placeholder="Enter Image Name"
                className="border-[1px] p-2 border-gray-200 h-[2rem] bg-gray-100"
                onChange={(e) => {
                  return setName(e.target.value), setNameId(3);
                }}
              />
              <input
                type="file"
                accept="images/*"
                placeholder="Enter Image"
                onChange={(e) => convertAbout3(e.target.files[0])}
              />
              <button
                onClick={() => {
                  return setForm({ about3: false }), handleSubmit();
                }}
                className=" border-[1px] border-gray-200 w-[5rem] bg-blue-500 h-[2rem] text-white "
              >
                Submit
              </button>
            </form>
          )}
        </div>
        <div className="flex gap-20 p-5">
          {!form.about4 ? (
            <div className="border-[1px] w-[25rem] h-[15rem] border-blue-600 p-5 gap-20 rounded-md flex ">
              {about4 ? (
                !loading4 ? (
                  <div className="gap-20 flex ">
                    {" "}
                    <img className="w-[10rem]" src={about4} alt="" />{" "}
                    <Button
                      variant="outlined"
                      onClick={() => HandleDelete(4)}
                      className="items-center text-center h-fit "
                      sx={{ height: "fit-content", marginTop: "20%" }}
                    >
                      Delete
                    </Button>
                  </div>
                )  : (
                  <>Loading...</>
                )
              ) : (
                <p classname="justify-center items-center text-2xl font-bold ">
                  About page fourth image not found
                </p>
              )}
               {!about4 && (
                <button
                  onClick={() => setForm({ about4: true })}
                  className="text-3xl p-3 font-bold text-red-900"
                >
                  X
                </button>
              )}
            </div>
          ) : (
            <form className="flex flex-col gap-5 w-[25rem] h-[15rem] border-[1px] border-blue-600 p-5 rounded-md">
              <h1>About page fourth image</h1>
              <input
                type="text"
                placeholder="Enter Image Name"
                className="border-[1px] p-2 border-gray-200 h-[2rem] bg-gray-100"
                onChange={(e) => {
                  return setName(e.target.value), setNameId(4);
                }}
              />
              <input
                type="file"
                accept="images/*"
                placeholder="Enter Image"
                onChange={(e) => convertAbout4(e.target.files[0])}
              />
              <button
                onClick={() => {
                  return setForm({ about4: false }), handleSubmit();
                }}
                className=" border-[1px] border-gray-200 w-[5rem] bg-blue-500 h-[2rem] text-white "
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
   <Blog/>
    </div>
  );
}
