/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
    const matchValArr = str.trim().match(/^(\+|-)?(\d+)/);
    const sign = matchValArr && matchValArr[1] === "-" ? -1 : 1;
    const numberVal = matchValArr ? matchValArr[2].split('') : [];
    const max = Math.pow(2, 31) - 1;
    const min = -Math.pow(2, 31);

    const result = sign * numberVal.reduce((pre, strVal) => {
        pre = pre * 10 + strVal * 1;
        return pre
    }, 0);

    if (result > max) return max;
    else if (result < min) return min;
    else return result;
};

export default myAtoi;
