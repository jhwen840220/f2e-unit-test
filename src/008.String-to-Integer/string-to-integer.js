/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
    let arrVal = str.trim().split('').reverse();
    let shouldGenerateNumArr = true;

    const onlyNumberArrVal = arrVal.reduce((result = [], strVal, index) => {
        /** 數字才需 push 進去 */
        if (/^[0-9]/.test(strVal)) {
            /** result 有值了但是又從 string 找到 number 就清空 result 重新再來 */
            if (!shouldGenerateNumArr && result.length) result.length = 0;
            result.push(strVal);
            shouldGenerateNumArr = true;
        }
        else shouldGenerateNumArr = false;

        /** 最後一個字元為 "-"，就補回去，且讓 Number Array 可以 return 出去 */
        if (index + 1 === arrVal.length && (strVal === "-" || strVal === "+")) {
            result.push(strVal);
            shouldGenerateNumArr = true;
        }

        return shouldGenerateNumArr ? result : [];
    },[])

    return onlyNumberArrVal.reduce((result, strVal, index) => {
        if (strVal === "-") return -result;
        else if (strVal === "+") return result;
        result += strVal * Math.pow(10, index);
        return result;
    }, 0)
};
export default myAtoi;
