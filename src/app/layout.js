import { PrismicPreview } from "@prismicio/next";
import { repositoryName, createClient } from "@/prismicio";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata = {
  title: "Free Blogs",
  description: "",
};

export default async function RootLayout({ children }) {
  const client = createClient();
  const navbarContent = await client.getSingle("navbar");
  return (
    <html lang="en">
      <body
        className={`antialiase`}
      >
        <Navbar navbarContent={navbarContent}/>
        {children}
      </body>
       <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
