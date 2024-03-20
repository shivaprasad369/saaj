import Card from "./Card";
import { data } from "./Data";

import * as React from "react";

import { useLocation } from "react-router-dom";


export default function Blog() {
    const location = useLocation();

    React.useEffect(() => {
      const element = document.getElementById('blog');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, [location]);
    return (
     
    <div id="blog">
      <h1 className="mt-[3rem] text-center font-bold text-3xl" style={{ fontFamily: `"Tinos", serif` }}>BLOGS</h1>
      <div className="flex flex-wrap justify-center items-center gap-20 my-[2rem]" style={{ fontFamily: `'Segoe UI', sans-serif` }}>
        {data.map((data, index) => 
        (
          <>
            <Card
              key={index}
             main={data.Main}
              name={data.name}
              description={data.desc}
              img={data.img}
              title={data.title}
              date={data.date}
            />
           
          </>
        ))}
      </div>
    </div>
  );
}
