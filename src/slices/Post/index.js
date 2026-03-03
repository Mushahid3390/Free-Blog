import Blog from "@/components/sections/Blog";

/**
 * @typedef {import("@prismicio/client").Content.PostSlice} PostSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PostSlice>} PostProps
 * @type {import("react").FC<PostProps>}
 */
const Post = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

      <Blog slice={slice} />
    </section>
  );
};

export default Post;
