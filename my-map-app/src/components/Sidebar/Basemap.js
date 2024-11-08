// import React, { useState } from "react";
// import Image from "next/image"; // untuk next.js file
import daftarBasemap from "../BasemapList.js";

function Basemap({ basemapSelect, setBasemapSelect, menuSelect }) {
  return (
    <div
      className=" ml-[90px] z-10 h-[calc(100vh_-_81px)] mb-1 fixed bg-white overflow-y-scroll sidebar py-2 duration-500"
      style={
        menuSelect === "Basemap"
          ? { marginLeft: "80px" }
          : { marginLeft: "-400px" }
      }
    >
      {daftarBasemap.map((data, index) => {
        return (
          <div
            className=" cursor-pointer relative"
            key={index}
            onClick={() => setBasemapSelect(data["url"])}
          >
            <img src={data["gambar"]} height={130} width={210} />
            <div className="bg-white px-2 py-1 items-center flex text-sm h-6 absolute z-20 bottom-2">
              <div
                className=" w-4 h-4 rounded-full mr-2 border-primary border-2"
                style={
                  basemapSelect === data["url"]
                    ? { backgroundColor: "#004A74" }
                    : { backgroundColor: "#FFFFFF" }
                }
              ></div>
              <div>{data["nama"]}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Basemap;
