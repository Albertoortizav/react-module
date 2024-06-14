import Categories from "./Categories"
import Video from "./video"
export  default function Content(){
   const videos=[
      {
         image:
           "https://i.ytimg.com/vi/qkYoBNdcXBU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D&rs=AOn4CLBMqLZTrZGyOfAutjm8zbjaIUdwtA",
         title: "WWDC 2024 Recap: Is Apple Intelligence Legit?",
         channel: "Marques Brownlee",
       },
       {
         image:
           "https://i.ytimg.com/vi/6PrURUM4ng0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D&rs=AOn4CLDwGnSCzCzuBRo4DC-i8PJI14VJCg",
         title: "Como crea una web con HTML, CSS y JavaScript",
         channel: "Canal 1",
       },
       {
         image:
           "https://i.ytimg.com/vi/dLw1ao4-Akk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCD9H130iyuyAa3ysZJtOkzfExemw",
         title: "Apple lanza lo mismo que android tenia hace 20 años",
         channel: "Canal 2",
       },
       {
         image:
           "https://i.ytimg.com/vi/F07sHa6Z7EI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJ_GHVKSpQACfsMGvmuD7ggTodvQ",
         title: "Como instalar linux",
         channel: "Canal 3",
       }, 
   ] 
   return(
   <section className="col-start-2 col-end-3 row-start-2 row-end-3">
    <Categories/>
    <section className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 pt-4">
      {videos.map((video)=>{
         return(
           <Video
           key={`video-${video.title}`}
           image={video.image}
           tittle={video.title}
           channel={video.channel}
           />
         )
      })

      }
    </section>
   </section>
   )
   }