export default function Video(props){
    return(
    <article className="video-card">
        <img src={props.image} alt=""/>
        <footer>
            <img src="" alt=""/>
            <p className="video-card-title">{props.title}</p>
            <p className="video-card-channel">{props.channel}</p>
        </footer>
    </article>
    )
}
