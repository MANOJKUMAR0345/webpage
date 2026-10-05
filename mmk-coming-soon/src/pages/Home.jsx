import PaperRocket from "../components/PaperRocket";
import LaptopScreen from "../components/LaptopScreen";
import PhoneMockup from "../components/PhoneMockup";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <LaptopScreen />
        <PaperRocket />
        <PhoneMockup />
      </section>

      <div className="slogan">
        <p>Think What's Next... 💡</p>
        <h2>
          Build <span className="highlight-red">What's</span> <span className="highlight-yellow">Next.</span> 🚀
        </h2>
      </div>
    </main>
  );
}
