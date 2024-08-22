import { useState } from 'react';
import TestominySVG from '../../../../public/assets/landing/Testimony/OurAlumniTestimonials.svg';
import { useImages } from '../../../assets/imageLoader';
import TestimonyList from '../../../../public/assets/landing/Testimony';

export default function Testimony() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = useImages("./landing/Testimony/images", TestimonyList);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? TestimonyList.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === TestimonyList.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className='px-10'>
            <div className="w-auto mx-auto mt-10 max-w-[800px]">
                <img src={TestominySVG} alt="Testimony" className="object-cover w-[50%] sm:w-[70%] my-10 mx-auto" />
                <div className="relative w-full" data-carousel="slide">
                    <div className="relative overflow-hidden rounded-lg h-96">
                        {TestimonyList.map((item, index) => (
                            <div
                                className={`${index === currentSlide ? "block" : "hidden"} duration-700 ease-in-out flex-col bg-white rounded-3xl flex flex-grow h-full p-5 w-[80%] mx-auto`}
                                key={index}
                            >
                                <h1 className='font-poppins text-exer-charcoal underline font-bold text-lg'>{item.title}</h1>
                                <p className='text-exer-charcoal font-poppins md:text-base text-xs'>{item.message}</p>
                                <div className="w-full flex flex-row mt-auto items-center md:mb-none mb-3">
                                    <img src={images[item.image] || ``} alt={item.title} className="object-cover h-9 w-9 rounded-full" />
                                    <div className="flex flex-col ml-2">
                                        <p className='text-exer-charcoal font-poppins font-semibold'>{item.name}</p>
                                        <p className=''>{item.current_job}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        {TestimonyList.map((_, index) => (
                            <button
                                type="button"
                                className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-300"}`}
                                aria-current={index === currentSlide}
                                aria-label={`Slide ${index + 1}`}
                                onClick={() => setCurrentSlide(index)}
                                key={index}
                            ></button>
                        ))}
                    </div>
                    <button
                        type="button"
                        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        onClick={prevSlide}
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                                className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 1 1 5l4 4"
                                />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button
                        type="button"
                        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        onClick={nextSlide}
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                            <svg
                                className="w-4 h-4 text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
