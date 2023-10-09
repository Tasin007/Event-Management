import Navbar from './Navbar';
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {

    const [event, setEvent] = useState(null);
    const { id } = useParams();
    const loader = useLoaderData();

    useEffect(() => {
        const findEvent = loader?.find((event) => event.id == id);
        if (findEvent) {
          setEvent(findEvent);
        } else {
          setEvent(null);
        }
      }, [id, loader]);

      if (!event) {
        return (
          <div className="max-w-7xl mx-auto h-screen">
            <h1 className="text-gray-500 text-center font-semibold text-3xl mt-32 lg:mt-10">
              Service Details
            </h1>
            <div className="text-gray-500 text-center font-semibold text-3xl mt-32 lg:mt-10">
              No new services here...
            </div>
          </div>
        );
      }

    return (
        <div>
        <Navbar></Navbar>
            
            <div className='max-w-7xl mx-auto'>
            <h1 className="text-gray-500 text-center font-semibold text-3xl mt-32 lg:mt-10">
       Service Details
      </h1>
      <div className="my-10">
        <img src={event.image} />
        <h1 className="text-black font-semibold text-2xl mt-2">{event.name}</h1>
        <p className="mt-2"> {event.description} </p>
        <p className="mt-2"> Event value: <span className="font-semibold">{event.price}</span></p>
      </div>

            </div>
        </div>
    );
};

export default ServiceDetails;