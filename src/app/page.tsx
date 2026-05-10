import Navbar from "@/components/navbar";
import Hero from "@/sections/hero";
import Company from "@/sections/company";
import Services from "@/sections/services";
import Facility from "@/components/Facility";
import Client from "@/sections/client";
import Contact from "@/sections/contact";
import Reveal from "@/components/reveal";
import Cursor from "@/components/cursor";
import Production from "@/sections/production";
import Footer from "@/sections/footter";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Company />
      <Services />
      <Facility />
      <Production />
      <Client />
      <Contact />
      <Footer />
      <Reveal />
      <Cursor />
      
    </>
  );
}