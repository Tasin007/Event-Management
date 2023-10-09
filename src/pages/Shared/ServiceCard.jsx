const ServiceCard = ({ service }) => {
  return (
    <>
      <div data-aos="fade-down-right" className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={service.image}
            alt={service.name}
            className="rounded-xl w-64 h-48 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service.name}</h2>

          <p>{service.description}</p>
          <div className="card-actions flex gap-10 items-center">
            <button className="btn btn-primary">{service.buttonText}</button>

            <p className="text-2xl font-semibold text-primary">
              {service.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
