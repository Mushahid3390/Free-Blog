import Featured from "@/components/sections/Featured";

/**
 * @typedef {import("@prismicio/client").Content.FeaturedSectionSlice} FeaturedSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturedSectionSlice>} FeaturedSectionProps
 * @type {import("react").FC<FeaturedSectionProps>}
 */
const FeaturedSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <Featured slice={slice} />
    </section>
  );
};

export default FeaturedSection;
