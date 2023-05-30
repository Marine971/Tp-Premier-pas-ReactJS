import { Link } from 'react-router-dom';
import Quizz from "./Quizz";
function NavBar (){
    return (
        <div class="navbar">
            <h1>Columbiana</h1>
            <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/Quizz" >Click to play !</Link></li>
            </ul>
        </div>
    )

}
export default NavBar;