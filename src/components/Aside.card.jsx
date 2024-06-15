import ImageCard from "./Image.card.Aside"
export default function Asidecard (){
const card=[{image:<ImageCard/>,name:"ibai", comment:"Rust",pointred:"",number:"56.5k" },
    {image:<ImageCard/>,name:"CrystalMolly", comment:"Rust",pointred:"",number:"11.6k" },
    {image:<ImageCard/>,name:"elxokas", comment:"Rust",pointred:"",number:"18.3k" },
    {image:<ImageCard/>,name:"Staryuuki", comment:"Rust",pointred:"",number:"1.9k" },
    {image:<ImageCard/>,name:"tarik", comment:"VALORANT",pointred:"",number:"16.5k" },
    {image:<ImageCard/>,name:"CLIX", comment:"Fornite",pointred:"",number:"18.9k" },
    {image:<ImageCard/>,name:"LLA", comment:"League of Legends",pointred:"",number:"363" },
    {image:<ImageCard/>,name:"Carola", comment:"Rust",pointred:"",number:"16.8k" },
]    
 return(
    <>
        {
            card.map((parts)=>{
                return(
                    <div key={`elements-${parts}`} className="flex flex-row text-sm text-[white] pt-[10px] w-[230px]" >
                             <article className="h-[40px] w-[40px] " >{parts.image}</article>
                             <div className="flex flex-col w-[190px] ml-[5px] hidden md:block">
                               <article className="text-[15px]">{parts.name}</article>
                                <article className="text-[13px] text-[gray]  ">{parts.comment}</article>
                             </div >
                             <div className=" flex flex-row  " >
                             <article className="hidden md:block flex justify-self-end w-[8px] h-[8px] bg-[red] rounded-[50%] mt-[5px]" >{parts.pointred}</article>
                                <article className="hidden md:block text-[13px] pl-[7px]" >{parts.number}</article>
                          
                                </div>
                                
                    </div>
                )
            })
        }
    </>
 )
}