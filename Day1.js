function changeEnough(change, amountDue) {
  const quarter = 0.25;
  const dime = 0.1;
  const nickel = 0.05;
  const penny = 0.01;
  let result =
    change[0] * quarter +
    change[1] * dime +
    change[2] * nickel +
    change[3] * penny;
  return true ? result >= amountDue : false;
}
//let [q,d,n,p] = change;
console.log(changeEnough([30, 40, 20, 5], 12.55));

function firstLast(arr) {
  let result = [];
  result.push(arr.shift());
  result.push(arr.pop());
  return result;
}
//convert an object to array
function toArray(obj) {
  return Object.entries(obj);
}
console.log(toArray({ shrimp: 15, tots: 12 }));

function keysAndValues(obj) {
  let key = Object.keys(obj);
  let values = Object.values(obj);
  return [key.sort(), values];
}
function missingAngle(angle1, angle2) {
  let sum = angle1 + angle2;
  let missing = 180 - sum;
  if (missing < 90) {
    return "acute";
  } else if (missing == 90) {
    return "right";
  } else {
    return "obtuse";
  }
}
