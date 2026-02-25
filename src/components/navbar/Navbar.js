"use client"
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Button from "../buttons/Button";

const Navbar = ({ navbarContent }) => {
  const [active, setActive] = useState(false);
  console.log("navbarContent: ", navbarContent.data.buttons);
  return (
    <div className="max-w-360 py-5.25 pl-46.5 pr-[103.5px] mx-auto">
      <div className="w-full px-20 flex justify-between items-center">
        <div>
          <PrismicNextImage field={navbarContent.data.logo} />
        </div>
        <div className=" flex gap-10 items-center">
          {navbarContent?.data?.menu && (
            <div className="flex gap-14.5 items-center">
              {navbarContent?.data?.menu.map((item, idx) => {
                return (
                  <>
                    <PrismicNextLink
                      key={item.id}
                      field={item.link}
                      className="text-[16px] leading-[150%] font-medium hover:text-[#7C4EE4] cursor-pointer"
                    />
                  </>
                );
              })}
            </div>
          )}
         
         <div
             onClick={() => {setActive(!active)}}
             className={`px-2 py-2 shadow cursor-pointer rounded-full w-10 relative flex transition-[width] ease-in duration-500 ${active && "w-50"}`}
         >
           <HiMagnifyingGlass className="text-[23px] " />
           <input type="text" placeholder="Search ..." className={`outline-none absolute left-9 -z-40 opacity-0 transition-opacity ease-in delay-150 duration-300 ${active&& "opacity-100 z-1"}`}/>
         </div>

          {navbarContent?.data?.buttons &&
            navbarContent?.data?.buttons.map((btn,key) => {
              return (
                <>
                 <Button key={key} label={btn.link.text} varient={btn.varient}/>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
