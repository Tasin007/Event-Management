import Banner from "../Shared/Banner";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Review from "../Shared/Review";
import ServiceCard from "../Shared/ServiceCard";
import services from "../../assets/Services.json";
import FAQ from "../Shared/FAQ";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <div className="mt-10">
        <h1 className="text-4xl text-center font-bold text-sky-950">Services</h1>
      </div>

      <div className="flex flex-wrap justify-center p-5 gap-5 mb-10">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <Review/>
      <FAQ/>

      <Footer />
    </div>
  );
};

export default Home;
