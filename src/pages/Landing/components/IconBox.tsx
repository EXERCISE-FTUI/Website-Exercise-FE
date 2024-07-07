export default function IconBox(props: {
  icon: string;
  alt: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      id='icon-box'
      className='
            flex flex-col flex-wrap items-left
            md:w-60 rounded-3xl
            md:min-h-80
            w-36  min-h-52
            bg-exer-white text-exer-charcoal
            hover:scale-110 transition-all duration-300
            hover:cursor-pointer
          '
          onClick={() => window.location.href = `/past-projects?filter=${props.alt}`}>
      <img
        src={props.icon}
        alt={props.alt}
        className='mx-3 mt-4 mb-2 md:mx-6 md:mt-8 md:mb-4 md:w-20 md:h-20 w-10 h-10 object-contain '
      />
      <h3
        id='icon-title'
        className='mx-3 md:mx-6 text-xl md:text-3xl font-bold '>
        {props.title}
      </h3>
      <p id='icon-subtitle' className='mx-3 md:mx-6 md:text-[1rem] text-sm md:my-8 mb-4 md:mt-4 mt-2'>
        {props.subtitle}
      </p>
    </div>
  );
}
