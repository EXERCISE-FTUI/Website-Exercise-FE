export default function Box(props: any) {
  return(
    <div className="
      text-white w-32 h-16 bg-slate-900 rounded-lg
      flex items-center justify-center m-4 p-4 text-center
    ">
      {props.text}
    </div>
  )
}