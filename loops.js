const array = [1, 2, 3]

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

let countdown = 3;

function whileLoop(countdown) {
  while (countdown > 0) {
      console.log(--countdown)
    }
  return "done"
}

function doWhileLoop(array) {
  do {
    array.pop;
  } while (array.length === 0, maybeTrue()) {
   return Math.random() >= 0.5
  }
  return array 
}