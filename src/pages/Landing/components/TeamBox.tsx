export default function TeamBox(props: {icon: string, alt: string, title: string, subtitle: string}) {
  return (
    <div id="team-box" className="
      flex flex-col items-center
      w-96 min-w-[24rem] h-80 rounded-[3rem] border-4 border-exer-white
      text-exer-white justify-center pb-8
      hover:bg-exer-white hover:text-exer-charcoal transition-all duration-300 ease-in-out
    ">
      <div className="flex items-center justify-center">
        <img src={props.icon} alt={props.alt} className="w-24 h-16 my-8 object-contain drop-shadow" />
        <h3 id="team-title" className="text-3xl font-bold mx-4 text-center drop-shadow text-exer-white">{props.title}</h3>
      </div>

      <p id="team-subtitle" className="text-center mx-6">{props.subtitle}</p>
    </div>
  );
}