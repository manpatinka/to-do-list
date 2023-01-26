import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const activeStyle = {
        color: "red"
    };

    return ( 
        <NavLink 
          to="/createtask"
          style={({ isActive }) => 
          isActive ? activeStyle : undefined
        }
        >
          Create New Task
        </NavLink>
     );
}
 
export default NavBar;