//convert object to array
function objectToArray(obj) {
  return Object.entries(obj);
}
console.log(objectToArray({ a: 2, b: 4 }));

function concat(...args) {
  let join = [];
  join.push(args.join(","));
  return join;
}
//npm install create-react-app -g
