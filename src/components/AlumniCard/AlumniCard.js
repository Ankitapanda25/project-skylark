"use client"
import React, { useState } from "react";
import Image from "next/image";

export default function AlumniCard({ data }) {
  return (
    <>
      {data.map((element, key) => {
        return (
          <>
            <div id="alumniFlex" className="flex sm:justify-self-center lg:align-self-start xs:px-[8vh] xxs:flex-col xs:flex-row">
              <div className=" w-[90px]  lg:mr-3 xxs:text-center xxs:relative xxs:ml-[40%] xxs:mb-4 xs:ml-0 ">
                <Image src={element.imgdata}  width={100} height={100} className="w-[100%] " alt={element.name + "photo"} />
                <h5
                  style={{ fontFamily: "poppins, sans-serif" }}
                  className="text-white text-[13px]  mt-2 ml-[-39px] w-[170px] relative text-center"
                >
                  {element.name}
                </h5>
                <h5 className="text-white text-[14px] text-center w-[170px] -ml-10">
                  {element.info}
                </h5>
              </div>
              <div className="xxs:ml-[4rem] lg:ml-10">
                <p className="text-white text-[11.5px] lg:w-[25vw] sm:w-[50vw] ">
                  {element.description}{" "}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
