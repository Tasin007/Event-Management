import { SlideshowLightbox} from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css'
import AOS from "aos";
import "aos/dist/aos.css";
<<<<<<< HEAD
import Navbar from './Shared/Navbar';
=======
>>>>>>> 89f6994682fd07036c3b75953e9eac6c4ae411f6
AOS.init();



const Gallery = () => {
    return (
<<<<<<< HEAD
        <>
        <Navbar></Navbar>
            <div className="h-screen max-w-7xl mx-auto" data-aos="fade-down-right">
=======
        <div className="h-screen max-w-7xl mx-auto" data-aos="fade-down-right">
>>>>>>> 89f6994682fd07036c3b75953e9eac6c4ae411f6
        <h1 className='text-gray-500 underline pb-2 font-bold text-center my-10 text-4xl'> Please Click on the Image and Feel the Magic</h1>
         <SlideshowLightbox className='container grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto' showThumbnails={true}>
              <img className='w-full rounded' src='https://i.ibb.co/MCr0566/yoga.jpg' />
              <img className='w-full rounded' src='https://i.ibb.co/r3LNFCs/meditation.jpg' />  
              <img className='w-full rounded' src='https://i.ibb.co/ZBn7Rj8/nutritions.jpg' />
              <img className='w-full rounded' src='https://i.ibb.co/2Y2bG52/fitness.jpg' />
              <img className='w-full rounded' src='https://i.ibb.co/0G7CwQf/Wellness.jpg' />
              <img className='w-full rounded' src='https://i.ibb.co/hVggL2B/Massages.jpg' />
                  
                   
            </SlideshowLightbox> 
        </div>
<<<<<<< HEAD
        </>
=======
>>>>>>> 89f6994682fd07036c3b75953e9eac6c4ae411f6
    );
};

export default Gallery;