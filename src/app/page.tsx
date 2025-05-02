import Boost from "@/components/Boost";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Input from "@/components/Input";
import NavBar from "@/components/NavBar";
import Statistics from "@/components/Statistics";



export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Input/>
      <Statistics/>
      <Boost/>
      <Footer/>
    </>
  );
}
