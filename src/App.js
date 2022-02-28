import React, { useEffect } from "react";
import classes from "./App.module.css";
import Header from "./Components/Header/Header";
import Commander from "./Components/Commander/Commander";

//Etape 5 lier redux a react
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

function App(props) {
  useEffect(() => {
    props.autoEnroll(props.minions);
  }, []);
  let history;

  if (props.history && props.history !== "") {
    history = props.history.map((result) => (
      <div key={result.id} className={classes.result}>
        <span>
          <b>{result.value}</b> infiltrés
        </span>
        Le {new Date(result.id).toLocaleString("de-DE")}
      </div>
    ));
  }

  return (
    <div className={classes.App}>
      <Header />

      <div className="container">
        <div className={classes.content}>
          <h1>Die Welt erobern</h1>
          <div className={classes.minions}>
            <span>{props.minions}</span>
            verdeckte Schergen{" "}
          </div>
        </div>

        <Commander />
        {props.history && props.history !== "" ? (
          <div className={classes.content}>
            <h2>Tafel von schergens</h2>
            {history}
          </div>
        ) : null}
      </div>
    </div>
  );
}
//Etape 6 abonement au state
const mapStateToProps = (state) => {
  return {
    minions: state.minion.minions,
    history: state.save.history,
  };
};
// Recuperer les actions
const mapDispatchToProps = (dispatch) => {
  return {
    autoEnroll: (minions) => dispatch(actionCreators.autoEnroll(minions)),
  };
};
// Etape 5 et 6(suite)connect(mapStateToProps)
export default connect(mapStateToProps, mapDispatchToProps)(App);
