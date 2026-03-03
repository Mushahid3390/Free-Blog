import { PrismicPreview } from "@prismicio/next";
import { repositoryName, createClient } from "@/prismicio";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/sections/Footer";
import Story from "@/components/sections/Story";

export const metadata = {
  title: "Free Blogs",
  description: "",
};

export default async function RootLayout({ children }) {
  const client = createClient();
  const navbarContent = await client.getSingle("navbar");
  const footerContent = await client.getSingle("footer");
  const CTA = await client.getSingle("story");
  return (
    <html lang="en">
      <body
        className={`antialiase`}
      >
        <Navbar navbarContent={navbarContent}/>
        {children}
        <Story slice={CTA.data}/>
        <Footer footerContent={footerContent}/>
      </body>
       <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
