"use strict";
var items = [ "Salmon", "Pine Nuts", "Yellow Squash" ];

// CreateClass Components
{
   const ingredients = React.createClass({
       displayName: "htmlTagName",
       objMethodName(item, i) {
           return React.createElement("li", {key: i}, item);
       },
       render() {
           return React.createElement("ul", {className: "anyClassName"},
               this.props.name.map(this.objMethodName));   // get access to obj props
       }
   });
   const list = React.createElement(ingredients, {name: items}, null); // pass props to child
   ReactDOM.render(list, document.getElementById("react-createClass"));
}
// Class Components
{
   class Ingredient extends React.Component {
       objMethodName(item, i) {
           return React.createElement("li", {key: i}, item);
       }
       render() {
           return React.createElement("ul", {className: "anyClassName"},
               this.props.name.map(this.objMethodName));
       }
   }
   const ingredient = new Ingredient();
   const newList = React.createElement(ingredient, {name: items}, null);
   ReactDOM.render(newList, document.getElementById("react-component"));
}
// Stateless Functional Components
{
    
}
