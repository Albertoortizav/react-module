import Cards from "./Content.Cards"
import ContentMenu from "./ContentMenu"
export default function Content(){
 return(
     <div >
      <dvi className="text-[white] text-[50px] m-[15px]  font-[600]">Explorar</dvi> 
      <div className="flex flex-wrap ml-[20px]">
      <ContentMenu/>
        </div>  
        <div >
        <Cards/>
        </div>
  
    </div>
 )
}