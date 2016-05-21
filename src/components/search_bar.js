// export, class, 
// need to always import React because when our jsx code is transpiled, it gets turned into React.createElement


// functional-based component:
// const Name = () => {}
// dumb component that we can call and it'll return jsx. Does not have ability to be aware of its surrounding or state or communicate with other components effectively


// class-based component:
// class Name extends React.Component {}
// every class-based component must have a render() method and return jsx


// both will be exported and instantiated the same way


// { Component } means import React and pull off property Component as a variable called Component


// State is a JS object that is used to record and react to user events; each class based component has its own state object. When a component's state change, the component will re-render and force its children to re-render

import React, { Component } from 'react';

export default class SearchBar extends Component {

  // initialize state in class based component
  // all JS objects have a special function called constructor. It is the first and only function called automatically whenever a new instance of the class is created
  // constructor() is reserved for setup; ie initialize variables and state.

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  // most event handlers in react are called with an event object
  // onInputChange(e) {
  //   console.log(e.target.value);
  // }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    /* 
      - all HTML input elements emit a change event 
      - onInputChange() is an event handler
      - onChange is watching for an event input (change) and it will invoke the event handler when there is an event

      - adding value={} to input makes it a controlled component; controlled form element, which has its value set by state
    */
    return (
      <div className="search-bar">
        <input 
             type="text" 
             name="search" 
      placeholder="Search" 
            value={this.state.term}
         onChange={event => this.onInputChange(event.target.value)} 
        />
      </div>
    )
  }
}