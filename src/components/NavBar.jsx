import YouTubeLogo from "./YoutubeLogo";

export default function NavBar(){
    return (
    <nav id="navbar">
     <div id="logo">
        <YouTubeLogo  width="3rem" height="1.8rem"/>
        <span>Youtube</span>
     </div>
     <div id="search-container">
        <input type="text" placeholder="Search"></input>
     </div>
     <div id="user-icon">
        <img src="https://api.dicebear.com/8.x/identicon/svg?seed=Charles" 
        alt="user"/>
        </div>  
    </nav>)  
}