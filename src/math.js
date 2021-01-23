const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

// only one export default per file
export default pi;
export { doublePi, triplePi };
