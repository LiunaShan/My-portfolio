import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Aboutme from "@/components/Aboutme";

export default function Home() {
  return (
      <>
        <Navbar />
        <main>
           <Aboutme />
        </main>
        <Footer />
      </>
  );
}
