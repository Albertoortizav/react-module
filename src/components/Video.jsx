export default function Video(props){
return(
    <div className="flex flex-row ml-[30px] mt-[25px] flex-wrap">
    <article className="w-[184px] bg-[purple] ">
        <img src={props.image}/>
        <p className="text-[white] ">{props.title}</p>
        <p className="text-[white] ">{props.espect}</p>
    </article>
    <article className="w-[184px] bg-[purple] ml-[15px]">
        <img src={props.image}/>
        <p className="text-[white] ">{props.title}</p>
        <p className="text-[white] ">{props.espect}</p>
    </article>
    <article className="w-[184px] bg-[purple] ml-[15px]">
        <img src={props.image}/>
        <p className="text-[white] ">{props.title}</p>
        <p className="text-[white] ">{props.espect}</p>
    </article>
    <article className="w-[184px] bg-[purple] ml-[15px]">
        <img src={props.image}/>
        <p className="text-[white] ">{props.title}</p>
        <p className="text-[white] ">{props.espect}</p>
    </article>
    <article className="w-[184px] bg-[purple] ml-[15px]">
        <img src={props.image}/>
        <p className="text-[white] ">{props.title}</p>
        <p className="text-[white] ">{props.espect}</p>
    </article>
    <article className="w-[184px] bg-[purple] ml-[15px]">
        <img src={props.image}/>
        <p className="text-[white] ">{props.title}</p>
        <p className="text-[white] ">{props.espect}</p>
    </article>
    <article className="w-[184px] bg-[purple] ml-[15px]">
        <img src={props.image}/>
        <p className="text-[white] ">{props.title}</p>
        <p className="text-[white] ">{props.espect}</p>
    </article>
    <article className="w-[184px] bg-[purple] ml-[15px]">
        <img src={props.image}/>
        <p className="text-[white] ">{props.title}</p>
        <p className="text-[white] ">{props.espect}</p>
    </article>
    </div>
)
}