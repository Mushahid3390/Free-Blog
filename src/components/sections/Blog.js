import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

const Blog = ({ slice }) => {
  return (
    <div className="mx-auto max-w-360 w-full flex flex-col gap-12 py-21 px-25.5">
      <div className="flex gap-4">
        <p className="font-bold text-[12px] leading-[150%] text-[#333333]">
          {slice.primary.label}
        </p>
        <p className="font-medium text-[12px] leading-[150%] text-[#999999]">
          {slice.primary.date}
        </p>
      </div>

      <h1 className="font-bold text-[48px] leading-16 text-[#333333]">
        {slice.primary.title}
      </h1>
      <PrismicNextImage field={slice.primary.image} />
      <div className="flex flex-col items-center gap-10 px-26">
        <PrismicRichText
          field={slice.primary.content}
          components={{
            label: ({ node, children, key }) => {
              if (node.data?.label === "quote") {
                return (
                  <span
                    key={key}
                    className="max-w-4xl w-full pl-4 inline-block font-normal text-[24px] leading-10 text-[#666666] border-l-[5px] border-l-[#7C4EE4]"
                  >
                    {children}
                  </span>
                );
              }

              return (
                <span key={key} className={node.data.label}>
                  {children}
                </span>
              );
            },
          }}
        />
      </div>
    </div>
  );
};

export default Blog;
