function getSumOfDigits(integer) {
    const arr = integer.toString().split("").map(Number)
    return arr.reduce((a,b)=> a+b, 0)
  }