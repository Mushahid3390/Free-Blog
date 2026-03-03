import React from "react";
import Button from "../buttons/Button";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Card from "../card/Card";

const Popularpst = async ({ slice }) => {
  console.log("Buton: ", slice.primary.button)
  return (
    <div className="mt-20 mx-auto px-26 max-w-360 w-full">
      <div className="flex justify-between">
        <h2 className="font-700 text-[48px] leading-16 text-[#333333]">
          {slice.primary.label}
        </h2>
       <PrismicNextLink document={slice.primary.button }>
          <Button
            label={slice.primary.button.text}
            varient={slice.primary.button.variant.toLowerCase()}
          />
       </PrismicNextLink>
      </div>
      <div className="flex mt-14.5 gap-3 flex-wrap">
        {slice?.primary?.cards?.map((card, idx) => {
          return (
           <Card key={card.card.key} card={card} variant={`${slice?.primary?.label?.trim()==="Our Recent Post" && idx<1 ? "primary": "secondary"}`}/>
          );
        })}
      </div>
    </div>
  );
};

export default Popularpst;
