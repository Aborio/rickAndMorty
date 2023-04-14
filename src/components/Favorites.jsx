import {connect} from "react-redux";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "./redux/actions";




    

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }}

const Favorites = ({ myFavorites}) => {
    const dispatch = useDispatch();
    const handleFilter = (event) => {
        dispatch(
            filterCards(event.target.value))
    }
    
    const handleOrder = (event) => {
        dispatch(
            orderCards(event.target.value))
    }
    return(
        <div className="container">
        {myFavorites?.map(fav => {
            return(
                <Card
                key={fav.id}
                id={fav.id}
                name={fav.name}
                status={fav.status}
                species={fav.species}
                image={fav.image}
                
                />
            )
        } 
        )
        }

        <select onChange={handleOrder}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="unknown">unknown</option>
            <option value="Genderless">Genderless</option>
            <option value="allCharacters">AllCharacters</option>
        </select>
        </div>
    )
}

export default connect(mapStateToProps)(Favorites);