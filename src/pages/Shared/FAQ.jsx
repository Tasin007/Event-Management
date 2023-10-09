import React from "react";

const FAQ = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img  data-aos="fade-down"
          src="../../../public/FAQ.jpg"
          className="max-w-xs lg: max-w-sm rounded-lg shadow-2xl "
        />
        <div>
          <h1 className="text-5xl font-bold pb-8">
            Frequently Asked Questions
          </h1>
          <div className="collapse collapse-arrow bg-rose-100">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              How do I book an event?
            </div>
            <div className="collapse-content">
              <p>
                To book an event, navigate to the event page, and click on the
                "Book Now" button. Follow the instructions to complete your
                booking.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-amber-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            What is the cancellation policy?
            </div>
            <div className="collapse-content">
              <p> Our cancellation policy allows you to cancel your booking
                    up to 48 hours before the event for a full refund. Cancellations
                    made within 48 hours are subject to our refund policy.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-cyan-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            How can I contact customer support?
            </div>
            <div className="collapse-content">
              <p>Our customer support team is available 24/7. You can contact
                    us through our contact page, email us at support@healthandwellnessevents.com,
                    or call our toll-free number at 1-800-123-4567.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
