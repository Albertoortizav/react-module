import clsx from "clsx"
export default function Video(props){
//const articleClassnames='video-card' + (
  //  props.channel ==="Marques Brownle"?"special" : "")

    return(
    <article className={clsx("video-card flex flex-col gap-2",{
        'special  border rounded border-red-600 ': props.channel==="Marques Brownlee"})}>
        <img className="w-full rounded-[10px] object-cover aspect-video" 
        src={props.image} alt=""/>
        <footer className=" grid gap-2 grid-cols-[3rem_1fr]">
            {props.channel &&(
            <img className=" col-start-1 col-end-2 w-8 h-8 rounded-[50%]"
             src={`<img class="w-8 h-8 rounded-[50%]" src="https://api.dicebear.com/8.x/identicon/svg?seed=Charles" alt="user">=${props.image}`} alt=""/>
             )}
            <p className=" col-start-2 col-end-3">{props.title}</p>
            <p className=" col-start-2 col-end-3">{props.channel}</p>
        </footer>
    </article>
    )
}