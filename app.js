// 1-misol
function getEvenNumbersRecursive(a, b, result = []) {
    if (a > b) return result;
    if (a % 2 === 0) result.push(a);
    return getEvenNumbersRecursive(a + 1, b, result);
  }
  console.log(getEvenNumbersRecursive(3, 8));

//   2 - misol

function getTensRecursive(a, result = []) {
    if (a < 10) return result;
    if (a % 10 === 0) result.unshift(a);
    return getTensRecursive(a - 10, result);
  }
  console.log(getTensRecursive(45));

//   3 - misol

function getSquaresRecursive(a, result = []) {
    if (a === 0) return result.reverse();
    result.push(a * a);
    return getSquaresRecursive(a - 1, result);
  }
  console.log(getSquaresRecursive(5));

//   4 - misol

function reverseNumberRecursive(num, result = "") {
    if (num === 0) return Number(result);
    result += num % 10;
    return reverseNumberRecursive(Math.floor(num / 10), result);
  }
  console.log(reverseNumberRecursive(23761));

//   5 - misol

function removeQuestionMarkRecursive(str) {
    if (str[str.length - 1] !== "?") return str;
    return removeQuestionMarkRecursive(str.slice(0, -1));
  }
  console.log(removeQuestionMarkRecursive("whats your name?")); 
  console.log(removeQuestionMarkRecursive("hello world"));

//   6 - misol

function fillArrayRecursive(a, result = []) {
    if (result.length === a) return result;
    result.push(a);
    return fillArrayRecursive(a, result);
  }
  console.log(fillArrayRecursive(5));

//   7 - misol

function isTruthy(value) {
    if (!value) return false;
    return true;
  }
  console.log(isTruthy(0)); 
  console.log(isTruthy(null));
  console.log(isTruthy("salom"));