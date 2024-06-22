export default function TeamBox(props: {
  icon: string;
  alt: string;
  title: string;
  subtitle: string;
  background: string;
}) {
  return (
    <div
      id='team-box'
      className='
      flex flex-col items-center
      md:min-w-[24rem] md:h-80 md:rounded-[3rem] md:border-4 border-exer-white
      min-w-[18rem] h-[16rem] rounded-[3rem] border-2
      text-exer-white justify-center md:pb-8 pb-2
      hover:bg-exer-white hover:text-exer-charcoal group transition-all duration-300 ease-in-out
      cursor-pointer
    '>
      <div className='flex flex-col items-center justify-center group-hover:justify-between transition-all duration-300 group'>
        <img
          src={props.background}
          alt={"background" + props.alt}
          className='w-full h-0 object-contain opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:h-28 group-hover:mb-2'
        />
        <h3
          id='team-title'
          className='md:text-3xl text-xl mb-4 font-bold mx-4 text-center drop-shadow text-exer-white group-hover:text-exer-charcoal transition-all duration-200'>
          {props.title}
        </h3>
      </div>

      <p id='team-subtitle' className='text-center mx-6 md:text-[1rem] text-sm'>
        {props.subtitle}
      </p>
    </div>
  );
}
