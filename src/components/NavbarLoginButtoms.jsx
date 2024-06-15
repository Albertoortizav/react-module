import clsx from "clsx"
import KingLogo from "./KingLogo"
import PersonLogo from "./PersonLogo"
export default function Buttons (){
    const element=[<KingLogo/>,"Iniciar sesión", "Registrarse",<PersonLogo/>]
    return(
        <div> 
          {element.map((botones)=>{

             return(
                <span key={`botones-${botones}`}>
                    <button className={clsx("text-[white] mr-[15px]",{"bg-[#2d2933] hover:bg-[#3b3b44] text-sm p-[5px] rounded-[5px]":botones=== "Iniciar sesión"

                    },{" bg-[#9147ff] hover:bg-[#5c16c5] text-sm p-[5px] rounded-[5px] ":botones==="Registrarse"})}>{botones}</button>
                </span>
             )
          })} 
        </div>
    )
}