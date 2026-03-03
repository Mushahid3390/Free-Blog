import Popularpst from "@/components/sections/Popularpst";

/**
 * @typedef {import("@prismicio/client").Content.PopularPostSlice} PopularPostSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PopularPostSlice>} PopularPostProps
 * @type {import("react").FC<PopularPostProps>}
 */
const PopularPost = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Popularpst slice={slice} />
    </section>
  );
};

export default PopularPost;
