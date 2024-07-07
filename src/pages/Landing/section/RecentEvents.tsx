import RecentEvents from "../../../assets/landing/RecentEvents.png";
import { useImages } from "../../../assets/imageLoader";
import events from "../../../assets/events";
import { useState } from "react";


export default function RecentEventsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(0);
  const images = useImages("./events/images", events);

  function Card(props: {
    title: string;
    img: string;
    index: number;
    date: string;
    hoveredCard: any;
    setHoveredCard: any;
  }) {
    console.log(props.img);
    return (
      <div className='w-[10%] min-w-[200px] hover:w-[30%] hover:min-w-[300px] mx-1 h-[20rem] bg-white rounded-[3rem] overflow-hidden shadow-xl flex flex-col transition-all duration-500 ease-in-out group delay-100 relative'>
        <img
          src={props.img}
          alt='Event'
          className='absolute top-0 left-0 w-full h-full object-cover object-left'
        />
      
        <div className='flex flex-col justify-end items-center py-[18px] h-full z-20'>
          <div className='absolute bottom-0 bg-exer-whitegray  w-full p-4  opacity-0 group-hover:opacity-75 transition-all duration-300 ease-in-out delay-150'>
            <div className='font-inter font-black text-exer-darkelectricblue text-center text-[31px] px-1 leading-none'>
              {props.title}
            </div>
            <p className='font-normal font-inter text-[15.9px] text-center text-black pt-[10px] p-4 '>
              {props.date}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section>
      <img
        src={RecentEvents}
        alt='Recent Events'
        className='md:w-[400px] w-[200px] md:mx-24 mx-12 my-12'
      />
      <div className='flex w-screen justify-center'>
        <div className='flex justify-center items-center mx-24 w-full flex-wrap gap-4'>
          {events.map((event, index) => (
            <Card
              key={event.name}
              title={event.name}
              img={images[event.image] || ''}
              date={event.date}
              index={index}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
