const Review = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16 mb-16">
      <h1 className="text-2xl font-bold text-center my-10">
        <span className="text-4xl text-center font-bold text-sky-950">Reviews</span>
      </h1>

      <div data-aos="fade-down-right">
        <section className="bg-slate-900 text-white rounded-lg py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-8">Feedback from Our Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow rounded-lg p-8">
                <p className="text-gray-700 mb-4">
                  "Attending the Health Workshop was a fantastic experience! I learned so much from the expert instructors and gained valuable insights into maintaining a healthy lifestyle. Whether you're a beginner or health enthusiast, this workshop is a must-attend."
                </p>
                <p className="text-gray-700 font-medium">- John Doe</p>
              </div>
              <div className="bg-white shadow rounded-lg p-8">
                <p className="text-gray-700 mb-4">
                  "The Wellness Retreat was an absolute delight! The activities were diverse, and the atmosphere was peaceful. I had a fantastic time rejuvenating and connecting with like-minded individuals. I can't wait for the next retreat!"
                </p>
                <p className="text-gray-700 font-medium">
                  - Jane Smith
                </p>
              </div>
              <div className="bg-white shadow rounded-lg p-8">
                <p className="text-gray-700 mb-4">
                  "The Nutrition Workshop provided valuable insights into maintaining a balanced diet. I learned about healthy eating habits and nutritious meal planning. The workshop was both educational and practical."
                </p>
                <p className="text-gray-700 font-medium">
                  - Mark Johnson
                </p>
              </div>
              <div className="bg-white shadow rounded-lg p-8">
                <p className="text-gray-700 mb-4">
                  "The Fitness Bootcamp was an intense fitness experience! The trainers pushed us to our limits, and I left feeling stronger and more motivated than ever. I'm definitely enrolling in the next bootcamp!"
                </p>
                <p className="text-gray-700 font-medium">
                  - Emily Davis
                </p>
              </div>
              <div className="bg-white shadow rounded-lg p-8">
                <p className="text-gray-700 mb-4">
                  "The Wellness Webinars were informative and eye-opening. I attended sessions on various health topics and gained valuable knowledge to improve my well-being. It's a fantastic way to stay informed."
                </p>
                <p className="text-gray-700 font-medium">
                  - Michael Brown
                </p>
              </div>
              <div className="bg-white shadow rounded-lg p-8">
                <p className="text-gray-700 mb-4">
                  "The Therapeutic Massages were a blissful experience! I had a chance to relax and rejuvenate with soothing massages. The skilled therapists ensured a tranquil and healing session."
                </p>
                <p className="text-gray-700 font-medium">
                  - Sarah Wilson
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Review;
