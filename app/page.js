
import styles from "./page.module.css";
import Navbar from "@/app/Navbar/.";
import Hero from "@/app/Hero/page";
import Footer from "@/app/Footer/page";


export default function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Footer/>
    </div>
  );
}
