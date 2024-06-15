import Asidecard from "./Aside.card"
import Content from "./Content"
export default function Asider(){
 return(
  <main className="flex flex-row ">
 <aside className="w-[100px] md:w-[240px] h-[841px]  bg-[#1f1f23]">
  <p className="text-[white] text-xs ml-[15px] mt-[15px] text-[14px] hidden lg:block">CANALES RECOMENDADOS</p>
  <Asidecard/>
 </aside>
  
   <Content/>
  
   </main>
 )
}