/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
    let arrVal = str.split('').reverse();
    return arrVal.reduce((result, strVal, index) => {
        if (strVal === "+") return result;
        else if (strVal === "-") return -result;
        else {
            result += strVal * Math.pow(10, index);
            return result;
        }
    }, 0)
};
export default myAtoi;