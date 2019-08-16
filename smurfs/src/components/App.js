import React, { Component } from "react";
import {connect} from 'react-redux';
import {getData, postData, deleteSmurf, updateSmurf } from './actions'
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import "./App.css";
const App = (props) => {
  
    return (
      <div className="App">
          {props.smurfs.map(smurf => {
            return <Smurf key={smurf.id} smurf={smurf} delete={props.deleteSmurf} upDate={props.updateSmurf}/>
          })}
        <SmurfForm postData={props.postData}/>
        <button onClick={props.getData}>{props.isLoading ? 'Loading...' : 'Smurf it up'}</button>
      </div>
    );
  
}

const mapStateToProps = state => {
  return {
    ...state,
    smurfs: state.smurfs,
    isLoading: state.isLoading,
  }
}

export default connect(
  mapStateToProps, {getData, postData, deleteSmurf, updateSmurf}
)(App)
