import AboutHero from "@/components/sections/AboutHero";

/**
 * @typedef {import("@prismicio/client").Content.AboutHeroSectionSlice} AboutHeroSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutHeroSectionSlice>} AboutHeroSectionProps
 * @type {import("react").FC<AboutHeroSectionProps>}
 */
const AboutHeroSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <AboutHero slice={slice}/>
    </section>
  );
};

export default AboutHeroSection;
