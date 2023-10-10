const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/SPWJF0f/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Empower Your Well-being</h1>
          <p className="mb-5">
            Dive into our curated Health and Wellness events, and embark on a
            transformative journey of holistic well-being. Join us to discover,
            learn, and rejuvenate.
          </p>
          <button className="btn bg-green-400 text-white hover:bg-green-600">Explore Events</button>

        </div>
      </div>
    </div>
  );
};

export default Banner;
