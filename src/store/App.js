import React, { Component }  from 'react';
import { connect } from 'react-redux';

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <div>Age : <span>{this.props.age}</span></div>
          <button onClick={this.props.AddAge}>Add Age</button>
          <button onClick={this.props.DownAge}>Down Age</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age:state.age
  }
};

const mapDispachToProps = ( dispatch ) => {
  return {
    AddAge: () => dispatch({type:'ADD_AGE'}),
    DownAge: () => dispatch({type:'DOWN_AGE'})
  }
};

// take componenet as argument and return the componenet
export default connect( mapStateToProps,mapDispachToProps ) (App);
