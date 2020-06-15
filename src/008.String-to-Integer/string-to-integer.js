/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
    const matchVal = str.trim().match(/^(\+|-)?\d+/);
    const arrVal = matchVal ? matchVal[0].split('').reverse() : [];
    const max = Math.pow(2, 31) - 1;
    const min = -Math.pow(2, 31);

    const result = arrVal.reduce((pre, strVal, index) => {
        if (strVal === "-") return -pre;
        else if (strVal === "+") return pre;
        pre += strVal * Math.pow(10, index);
        return pre;

    }, 0);

    if (result > max) return max;
    else if (result < min) return min;
    else return result;
};
export default myAtoi;
