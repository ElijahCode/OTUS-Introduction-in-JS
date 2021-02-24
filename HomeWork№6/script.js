// exercise #1

export function diff(a, b) {
  return a > b ? a - b : b - a;
}

// exercise #2

export function isWord(str) {
  return str.split(/(,| )/).length < 2;
}

// exercise #3

export function pow(a, x) {
  return a ** x;
}
