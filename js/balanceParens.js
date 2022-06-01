balanceParens = (str) => {
    let characters = str.split("");
    let balancedResult = [];
    balancedStack = [];
    testStack = [];
    isOpenParens = false;

    for (let i = 0; i < characters.length; i++) {
        testChar = characters[i];
        if (testChar === '(') {
            testStack.push(testChar);
            isOpenParens = true;
        } else if (testChar === ')' && isOpenParens === true) {
            testStack.push(testChar)
            balancedStack = balancedStack.concat(testStack);
            // balancedStack.push.apply(balancedStack, testStack);
            testStack = [];
            isOpenParens = false;
        } else if (testStack.length > 0) {
            testStack.push(testChar);
        } else {
            balancedStack.push(testChar);
        }
    }

    return balancedStack.join("");
}

// module.exports = { balanceParens }
console.log(balanceParens("()"))
console.log(balanceParens("a(b)c"))
console.log(balanceParens("(a)(bdd)c)"))
console.log(balanceParens("a(dbvb)c)"))
console.log(balanceParens("a(b)(c)())"))
console.log(balanceParens(")("))
console.log(balanceParens("((((("))
console.log(balanceParens(")(())("))
console.log(balanceParens("(()()("))
console.log(balanceParens(")())(()()("))