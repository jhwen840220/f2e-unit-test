/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
    let arrVal = str.split('').reverse();
    return arrVal.reduce((result, number, index)=> {
      result += number * Math.pow(10, index);
      return result;
    }, 0)
};
export default myAtoi;