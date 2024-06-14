export default function Categories(){
    const categories=[
        "All",
        "music",
        "Gamming",
        "Code",
        "Programming",
        "life style",
        "Sports",
    ]
    return(
    
        <div className="flex flex-row gap-4">
        {categories.map((category)=>{
            return(
                <span key={`category-${category}`} className="p-[0.5rem_1rem] rounded-[20px] bg-[#282828]">
                    {category}
                </span>
            )
        })
        }
        </div>
  )
}