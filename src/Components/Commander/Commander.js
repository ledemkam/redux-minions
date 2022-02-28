import React from "react";
import classes from "./Commander.module.css";
// import actionTypes from "../../store/actions/actionTypes";
import * as actionCreators from "../../store/actions/index";

//Etape 7 connecter redux en important connect et en ajoutant connect() a export default commander
import { connect } from "react-redux";

function Commander(props) {
  return (
    <div className={classes.Commander}>
      <button onClick={props.createMinion}>ein Diener erstellen</button>
      <button onClick={props.destroyMinion}>ein Diener zerstören</button>
      <button onClick={() => props.createTeam(5)}>
        {" "}
        ein Team aus 5 Vasallen erstellen
      </button>
      <button onClick={() => props.destroyTeam(5)}>
        ein Team aus 5 Vasallen zerstören{" "}
      </button>
      <button onClick={() => props.save(props.minions)}>
        Anzahl von Schergen speichern
      </button>
    </div>
  );
}
//abonnement pour button save
const mapStateToProps = (state) => {
  return {
    minions: state.minion.minions,
  };
};

//Etape 7(suite) recuperer ou envoyer les actions
const mapDispatchToProps = (dispatch) => {
  return {
    createMinion: () => dispatch(actionCreators.createMinion()),
    destroyMinion: () => dispatch(actionCreators.destroyMinion()),
    createTeam: (value) => dispatch(actionCreators.createTeam(value)),
    destroyTeam: (value) => dispatch(actionCreators.destroyTeam(value)),
    save: (value) => dispatch(actionCreators.save(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Commander);
