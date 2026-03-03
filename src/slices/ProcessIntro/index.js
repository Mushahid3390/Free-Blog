import WorkProcess from "@/components/sections/WorkProcess";

/**
 * @typedef {import("@prismicio/client").Content.ProcessIntroSlice} ProcessIntroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProcessIntroSlice>} ProcessIntroProps
 * @type {import("react").FC<ProcessIntroProps>}
 */
const ProcessIntro = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <WorkProcess slice={slice}/>
    </section>
  );
};

export default ProcessIntro;
