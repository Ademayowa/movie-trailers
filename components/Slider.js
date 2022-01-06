import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Slider() {
  return (
    <section className='relative shadow-2xl max-w-screen-2xl mx-auto'>
      <div />

      <Carousel
        // autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className='relative'>
          <h1 className='text-lg mt-10 sm:top-20 md:text-6xl font-bold absolute md:top-10 left-10 max-w-2xl'>
            Watch the latest movie trialers, tv series and shows.
          </h1>
          <img loading='lazy' src='/images/slider-1.jpg' alt='' />
        </div>
        <div className='relative'>
          <h1 className='text-lg mt-10 sm:top-20 md:text-6xl font-bold absolute md:top-10 left-10 max-w-2xl'>
            Watch the latest movie trialers, tv series and shows.
          </h1>
          <img loading='lazy' src='/images/slider-2.jpg' alt='' />
        </div>
        <div className='relative'>
          <h1 className='text-lg mt-10 sm:top-20 md:text-6xl font-bold absolute md:top-10 left-10 max-w-2xl'>
            Watch the latest movie trialers, tv series and shows.
          </h1>
          <img loading='lazy' src='/images/slider-3.jpg' alt='' />
        </div>
        <div className='relative'>
          <h1 className='text-lg mt-10 sm:top-20 md:text-6xl font-bold absolute md:top-10 left-10 max-w-2xl'>
            Watch the latest movie trialers, tv series and shows.
          </h1>
          <img loading='lazy' src='/images/slider-4.jpg' alt='' />
        </div>
      </Carousel>
    </section>
  );
}
