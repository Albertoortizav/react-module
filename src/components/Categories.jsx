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
    
        <div id="categories list">
        {categories.map((category)=>{
            return(
                <span key={`category-${category}`} className="category">
                    {category}
                </span>
            )
        })
        }
        </div>
  )
}