import { Link } from "react-router-dom";
import { addFav, removeFav } from "./redux/actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

const mapDisppatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
   };
};

const mapStateToPops = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}


function Card({id, name, status, species, gender, origin, image, onClose, myFavorites, addFav, removeFav}) {
   
   
   const [isFav, setIsFav] = useState(false);


   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFav(id);
      } else {
         setIsFav(true)
         addFav({id, name, species, gender, image});
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      

      <div className="card">
         <button onClick={()=> onClose(id)}>X</button>
         <h2 className="bcard">{status}</h2>
         <h2 className="bcard">{species}</h2>
         <h2 className="bcard">{gender}</h2>
         {origin ? <h2 className="bcard">{origin.name}</h2> : null}
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         <img className="imgcard" src={image} alt='hi' />
         <Link to={`/detail/${id}`} >
            <h3 className="bcard">{name}</h3>
         </Link>
      </div>
   );
}


export default connect(mapStateToPops, mapDisppatchToProps)(Card);