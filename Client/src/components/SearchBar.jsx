import { useState } from "react";
export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");
   const handleChange = (e) => {
      setId(e.target.value);
    };
   return (
      <div>
         <input onChange={handleChange} type='search' value={id}/>
         <button onClick={()=>{onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
