export default function ContentMenu(){
    const menu=["Juegos","IRL","Música","Creative","Esport"]
 return(
    <>
    {
       menu.map((element)=>{
        return(
        <div key={`element-${element}`} className=" w-[320px] l-[2px]">
            <p className="text-[white] text-[25px] bg-[#5c16c5] m-[5px] pl-[10px] pt-[5px] pb-[5px] rounded-[5px] hover:bg-[#bf94ff]">{element}</p>

        </div>
        )
       }) 
    }
    </>
 )
}