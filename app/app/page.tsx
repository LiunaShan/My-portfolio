import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Aboutme from "@/components/Aboutme";
import Projects from "@/components/Projects";

export default function Home() {
  return (
      <>
        <Navbar />
        <main>
           <Aboutme />
           <Projects />
        </main>
        <Footer />
      </>
  );
}
