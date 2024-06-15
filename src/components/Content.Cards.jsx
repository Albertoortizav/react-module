import Video from "./Video"
export default function Cards(){
    const videos=[{image:"https://static-cdn.jtvnw.net/ttv-boxart/497057-285x380.jpg",
        title:"Rust",
        espect:"110.7k expectadores"
    },{image:"https://static-cdn.jtvnw.net/ttv-boxart/497057-285x380.jpg",
        title:"Rust",
        espect:"110.7k expectadores"
    },
    {image:"https://static-cdn.jtvnw.net/ttv-boxart/497057-285x380.jpg",
        title:"Rust",
        espect:"110.7k expectadores"
    },
    
    ]
    return(
        <>
        {videos.map((element)=>{
            return(
              < Video key={`video-${element.title}` }
                    title={element.title}
                       image={element.image}
                       espect={element.espect} /> 
            )

        })

        }
        </>

    )
}