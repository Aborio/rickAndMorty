import SearchBar from './SearchBar';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Nav({onSearch, setAccess}) {
   
   const navigate = useNavigate();
   const handleLogout = () => {
      setAccess(false);
      navigate('/');
   }

    return (
       <div className='navbar'>
         
            <SearchBar onSearch={onSearch}/>
           <button>
           <NavLink to='/home'>Home</NavLink>
            </button> 
            <button>
           <NavLink to='/about'>About</NavLink>
            </button>
            <button>
           <NavLink to='/favorites'>Favorites</NavLink>
            </button> 

        <button onClick={handleLogout}>LogOut</button>    
       </div>
    );
 }