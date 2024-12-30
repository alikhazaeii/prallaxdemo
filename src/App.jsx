import Finalsec from "./components/finalsec";
import Footer from "./components/footer";
import Glasses from "./components/glasses";
import Imgs from "./components/imgs";
import Navbar from "./components/navbar";
import Picpage from "./components/picpage";

export default function App() {
  return (
    <>
      <Navbar />

      <section
        className="w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/bg.avif')`,
        }}
      >
        <Picpage />
        <div className="w-full min-h-[2000px]"></div>
        <Glasses />
        <Imgs />
        <Finalsec />
      </section>
      <Footer />

    </>
  );
}
