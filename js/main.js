function powersOfTwo(n) {
    return Array.from({length: n + 1}, (v, k) => 2 ** k);
  }



let powOfTwo = powersOfTwo(4)
console.log(powOfTwo)