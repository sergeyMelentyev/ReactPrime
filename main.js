"use strict";
var items = [ "Salmon", "Pine Nuts" ];

var dish = React.createElement("ul", {id: "id", className: "class", "data-type": "type"},
  items.map( (item, index) => React.createElement("li", {key: index}, item)));
ReactDOM.render(dish, document.getElementById("react-container"));
