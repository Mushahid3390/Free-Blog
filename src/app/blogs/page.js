import React from "react";
import { createClient } from "@/prismicio";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Card from "@/components/card/Card";

const page = async () => {
  const client = createClient();
  const blog = await client.getSingle("blogpage");
  return (
    <>
      <div className="pt-19.25 px-26 max-w-360 w-full mx-auto flex flex-col items-center gap-6.25">
        <p className="font-bold text-[16px] leading-[150%] tracking-[10%] text-[#666666]">
          {blog.data.label}
        </p>
        <div className="[&>h1]:font-bold [&>h1]:text-[48px] [&>h1]:leading-16 [&>h1]:text-[#333333] [&>p]:font-normal [&>p]:text-[16px] [&>p]:leading-[150%] [&>p]:text-[#666666] [&>p]:max-w-189 [&>p]:text-[#666666] text-center flex flex-col items-center gap-6.25">
          <PrismicRichText field={blog.data.content} />
        </div>
        {blog?.data?.slices[0]?.primary?.cards && (
          <div className="flex gap-3 flex-wrap mt-28.5">
            {blog?.data?.slices[0]?.primary?.cards?.map((card) => {
              return <Card key={card.card.id} card={card} style={"mb-10"}/>;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default page;
