import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import React from "react";
import Button from "../buttons/Button";

const Card = ({ card, variant = "secondary", style = "" }) => {

  return <>{variant === "primary" ?
    <div className="flex gap-14 w-full mb-12.75">
      <div className="w-2/3 rounded-2xl overflow-hidden">
        <PrismicNextImage field={card.card.data.image}
          alt="img"
          className="w-full aspect-video object-cover"
        />
      </div>
      <div>
        <div className="flex gap-10 mt-10">
          <p className="font-bold text-[12px] leading-[150%]">
            {card.card.tags[0]}
          </p>
          <p className="font-medium text-[12px] leading-[150%] text-[#999999]">
            {new Date(card.card.first_publication_date).toLocaleDateString('en-US', {
              day: "numeric",
              weekday: "short",
              month: "long",
              Year: "numeric"
            })}
          </p>
        </div>
        <h2 className="mt-7 font-bold text-[32px] leading-11.25 -tracking-[1px] max-w-116 max-h-32 overflow-hidden">
          {card.card.data.title}
        </h2>
        <p className="mt-3.25 font-normal text-[16px] leading-[150%] text-[#666666] max-w-116 max-h-32 overflow-hidden">
          {card.card.data.description}
        </p>
        <PrismicNextLink document={card.card} >
          <Button label={"Read More"} varient={"outline"} style={"mt-[61px] !border-[#7C4EE4] !text-[#7C4EE4]"} />
        </PrismicNextLink>
      </div>
    </div>
    :
    <PrismicNextLink document={card.card} className={`max-w-100.5 ${style}`}>
      <PrismicNextImage field={card.card.data.image} alt="img" />
      <div className="flex gap-10 mt-10">
        <p className="font-bold text-[12px] leading-[150%]">
          {card.card.tags[0]}
        </p>
        <p className="font-medium text-[12px] leading-[150%] text-[#999999]">
          {new Date(card.card.first_publication_date).toLocaleDateString('en-US', {
            day: "numeric",
            weekday: "short",
            month: "long",
            Year: "numeric"
          })}
        </p>
      </div>

      <h2 className="mt-4 font-bold text-[24px] leading-8">
        {card.card.data.title}
      </h2>
      <p className="mt-4 font-normal text-[16px] leading-[150%] text-[#666666]">
        {card.card.data.description}
      </p>
      <p className="text-[#7C4EE4] mt-4.75 font-bold text-[18px] leading-[150%]">
        Read More...
      </p>
    </PrismicNextLink>
  }</>;
};

export default Card;
