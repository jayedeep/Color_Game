var colors = [
  "white",
  "black",
  "pink",
  "blue",
  "green",
  "yellow",
  "red",
  "purple",
  "orange",
  "violet",
];

function choice() {
  var rand = Math.floor(Math.random() * colors.length);
  return colors[rand];
}

export { choice };
