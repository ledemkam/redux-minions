import actionTypes from "../actions/actionTypes";

//Etape 2 : initialiser le State
const initialState = {
  minions: 0,
};
//Etape 3: creer le reducer(ce qui nous permettra de modifier le state selon une action)
const minionsReducer = (state = initialState, action) => {
  // Action
  switch (action.type) {
    case actionTypes.CREATE_MINION:
      return {
        minions: state.minions + 1,
      };
    case actionTypes.DESTROY_MINION:
      return {
        minions: state.minions - 1,
      };
    case actionTypes.CREATE_TEAM:
      return {
        minions: state.minions + action.value,
      };
    case actionTypes.DESTROY_TEAM:
      return {
        minions: state.minions - action.value,
      };
    case actionTypes.AUTO_ENROLL:
      return {
        minions: state.minions + action.value,
      };
    default:
      return state;
  }
};

export default minionsReducer;
