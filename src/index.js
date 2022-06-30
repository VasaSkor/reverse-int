module.exports = function reverse(a) {
    let reverseNum = a + ''
    let NoMinus1 = reverseNum.replace(/[^a-zа-яё0-9\s]/gi, ' ');
    let NoMinus  = (Number(NoMinus1.split('').reverse().join(''))) 
    return NoMinus
}

