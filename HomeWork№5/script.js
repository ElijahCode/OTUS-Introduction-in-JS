// exercise #1

export function getSumOfArray(someArray) {
  let sum = 0;

  for (let i = 0; i < someArray.length; i += 1) {
    sum += someArray[i];
  }

  return console.log(sum);
}

// exercise #2

export function getChangedArray(array, changeFun) {
  return Object.assign(array).map(changeFun);
}

// exercise #3

export function findMinAndMaxValue(array) {
  let maxElem;
  let minElem;

  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) {
      maxElem = array[i];
      minElem = array[i];
    } else {
      maxElem = maxElem < array[i] ? array[i] : maxElem;
      minElem = minElem > array[i] ? array[i] : minElem;
    }
  }

  return console.log(minElem, maxElem);
}
