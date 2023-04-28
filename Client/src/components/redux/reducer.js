import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-type';

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload,
            }

        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(char=> char.gender === action.payload)
            return {
                ...state,
                myFavorites:
                action.payload === 'allCharacters'
                ? [...state.allCharacters]
                : allCharactersFiltered

            }
        
        case ORDER:
            const allCharactersFavCopt = [...state.allCharacters]
            return {
                ...state,
                myFavorites: action.payload === 'A'
                ? allCharactersFavCopt.sort((a, b) => a.id - b.id) 
                : allCharactersFavCopt.sort((a, b) => b.id - a.id)
            
            }



        default:
            return {...state};
    }

}

export default reducer;