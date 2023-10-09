
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <div>
    <Navbar/>
    <section id="about-us" className="bg-white py-16">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">About Us</h2>
          <p className="text-lg text-gray-600">
            Welcome to WellEventHub, your trusted source for health and wellness events. Our mission is to promote a
            healthy and balanced lifestyle by connecting individuals with informative and inspiring wellness events.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            We believe that taking care of your physical and mental well-being is essential for a happy and fulfilling
            life. Our platform brings together health experts, fitness enthusiasts, and individuals who are passionate
            about well-being.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Whether you're looking for workshops, fitness classes, nutrition seminars, or mindfulness retreats, you'll
            find a wide range of events to suit your interests and goals.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Join us on a journey towards a healthier and happier you. Explore our events, connect with like-minded
            individuals, and take the first step toward a balanced and vibrant life.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutUs;
