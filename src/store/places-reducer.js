import { ADD_PLACE, LOAD_PLACES } from "./places-actions";
const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE: {
      return {
        places: state.places.concat(action.data),
      };
    }
    case LOAD_PLACES: {
      return {
        places: action.data,
      };
    }
    default:
      return state;
  }
};
