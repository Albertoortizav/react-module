import Twitchlogo from "./TwitchLogo"
import Buttons from "./NavbarLoginButtoms"
import SearchLogo from "./buttonSearchLogo"
export default function  Navbar(){
    return(
       <nav className="w-full h-[50px] bg-[#18181b] flex justify-between items-center">
        <section className=" p-[10px] flex flex-row">
          <div>
          <Twitchlogo className="w-[28px] h-[50px] items-center p-[1px]"/>
          </div>

          <div>
            <button className="ml-[25px] text-[#bf94ff] h-[50px] text-[20px] border-b-purple-400 ">Explorar</button>
        </div>

        </section>

        <section className="flex flex-row ">
            <input type="text" placeholder="Buscar" className="focus:outline-none border-[#53535f] hover:border-[#848494] 
            focus:border-[#bf94ff] focus:border-[3px] hidden lg:block w-[350px] h-[36px] pl-[10px]
             bg-[#0e0e10] border-[1px] rounded-[5px]  "></input>
           <button className="w-[34px] h-[36px] bg-[#2d2933]"><SearchLogo /></button> 
        </section>

        <section >
            <Buttons/>
        </section>
       </nav>
    )
}
