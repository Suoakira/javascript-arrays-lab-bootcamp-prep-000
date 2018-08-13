// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newKittens = [...kittens];
  newKittens.push(name);
  return newKittens;
}

function prependKitten(name) {
  var newKittens = kittens.unshift(name);
  return newKittens;
}

