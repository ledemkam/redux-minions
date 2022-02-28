
https://minions-redux.netlify.app





//wie man redux nutzen
// Etape 1 : importer Redux
const redux = require("redux"); //so import man in Nodejs

//Etape 2 : Initialiser le state
const initialState = {
compteur: 0,
};

//Etape 3: creer le reducer(ce qui nous permettra de modifier le state selon une action)
const reducer = (state = initialState, action) => {
//Actions
if (action.type === "INC_COUNTER") {
return {
compteur: state.compteur + 1,
};
} else if (action.type === "ADD_COUNTER") {
return {
compteur: state.compteur + action.value,
};
}
return state;
};

//Etape 4: Creer le store (ce qui nous permettra de diffuser notre state partout: un gros magasin)
const createStore = redux.createStore;
const store = createStore(reducer);

//Etape 5: creer l abonnement au store (pour recuperer les derniere modification)
store.subscribe(() => {
console.log(store.getState());
});

//Etape 6: Envoyer les actions(dispatch)
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 5 });
