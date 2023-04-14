import './App.css';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import Nav from './components/Nav.jsx';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Favorites from './components/Favorites';




function App() {
   const location = useLocation();
   const navigate = useNavigate();
   
   
   const [access, setAccess] = useState(false);

   const EMAIL = 'aguborio18@gmail.com';
   const PASSWORD = '12345678';

   function login(userData) {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
         
      } else {
         alert('¡Datos incorrectos!');
      }
      
      
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const [characters, setCharacters] = useState([])
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   } 
    
   function onClose(id) {
      const charactersFiltered = characters.filter((c) => c.id !== Number(id));
      setCharacters(charactersFiltered);
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' ?
         <Nav onSearch={onSearch} setAccess={setAccess}/>
         : null}
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Cards onClose={onClose} characters={characters} />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/detail/:id' element={<Detail/>} />

         </Routes>
      </div>
   );
}

export default App;
