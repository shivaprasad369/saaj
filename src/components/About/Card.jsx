import React from "react";
import axios from "axios";
import { data } from "./constant/constant";
import { useEffect, useState } from "react";
export default function Card() {
  const [i, setImg] = useState();
  const [i2, setImg2] = useState();

  const [i3, setImg3] = useState();

  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);

  const [loading2, setLoading2] = useState(false);

  const [showModel, setShowModel] = useState(false);
  const [ids, setIds] = useState("");
  const handleModel = (id) => {
    setShowModel(true);
    const datas = data.filter((data) => data.id === id);
    setIds(datas);
    console.log(ids);
  };
  async function handleImage(id) {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://server-442v.onrender.com/api/owner/${id}`
      );
      console.log(res.data.data);
      const result = res;
      setImg(res.data?.data?.photo);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  async function handleImage2(id) {
    try {
      setLoading1(true);
      const res = await axios.get(
        `https://server-442v.onrender.com/api/owner/${id}`
      );
      console.log(res.data.data);
      const result = res;
      setImg2(res.data?.data?.photo);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading1(false);
    }
  }
  async function handleImage3(id) {
    try {
      setLoading2(true);
      const res = await axios.get(
        `https://server-442v.onrender.com/api/owner/${id}`
      );
      console.log(res.data.data);
      const result = res;
      setImg3(res.data?.data?.photo);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading2(false);
    }
  }
  useEffect(() => {
    handleImage(1);
    handleImage2(2);
    handleImage3(3);
    console.log(i, i2, i3);
  }, []);
  return (
    <>
      <div
        className={`md:ml-[10%] mt-[2rem] flex flex-col ${
          loading || loading1 || (loading2 && "justify-center")
        } `}
      >
        <div className=" h-full relative w-fit">
          {/* <img
          src={require("./founder.JPG")}
          alt=""
          className="sm:px-[3rem] ml-0
           max-sm:w-[100%]  max-lg:w-[80%] "
        /> */}

          {!loading ? (
            <img
              // src={img1}
              src={i}
              alt=""
              className="sm:px-[3rem] ml-0
              max-sm:w-[100%]  max-lg:w-[80%] "
            />
          ) : (
            <> Loading..</>
          )}

          <div
            className="absolute md:top-[5rem] max-md:top-[90%] lg:p-[2rem]  max-lg:p-[1rem] max-sm:top-[90%]
         right-0 max-sm:right-[-2%] max-sm:mr-2 sm:mr-3 lg:right-[-10%] border-0 h-fit text-center
          max-md:w-[30rem] max-sm:w-[100%] md:w-[30rem] lg:w-[27rem] bg-[#f7f2f2]"
          >
            <div className="relative">
              <h1
                style={{
                  fontFamily: '"Alegreya", serif ',
                  fontStyle: "italic",
                }}
                className="pb-[0.6rem] text-[#53431f] text-left px-5 text-[2.2rem] uppercase leading-[1.3333] mt-[1rem]"
              >
                Sanjay Gupta
              </h1>
              <div>
                <h6
                  style={{ fontFamily: '"Alegreya", serif ' }}
                  className="tracking-[1px] px-5 text-left text-[#53431f] leading-2 uppercase"
                >
                  Founder | CEO
                </h6>
              </div>
              <div>
                <h6 className="tracking-[1px] text-[#705704] leading-2">
                  <div
                    style={{
                      fontFamily: '"Alegreya", serif ',
                      fontStyle: "italic",
                    }}
                    className="text-[#705704] text-md items-center text-justify justify-center mt-3 px-3"
                  >
                    <p className="tracking-widest leading-[1.5] mb-5">
                      Meet Sanjay Gupta, the visionary founder of Saaj Weddings,
                      a leading event and wedding planning company in Jaipur.
                      With a commitment to delivering end-to-end wedding
                      planning services, Sanjay Gupta has transformed countless
                      dreams into reality, earning the trust and admiration of
                      more than 80+ satisfied clients.
                    </p>

                    <p className="tracking-widest leading-[1.5] mb-5">
                      Sanjay Gupta's journey in the event planning industry is
                      nothing short of inspirational. After embarking on a path
                      in Chartered Accountancy, Sanjay realized his true passion
                      lay in creating memorable experiences through event
                      planning. With determination and a clear vision, he
                      founded Saaj Weddings, setting a new standard of
                      excellence in the industry.
                    </p>
                    <p className="tracking-widest leading-[1.5] mb-5">
                      Sanjay Gupta and his dedicated team offer comprehensive
                      end-to-end wedding planning services. From venue selection
                      and decor to vendor coordination and guest management,
                      every aspect of your special day is meticulously planned
                      and executed to perfection, ensuring a seamless and
                      unforgettable experience for you and your guests.
                    </p>
                  </div>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-full relative w-fit max-md:mt-[95%] max-sm:mt-[53rem] xs:mt-[200%] mt-[3rem]">
          {/* <img
          src={require("./WhatsApp Image 2024-03-18 at 1.01.51 PM (1).jpeg")}
          alt=""
          className="sm:px-[3rem] ml-0
          max-sm:w-[100%]  max-lg:w-[80%] lg:w-[92%]"
        /> */}

          {!loading1 ? (
            <img
              src={i2}
              alt=""
              className="sm:px-[3rem] ml-0
              max-sm:w-[100%]  max-lg:w-[80%]  lg:w-[92%]"
            />
          ) : (
            <>Loading ...</>
          )}

          <div
            className="absolute md:top-[5rem] max-md:top-[90%] lg:p-[2rem] max-lg:p-[1rem] max-sm:top-[90%]
        right-0 max-sm:right-[-2%] max-sm:mr-2 sm:mr-3 lg:right-[-5%] border-0 h-fit text-center
         max-md:w-[30rem] max-sm:w-[100%] md:w-[30rem] lg:w-[27rem] bg-[#f7f2f2]"
          >
            <div className="relative">
              <h1
                style={{
                  fontFamily: '"Alegreya", serif ',
                  fontStyle: "italic",
                }}
                className="pb-[0.6rem] text-[#53431f] text-left max-lg:px-5 text-[2.2rem] uppercase leading-[1.3333] mt-[1rem]"
              >
                Mohit Singh
              </h1>
              <div>
                <h6
                  style={{ fontFamily: '"Alegreya", serif ' }}
                  className="tracking-[1px]  max-lg:px-5 text-left text-[#53431f] leading-2 uppercase"
                >
                  Hospitality & Logistics Manager
                </h6>
              </div>
              <div>
                <h6 className="tracking-[1px] text-[#705704] leading-2">
                  <div
                    style={{
                      fontFamily: '"Alegreya", serif ',
                      fontStyle: "italic",
                    }}
                    className="text-[#705704] items-center text-justify justify-center mt-3"
                  >
                    <p className="tracking-widest leading-[1.5] mb-5">
                      Meet Mohit Singh, the driving force behind Saaj Weddings'
                      seamless event planning and execution. As the Hospitality
                      and Logistics Manager, Mohit brings a wealth of experience
                      and expertise to ensure every wedding is a memorable
                      success.
                    </p>
                    <p className="tracking-widest leading-[1.5] mb-5">
                      With years of dedication to the hospitality industry,
                      Mohit has honed his skills in creating unforgettable
                      experiences. From coordinating intricate logistics to
                      overseeing guest accommodations and managing vendor
                      relationships, Mohit's attention to detail is
                      unparalleled.
                    </p>
                    <p className="tracking-widest leading-[1.5] mb-5">
                      At Saaj Weddings, Mohit's role is pivotal in orchestrating
                      flawless events. His strategic planning and proactive
                      approach guarantee that every aspect of the wedding, from
                      transportation to catering, runs smoothly and exceeds
                      expectations.
                    </p>
                  </div>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-full relative w-fit max-md:mt-[95%] max-sm:mt-[45rem] xs:mt-[200%] mt-[3rem]">
          {/* <img
          src={require("./WhatsApp Image 2024-03-18 at 1.37.35 PM.jpeg")}
          alt=""
          className="sm:px-[3rem] ml-0
          max-sm:w-[100%]  max-lg:w-[80%] lg:w-[84%]"
        /> */}
          {!loading2 ? (
            <img
              src={i3}
              alt=""
              className="sm:px-[3rem] ml-0
          max-sm:w-[100%]  max-lg:w-[80%] lg:w-[84%]"
            />
          ) : (
            <>Loading ...</>
          )}
          <div
            className="absolute md:top-[5rem] max-md:top-[90%] lg:p-[2rem] max-lg:p-[1rem] max-sm:top-[90%]
        right-0 max-sm:right-[-2%] max-sm:mr-2 sm:mr-3 lg:right-[4%] border-0 h-fit text-center
         max-md:w-[30rem] max-sm:w-[100%] md:w-[30rem] lg:w-[27rem] bg-[#f7f2f2]"
          >
            <div className="relative">
              <h1
                style={{
                  fontFamily: '"Alegreya", serif ',
                  fontStyle: "italic",
                }}
                className="pb-[0.6rem] text-[#53431f] text-left max-lg:px-5  text-[2.2rem] uppercase leading-[1.3333] mt-[1rem]"
              >
                Varun Sharma
              </h1>
              <div>
                <h6
                  style={{ fontFamily: '"Alegreya", serif ' }}
                  className="tracking-[1px]  max-lg:px-5 text-left text-[#53431f] leading-2 uppercase"
                >
                  Production Manager
                </h6>
              </div>
              <div>
                <h6 className="tracking-[1px] text-[#705704] leading-2">
                  <div
                    style={{
                      fontFamily: '"Alegreya", serif ',
                      fontStyle: "italic",
                    }}
                    className="text-[#705704] items-center text-justify justify-center mt-3"
                  >
                    <p className="tracking-widest leading-[1.5] mb-5">
                      Introducing Varun Sharma, the visionary Production Manager
                      at Saaj Weddings, where every event is transformed into a
                      masterpiece. With Varun at the helm, the magic of
                      creativity and technical expertise converges to deliver
                      unforgettable experiences.
                    </p>
                    <p className="tracking-widest leading-[1.5] mb-5">
                      Varun brings a wealth of knowledge and innovation to the
                      table, with a deep-rooted passion for creating immersive
                      environments that captivate and inspire. His expertise in
                      production logistics, stage design, and technical
                      execution ensures that every wedding is a spectacle to
                      behold.
                    </p>
                    <p className="tracking-widest leading-[1.5] mb-5">
                      At Saaj Weddings, Varun's role is integral to bringing
                      dreams to life. From conceptualizing breathtaking decor
                      concepts to overseeing audiovisual elements and lighting
                      design, Varun's attention to detail and creative flair set
                      the stage for extraordinary celebrations.Trust Varun to
                      elevate your wedding experience to new heights, leaving a
                      lasting impression on you and your guests.
                    </p>
                  </div>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-sm:hidden my-[10%] border-b-[1px] border-gray-200"></div>
    </>
  );
}
