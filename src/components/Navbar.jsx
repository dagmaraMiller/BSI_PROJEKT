import {Link} from "react-router-dom"
import 'firebase/auth'

// Import the functions you need from the SDKs you need

const Navbar = ({user}) => {

    return (
        <div className="navbar">
           <span className="logo"><Link className="link" to="/">Login App</Link>
           </span> {
               user ? (

           <ul className="list">
               <li className="listItem">
                   <img src={localStorage.getItem("profilePic")} alt="" className="avatar" />
               </li>
               <li className="listItem">{localStorage.getItem("name")}</li>
               <li className="listItem"><Link className="link" to="login" >Wyloguj się</Link></li> 
                        
           </ul>
        ) : (<Link className="link" to="login">Zaloguj się</Link>)
        }
        
        </div>
    
    )
}

export default Navbar