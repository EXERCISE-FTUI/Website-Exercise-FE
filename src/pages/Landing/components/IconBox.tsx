export default function IconBox(props: {icon: string, alt: string, title: string, subtitle: string}) {
  return(
    <div id="icon-box" className="
            flex flex-col flex-wrap items-left
            w-60 rounded-3xl
            bg-exer-white text-exer-charcoal
            hover:scale-110 transition-all duration-300
          ">
      <img src={props.icon} alt={props.alt} className=" mx-6 mt-8 mb-4 w-20 h-20 object-contain "/>
      <h3 id="icon-title" className=" mx-6 text-3xl font-bold">{props.title}</h3>
      <p id="icon-subtitle" className="mx-6 my-8 mt-4">{props.subtitle}</p>
    </div>
  )
}