export default function Menu(){
   const menuItems=[
      {icon:'🎪',text: "home"},
      {icon:'👖',text: "Shorts"},
      {icon:'⏰',text: "Subscriptions"},
      {icon:'😲',text: "Favs"}
   ]
   return( 
   <aside className="col-start-1 col-end-2 row-start-2 row-end-3 p-[0_1rem_0_0]">
      {
         menuItems
         .map((item)=>{
            return(
               <div key={`menu-item-${item.text}`} className="p-4 rounded-[20px] flex flex-row gap-2 items-center hover:bg-[#282828]">
                 <span>{item.icon}</span>
                 <span>{item.text}</span>
               </div> 
            )
         })
      }
   </aside>
   )
}